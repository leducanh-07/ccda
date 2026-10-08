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

function startQuiz(questions, moduleName, mode) {
  quizState = {
    questions,
    currentIndex: 0,
    answers: new Array(questions.length).fill(null),
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
  
  // Update progress
  document.getElementById('quizProgressText').textContent = `${num} / ${total}`;
  document.getElementById('quizProgressFill').style.width = `${(num / total) * 100}%`;
  document.getElementById('questionNumber').textContent = `Q${q.id}`;
  
  // Render question text with SQL formatting
  document.getElementById('questionText').innerHTML = formatQuestionText(q.question);
  
  // Render options
  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('optionsList').innerHTML = q.options.map((opt, i) => `
    <button class="option-btn" onclick="selectOption(${i})" id="opt${i}">
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${formatOptionText(opt)}</span>
    </button>
  `).join('');
  
  // Hide explanation & next button
  document.getElementById('explanationCard').classList.add('hidden');
  document.getElementById('btnNext').classList.add('hidden');
}

function selectOption(index) {
  const q = quizState.questions[quizState.currentIndex];
  const isCorrect = index === q.correctIndex;
  
  // Disable all options
  document.querySelectorAll('.option-btn').forEach(btn => btn.classList.add('disabled'));
  
  // Mark selected
  document.getElementById(`opt${index}`).classList.add(isCorrect ? 'correct' : 'wrong');
  
  // Always show correct answer
  if (!isCorrect) {
    document.getElementById(`opt${q.correctIndex}`).classList.add('correct');
  }
  
  // Track answer
  quizState.answers[quizState.currentIndex] = index;
  if (isCorrect) quizState.correctCount++;
  
  // Save to progress
  saveQuestionAttempt(q.id, isCorrect);
  
  // If wrong, save to mistakes
  if (!isCorrect) {
    saveMistake(q.id, index);
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
    `<strong>Correct Answer:</strong> ${escapeHTML(q.correctAnswer)}`;
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
  
  if (!container.classList.contains('hidden') && container.innerHTML === '') {
    container.innerHTML = quizState.questions.map((q, i) => {
      const userAnswer = quizState.answers[i];
      const isCorrect = userAnswer === q.correctIndex;
      const letters = ['A', 'B', 'C', 'D'];
      return `
        <div class="review-item ${isCorrect ? 'review-correct' : 'review-wrong'}">
          <div class="review-question">Q${q.id}: ${escapeHTML(q.question)}</div>
          <div class="review-answer">
            ${!isCorrect ? `<span style="color:var(--error)">Your answer: ${letters[userAnswer]}. ${escapeHTML(q.options[userAnswer] || 'N/A')}</span><br>` : ''}
            <span style="color:var(--success)">Correct: ${letters[q.correctIndex]}. ${escapeHTML(q.options[q.correctIndex])}</span>
            <br><em style="color:var(--text-tertiary);font-size:0.85rem">${escapeHTML(q.explanation)}</em>
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
  
  const letters = ['A', 'B', 'C', 'D'];
  let backHTML = `<div style="margin-bottom:12px"><strong style="color:var(--success)">Answer: ${letters[card.correctIndex]}. ${escapeHTML(card.correctAnswer)}</strong></div>`;
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
    
    const letters = ['A', 'B', 'C', 'D'];
    list.innerHTML = mistakes.map(m => {
      const q = QUESTIONS.find(qItem => qItem.id === m.questionId);
      if (!q) return '';
      const mod = MODULES.find(mod => mod.id === q.module);
      return `
        <div class="mistake-item">
          <div class="mistake-question">Q${q.id}: ${escapeHTML(q.question)}</div>
          <div class="mistake-meta">
            <span>${mod ? mod.name : ''}</span>
          </div>
          <div style="margin-bottom:8px">
            <span class="mistake-your-answer">Your: ${letters[m.selectedIndex]}. ${escapeHTML(q.options[m.selectedIndex] || 'N/A')}</span>
          </div>
          <div style="margin-bottom:8px">
            <span class="mistake-correct-answer">Correct: ${letters[q.correctIndex]}. ${escapeHTML(q.options[q.correctIndex])}</span>
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

function saveMistake(questionId, selectedIndex) {
  const mistakes = getMistakes();
  const existing = mistakes.findIndex(m => m.questionId === questionId);
  if (existing >= 0) {
    mistakes[existing].selectedIndex = selectedIndex;
    mistakes[existing].timestamp = Date.now();
  } else {
    mistakes.push({ questionId, selectedIndex, timestamp: Date.now() });
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
  // Escape HTML first
  let escaped = escapeHTML(code);
  
  // Highlight strings (single quotes)
  escaped = escaped.replace(/&#x27;([^&#]*?)&#x27;/g, '<span class="sql-string">\'$1\'</span>');
  escaped = escaped.replace(/'([^']*?)'/g, '<span class="sql-string">\'$1\'</span>');
  
  // Highlight numbers
  escaped = escaped.replace(/\b(\d+\.?\d*)\b/g, '<span class="sql-number">$1</span>');
  
  // Highlight functions
  SQL_FUNCTIONS.forEach(fn => {
    const regex = new RegExp('\\b(' + fn + ')\\s*\\(', 'gi');
    escaped = escaped.replace(regex, '<span class="sql-function">$1</span>(');
  });
  
  // Highlight keywords (whole words)
  SQL_KEYWORDS.forEach(kw => {
    const regex = new RegExp('\\b(' + kw + ')\\b', 'gi');
    escaped = escaped.replace(regex, (match) => {
      // Don't re-highlight if already inside a span
      return `<span class="sql-keyword">${match.toUpperCase()}</span>`;
    });
  });
  
  return escaped;
}

function createSQLBlock(code) {
  const lines = code.split('\n').filter(l => l.trim());
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
  // Replace multiple spaces with a single space
  let formatted = sql.replace(/\s+/g, ' ').trim();
  
  // Define keywords to break on
  const breaks = [
    'FROM', 'WHERE', 'AND', 'OR', 'ORDER BY', 'GROUP BY', 'HAVING',
    'LEFT OUTER JOIN', 'RIGHT OUTER JOIN', 'FULL OUTER JOIN', 'INNER JOIN', 'CROSS JOIN', 'NATURAL JOIN', 'JOIN',
    'UNION ALL', 'UNION', 'INTERSECT', 'MINUS', 'SET'
  ];
  
  // Add newlines before major clauses
  breaks.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
    formatted = formatted.replace(regex, '\n$1');
  });
  
  return formatted;
}

function formatQuestionText(text) {
  let formatted = escapeHTML(text);
  
  // Find SQL-like code in the text
  const sqlRegex = /((?:SELECT|INSERT\s+INTO|UPDATE|DELETE\s+FROM|CREATE\s+TABLE|ALTER\s+TABLE|DROP\s+TABLE|TRUNCATE\s+TABLE|MERGE\s+INTO)\s+[^.]*?;?(?=\s*(?:How|What|Which|Why|For|The|You|This|Evaluate|Examine|$)))/gi;
  
  const matches = text.match(sqlRegex);
  if (matches && matches.length > 0) {
    matches.forEach(match => {
      const escapedMatch = escapeHTML(match);
      const beautified = beautifySQL(match);
      const sqlBlock = createSQLBlock(beautified);
      formatted = formatted.replace(escapedMatch, sqlBlock);
    });
  }
  
  // Also format inline SQL code
  formatted = formatted.replace(
    /(?<!<[^>]*)(\b(?:SELECT|INSERT INTO|UPDATE|DELETE FROM|CREATE TABLE|ALTER TABLE|DROP TABLE)\b\s+\S+(?:\s+\S+){0,40}?;)/gi,
    (match) => {
      if (match.includes('sql-code-block')) return match;
      return createSQLBlock(beautifySQL(match));
    }
  );
  
  return formatted;
}

function formatOptionText(text) {
  const sqlStarters = ['SELECT ', 'INSERT ', 'UPDATE ', 'DELETE ', 'CREATE ', 'ALTER ', 'DROP ', 'TRUNCATE ', 'MERGE '];
  const startsWithSQL = sqlStarters.some(s => text.trim().toUpperCase().startsWith(s));
  
  if (startsWithSQL && text.length > 15) {
    return createSQLBlock(beautifySQL(text));
  }
  
  return escapeHTML(text);
}

// ─── Utilities ─────────────────────────────────
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
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
