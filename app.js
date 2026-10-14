/* ===============================================
   DBMS Mastery — Application Logic
   =============================================== */

// ─── State ─────────────────────────────────────
let currentPage = 'dashboard';
let quizState = {
  questions: [],
  currentIndex: 0,
  answers: [],
  correctCount: 0,
  startTime: null,
  timerInterval: null,
  moduleName: '',
  mode: 'module' // 'module', 'full', 'random', 'mistakes'
};
let flashcardState = {
  cards: [],
  currentIndex: 0,
  isFlipped: false
};

// Module icons
const MODULE_ICONS = ['🏗️','📝','🔧','🔒','✏️','⚙️','📊','🔗','🔍','🧩','👁️','⚡','📐'];

// ─── Initialization ────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  renderDashboard();
  updateMistakeBadge();
});

// ─── Theme ─────────────────────────────────────
function loadTheme() {
  const saved = localStorage.getItem('dbms-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('dbms-theme', next);
}

// ─── Navigation ────────────────────────────────
function setActivePage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const mapping = {
    'pageDashboard': 'dashboard',
    'pageModuleSelect': 'quiz',
    'pageQuiz': 'quiz',
    'pageResults': 'quiz',
    'pageFlashcards': 'flashcards',
    'pageMistakes': 'mistakes'
  };
  const dataPage = mapping[pageId];
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('data-page') === dataPage) l.classList.add('active');
  });
  
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobile() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── Dashboard ─────────────────────────────────
function showDashboard() {
  renderDashboard();
  setActivePage('pageDashboard');
}

function renderDashboard() {
  const stats = getStats();
  
  document.getElementById('statTotal').textContent = QUESTIONS.length;
  document.getElementById('statAttempted').textContent = stats.attempted;
  document.getElementById('statCorrect').textContent = stats.attempted > 0 
    ? Math.round((stats.correct / stats.attempted) * 100) + '%' 
    : '0%';
  document.getElementById('statMistakes').textContent = getMistakes().length;
  
  renderModuleGrid();
  renderProgressGrid();
}

function renderModuleGrid() {
  const grid = document.getElementById('moduleGrid');
  const progress = getModuleProgress();
  
  grid.innerHTML = MODULES.map((mod, i) => {
    const p = progress[mod.id] || { attempted: 0, correct: 0 };
    const pct = p.attempted > 0 ? Math.round((p.correct / mod.count) * 100) : 0;
    return `
      <div class="module-card" onclick="startModuleQuiz(${mod.id})">
        <div class="module-icon">${MODULE_ICONS[i] || '📚'}</div>
        <div class="module-info">
          <div class="module-name">${mod.name}</div>
          <div class="module-meta">
            <span>${mod.count} questions</span>
            <span>•</span>
            <span>${p.attempted}/${mod.count} done</span>
          </div>
          <div class="module-progress-bar">
            <div class="module-progress-fill" style="width:${pct}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderProgressGrid() {
  const grid = document.getElementById('progressGrid');
  const progress = getModuleProgress();
  
  grid.innerHTML = MODULES.map((mod, i) => {
    const p = progress[mod.id] || { attempted: 0, correct: 0 };
    const pct = p.attempted > 0 ? Math.round((p.correct / mod.count) * 100) : 0;
    return `
      <div class="progress-card">
        <div class="progress-card-header">
          <span class="progress-card-title">${MODULE_ICONS[i]} Module ${mod.id}</span>
          <span class="progress-card-percent">${pct}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ─── Module Select ─────────────────────────────
function showModuleSelect() {
  const grid = document.getElementById('moduleSelectGrid');
  const progress = getModuleProgress();
  
  grid.innerHTML = MODULES.map((mod, i) => {
    const p = progress[mod.id] || { attempted: 0, correct: 0 };
    return `
      <div class="module-card" onclick="startModuleQuiz(${mod.id})">
        <div class="module-icon">${MODULE_ICONS[i] || '📚'}</div>
        <div class="module-info">
          <div class="module-name">${mod.name}</div>
          <div class="module-meta">
            <span>${mod.count} questions</span>
            <span>•</span>
            <span>${p.attempted} attempted</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  setActivePage('pageModuleSelect');
}

// ─── Quiz Engine ───────────────────────────────
function startModuleQuiz(moduleId) {
  const questions = QUESTIONS.filter(q => q.module === moduleId);
  const mod = MODULES.find(m => m.id === moduleId);
  startQuiz(shuffleArray([...questions]), mod ? mod.name : 'Quiz', 'module');
}

function startFullQuiz() {
  startQuiz(shuffleArray([...QUESTIONS]), 'Full Quiz — All Modules', 'full');
}

function startRandomQuiz(count) {
  const shuffled = shuffleArray([...QUESTIONS]);
  startQuiz(shuffled.slice(0, count), `Quick ${count} — Random`, 'random');
}

function retakeMistakes() {
  const mistakes = getMistakes();
  if (mistakes.length === 0) {
    showMistakes();
    return;
  }
  const questions = mistakes.map(m => QUESTIONS.find(q => q.id === m.questionId)).filter(Boolean);
  startQuiz(shuffleArray(questions), 'Retake Mistakes', 'mistakes');
}

function retakeMistakesQuiz() {
  retakeMistakes();
}

function prepareQuestionOptions(q) {
  const options = q.options.map((optText, origIdx) => ({
    originalIndex: origIdx,
    text: optText,
    isCorrect: origIdx === q.correctIndex || optText.trim() === q.correctAnswer.trim()
  }));
  return shuffleArray(options);
}

function startQuiz(questions, moduleName, mode) {
  const preparedQuestions = questions.map(q => {
    const cloned = { ...q };
    cloned.shuffledOptions = prepareQuestionOptions(cloned);
    return cloned;
  });

  quizState = {
    questions: preparedQuestions,
    currentIndex: 0,
    answers: new Array(preparedQuestions.length).fill(null),
    correctCount: 0,
    startTime: Date.now(),
    timerInterval: null,
    moduleName,
    mode
  };
  
  document.getElementById('quizModuleName').textContent = moduleName;
  startTimer();
  renderQuestion();
  setActivePage('pageQuiz');
}

function renderQuestion() {
  const q = quizState.questions[quizState.currentIndex];
  const total = quizState.questions.length;
  const num = quizState.currentIndex + 1;
  
  if (!q.shuffledOptions) {
    q.shuffledOptions = prepareQuestionOptions(q);
  }
  
  // Update progress
  document.getElementById('quizProgressText').textContent = `${num} / ${total}`;
  document.getElementById('quizProgressFill').style.width = `${(num / total) * 100}%`;
  document.getElementById('questionNumber').textContent = `Q${q.id}`;
  
  // Render question text with accurate SQL formatting
  document.getElementById('questionText').innerHTML = formatQuestionText(q.question);
  
  // Render shuffled options
  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('optionsList').innerHTML = q.shuffledOptions.map((opt, i) => `
    <button class="option-btn" onclick="selectOption(${i})" id="opt${i}">
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${formatOptionText(opt.text)}</span>
    </button>
  `).join('');
  
  // Hide explanation & next button
  document.getElementById('explanationCard').classList.add('hidden');
  document.getElementById('btnNext').classList.add('hidden');
}

function selectOption(index) {
  const q = quizState.questions[quizState.currentIndex];
  const selectedOpt = q.shuffledOptions[index];
  const isCorrect = selectedOpt.isCorrect;
  const correctIdx = q.shuffledOptions.findIndex(o => o.isCorrect);
  const letters = ['A', 'B', 'C', 'D'];
  
  // Disable all options
  document.querySelectorAll('.option-btn').forEach(btn => btn.classList.add('disabled'));
  
  // Mark selected
  document.getElementById(`opt${index}`).classList.add(isCorrect ? 'correct' : 'wrong');
  
  // Always show correct answer
  if (!isCorrect && correctIdx >= 0) {
    document.getElementById(`opt${correctIdx}`).classList.add('correct');
  }
  
  // Track answer
  quizState.answers[quizState.currentIndex] = {
    selectedIndex: index,
    selectedLetter: letters[index],
    selectedText: selectedOpt.text,
    correctLetter: letters[correctIdx >= 0 ? correctIdx : 0],
    correctText: q.correctAnswer,
    isCorrect: isCorrect
  };
  if (isCorrect) quizState.correctCount++;
  
  // Save to progress
  saveQuestionAttempt(q.id, isCorrect);
  
  // If wrong, save to mistakes
  if (!isCorrect) {
    saveMistake(q.id, selectedOpt.text);
  } else {
    removeMistake(q.id);
  }
  
  // Show explanation
  showExplanation(q, isCorrect);
  
  // Show next button
  document.getElementById('btnNext').classList.remove('hidden');
  
  // Update badge
  updateMistakeBadge();
}

function showExplanation(q, isCorrect) {
  const card = document.getElementById('explanationCard');
  const icon = document.getElementById('explanationIcon');
  const title = document.getElementById('explanationTitle');
  
  icon.textContent = isCorrect ? '✓' : '✗';
  icon.className = 'explanation-icon ' + (isCorrect ? 'correct-icon' : 'wrong-icon');
  title.textContent = isCorrect ? 'Correct!' : 'Incorrect';
  title.style.color = isCorrect ? 'var(--success)' : 'var(--error)';
  
  document.getElementById('correctAnswerDisplay').innerHTML = 
    `<strong>Correct Answer:</strong> ${formatOptionText(q.correctAnswer)}`;
  document.getElementById('explanationText').textContent = q.explanation;
  
  card.classList.remove('hidden');
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
  quizState.currentIndex++;
  if (quizState.currentIndex >= quizState.questions.length) {
    showResults();
  } else {
    renderQuestion();
    document.querySelector('.quiz-body').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function quitQuiz() {
  stopTimer();
  showDashboard();
}

// ─── Timer ─────────────────────────────────────
function startTimer() {
  stopTimer();
  quizState.startTime = Date.now();
  quizState.timerInterval = setInterval(updateTimerDisplay, 1000);
  updateTimerDisplay();
}

function stopTimer() {
  if (quizState.timerInterval) {
    clearInterval(quizState.timerInterval);
    quizState.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const elapsed = Math.floor((Date.now() - quizState.startTime) / 1000);
  const min = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const sec = String(elapsed % 60).padStart(2, '0');
  document.getElementById('timerDisplay').textContent = `${min}:${sec}`;
}

function getElapsedTime() {
  const elapsed = Math.floor((Date.now() - quizState.startTime) / 1000);
  const min = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const sec = String(elapsed % 60).padStart(2, '0');
  return `${min}:${sec}`;
}

// ─── Results ───────────────────────────────────
function showResults() {
  stopTimer();
  
  const total = quizState.questions.length;
  const correct = quizState.correctCount;
  const wrong = total - correct;
  const pct = Math.round((correct / total) * 100);
  const time = getElapsedTime();
  
  document.getElementById('scorePercent').textContent = pct + '%';
  document.getElementById('resultCorrect').textContent = correct;
  document.getElementById('resultWrong').textContent = wrong;
  document.getElementById('resultTime').textContent = time;
  
  // Title based on score
  let title = 'Quiz Complete!';
  if (pct >= 90) title = '🏆 Outstanding!';
  else if (pct >= 70) title = '🌟 Great Job!';
  else if (pct >= 50) title = '👍 Good Effort!';
  else title = '📚 Keep Practicing!';
  document.getElementById('resultsTitle').textContent = title;
  
  // Animate score circle
  const circle = document.getElementById('scoreCircle');
  const circumference = 339.29;
  const offset = circumference - (pct / 100) * circumference;
  circle.style.transition = 'none';
  circle.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => {
    circle.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
    circle.style.strokeDashoffset = offset;
  });
  
  // Hide review initially
  document.getElementById('resultsReview').classList.add('hidden');
  
  setActivePage('pageResults');
}

function reviewAnswers() {
  const container = document.getElementById('resultsReview');
  container.classList.toggle('hidden');
  
  if (!container.classList.contains('hidden')) {
    container.innerHTML = quizState.questions.map((q, i) => {
      const ans = quizState.answers[i];
      if (!ans) return '';
      const isCorrect = ans.isCorrect;
      return `
        <div class="review-item ${isCorrect ? 'review-correct' : 'review-wrong'}">
          <div class="review-question">Q${q.id}: ${formatQuestionText(q.question)}</div>
          <div class="review-answer">
            ${!isCorrect ? `<div style="color:var(--error);margin-bottom:6px"><strong>Your answer (${ans.selectedLetter}):</strong> ${formatOptionText(ans.selectedText)}</div>` : ''}
            <div style="color:var(--success);margin-bottom:6px"><strong>Correct answer (${ans.correctLetter}):</strong> ${formatOptionText(ans.correctText)}</div>
            <div style="color:var(--text-secondary);font-size:0.88rem;margin-top:6px">${escapeHTML(q.explanation)}</div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// ─── Flashcards ────────────────────────────────
function showFlashcards() {
  // Populate filter
  const select = document.getElementById('flashcardModuleFilter');
  if (select.options.length <= 1) {
    MODULES.forEach(mod => {
      const opt = document.createElement('option');
      opt.value = mod.id;
      opt.textContent = `Module ${mod.id}: ${mod.name}`;
      select.appendChild(opt);
    });
  }
  
  filterFlashcards();
  setActivePage('pageFlashcards');
}

function filterFlashcards() {
  const val = document.getElementById('flashcardModuleFilter').value;
  if (val === 'all') {
    flashcardState.cards = [...QUESTIONS];
  } else {
    flashcardState.cards = QUESTIONS.filter(q => q.module === parseInt(val));
  }
  flashcardState.currentIndex = 0;
  flashcardState.isFlipped = false;
  renderFlashcard();
}

function shuffleFlashcards() {
  flashcardState.cards = shuffleArray(flashcardState.cards);
  flashcardState.currentIndex = 0;
  flashcardState.isFlipped = false;
  renderFlashcard();
}

function renderFlashcard() {
  if (flashcardState.cards.length === 0) return;
  
  const card = flashcardState.cards[flashcardState.currentIndex];
  document.getElementById('flashcardFront').innerHTML = formatQuestionText(card.question);
  
  let backHTML = `<div style="margin-bottom:12px"><strong style="color:var(--success)">Answer:</strong> ${formatOptionText(card.correctAnswer)}</div>`;
  backHTML += `<div style="color:var(--text-secondary);font-size:0.9rem;text-align:left">${escapeHTML(card.explanation)}</div>`;
  document.getElementById('flashcardBack').innerHTML = backHTML;
  
  document.getElementById('flashcardCounter').textContent = 
    `${flashcardState.currentIndex + 1} / ${flashcardState.cards.length}`;
  
  // Reset flip state
  document.getElementById('flashcard').classList.remove('flipped');
  flashcardState.isFlipped = false;
}

function flipCard() {
  const el = document.getElementById('flashcard');
  flashcardState.isFlipped = !flashcardState.isFlipped;
  el.classList.toggle('flipped');
}

function nextFlashcard() {
  flashcardState.currentIndex = (flashcardState.currentIndex + 1) % flashcardState.cards.length;
  renderFlashcard();
}

function prevFlashcard() {
  flashcardState.currentIndex = (flashcardState.currentIndex - 1 + flashcardState.cards.length) % flashcardState.cards.length;
  renderFlashcard();
}

// ─── Mistakes ──────────────────────────────────
function showMistakes() {
  const mistakes = getMistakes();
  const list = document.getElementById('mistakesList');
  const empty = document.getElementById('noMistakes');
  
  document.getElementById('mistakesSubtitle').textContent = 
    `${mistakes.length} question${mistakes.length !== 1 ? 's' : ''} to review`;
  
  if (mistakes.length === 0) {
    list.classList.add('hidden');
    empty.classList.remove('hidden');
    document.getElementById('btnRetakeMistakes').classList.add('hidden');
  } else {
    list.classList.remove('hidden');
    empty.classList.add('hidden');
    document.getElementById('btnRetakeMistakes').classList.remove('hidden');
    
    list.innerHTML = mistakes.map(m => {
      const q = QUESTIONS.find(qItem => qItem.id === m.questionId);
      if (!q) return '';
      const mod = MODULES.find(mod => mod.id === q.module);
      
      const userText = m.selectedText || (m.selectedIndex !== undefined && q.options[m.selectedIndex] ? q.options[m.selectedIndex] : 'N/A');
      
      return `
        <div class="mistake-item">
          <div class="mistake-question">Q${q.id}: ${formatQuestionText(q.question)}</div>
          <div class="mistake-meta">
            <span>${mod ? mod.name : ''}</span>
          </div>
          <div style="margin-bottom:8px">
            <span class="mistake-your-answer">Your Answer:</span> ${formatOptionText(userText)}
          </div>
          <div style="margin-bottom:8px">
            <span class="mistake-correct-answer">Correct Answer:</span> ${formatOptionText(q.correctAnswer)}
          </div>
          <div class="mistake-explanation">${escapeHTML(q.explanation)}</div>
        </div>
      `;
    }).join('');
  }
  
  setActivePage('pageMistakes');
}

function clearMistakes() {
  if (confirm('Clear all saved mistakes? This cannot be undone.')) {
    localStorage.removeItem('dbms-mistakes');
    updateMistakeBadge();
    showMistakes();
  }
}

// ─── LocalStorage Helpers ──────────────────────
function getMistakes() {
  try {
    return JSON.parse(localStorage.getItem('dbms-mistakes') || '[]');
  } catch { return []; }
}

function saveMistake(questionId, selectedAnswerText) {
  const mistakes = getMistakes();
  const existing = mistakes.findIndex(m => m.questionId === questionId);
  const data = {
    questionId,
    selectedText: selectedAnswerText,
    timestamp: Date.now()
  };
  if (existing >= 0) {
    mistakes[existing] = data;
  } else {
    mistakes.push(data);
  }
  localStorage.setItem('dbms-mistakes', JSON.stringify(mistakes));
}

function removeMistake(questionId) {
  const mistakes = getMistakes().filter(m => m.questionId !== questionId);
  localStorage.setItem('dbms-mistakes', JSON.stringify(mistakes));
}

function updateMistakeBadge() {
  const badge = document.getElementById('mistakeBadge');
  const count = getMistakes().length;
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function getStats() {
  try {
    const data = JSON.parse(localStorage.getItem('dbms-progress') || '{}');
    let attempted = 0, correct = 0;
    for (const qid in data) {
      attempted++;
      if (data[qid].correct) correct++;
    }
    return { attempted, correct };
  } catch { return { attempted: 0, correct: 0 }; }
}

function getModuleProgress() {
  try {
    const data = JSON.parse(localStorage.getItem('dbms-progress') || '{}');
    const result = {};
    for (const qid in data) {
      const q = QUESTIONS.find(q => q.id === parseInt(qid));
      if (!q) continue;
      if (!result[q.module]) result[q.module] = { attempted: 0, correct: 0 };
      result[q.module].attempted++;
      if (data[qid].correct) result[q.module].correct++;
    }
    return result;
  } catch { return {}; }
}

function saveQuestionAttempt(questionId, isCorrect) {
  try {
    const data = JSON.parse(localStorage.getItem('dbms-progress') || '{}');
    data[questionId] = { correct: isCorrect, timestamp: Date.now() };
    localStorage.setItem('dbms-progress', JSON.stringify(data));
  } catch {}
}

// ─── SQL Formatting ────────────────────────────
const SQL_KEYWORDS = [
  'SELECT','FROM','WHERE','INSERT','INTO','VALUES','UPDATE','SET','DELETE',
  'CREATE','TABLE','ALTER','DROP','TRUNCATE','ADD','MODIFY','CONSTRAINT',
  'PRIMARY','KEY','FOREIGN','REFERENCES','UNIQUE','NOT','NULL','CHECK',
  'DEFAULT','INDEX','ON','AND','OR','IN','BETWEEN','LIKE','IS','AS',
  'JOIN','INNER','LEFT','RIGHT','FULL','OUTER','CROSS','NATURAL','USING',
  'GROUP','BY','ORDER','ASC','DESC','HAVING','DISTINCT','ALL','ANY','EXISTS',
  'UNION','INTERSECT','MINUS','MERGE','WHEN','MATCHED','THEN','FORCE',
  'WITH','READ','ONLY','OPTION','VIEW','REPLACE','CASCADE','CONSTRAINTS',
  'ENABLE','DISABLE','COMMIT','ROLLBACK','SAVEPOINT','GRANT','REVOKE',
  'ROWNUM','ROWID','SYSDATE','USER','DUAL','FETCH','FIRST','ROWS',
  'SUBQUERY','COLUMN','COLUMNS'
];

const SQL_FUNCTIONS = [
  'COUNT','SUM','AVG','MIN','MAX','NVL','NVL2','DECODE','COALESCE','NULLIF',
  'ROUND','TRUNC','MOD','SQRT','LENGTH','SUBSTR','INSTR','LPAD','RPAD',
  'TRIM','LTRIM','RTRIM','UPPER','LOWER','INITCAP','CONCAT','REPLACE',
  'TO_CHAR','TO_DATE','TO_NUMBER','SYSDATE','ADD_MONTHS','MONTHS_BETWEEN',
  'LAST_DAY','NEXT_DAY','YEAR','GETDATE','EXTRACT','FLOOR','CEIL','ABS',
  'SIGN','POWER','IFNULL'
];

function highlightSQL(code) {
  // 1. Escape HTML
  let escaped = escapeHTML(code);
  
  // 2. Protect strings & quoted aliases (single and double quotes)
  const placeholders = [];
  escaped = escaped.replace(/&#39;([^&#]*?)&#39;|&#x27;([^&#]*?)&#x27;|'([^']*?)'|&quot;([^&]*?)&quot;|"([^"]*?)"/g, (match) => {
    const idx = placeholders.length;
    placeholders.push(`<span class="sql-string">${match}</span>`);
    return `___SQL_STR_TOKEN_${idx}___`;
  });
  
  // 3. Highlight numbers
  escaped = escaped.replace(/\b(\d+\.?\d*)\b/g, '<span class="sql-number">$1</span>');
  
  // 4. Highlight functions (name followed by open paren)
  SQL_FUNCTIONS.forEach(fn => {
    const regex = new RegExp('\\b(' + fn + ')\\s*\\(', 'gi');
    escaped = escaped.replace(regex, '<span class="sql-function">$1</span>(');
  });
  
  // 5. Highlight keywords (standalone whole words)
  SQL_KEYWORDS.forEach(kw => {
    const regex = new RegExp('\\b(' + kw + ')\\b', 'gi');
    escaped = escaped.replace(regex, (match) => {
      return `<span class="sql-keyword">${match.toUpperCase()}</span>`;
    });
  });
  
  // 6. Restore protected strings & aliases
  placeholders.forEach((span, idx) => {
    escaped = escaped.replace(`___SQL_STR_TOKEN_${idx}___`, span);
  });
  
  return escaped;
}

function createSQLBlock(code) {
  const lines = code.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const lineHTML = lines.map((line, i) => `
    <div class="sql-line">
      <span class="sql-line-num">${i + 1}</span>
      <span class="sql-line-code">${highlightSQL(line)}</span>
    </div>
  `).join('');
  
  return `
    <div class="sql-code-block">
      <span class="sql-code-badge">SQL</span>
      <div class="sql-code-content">${lineHTML}</div>
    </div>
  `;
}

function beautifySQL(sql) {
  if (!sql) return '';
  // Collapse excessive whitespace to single space
  let s = sql.replace(/\s+/g, ' ').trim();
  
  // Multi-word clauses must be matched as whole atomic units so keywords like JOIN or BY are never split.
  // Clauses that initiate a new line:
  const clauseRegex = /\b(FROM|WHERE|(?:NATURAL\s+JOIN|CROSS\s+JOIN|INNER\s+JOIN|LEFT\s+OUTER\s+JOIN|LEFT\s+JOIN|RIGHT\s+OUTER\s+JOIN|RIGHT\s+JOIN|FULL\s+OUTER\s+JOIN|FULL\s+JOIN|JOIN)|GROUP\s+BY|HAVING|ORDER\s+BY|VALUES|SET|UNION\s+ALL|UNION|INTERSECT|MINUS|WHEN\s+MATCHED\s+THEN|WHEN\s+NOT\s+MATCHED\s+THEN)\b/gi;
  
  let formatted = s.replace(clauseRegex, (match, clause, offset) => {
    const normClause = clause.replace(/\s+/g, ' ').toUpperCase();
    
    // Check if FROM is inside a function call like TRIM('H' FROM 'HelloWorld') or EXTRACT(...)
    if (normClause === 'FROM') {
      const preceding = s.substring(0, offset);
      const lastOpen = preceding.lastIndexOf('(');
      const lastClose = preceding.lastIndexOf(')');
      if (lastOpen > lastClose) {
        const inside = preceding.substring(lastOpen + 1);
        if (!/\bSELECT\b/i.test(inside)) {
          return clause; // Inside function call: do not break
        }
      }
    }
    
    // If this clause is at the start of the string, keep on line 1
    if (offset === 0) {
      return normClause;
    }
    
    return '\n' + normClause;
  });
  
  const lines = formatted.split('\n').map(l => l.trim()).filter(Boolean);
  return lines.join('\n');
}

function formatQuestionText(text) {
  if (!text) return '';
  
  // Regex to detect true standalone executable SQL queries in question stems
  // Must end with ';'
  // Must not be an English phrase like "a SELECT statement" or "Which SELECT statement"
  const sqlQueryRegex = /\b(SELECT(?!\s+(?:statement|clause|query))\s+[\s\S]+?\bFROM\b[\s\S]+?;|INSERT\s+INTO\s+[\s\S]+?;|UPDATE\s+\w+[\s\S]+?\bSET\b[\s\S]+?;|DELETE(?!\s+(?:statement|clause|query))\s+(?:FROM\s+)?\w+[\s\S]*?;|CREATE\s+(?:OR\s+REPLACE\s+)?(?:TABLE|VIEW)\s+[\s\S]+?;|ALTER\s+TABLE\s+[\s\S]+?;|TRUNCATE\s+TABLE\s+[\s\S]+?;|MERGE\s+INTO\s+[\s\S]+?;)/gi;
  
  const matches = [];
  let m;
  while ((m = sqlQueryRegex.exec(text)) !== null) {
    const matched = m[1].trim();
    const start = m.index;
    const preceding = text.substring(0, start).trim();
    // Verify preceding word isn't an article introducing a noun phrase
    if (!/\b(which|a|an|the|every)\s*$/i.test(preceding)) {
      matches.push({ start, end: start + m[1].length, sql: matched });
    }
  }
  
  if (matches.length === 0) {
    // Pure plain text question: render as standard readable text paragraph
    return `<p>${escapeHTML(text)}</p>`;
  }
  
  // Reconstruct the question with 100% of surrounding text fully preserved
  let htmlResult = '';
  let lastIndex = 0;
  
  for (const item of matches) {
    if (item.start > lastIndex) {
      const preText = text.substring(lastIndex, item.start).trim();
      if (preText) {
        htmlResult += `<p>${escapeHTML(preText)}</p>`;
      }
    }
    const beautified = beautifySQL(item.sql);
    htmlResult += createSQLBlock(beautified);
    lastIndex = item.end;
  }
  
  if (lastIndex < text.length) {
    const postText = text.substring(lastIndex).trim();
    if (postText) {
      htmlResult += `<p>${escapeHTML(postText)}</p>`;
    }
  }
  
  return htmlResult;
}

function isSQLOption(text) {
  if (!text || typeof text !== 'string') return false;
  const t = text.trim();
  
  // Reject plain English explanations mentioning SQL keywords
  if (/^(?:A\s+|The\s+|Which\s+)?(?:MERGE|UPDATE|DELETE|INSERT|SELECT|CREATE|ALTER|DROP|TRUNCATE)\s+(?:can|will|is|are|should|may|must|does|statement|clause|operation|command)\b/i.test(t)) {
    return false;
  }
  if (/\b(?:will\s+delete|will\s+add|can\s+update|can\s+be\s+used|statement\s+replaces|statement\s+is\s+used)\b/i.test(t)) {
    return false;
  }
  
  // Match executable SQL statements
  const sqlPatterns = [
    /^\s*SELECT(?!\s+(?:statement|clause|query))\b[\s\S]+?\bFROM\b/i,
    /^\s*SELECT(?!\s+(?:statement|clause|query))\b[\s\S]+?;?$/i,
    /^\s*INSERT\s+INTO\b/i,
    /^\s*UPDATE\s+\w+\s+SET\b/i,
    /^\s*DELETE\s+(?:FROM\s+)?\w+/i,
    /^\s*CREATE\s+(?:OR\s+REPLACE\s+)?(?:TABLE|VIEW)\b/i,
    /^\s*ALTER\s+TABLE\b/i,
    /^\s*DROP\s+(?:TABLE|VIEW)\b/i,
    /^\s*TRUNCATE\s+TABLE\b/i,
    /^\s*MERGE\s+INTO\b/i
  ];
  
  return sqlPatterns.some(pat => pat.test(t));
}

function formatOptionText(text) {
  if (isSQLOption(text)) {
    return createSQLBlock(beautifySQL(text));
  }
  return escapeHTML(text);
}

// ─── Utilities ─────────────────────────────────
function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ─── Keyboard Navigation ──────────────────────
document.addEventListener('keydown', (e) => {
  const quizPage = document.getElementById('pageQuiz');
  if (!quizPage.classList.contains('active')) return;
  
  if (['1','2','3','4','a','b','c','d'].includes(e.key.toLowerCase())) {
    const map = {'1':0,'2':1,'3':2,'4':3,'a':0,'b':1,'c':2,'d':3};
    const idx = map[e.key.toLowerCase()];
    const btn = document.getElementById(`opt${idx}`);
    if (btn && !btn.classList.contains('disabled')) {
      selectOption(idx);
    }
  }
  
  if (e.key === 'Enter' || e.key === ' ') {
    const nextBtn = document.getElementById('btnNext');
    if (!nextBtn.classList.contains('hidden')) {
      e.preventDefault();
      nextQuestion();
    }
  }
  
  // Flashcards page
  const flashPage = document.getElementById('pageFlashcards');
  if (flashPage.classList.contains('active')) {
    if (e.key === ' ') { e.preventDefault(); flipCard(); }
    if (e.key === 'ArrowRight') nextFlashcard();
    if (e.key === 'ArrowLeft') prevFlashcard();
  }
});
