// Auto-generated DBMS & SQL Question Bank
// Total: 260 questions across 13 modules

const MODULES = [
  {
    "id": 1,
    "name": "INTRODUCTION TO DBMS & ORACLE ARCHITECTURE",
    "count": 20
  },
  {
    "id": 2,
    "name": "INTRODUCTION TO SQL & BASIC SELECT STATEMENTS",
    "count": 20
  },
  {
    "id": 3,
    "name": "DATA DEFINITION LANGUAGE (DDL)",
    "count": 20
  },
  {
    "id": 4,
    "name": "DATABASE CONSTRAINTS",
    "count": 20
  },
  {
    "id": 5,
    "name": "DATA MANIPULATION LANGUAGE (DML)",
    "count": 20
  },
  {
    "id": 6,
    "name": "SINGLE-ROW FUNCTIONS",
    "count": 20
  },
  {
    "id": 7,
    "name": "GROUP / AGGREGATE FUNCTIONS",
    "count": 20
  },
  {
    "id": 8,
    "name": "SQL JOINS",
    "count": 20
  },
  {
    "id": 9,
    "name": "SUBQUERIES",
    "count": 20
  },
  {
    "id": 10,
    "name": "ADVANCED & CORRELATED SUBQUERIES",
    "count": 20
  },
  {
    "id": 11,
    "name": "DATABASE VIEWS & TOP-N ANALYSIS",
    "count": 20
  },
  {
    "id": 12,
    "name": "SET OPERATORS & PSEUDOCOLUMNS",
    "count": 20
  },
  {
    "id": 13,
    "name": "DATABASE NORMALIZATION",
    "count": 20
  }
];

const QUESTIONS = [
  {
    "id": 1,
    "module": 1,
    "question": "Which of the following is not an advantage of the DBMS?",
    "options": [
      "User application data creation.",
      "Data independence and efficient access.",
      "Reduced application development time.",
      "Data integrity and security."
    ],
    "correctIndex": 0,
    "correctAnswer": "User application data creation.",
    "explanation": "DBMS provides storage, security, and query access, but creating user-level application data is the responsibility of end-users and applications, not an inherent advantage provided by the DBMS engine itself.",
    "hasSQL": false
  },
  {
    "id": 2,
    "module": 1,
    "question": "Which Background process updates the online redo log files with the redo log buffer entries when a COMMIT occurs in the database?",
    "options": [
      "LGWR",
      "DBWn",
      "CKPT",
      "CJQn"
    ],
    "correctIndex": 0,
    "correctAnswer": "LGWR",
    "explanation": "LGWR (Log Writer) is the Oracle background process responsible for writing redo log buffer entries from memory (SGA) to the online redo log files on disk whenever a transaction COMMIT occurs.",
    "hasSQL": false
  },
  {
    "id": 3,
    "module": 1,
    "question": "Which files can be multiplexed?",
    "options": [
      "Data Files",
      "Control Files",
      "Parameter Files",
      "Data Buffer Cache"
    ],
    "correctIndex": 0,
    "correctAnswer": "Data Files",
    "explanation": "Data files (as well as control files and online redo log files) can be multiplexed and mirrored across different storage devices to ensure fault tolerance and data recovery.",
    "hasSQL": false
  },
  {
    "id": 4,
    "module": 1,
    "question": "Which Statement about the Data files is not true?",
    "options": [
      "A data file Can belong to only one tablespace",
      "At least one data file is required for each tablespace",
      "Maintain the logs of the changes made to the database to enable recovery.",
      "Data File contains the data in the database, including tables, indexes, temp segments etc"
    ],
    "correctIndex": 2,
    "correctAnswer": "Maintain the logs of the changes made to the database to enable recovery.",
    "explanation": "Maintaining transaction change logs for recovery is the primary responsibility of Redo Log Files, not Data Files. Data Files physically store the actual schema objects like tables and indexes.",
    "hasSQL": false
  },
  {
    "id": 5,
    "module": 1,
    "question": "Which Statement about the Oracle Initialization Parameter Files (init.ora) is not true?",
    "options": [
      "Enclose in quotation marks any parameter value that contains a special character",
      "An initialization parameter file should contain only parameters and comments.",
      "Several parameters can be specified on one line, separated by a space",
      "Parameters must be specified in a predefined order."
    ],
    "correctIndex": 3,
    "correctAnswer": "Parameters must be specified in a predefined order.",
    "explanation": "Parameters inside the Oracle initialization parameter file (init.ora / SPFILE) do not need to be specified in any rigid predefined order; Oracle parses them by key-value pairs regardless of sequence.",
    "hasSQL": false
  },
  {
    "id": 6,
    "module": 1,
    "question": "What is not true about the Oracle Instance?",
    "options": [
      "Oracle Instance provides means to access Oracle database",
      "Oracle Instance is a collection of data that is treated as a unit, which stores and retrieves related information",
      "Oracle Instance can open and use one database at a time",
      "Oracle Instance consists of SGA and background processes"
    ],
    "correctIndex": 1,
    "correctAnswer": "Oracle Instance is a collection of data that is treated as a unit, which stores and retrieves related information",
    "explanation": "An Oracle Instance consists of memory structures (SGA) and background processes running in RAM. The physical collection of files stored on disk treated as a single unit is the Oracle Database, not the Instance.",
    "hasSQL": false
  },
  {
    "id": 7,
    "module": 1,
    "question": "Which of the following is not a part of System Global Area?",
    "options": [
      "Redo log Buffer",
      "Data Buffer Cache",
      "Parameter Files",
      "Shared Pool"
    ],
    "correctIndex": 2,
    "correctAnswer": "Parameter Files",
    "explanation": "Parameter files (init.ora / SPFILE) reside physically on disk storage and are read at startup. They are not part of the System Global Area (SGA) shared memory structure in RAM.",
    "hasSQL": false
  },
  {
    "id": 8,
    "module": 1,
    "question": "Which of the following statements about the Data buffer cache is not true?",
    "options": [
      "Data buffer cache stores a collection of the most recently used SQL statements.",
      "Data buffer cache stores the most recently used data",
      "Data buffer cache read and write data to and from the data files",
      "Size of each buffer in the Data buffer cache is equal to the size of an Oracle Block."
    ],
    "correctIndex": 0,
    "correctAnswer": "Data buffer cache stores a collection of the most recently used SQL statements.",
    "explanation": "The Data Buffer Cache holds data blocks read from data files. Storing compiled SQL statements and execution plans is the function of the Library Cache inside the Shared Pool, not the Data Buffer Cache.",
    "hasSQL": true
  },
  {
    "id": 9,
    "module": 1,
    "question": "Which of the following statements about the Redo log buffer is not true?",
    "options": [
      "The client process records changes in the redo log buffer",
      "The Redo log buffer records changes made to a database",
      "The server process records changes in the redo log buffer",
      "The Redo log buffer records the block that is changed, the location of the change and the new Value."
    ],
    "correctIndex": 0,
    "correctAnswer": "The client process records changes in the redo log buffer",
    "explanation": "Client processes do not directly write into the SGA Redo Log Buffer; the Server Process acting on behalf of the client session writes data changes into the Redo Log Buffer.",
    "hasSQL": false
  },
  {
    "id": 10,
    "module": 1,
    "question": "Which of the following is not stored by the Library Cache?",
    "options": [
      "Results of the SQL statements",
      "The text of SQL statement",
      "The Parse Tree: complied version of a statement.",
      "The Execution Plan"
    ],
    "correctIndex": 0,
    "correctAnswer": "Results of the SQL statements",
    "explanation": "The Library Cache stores SQL statement text, parse trees, and execution plans. The actual output data or query results are returned to the client session or cached in the Result Cache, not the Library Cache.",
    "hasSQL": false
  },
  {
    "id": 11,
    "module": 1,
    "question": "Which of the following is not true about the Shared Pool?",
    "options": [
      "The shared pool can be used by multiple SQL statements for the processing of data retrieved.",
      "Shared Pool is a part of the SGA",
      "Shared Pool consists of the Library cache and the Data dictionary cache",
      "The shared pool is sized by SHARED_POOL_SIZE parameter of init.ora"
    ],
    "correctIndex": 0,
    "correctAnswer": "The shared pool can be used by multiple SQL statements for the processing of data retrieved.",
    "explanation": "The Shared Pool stores shared memory structures (Library Cache & Data Dictionary Cache) for statement parsing and execution planning; actual data processing and result set caching occur in the Data Buffer Cache or PGA.",
    "hasSQL": false
  },
  {
    "id": 12,
    "module": 1,
    "question": "Which of the following systems requires a database?",
    "options": [
      "Payroll System",
      "Airline reservations system",
      "A web site that is capturing registered users",
      "All of the above"
    ],
    "correctIndex": 3,
    "correctAnswer": "All of the above",
    "explanation": "Payroll systems, airline reservation platforms, and user registration portals all require persistent, concurrent, transactional, and structured data storage, making a DBMS indispensable for all of them.",
    "hasSQL": false
  },
  {
    "id": 13,
    "module": 1,
    "question": "Which of the following is not contained in the Program Global Area?",
    "options": [
      "SQL Execution Plan",
      "Session information",
      "Cursor information",
      "SQL execution work areas"
    ],
    "correctIndex": 0,
    "correctAnswer": "SQL Execution Plan",
    "explanation": "The Program Global Area (PGA) is a private memory region containing session details, cursor state, and sort work areas. SQL Execution Plans are shared resources stored in the Shared Pool (SGA).",
    "hasSQL": false
  },
  {
    "id": 14,
    "module": 1,
    "question": "Which of the following is not a valid level of abstraction in a DBMS?",
    "options": [
      "Tables",
      "Views",
      "Conceptual Schema",
      "Physical Schema"
    ],
    "correctIndex": 0,
    "correctAnswer": "Tables",
    "explanation": "The standard ANSI/SPARC 3-level DBMS architecture consists of External Level (Views), Conceptual Level (Logical Schema), and Internal Level (Physical Schema). Tables are structural storage objects, not a standalone level of abstraction.",
    "hasSQL": false
  },
  {
    "id": 15,
    "module": 1,
    "question": "Which of the following is not among the ACID properties of a Transaction?",
    "options": [
      "Independence",
      "Atomicity",
      "Consistency",
      "Durability"
    ],
    "correctIndex": 0,
    "correctAnswer": "Independence",
    "explanation": "ACID properties stand for Atomicity, Consistency, Isolation, and Durability. 'Independence' is not part of the ACID acronym (Isolation provides transaction independence).",
    "hasSQL": false
  },
  {
    "id": 16,
    "module": 1,
    "question": "Which of the following are the advantages of the DBMS over a conventional file system that stores data, in terms of processing power requires a database?",
    "options": [
      "All of the above",
      "Ability to create Data Reports",
      "Efficient Querying of Data",
      "Matching and Sorting"
    ],
    "correctIndex": 0,
    "correctAnswer": "All of the above",
    "explanation": "DBMS provides centralized data querying, automated report generation, and efficient sorting/matching algorithms, offering massive advantages over flat file systems across all these dimensions.",
    "hasSQL": false
  },
  {
    "id": 17,
    "module": 1,
    "question": "Which of the following is not a valid type of a database management system?",
    "options": [
      "OODBMS (Operations Oriented Database Management System)",
      "NDBMS (Networked Database Management System)",
      "HDBMS (Hierarchical Database Management System)",
      "RDBMS (Relational Database Management System)"
    ],
    "correctIndex": 0,
    "correctAnswer": "OODBMS (Operations Oriented Database Management System)",
    "explanation": "Valid database models include RDBMS (Relational), HDBMS (Hierarchical), NDBMS (Network), and OODBMS (Object-Oriented). 'Operations Oriented DBMS' is a non-existent category.",
    "hasSQL": false
  },
  {
    "id": 18,
    "module": 1,
    "question": "Which of the following is not a part of the Oracle Database?",
    "options": [
      "Shared Pool",
      "Data Files",
      "Control Files",
      "Redo Log Files"
    ],
    "correctIndex": 0,
    "correctAnswer": "Shared Pool",
    "explanation": "An Oracle Database consists of physical disk files (Data Files, Control Files, Redo Log Files). The Shared Pool is a memory region in RAM belonging to the Oracle Instance, not the physical database.",
    "hasSQL": false
  },
  {
    "id": 19,
    "module": 1,
    "question": "In an instance, multiple ________ can share an SGA.",
    "options": [
      "Server Processes",
      "PMON Processes",
      "Instances",
      "Databases"
    ],
    "correctIndex": 2,
    "correctAnswer": "Instances",
    "explanation": "In Oracle Real Application Clusters (RAC) or multi-instance configurations, multiple instances can access a single database, and within an instance, multiple server/background processes share a single SGA memory region.",
    "hasSQL": false
  },
  {
    "id": 20,
    "module": 1,
    "question": "Which component in the following list is not part of the System Global Area (SGA)?",
    "options": [
      "Sort Area",
      "Database Buffer Cache",
      "Library Cache",
      "Shared Pool"
    ],
    "correctIndex": 0,
    "correctAnswer": "Sort Area",
    "explanation": "The Database Buffer Cache, Library Cache, and Shared Pool are key components of the System Global Area (SGA). The Sort Area is private memory allocated inside the Program Global Area (PGA).",
    "hasSQL": false
  },
  {
    "id": 21,
    "module": 2,
    "question": "What does SQL stand for?",
    "options": [
      "Structured Query Language",
      "Structured Question Language",
      "Strong Question Language",
      "Strong Query Language"
    ],
    "correctIndex": 0,
    "correctAnswer": "Structured Query Language",
    "explanation": "SQL stands for Structured Query Language, the standardized ANSI/ISO programming language used to manage and query relational database management systems.",
    "hasSQL": false
  },
  {
    "id": 22,
    "module": 2,
    "question": "The Employee table contains these columns: Empno Number(4), Ename Varchar2(10), job varchar2(10), sal Varchar2(10). You need to display employee information using this query: SELECT Empno, Ename, Job \"Employee Information\" FROM employee; How many columns are presented after executing this query?",
    "options": [
      "2",
      "1",
      "3",
      "0"
    ],
    "correctIndex": 1,
    "correctAnswer": "1",
    "explanation": "In the SELECT list Empno, Ename, Job 'Employee Information', the string 'Employee Information' acts as a single column alias due to missing commas, rendering 1 effective column output in this specific query formulation.",
    "hasSQL": true
  },
  {
    "id": 23,
    "module": 2,
    "question": "Evaluate these two SQL statements: 1. SELECT item_id, (retail * 1.25) + 5.00 - (cost * 1.10) - (cost * .10) AS Calculated Profit FROM item; 2. SELECT item_id, retail * 1.25 + 5.00 - cost * 1.10 - cost * .10 \"Calculated Profit\" FROM item; What will be the result?",
    "options": [
      "One of the statements will NOT execute.",
      "Statement 1 will display the 'Calculated Profit' column heading.",
      "Statement 1 and statement 2 will return the same value.",
      "Statement 1 will return a higher value than statement 2."
    ],
    "correctIndex": 0,
    "correctAnswer": "One of the statements will NOT execute.",
    "explanation": "In standard SQL, a column alias containing spaces (such as 'Calculated Profit') must be enclosed in double quotes (\"\"). Statement 1 fails with a syntax error because it omits quotes around the multi-word alias.",
    "hasSQL": true
  },
  {
    "id": 24,
    "module": 2,
    "question": "Which SQL statement generates the alias Annual Salary for the calculated column SALARY*12?",
    "options": [
      "SELECT ename, salary*12 AS INITCAP ('ANNUAL SALARY') FROM employees;",
      "SELECT ename, salary*12 AS Annual Salary FROM employees;",
      "SELECT ename, salary*12 Annual Salary FROM employees;",
      "SELECT ename, salary*12 'Annual Salary' FROM employees;"
    ],
    "correctIndex": 3,
    "correctAnswer": "SELECT ename, salary*12 'Annual Salary' FROM employees;",
    "explanation": "Column aliases containing spaces or special characters require double quotes in Oracle SQL or single quotes/brackets depending on exact SQL dialect settings. In this question's convention, string quoting creates the formatted header alias.",
    "hasSQL": true
  },
  {
    "id": 25,
    "module": 2,
    "question": "Evaluate this SQL statement: SELECT ename, sal, 12*sal+100 FROM emp; The SAL column stores the monthly salary of the employee. Which change must be made to the above syntax to calculate the annual compensation as \"monthly salary plus a monthly bonus of $100, multiplied by 12\"?",
    "options": [
      "SELECT ename, sal, 12*(sal+100) FROM emp;",
      "No change is required to achieve the desired results",
      "SELECT ename, sal, (12*sal) +100 FROM emp;",
      "SELECT ename, sal+100,*12 FROM emp;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT ename, sal, 12(sal+100) FROM emp;*",
    "explanation": "By arithmetic operator precedence, multiplication precedes addition. Adding parentheses 12 * (sal + 100) forces SQL to add 100 to the monthly salary before multiplying the sum by 12.",
    "hasSQL": true
  },
  {
    "id": 26,
    "module": 2,
    "question": "You need to produce output that states \"Dear Customer customer_name, \". The customer_name data values come from the CUSTOMER_NAME column in the CUSTOMERS table. Which statement produces this output?",
    "options": [
      "SELECT 'Dear Customer ' customer_name ',' FROM customers;",
      "SELECT dear customer, customer_name, FROM customers;",
      "SELECT \"Dear Customer\", customer_name ',' FROM customers;",
      "SELECT 'Dear Customer ' customer_name ',' FROM customers;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT 'Dear Customer ' customer_name ',' FROM customers;",
    "explanation": "String literals in SQL must be enclosed in single quotes. Concatenating or listing string constants alongside column names produces the exact literal text output.",
    "hasSQL": true
  },
  {
    "id": 27,
    "module": 2,
    "question": "Which of the following query will correctly display each row of the Employees table only once given that Employees table may contain duplicate rows?",
    "options": [
      "SELECT distinct * from employees;",
      "SELECT unique rows from employees;",
      "SELECT * from employees;",
      "SELECT distinct rows from employees;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT distinct * from employees;",
    "explanation": "The DISTINCT keyword is placed immediately after SELECT to evaluate all specified columns and eliminate duplicate rows from the returned result set.",
    "hasSQL": true
  },
  {
    "id": 28,
    "module": 2,
    "question": "What will be the output of the following query? SELECT 1 FROM employees;",
    "options": [
      "This statement will return 1 as many times as the number of rows in the employees table.",
      "This statement will return first row of the employees table",
      "This statement will return only one row and one column in output and value will be 1.",
      "This statement will return error."
    ],
    "correctIndex": 0,
    "correctAnswer": "This statement will return 1 as many times as the number of rows in the employees table.",
    "explanation": "Evaluating a constant literal like SELECT 1 FROM employees; evaluates the constant 1 once for every row present in the target table.",
    "hasSQL": true
  },
  {
    "id": 29,
    "module": 2,
    "question": "What of the following statements is not true?",
    "options": [
      "Clauses must be placed on separate lines.",
      "SQL statements are not case sensitive.",
      "SQL statements can be on one or more lines.",
      "Keywords cannot be abbreviated or split across lines."
    ],
    "correctIndex": 0,
    "correctAnswer": "Clauses must be placed on separate lines.",
    "explanation": "SQL clauses (like SELECT, FROM, WHERE) do not legally require placement on separate lines; line breaks and indentation are purely formatting conventions for human readability.",
    "hasSQL": false
  },
  {
    "id": 30,
    "module": 2,
    "question": "What is true about NULL?",
    "options": [
      "NULL is a value that is unavailable, unassigned, unknown, or inapplicable",
      "NULL is same as blank spaces",
      "NULL in a number column can be treated as zero",
      "NULL means an incorrect value"
    ],
    "correctIndex": 0,
    "correctAnswer": "NULL is a value that is unavailable, unassigned, unknown, or inapplicable",
    "explanation": "In relational databases, NULL represents an unassigned, unknown, missing, or inapplicable value. It is fundamentally distinct from zero or a blank space.",
    "hasSQL": false
  },
  {
    "id": 31,
    "module": 2,
    "question": "What should be the result of the expression for the employees having commission_pct as NULL? SELECT 12 * salary * commission_pct 'ANNSAL_COMM' FROM employees;",
    "options": [
      "None of the above",
      "Zero",
      "NULL",
      "Unpredictable"
    ],
    "correctIndex": 2,
    "correctAnswer": "NULL",
    "explanation": "Any arithmetic operation performed on a NULL value yields NULL as the result because operating on an unknown value remains unknown.",
    "hasSQL": true
  },
  {
    "id": 32,
    "module": 2,
    "question": "Which SQL statement is used to extract data from a database?",
    "options": [
      "SELECT",
      "GET",
      "OPEN",
      "EXTRACT"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT",
    "explanation": "The SELECT statement is the core Data Query Language (DQL) command used to retrieve records and data fields from database tables.",
    "hasSQL": true
  },
  {
    "id": 33,
    "module": 2,
    "question": "Which statement about the column aliases is not True?",
    "options": [
      "\"AS\" keyword must be used between the column name and the column alias",
      "A column alias renames a column heading",
      "A column alias requires double quotation marks if it contains spaces or special characters or is case sensitive",
      "Immediately follows the column name."
    ],
    "correctIndex": 0,
    "correctAnswer": "\"AS\" keyword must be used between the column name and the column alias",
    "explanation": "The AS keyword before a column alias is optional in SQL syntax. Simply writing <column_name> <alias_name> is completely valid.",
    "hasSQL": false
  },
  {
    "id": 34,
    "module": 2,
    "question": "With SQL, how do you select a column named \"FirstName\" from a table named \"Persons\"?",
    "options": [
      "SELECT Persons.FirstName ;",
      "SELECT FirstName FROM Persons;",
      "EXTRACT FirstName FROM Persons ;",
      "SELECT FROM persons the FirstName;"
    ],
    "correctIndex": 1,
    "correctAnswer": "SELECT FirstName FROM Persons;",
    "explanation": "The standard SQL syntax to retrieve a column named 'FirstName' from a table named 'Persons' is SELECT FirstName FROM Persons;.",
    "hasSQL": true
  },
  {
    "id": 35,
    "module": 2,
    "question": "In the following query, which expression is evaluated first? SELECT id_number, (quantity - 100 / 0.15 + 20 - 10) FROM inventory",
    "options": [
      "20 - 10",
      "0.15 + 20",
      "100 / 0.15",
      "quantity - 100"
    ],
    "correctIndex": 2,
    "correctAnswer": "100 / 0.15",
    "explanation": "In arithmetic precedence rules, division (/) has higher priority than addition and subtraction, so 100 / 0.15 is evaluated first.",
    "hasSQL": true
  },
  {
    "id": 36,
    "module": 2,
    "question": "Which SQL statement is used to return only different values?",
    "options": [
      "SELECT DISTINCT",
      "SELECT DIFFERENT",
      "SELECT UNIQUE",
      "SELECT NO DUPLICATES"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT DISTINCT",
    "explanation": "The DISTINCT clause filters out duplicate values in the result set, ensuring only unique values or combinations are returned.",
    "hasSQL": true
  },
  {
    "id": 37,
    "module": 2,
    "question": "Which clauses of a SELECT statement are mandatory?",
    "options": [
      "SELECT and FROM",
      "Only SELECT",
      "SELECT and WHERE",
      "SELECT, FROM and WHERE"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT and FROM",
    "explanation": "A minimal valid SQL query requires both the SELECT clause (specifying what columns/expressions to retrieve) and the FROM clause (specifying the source table).",
    "hasSQL": true
  },
  {
    "id": 38,
    "module": 2,
    "question": "Which SELECT statement should you use if you want to display unique combinations of the POSITION and MANAGER values from the EMPLOYEE table?",
    "options": [
      "SELECT position, manager DISTINCT FROM employee;",
      "SELECT DISTINCT position, manager FROM employee;",
      "SELECT position, manager FROM employee;",
      "SELECT position, DISTINCT manager FROM employee;"
    ],
    "correctIndex": 1,
    "correctAnswer": "SELECT DISTINCT position, manager FROM employee;",
    "explanation": "To filter distinct combinations of multiple columns, DISTINCT must appear immediately after SELECT: SELECT DISTINCT position, manager FROM employee;.",
    "hasSQL": true
  },
  {
    "id": 39,
    "module": 2,
    "question": "You are formulating queries in a SQL Plus. Which of the following statement correctly describes how to specify a column alias?*",
    "options": [
      "Place the alias at the end of the statement to describe the table.",
      "Place the alias after each column separated by a comma to describe the column.",
      "Place the alias after each column separated by a space to describe the column.",
      "Place the alias at the beginning of the statement to describe the table."
    ],
    "correctIndex": 2,
    "correctAnswer": "Place the alias after each column separated by a space to describe the column.",
    "explanation": "In SQL / SQL*Plus, column aliases are defined by placing the alias name immediately after the column expression in the SELECT list, separated by a space.",
    "hasSQL": false
  },
  {
    "id": 40,
    "module": 2,
    "question": "With SQL, how do you select all the columns from a table named \"Persons\"?",
    "options": [
      "SELECT *.Persons",
      "SELECT Persons",
      "SELECT [all] FROM Persons",
      "SELECT * FROM Persons"
    ],
    "correctIndex": 3,
    "correctAnswer": "SELECT * FROM Persons",
    "explanation": "The asterisk (*) wildcard in the SELECT clause tells the database engine to retrieve all defined columns from the specified table.",
    "hasSQL": true
  },
  {
    "id": 41,
    "module": 3,
    "question": "What does the TRUNCATE statement do?",
    "options": [
      "Removes the table",
      "Removes all rows from a table",
      "Shortens the table to 10 rows",
      "Removes all columns from a table"
    ],
    "correctIndex": 1,
    "correctAnswer": "Removes all rows from a table",
    "explanation": "TRUNCATE TABLE is a DDL command that quickly removes all rows from a table and deallocates storage space while preserving the table structure. Unlike DELETE, it cannot be rolled back.",
    "hasSQL": true
  },
  {
    "id": 42,
    "module": 3,
    "question": "Which statement about data types is true?",
    "options": [
      "The CHAR datatype should be used for fixed-length character data",
      "The TIMESTAMP data type is an extension of the VARCHAR2 data type",
      "The BLOB data type stores character data up to four gigabytes",
      "The VARCHAR2 data type stores character data up to four gigabytes"
    ],
    "correctIndex": 0,
    "correctAnswer": "The CHAR datatype should be used for fixed-length character data",
    "explanation": "CHAR is a fixed-length character data type that right-pads values with spaces to the specified length. VARCHAR2 is variable-length and does not space-pad.",
    "hasSQL": false
  },
  {
    "id": 43,
    "module": 3,
    "question": "The EMPLOYEES table has these columns: LAST_NAME VARCHAR2(35), SALARY NUMBER(8,2), HIRE_DATE DATE. Management wants to add a default value to the SALARY column. You plan to alter the table by using this SQL statement: ALTER TABLE EMPLOYEES MODIFY (SALARY DEFAULT 5000); What is true about your ALTER statement?",
    "options": [
      "A change to the DEFAULT value affects only subsequent insertions to the table.",
      "Column definitions cannot be altered to add DEFAULT values.",
      "Column definitions cannot be altered at add DEFAULT values for columns with a NUMBER data type",
      "All the rows that have a NULL value for the SALARY column will be updated with the value5000."
    ],
    "correctIndex": 0,
    "correctAnswer": "A change to the DEFAULT value affects only subsequent insertions to the table.",
    "explanation": "Modifying a column's DEFAULT value using ALTER TABLE affects only rows inserted after the modification. Existing rows retain their current column values.",
    "hasSQL": true
  },
  {
    "id": 44,
    "module": 3,
    "question": "You need to change the definition of an existing table. The COMMERCIALS table needs its DESCRIPTION column changed to hold varying length characters up to 2000 bytes. The column can currently hold 1000 bytes per value. The table contains 20000 rows. Which statement is valid?",
    "options": [
      "ALTER TABLE commercials MODIFY (description VARCHAR2(2000));",
      "ALTER TABLE commercials MODIFY (description CHAR2(2000));",
      "ALTER TABLE commercials CHANGE (description CHAR2(2000));",
      "ALTER TABLE commercials CHANGE (description VARCHAR2(2000));"
    ],
    "correctIndex": 0,
    "correctAnswer": "ALTER TABLE commercials MODIFY (description VARCHAR2(2000));",
    "explanation": "In Oracle SQL, to change the size of an existing column, use ALTER TABLE <table_name> MODIFY (<column_name> <datatype>(<new_size>));.",
    "hasSQL": true
  },
  {
    "id": 45,
    "module": 3,
    "question": "Evaluate the SQL statement: DROP TABLE DEPT; Which statement is false about the above SQL statement?",
    "options": [
      "All views based on the DEPT table are deleted.",
      "You cannot roll back this statement.",
      "All pending transactions are committed.",
      "All indexes based on the DEPT table are dropped."
    ],
    "correctIndex": 0,
    "correctAnswer": "All views based on the DEPT table are deleted.",
    "explanation": "Dropping a table removes its data and indexes. Dependent views are not deleted; instead, they become INVALID in the data dictionary.",
    "hasSQL": true
  },
  {
    "id": 46,
    "module": 3,
    "question": "Which statement describes the ROWID data type?",
    "options": [
      "A hexadecimal string representing the unique address of a row in its table.",
      "Binary data up to 4 gigabytes",
      "Character data up to 4 gigabytes.",
      "Raw binary data of variable length up to 2 gigabytes."
    ],
    "correctIndex": 0,
    "correctAnswer": "A hexadecimal string representing the unique address of a row in its table.",
    "explanation": "ROWID is a pseudo-column that stores the physical 18-character hexadecimal address of each row on disk (Datafile, Data block, Slot).",
    "hasSQL": false
  },
  {
    "id": 47,
    "module": 3,
    "question": "You just issued the following statement: ALTER TABLE marketing DROP COLUMN profit; Which of the following choices identified when the column will actually be removed from database?",
    "options": [
      "Immediately following statement execution.",
      "After the Alter table drop unused columns command is issued.",
      "After the Alter table set unused column command is issued.",
      "After the Alter table modify command is issued."
    ],
    "correctIndex": 0,
    "correctAnswer": "Immediately following statement execution.",
    "explanation": "Executing ALTER TABLE ... DROP COLUMN is a DDL operation that executes immediately with an implicit commit, permanently removing the column.",
    "hasSQL": true
  },
  {
    "id": 48,
    "module": 3,
    "question": "Which of the following can be a valid table name?",
    "options": [
      "Catch_#22",
      "Number",
      "1966_Invoices",
      "#Invoices"
    ],
    "correctIndex": 0,
    "correctAnswer": "Catch_#22",
    "explanation": "Oracle database object names must begin with an alphabetic letter, contain up to 30 characters, and can include letters, digits, _, $, and #. 'Catch_#22' is valid.",
    "hasSQL": false
  },
  {
    "id": 49,
    "module": 3,
    "question": "Which describes the default behaviour when you create a table?",
    "options": [
      "Tables are created in your schema.",
      "The table is accessible to all users.",
      "Tables are created in the public schema.",
      "Tables are created in the DBA schema."
    ],
    "correctIndex": 0,
    "correctAnswer": "Tables are created in your schema.",
    "explanation": "When a user creates a table without specifying a schema prefix, Oracle creates the table inside that connected user's default schema.",
    "hasSQL": false
  },
  {
    "id": 50,
    "module": 3,
    "question": "You need to modify the STUDENTS table to add a primary key on the STUDENT_ID column. The table is currently empty. Which statement accomplishes this task?",
    "options": [
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD PRIMARY KEY student_id;",
      "ALTER TABLE students ADD CONSTRAINT PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY student_id;"
    ],
    "correctIndex": 0,
    "correctAnswer": "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);",
    "explanation": "To add a primary key constraint with an explicit name to an existing table, use ALTER TABLE <table_name> ADD CONSTRAINT <constraint_name> PRIMARY KEY (<column_name>);.",
    "hasSQL": true
  },
  {
    "id": 51,
    "module": 3,
    "question": "Evaluate the SQL statement: TRUNCATE TABLE DEPT; Which statement is not true about the SQL statement?",
    "options": [
      "It releases the storage space used by the table.",
      "It does not release the storage space used by the table.",
      "You can NOT roll back the deletion of rows after the statement executes.",
      "You must be the owner of the table or have DELETE ANY TABLE system privileges to truncate the DEPT table"
    ],
    "correctIndex": 1,
    "correctAnswer": "It does not release the storage space used by the table.",
    "explanation": "TRUNCATE TABLE deallocates all extent storage allocated to the table (except initial extent space) and resets the high-water mark, releasing storage space back to the tablespace.",
    "hasSQL": true
  },
  {
    "id": 52,
    "module": 3,
    "question": "Which is not a correct guideline for naming database tables?",
    "options": [
      "Must begin with either a number or a letter.",
      "Must be 1-30 characters long.",
      "Should not be an Oracle Server reserved word.",
      "Must contain only A-Z, a-z, 0-9, _, $, and #."
    ],
    "correctIndex": 0,
    "correctAnswer": "Must begin with either a number or a letter.",
    "explanation": "Database table names in Oracle must begin with an alphabetic letter, not a number or symbol. Beginning a table name with a number causes a syntax error.",
    "hasSQL": false
  },
  {
    "id": 53,
    "module": 3,
    "question": "Which is a valid CREATE TABLE statement?",
    "options": [
      "CREATE TABLE EMP9$# AS (empid number(2));",
      "CREATE TABLE EMP*123 AS (empid number(2));",
      "CREATE TABLE PACKAGE AS (packid num(2));",
      "CREATE TABLE EMP_TEST AS (empid number(2));"
    ],
    "correctIndex": 0,
    "correctAnswer": "CREATE TABLE EMP9$# AS (empid number(2));",
    "explanation": "In Oracle SQL, 'EMP9$#' is a valid identifier because it starts with a letter and contains valid special characters ('$' and '#').",
    "hasSQL": true
  },
  {
    "id": 54,
    "module": 3,
    "question": "Which of these DATETIME data types cannot be used when specifying column definitions?",
    "options": [
      "INTERVAL MONTH TO DAY",
      "TIMESTAMP",
      "INTERVAL DAY TO SECOND",
      "INTERVAL YEAR TO MONTH"
    ],
    "correctIndex": 0,
    "correctAnswer": "INTERVAL MONTH TO DAY",
    "explanation": "Oracle supports INTERVAL YEAR TO MONTH and INTERVAL DAY TO SECOND. There is no 'INTERVAL MONTH TO DAY' data type in Oracle SQL.",
    "hasSQL": false
  },
  {
    "id": 55,
    "module": 3,
    "question": "Which statement about a table is true?",
    "options": [
      "The size of a table does NOT need to be specified",
      "A table can have up to 10,000 columns",
      "A table CANNOT be created while users are using the database.",
      "The structure of a table CANNOT be modified while the table is online."
    ],
    "correctIndex": 0,
    "correctAnswer": "The size of a table does NOT need to be specified",
    "explanation": "When creating a table in Oracle, physical size allocation is handled dynamically by tablespace management; size does not need to be specified in the CREATE TABLE statement.",
    "hasSQL": false
  },
  {
    "id": 56,
    "module": 3,
    "question": "Consider a general employees table, which statement should you use to increase the EMP_LNAME column length to 25 if the column currently contains 3000 records?",
    "options": [
      "ALTER TABLE employee MODIFY emp_lname VARCHAR2(25);",
      "You CANNOT increases the width of the EMP_LNAME column.",
      "ALTER TABLE employee RENAME emp_lname VARCHAR2(25);",
      "ALTER employee TABLE MODIFY COLUMN emp_lname VARCHAR2(25);"
    ],
    "correctIndex": 0,
    "correctAnswer": "ALTER TABLE employee MODIFY emp_lname VARCHAR2(25);",
    "explanation": "To increase column length for an existing table column, use ALTER TABLE <table_name> MODIFY <column_name> VARCHAR2(<new_length>);.",
    "hasSQL": true
  },
  {
    "id": 57,
    "module": 3,
    "question": "Which statement will permanently remove all the data in, the indexes on, and the structure of the PO_DETAIL table?",
    "options": [
      "DROP TABLE po_detail;",
      "DELETE TABLE po_detail;",
      "TRUNCATE TABLE po_detail;",
      "ALTER TABLE po_detail SET UNUSED (po_num, po_line_id, product_id, quantity, unit_price);"
    ],
    "correctIndex": 0,
    "correctAnswer": "DROP TABLE po_detail;",
    "explanation": "The DROP TABLE command permanently deletes the table structure, all data rows, indexes, and table triggers from the database.",
    "hasSQL": true
  },
  {
    "id": 58,
    "module": 3,
    "question": "Consider an Employees table in which the MGR_ID column currently contains employee identification numbers, and you need to allow users to include text characters in the identification values. Which statement should you use to implement this?",
    "options": [
      "You CANNOT modifies the data type of the MGR_ID column.",
      "ALTER employee MODIFY (mgr_id VARCHAR2(15));",
      "ALTER TABLE employee MODIFY (mgr_id VARCHAR2(15));",
      "ALTER employee TABLE MODIFY COLUMN (mgr_id VARCHAR2(15));"
    ],
    "correctIndex": 0,
    "correctAnswer": "You CANNOT modifies the data type of the MGR_ID column.",
    "explanation": "Oracle does not permit changing a column's data type from NUMBER to VARCHAR2 if the column already contains non-null data.",
    "hasSQL": true
  },
  {
    "id": 59,
    "module": 3,
    "question": "Which CREATE TABLE statements will not fail?",
    "options": [
      "CREATE TABLE time (time1 NUMBER(9));",
      "CREATE TABLE date (time_id NUMBER(9));",
      "CREATE TABLE time* (time_id NUMBER(9));",
      "CREATE TABLE $time (time_id NUMBER(9));"
    ],
    "correctIndex": 0,
    "correctAnswer": "CREATE TABLE time (time1 NUMBER(9));",
    "explanation": "'CREATE TABLE time (time1 NUMBER(9));' is valid because 'time' is accepted as an object identifier when not enclosed in reserved syntax.",
    "hasSQL": true
  },
  {
    "id": 60,
    "module": 3,
    "question": "Examine the structure of the PRODUCT table: PRODUCT_ID NUMBER (Primary Key), PRODUCT_NAME VARCHAR2(25), SUPPLIER_ID NUMBER, LIST_PRICE NUMBER(7,2). You need to reduce the LIST_PRICE column precision to 6 with a scale of 2 and ensure that when inserting a row into the PRODUCT table without a value for the LIST_PRICE column, a price of $5.00 will automatically be inserted. The PRODUCT table currently contains no records. Which statement should you use?",
    "options": [
      "ALTER TABLE product MODIFY (list_price NUMBER(6,2) DEFAULT 5);",
      "ALTER TABLE product ADD OR REPLACE (list_price NUMBER(8,2) DEFAULT 5);",
      "ALTER TABLE product MODIFY COLUMN (list_price NUMBER(6,2) DEFAULT '$5.00');",
      "You CANNOT reduces the size of the LIST_PRICE column."
    ],
    "correctIndex": 0,
    "correctAnswer": "ALTER TABLE product MODIFY (list_price NUMBER(6,2) DEFAULT 5);",
    "explanation": "To modify both column precision and default value on an empty table, use ALTER TABLE product MODIFY (list_price NUMBER(6,2) DEFAULT 5);.",
    "hasSQL": true
  },
  {
    "id": 61,
    "module": 4,
    "question": "Which ALTER TABLE statement should you use to add a PRIMARY KEY constraint on the MANUFACTURER_ID column of the INVENTORY table?",
    "options": [
      "ALTER TABLE inventory ADD PRIMARY KEY (manufacturer_id);",
      "ALTER TABLE inventory ADD CONSTRAINT manufacturer_id PRIMARY KEY;",
      "ALTER TABLE inventory MODIFY manufacturer_id CONSTRAINT PRIMARY KEY;",
      "ALTER TABLE inventory MODIFY CONSTRAINT PRIMARY KEY manufacturer_id;"
    ],
    "correctIndex": 0,
    "correctAnswer": "ALTER TABLE inventory ADD PRIMARY KEY (manufacturer_id);",
    "explanation": "To add a primary key constraint to an existing table without explicitly naming it, use ALTER TABLE <table_name> ADD PRIMARY KEY (<column_name>);.",
    "hasSQL": true
  },
  {
    "id": 62,
    "module": 4,
    "question": "Which statement explicitly names a constraint?",
    "options": [
      "ALTER TABLE student_grades ADD CONSTRAINT student_id_fk FOREIGN KEY (student_id) REFERENCES students(student_id);",
      "ALTER TABLE student_grades ADD FOREIGN KEY (student_id) REFERENCES students(student_id);",
      "ALTER TABLE student_grades ADD CONSTRAINT NAME = student_id_fk FOREIGN KEY (student_id) REFERENCES students(student_id);",
      "ALTER TABLE student grades ADD NAMED CONSTRAINT student_id_fk FOREIGN KEY (student_id) REFERENCES students(student_id);"
    ],
    "correctIndex": 0,
    "correctAnswer": "ALTER TABLE student_grades ADD CONSTRAINT student_id_fk FOREIGN KEY (student_id) REFERENCES students(student_id);",
    "explanation": "Explicit constraint naming requires the CONSTRAINT <constraint_name> clause, as in ALTER TABLE student_grades ADD CONSTRAINT student_id_fk FOREIGN KEY ....",
    "hasSQL": true
  },
  {
    "id": 63,
    "module": 4,
    "question": "Examine the SQL statements that create ORDERS table: CREATE TABLE orders(SER_NO NUMBER UNIQUE, ORDER_ID NUMBER, ORDER_DATE DATE NOT NULL, STATUS VARCHAR2(10) CHECK (status IN ('CREDIT', 'CASH')), PROD_ID NUMBER REFERENCES PRODUCTS(PRODUCT_ID), ORD_TOTAL NUMBER); For which columns would an index be automatically created when you execute the above SQL statement?",
    "options": [
      "SER_NO",
      "ORDER_ID",
      "STATUS",
      "PROD_ID"
    ],
    "correctIndex": 0,
    "correctAnswer": "SER_NO",
    "explanation": "Defining a UNIQUE constraint on a column automatically prompts Oracle to create an underlying unique index on that column to enforce uniqueness efficiently.",
    "hasSQL": true
  },
  {
    "id": 64,
    "module": 4,
    "question": "For which of these constraints does the Oracle Server implicitly create a unique index?",
    "options": [
      "PRIMARY KEY",
      "NOT NULL",
      "FOREIGN KEY",
      "CHECK"
    ],
    "correctIndex": 0,
    "correctAnswer": "PRIMARY KEY",
    "explanation": "Oracle implicitly creates a unique index when enforcing PRIMARY KEY and UNIQUE constraints to guarantee fast lookup and uniqueness.",
    "hasSQL": false
  },
  {
    "id": 65,
    "module": 4,
    "question": "Your attempt to disable a constraint results in the following error: ORA-02297: cannot disable constraint - dependencies exist. Which of the following types of the constraints is likely causing interference with your disablement of this one?",
    "options": [
      "Foreign key Constraints",
      "Check constraints",
      "Not NULL constraints.",
      "Unique Constraints."
    ],
    "correctIndex": 0,
    "correctAnswer": "Foreign key Constraints",
    "explanation": "Disabling a PRIMARY KEY or UNIQUE constraint will fail if child tables have active FOREIGN KEY constraints referencing that key, raising ORA-02297.",
    "hasSQL": false
  },
  {
    "id": 66,
    "module": 4,
    "question": "Which is not a valid Oracle constraint type?",
    "options": [
      "CASCADE",
      "UNIQUE",
      "CHECK",
      "NOT NULL"
    ],
    "correctIndex": 0,
    "correctAnswer": "CASCADE",
    "explanation": "The 5 valid constraint types in Oracle are PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, and NOT NULL. 'CASCADE' is an action option (e.g. ON DELETE CASCADE), not a constraint type.",
    "hasSQL": false
  },
  {
    "id": 67,
    "module": 4,
    "question": "Which constraint will ensure that the CUSTOMER_NAME column of the CUSTOMERS table always holds a value?",
    "options": [
      "NOT NULL or Primary Key",
      "Only Primary Key",
      "Unique",
      "Foreign Key"
    ],
    "correctIndex": 0,
    "correctAnswer": "NOT NULL or Primary Key",
    "explanation": "Both NOT NULL and PRIMARY KEY constraints prevent NULL values from being stored in a table column.",
    "hasSQL": false
  },
  {
    "id": 68,
    "module": 4,
    "question": "Which view should a user query to display the columns associated with the constraints on a table owned by the user?",
    "options": [
      "USER_CONS_COLUMNS",
      "USER_CONSTRAINTS",
      "USER_OBJECTS",
      "ALL_CONSTRAINTS"
    ],
    "correctIndex": 0,
    "correctAnswer": "USER_CONS_COLUMNS",
    "explanation": "The USER_CONS_COLUMNS data dictionary view displays the mapping between column names and constraint names owned by the current user.",
    "hasSQL": false
  },
  {
    "id": 69,
    "module": 4,
    "question": "You need to modify the STUDENTS table to add a primary key on the STUDENT_ID column. The table is currently empty. Which statement accomplishes this task?",
    "options": [
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD PRIMARY KEY student_id;",
      "ALTER TABLE students ADD CONSTRAINT PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY student_id;"
    ],
    "correctIndex": 0,
    "correctAnswer": "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);",
    "explanation": "Adding a named PRIMARY KEY constraint uses ALTER TABLE <table_name> ADD CONSTRAINT <constraint_name> PRIMARY KEY (<column_name>);.",
    "hasSQL": true
  },
  {
    "id": 70,
    "module": 4,
    "question": "Which statement about the CASCADE CONSTRAINTS clause is not true?",
    "options": [
      "The CASCADE CONSTRAINTS can be used while creating the constraint to enable automatic dropping of foreign key constraint when a primary key is dropped.",
      "The CASCADE CONSTRAINTS clause is used along with the DROP COLUMN clause.",
      "The CASCADE CONSTRAINTS clause drops all referential integrity constraints that refer to the primary and unique keys defined on the dropped columns.",
      "The CASCADE CONSTRAINTS clause also drops all multicolumn constraints defined on the dropped columns"
    ],
    "correctIndex": 0,
    "correctAnswer": "The CASCADE CONSTRAINTS can be used while creating the constraint to enable automatic dropping of foreign key constraint when a primary key is dropped.",
    "explanation": "The CASCADE CONSTRAINTS clause is specified during DROP TABLE or DROP/DISABLE CONSTRAINT operations, not during constraint creation.",
    "hasSQL": false
  },
  {
    "id": 71,
    "module": 4,
    "question": "Which data dictionary view can be used to view the details of columns involved in constraints?",
    "options": [
      "USER_CONS_COLUMNS",
      "USER_COLS_CONSTRAINTS",
      "USER_CONSTRAINTS",
      "USER_OBJECTS"
    ],
    "correctIndex": 0,
    "correctAnswer": "USER_CONS_COLUMNS",
    "explanation": "USER_CONS_COLUMNS lists all columns involved in constraints owned by the current schema user.",
    "hasSQL": false
  },
  {
    "id": 72,
    "module": 4,
    "question": "Which SQL statement defines the FOREIGN KEY constraint on the DEPTNO column of the EMP table?",
    "options": [
      "CREATE TABLE EMP(empno NUMBER(4),ename VARCNAR2(35),deptno NUMBER(7,2) CONSTRAINT emp_deptno_fk REFERENCES dept (deptno));",
      "CREATE TABLE EMP(empno NUMBER(4),ename VARCNAR2(35),deptno NUMBER(7,2) NOT NULL CONSTRAINT emp_deptno_fk FOREIGN KEY deptno REFERENCES dept deptno);",
      "CREATE TABLE EMP(empno NUMBER(4)ename VARCHAR2(35),deptno NUMBER(7,2) NOT NULL, CONSTRAINT emp_deptno_fk REFERENCES dept (deptno) FOREIGN KEY (deptno));",
      "CREATE TABLE EMP (empno NUMBER(4),ename VARCNAR2(35),deptno NUMBER(7,2) FOREIGN KEY CONSTRAINT emp deptno fk REFERENCES dept (deptno));"
    ],
    "correctIndex": 0,
    "correctAnswer": "CREATE TABLE EMP(empno NUMBER(4),ename VARCNAR2(35),deptno NUMBER(7,2) CONSTRAINT emp_deptno_fk REFERENCES dept (deptno));",
    "explanation": "Inline foreign key creation syntax is: column_name datatype CONSTRAINT constraint_name REFERENCES parent_table(parent_column).",
    "hasSQL": true
  },
  {
    "id": 73,
    "module": 4,
    "question": "Which statement should be used to alter the constraints (i.e. either to enable, disable or drop a constraint)?",
    "options": [
      "ALTER TABLE",
      "ALTER CONSTRAINT",
      "DROP CONSTRAINT",
      "ALTER OBJECT"
    ],
    "correctIndex": 0,
    "correctAnswer": "ALTER TABLE",
    "explanation": "Modifying constraint states (ENABLE, DISABLE, DROP) requires the ALTER TABLE statement.",
    "hasSQL": true
  },
  {
    "id": 74,
    "module": 4,
    "question": "Which statement is not correct about the use of constraints?",
    "options": [
      "Constraints make complex queries easy",
      "Constraints enforce rules at the view level.",
      "Constraints enforce rules at the table level.",
      "Constraints prevent the deletion of a table if there are dependencies."
    ],
    "correctIndex": 0,
    "correctAnswer": "Constraints make complex queries easy",
    "explanation": "Constraints enforce business rules and data integrity at the database level; they do not simplify complex SQL query syntax.",
    "hasSQL": false
  },
  {
    "id": 75,
    "module": 4,
    "question": "Which statement about NOT NULL constraints is true?",
    "options": [
      "NOT NULL constraints can only be defined at the column level.",
      "You CANNOT add a NOT NULL constraint to an existing column using the ALTER TABLE statement",
      "You can modify the structure of a NOT NULL constraint using the ALTER TABLE statement.",
      "A NOT NULL constraint is stored in the data dictionary as a UNIQUE constraint."
    ],
    "correctIndex": 0,
    "correctAnswer": "NOT NULL constraints can only be defined at the column level.",
    "explanation": "The NOT NULL constraint can only be defined at the column level during table creation or via ALTER TABLE MODIFY.",
    "hasSQL": true
  },
  {
    "id": 76,
    "module": 4,
    "question": "The PO_DETAIL table contains these columns: PO_NUM NUMBER NOT NULL (Primary Key), PO_LINE_ID NUMBER NOT NULL (Primary Key), PRODUCT_ID NUMBER (Foreign Key), QUANTITY NUMBER, UNIT_PRICE NUMBER(5,2). Evaluate this statement: ALTER TABLE po_detail ENABLE CONSTRAINT po_num_pk; For which task would you issue this statement?",
    "options": [
      "to activate the previously disabled constraint on the PO_NUM column while creating a PRIMARY KEY index",
      "to drop and recreate the PRIMARY KEY constraint on the PO_NUM column",
      "to create a new PRIMARY KEY constraint on the PO_NUM column",
      "to enable any previously disabled FOREIGN KEY constraints that are dependent on thePO_NUM column"
    ],
    "correctIndex": 0,
    "correctAnswer": "to activate the previously disabled constraint on the PO_NUM column while creating a PRIMARY KEY index",
    "explanation": "Enabling a disabled constraint activates validation for existing and new rows and re-creates/re-activates the underlying index.",
    "hasSQL": true
  },
  {
    "id": 77,
    "module": 4,
    "question": "Which statement about constraints is true?",
    "options": [
      "Constraints prevent a table with dependencies from being deleted.",
      "Constraints only enforce rules at the table level.",
      "You must provide a name for each constraint at the time of its creation.",
      "Constraint names are NOT required to follow the standard object-naming rules."
    ],
    "correctIndex": 0,
    "correctAnswer": "Constraints prevent a table with dependencies from being deleted.",
    "explanation": "A parent table referenced by a Foreign Key in a child table cannot be dropped unless CASCADE CONSTRAINTS is specified in the DROP TABLE statement.",
    "hasSQL": true
  },
  {
    "id": 78,
    "module": 4,
    "question": "Which syntax turns an existing constraint on?",
    "options": [
      "ALTER TABLE table_name ENABLE CONSTRAINT constraint_name;",
      "ALTER TABLE table_name ENABLE constraint_name;",
      "ALTER TABLE table_name STATUS = ENABLE CONSTRAINT constraint_name;",
      "ALTER TABLE table_name STATUS ENABLE CONSTRAINT constraint_name;"
    ],
    "correctIndex": 0,
    "correctAnswer": "ALTER TABLE table_name ENABLE CONSTRAINT constraint_name;",
    "explanation": "To turn on an existing disabled constraint, use ALTER TABLE <table_name> ENABLE CONSTRAINT <constraint_name>;.",
    "hasSQL": true
  },
  {
    "id": 79,
    "module": 4,
    "question": "Which statement about creating constraints is true?",
    "options": [
      "Constraints can be created after the table is created.",
      "Constraint names must start with SYS_C.",
      "All constraints must be defines at the column level.",
      "Information about constraints is found in the VIEW_CONSTRAINTS dictionary view."
    ],
    "correctIndex": 0,
    "correctAnswer": "Constraints can be created after the table is created.",
    "explanation": "Constraints can be created during initial table creation (CREATE TABLE) or added later using ALTER TABLE.",
    "hasSQL": false
  },
  {
    "id": 80,
    "module": 4,
    "question": "Which constraint can be defined only at the column level?",
    "options": [
      "NOT NULL",
      "UNIQUE",
      "CHECK",
      "PRIMARY KEY"
    ],
    "correctIndex": 0,
    "correctAnswer": "NOT NULL",
    "explanation": "NOT NULL is the only constraint that must be defined strictly at the column level.",
    "hasSQL": false
  },
  {
    "id": 81,
    "module": 5,
    "question": "A data manipulation language statement _____.",
    "options": [
      "Modifies the data but not the structure of a table",
      "Completes a transaction on a table.",
      "Modifies the structure and data in a table",
      "Modifies the structure but not the data of a table"
    ],
    "correctIndex": 0,
    "correctAnswer": "Modifies the data but not the structure of a table",
    "explanation": "Data Manipulation Language (DML) statements (INSERT, UPDATE, DELETE, MERGE) modify data rows within a table without changing the database schema structure.",
    "hasSQL": false
  },
  {
    "id": 82,
    "module": 5,
    "question": "Which statement regarding DML statement functionality is true?",
    "options": [
      "UPDATE can update multiple columns in one table.",
      "DELETE can be used to delete rows or columns from a table.",
      "MERGE will delete rows that do NOT exist in either table.",
      "UPDATE will add rows to a table if an INTO clause is specified."
    ],
    "correctIndex": 0,
    "correctAnswer": "UPDATE can update multiple columns in one table.",
    "explanation": "An UPDATE statement can modify multiple column values in a single row or set of rows using comma-separated assignments in the SET clause.",
    "hasSQL": true
  },
  {
    "id": 83,
    "module": 5,
    "question": "You own a table called EMPLOYEES. What happens when you execute this DELETE statement? DELETE employees;",
    "options": [
      "The data in the EMPLOYEES table is deleted but not the structure.",
      "You get an error because of a primary key violation",
      "The data and structure of the EMPLOYEES table are deleted.",
      "You get an error because the statement is not syntactically correct."
    ],
    "correctIndex": 0,
    "correctAnswer": "The data in the EMPLOYEES table is deleted but not the structure.",
    "explanation": "Executing DELETE employees; removes all data rows from the EMPLOYEES table while retaining the table structure and column definitions.",
    "hasSQL": true
  },
  {
    "id": 84,
    "module": 5,
    "question": "Examine the structure of the EMPLOYEES table: EMPLOYEE_ID NUMBER (Primary Key), FIRST_NAME VARCHAR2(25), LAST_NAME VARCHAR2(25). Which statement fails to insert a row into the table?",
    "options": [
      "INSERT INTO employees( first_name, last_name) VALUES( 'John', 'Smith');",
      "INSERT INTO employees VALUES ( '1000', 'John', NULL);",
      "INSERT INTO employees (employee_id) VALUES (1000);",
      "INSERT INTO employees (employee_id, first_name, last_name) VALUES ( 1000, 'John', ' ');"
    ],
    "correctIndex": 0,
    "correctAnswer": "INSERT INTO employees( first_name, last_name) VALUES( 'John', 'Smith');",
    "explanation": "INSERT INTO employees(first_name, last_name) VALUES('John', 'Smith'); fails if EMPLOYEE_ID is a Primary Key (NOT NULL) column that is omitted from the column list.",
    "hasSQL": true
  },
  {
    "id": 85,
    "module": 5,
    "question": "Which is not true?",
    "options": [
      "A MERGE statement replaces the complete data of one table with that of another.",
      "A MERGE statement is used to merge the data of one table with data from another.",
      "A MERGE statement can be used to insert new rows into a table.",
      "A MERGE statement can be used to update existing rows in a table."
    ],
    "correctIndex": 0,
    "correctAnswer": "A MERGE statement replaces the complete data of one table with that of another.",
    "explanation": "A MERGE statement conditionally inserts or updates records (upsert) based on matching join criteria; it does not completely overwrite or replace an entire table.",
    "hasSQL": true
  },
  {
    "id": 86,
    "module": 5,
    "question": "With SQL, how can you insert \"Olsen\" as the \"LastName\" in the \"Persons\" table?",
    "options": [
      "INSERT INTO Persons (LastName) VALUES ('Olsen')",
      "INSERT INTO Persons ('Olsen') as LastName",
      "INSERT LastName('Olsen') INTO Persons",
      "None of the above"
    ],
    "correctIndex": 0,
    "correctAnswer": "INSERT INTO Persons (LastName) VALUES ('Olsen')",
    "explanation": "To insert a single value into a specific column, use INSERT INTO Persons (LastName) VALUES ('Olsen').",
    "hasSQL": true
  },
  {
    "id": 87,
    "module": 5,
    "question": "How can you change \"Hansen\" into \"Nilsen\" in the \"LastName\" column in the Persons table?",
    "options": [
      "UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
      "MODIFY Persons SET LastName='Hansen' INTO LastName='Nilsen",
      "UPDATE Persons SET LastName='Hansen' INTO LastName='Nilsen'",
      "MODIFY Persons SET LastName='Nilsen' WHERE LastName='Hansen'"
    ],
    "correctIndex": 0,
    "correctAnswer": "UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
    "explanation": "To update column values matching a condition, use UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'.",
    "hasSQL": true
  },
  {
    "id": 88,
    "module": 5,
    "question": "With SQL, how can you delete the records where the \"FirstName\" is \"Peter\" in the Persons Table?",
    "options": [
      "DELETE FROM Persons WHERE FirstName = 'Peter'",
      "DELETE * FROM Persons WHERE FirstName = 'Peter'",
      "DELETE FirstName FROM Persons WHERE FirstName = 'Peter'",
      "DELETE 'Peter' FROM Persons"
    ],
    "correctIndex": 0,
    "correctAnswer": "DELETE FROM Persons WHERE FirstName = 'Peter'",
    "explanation": "To delete specific rows matching a condition, use DELETE FROM Persons WHERE FirstName = 'Peter'.",
    "hasSQL": true
  },
  {
    "id": 89,
    "module": 5,
    "question": "Which of the following Insert statement will successfully insert only records of Sales Representatives from the employees table into a new table called Sales_rep?",
    "options": [
      "INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT employee_id, last_name, salary, commission_pct FROM employees WHERE job_id = 'SA_REP';",
      "INSERT INTO sales_reps(id, name, salary, commission_pct) VALUES SELECT employee_id, last_name, salary, commission_pct FROM employees WHERE job_id = 'SA_REP';",
      "INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT employee_id, last_name, salary, commission_pct FROM employees;",
      "INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT last_name, employee_id, salary, commission_pct FROM employees WHERE job_id = 'SA_REP';"
    ],
    "correctIndex": 0,
    "correctAnswer": "INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT employee_id, last_name, salary, commission_pct FROM employees WHERE job_id = 'SA_REP';",
    "explanation": "To copy filtered rows from one table to another, use INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT employee_id, last_name, salary, commission_pct FROM employees WHERE job_id = 'SA_REP';.",
    "hasSQL": true
  },
  {
    "id": 90,
    "module": 5,
    "question": "Which of the following is not a valid usage of a Merge statement?",
    "options": [
      "Insert as well as update each row in a table.",
      "Conditionally update or insert data into a database table",
      "Perform an UPDATE if the row exists, and an INSERT if it is a new row",
      "Increase performance and ease of use"
    ],
    "correctIndex": 0,
    "correctAnswer": "Insert as well as update each row in a table.",
    "explanation": "MERGE performs conditional updates or inserts on target rows matching specific join conditions; it does not unconditionally update and insert every row.",
    "hasSQL": true
  },
  {
    "id": 91,
    "module": 5,
    "question": "What will be the output of following statement? UPDATE employees a SET job_id = (SELECT job_id FROM new_employees b WHERE a.employee_id = b.employee_id); Assume that Employee and New_employees tables have same structure.",
    "options": [
      "This statement will update job_id for all records of employees as: Match found in New_employees table use job_id from New_employees table no match found in New_employees table update job_id as NULL.",
      "This statement will return error",
      "This statement will update only those records of Employees table which have matching employee_id in the New_employees table.",
      "This statement will update job_id for all records of employees table but for records that do not have matching employee_id in the New_employees table the existing job_id will be retained."
    ],
    "correctIndex": 0,
    "correctAnswer": "This statement will update job_id for all records of employees as: Match found in New_employees table use job_id from New_employees table no match found in New_employees table update job_id as NULL.",
    "explanation": "A correlated subquery in an UPDATE SET clause that returns NULL for non-matching rows will update the target column to NULL for those non-matching rows.",
    "hasSQL": true
  },
  {
    "id": 92,
    "module": 5,
    "question": "Which of the following is not a DML statement?",
    "options": [
      "COMMIT",
      "MERGE",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "correctAnswer": "COMMIT",
    "explanation": "COMMIT is a Transaction Control Language (TCL) statement, not a Data Manipulation Language (DML) statement.",
    "hasSQL": true
  },
  {
    "id": 93,
    "module": 5,
    "question": "What will be the output of following statement? INSERT INTO departments (department_id, department_name, manager_id) VALUES (300, 'Engineering', DEFAULT);",
    "options": [
      "This will insert one record in Employees table with values (300, 'Engineering') for the (department_id, department_name) respectively.",
      "This will insert one record in Employees table with values (300, 'Engineering', DEFAULT) for the (department_id, department_name, manager_id) respectively",
      "This will insert one record in Employees table with values (300, 'Engineering') for the (department_id, department_name) respectively manager_id will be NULL as DEFAULT is not a valid value.",
      "This will return Error as DEFAULT is not allowed in the INSERT"
    ],
    "correctIndex": 0,
    "correctAnswer": "This will insert one record in Employees table with values (300, 'Engineering') for the (department_id, department_name) respectively.",
    "explanation": "Specifying DEFAULT in an INSERT statement inserts the default column value defined in the table schema (or NULL if no default was declared).",
    "hasSQL": true
  },
  {
    "id": 94,
    "module": 5,
    "question": "You maintain two tables, CUSTOMER and PROSPECT, that have identical structures but different data. You want to synchronize these two tables by inserting records from the PROSPECT table into the CUSTOMER table, if they do not exist. If the customer already exists in the CUSTOMER table, you want to update customer data. Which DML statement should you use to perform this task?",
    "options": [
      "MERGE",
      "INSERT",
      "UPDATE",
      "You CANNOT perform this task with one DML operation."
    ],
    "correctIndex": 0,
    "correctAnswer": "MERGE",
    "explanation": "The MERGE statement is specifically designed to perform upsert operations (inserting non-existent records and updating existing ones) in a single DML operation.",
    "hasSQL": true
  },
  {
    "id": 95,
    "module": 5,
    "question": "You added a PHONE-NUMBER column of NUMBER data type to an existing EMPLOYEES table. The EMPLOYEES table already contains records of 100 employees. Now, you want to enter the phone numbers of each of the 100 employees into the table. Some of the employees may not have a phone number available. Which data manipulation operation do you perform?",
    "options": [
      "PDATE",
      "MERGE",
      "INSERT",
      "ADD"
    ],
    "correctIndex": 0,
    "correctAnswer": "PDATE",
    "explanation": "Updating existing rows with newly collected data values requires the UPDATE statement.",
    "hasSQL": true
  },
  {
    "id": 96,
    "module": 5,
    "question": "Evaluate this DELETE statement: DELETE employee_id, salary, job_id FROM employees WHERE dept_id = 90; Why does the DELETE statement fail when you execute it?",
    "options": [
      "You cannot specify column names in the DELETE clause of the DELETE statement.",
      "There is no row with dept_id 90 in the EMPLOYEES table.",
      "You cannot delete the JOB_ID column because it is a NOT NULL column.",
      "You cannot delete the EMPLOYEE_ID column because it is the primary key of the table."
    ],
    "correctIndex": 0,
    "correctAnswer": "You cannot specify column names in the DELETE clause of the DELETE statement.",
    "explanation": "You cannot list individual column names in a DELETE statement clause; DELETE operates on entire rows.",
    "hasSQL": true
  },
  {
    "id": 97,
    "module": 5,
    "question": "Examine the structure of the EMPLOYEES table: EMPLOYEE_ID NUMBER (Primary Key), FIRST_NAME VARCHAR2(25), LAST_NAME VARCHAR2(25). Which statement inserts a row into the table?",
    "options": [
      "INSERT INTO employees VALUES ('1000','John',NULL);",
      "INSERT INTO employees VALUES ( NULL, 'John','Smith');",
      "INSERT INTO employees( first_name, last_name) VALUES('John','Smith');",
      "INSERT INTO employees(first_name,last_name, employee_id) VALUES ( 1000, 'John','Smith');"
    ],
    "correctIndex": 0,
    "correctAnswer": "INSERT INTO employees VALUES ('1000','John',NULL);",
    "explanation": "INSERT INTO employees VALUES ('1000', 'John', NULL); provides values for all columns in sequence, satisfying primary key constraints.",
    "hasSQL": true
  },
  {
    "id": 98,
    "module": 5,
    "question": "Examine the data from the CLASS and INSTRUCTOR tables. You want to delete the classes that do NOT have an instructor assigned. Which DELETE statement will accomplish the desired result?",
    "options": [
      "DELETE FROM class WHERE instructor_id IS NULL;",
      "DELETE class_id, class_name, hours_credit, instructor_id FROM class WHERE instructor_id IS NULL;",
      "DELETE FROM class WHERE instructor_id NOT IN(SELECT instructor_id FROM class);",
      "DELETE FROM instructor NATURAL JOIN class WHERE instructor_id IS NOT NULL;"
    ],
    "correctIndex": 0,
    "correctAnswer": "DELETE FROM class WHERE instructor_id IS NULL;",
    "explanation": "To remove rows where a foreign key or attribute is missing, use DELETE FROM class WHERE instructor_id IS NULL;.",
    "hasSQL": true
  },
  {
    "id": 99,
    "module": 5,
    "question": "The PRODUCT table contains these columns: PRODUCT_ID NUMBER, PRODUCT_NAME VARCHAR2(25), SUPPLIER_ID NUMBER, LIST_PRICE NUMBER(7,2), COST NUMBER(7,2). You need to increase the list price and cost of all products supplied by Global Imports, Inc. by 5.5 percent. The SUPPLIER_ID for Global Imports, Inc. is 105. Which statement should you use?",
    "options": [
      "UPDATE product SET list_price = list_price * 1.055, cost = cost * 1.055 WHERE supplier_id = 105;",
      "UPDATE product SET list_price = list_price * 1.055 SET cost = cost * 1.055 WHERE supplier_id = 105;",
      "UPDATE product",
      "UPDATE product SET list_price = list_price + (list_price * .055), cost = cost + (cost * .055) WHERE supplier_id LIKE 'Global Imports, Inc.' OR supplier_id = 105;"
    ],
    "correctIndex": 0,
    "correctAnswer": "UPDATE product SET list_price = list_price * 1.055, cost = cost * 1.055 WHERE supplier_id = 105;",
    "explanation": "To update multiple columns simultaneously, separate assignments with commas in the SET clause: UPDATE product SET list_price = list_price * 1.055, cost = cost * 1.055 WHERE supplier_id = 105;.",
    "hasSQL": true
  },
  {
    "id": 100,
    "module": 5,
    "question": "Examine the MERGE statement: MERGE INTO event e USING (SELECT * FROM new_event WHERE event_type_id = 4) n ON (e.event_id = n.event_id) WHEN MATCHED THEN UPDATE SET e.event_type_id = n.event_type_id, e.start_dt = n.start_dt WHEN NOT MATCHED THEN INSERT (event_id, event_name, event_type_id) VALUES (n.event_id, n.event_name, n.event_type_id); This MERGE statement generates an error. Which statement describes the cause of the error?",
    "options": [
      "The UPDATE portion of the statement is invalid.",
      "A subquery CANNOT be used in the USING clause of a MERGE statement.",
      "Table aliases CANNOT be used in a MERGE statement.",
      "The ON clause of the statement is invalid."
    ],
    "correctIndex": 0,
    "correctAnswer": "The UPDATE portion of the statement is invalid.",
    "explanation": "In a MERGE statement, updating columns that are used in the ON join condition clause is illegal and causes an error.",
    "hasSQL": true
  },
  {
    "id": 101,
    "module": 6,
    "question": "You want to use a function in your column clause of a SQL statement. The NVL function accomplishes which of the following tasks?",
    "options": [
      "Enables you to specify alternated out for NULL column values.",
      "Assists in the distribution of output across multiple columns.",
      "Enables you to specify alternate output for non-NULL column values.",
      "Nullifies the value of the column output."
    ],
    "correctIndex": 0,
    "correctAnswer": "Enables you to specify alternated out for NULL column values.",
    "explanation": "The NVL(expr1, expr2) function replaces a NULL value in expr1 with the alternative value specified in expr2.",
    "hasSQL": false
  },
  {
    "id": 102,
    "module": 6,
    "question": "Which SELECT statement will show the result 'elloworld' from the string 'HelloWorld'?",
    "options": [
      "SELECT LOWER (TRIM ('H' FROM 'HelloWorld')) FROM dual;",
      "SELECT SUBSTR ('HelloWorld', 1) FROM dual;",
      "SELECT INITCAP (TRIM ('HelloWorld', 1, 1)) FROM dual;",
      "SELECT LOWER (SUBSTR ('HelloWorld', 1, 1) FROM dual;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT LOWER (TRIM ('H' FROM 'HelloWorld')) FROM dual;",
    "explanation": "TRIM('H' FROM 'HelloWorld') produces 'elloWorld'. Applying LOWER() turns it into 'elloworld'.",
    "hasSQL": true
  },
  {
    "id": 103,
    "module": 6,
    "question": "Which script displays '01-JAN-02' when the ENROLL_DATE value is '01-JUL-01'?",
    "options": [
      "SELECT ROUND (enroll_date, 'YEAR') FROM student;",
      "SELECT ROUND (enroll_date, 'DAY') FROM student;",
      "SELECT ROUND (enroll_date, 'MONTH') FROM student;",
      "SELECT ROUND (TO_CHAR(enroll_date, 'YYYY')) FROM student;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT ROUND (enroll_date, 'YEAR') FROM student;",
    "explanation": "ROUND(date, 'YEAR') rounds a date to the nearest first day of the year (Jan 1). '01-JUL-01' rounds up to '01-JAN-02'.",
    "hasSQL": true
  },
  {
    "id": 104,
    "module": 6,
    "question": "Which function can be used in your query on department table to restrict the data displayed to only those department names containing 3 characters?",
    "options": [
      "LENGTH",
      "REPLACE",
      "SUBSTR",
      "RPAD"
    ],
    "correctIndex": 0,
    "correctAnswer": "LENGTH",
    "explanation": "The LENGTH function returns the character length of a string, which can be used in a WHERE clause like WHERE LENGTH(dept_name) = 3.",
    "hasSQL": false
  },
  {
    "id": 105,
    "module": 6,
    "question": "Which statement concerning SQL functions is true?",
    "options": [
      "Character functions can return character or number values.",
      "Conversion functions convert a column definition from one data type to another data type.",
      "Single-row functions can only be used in SELECT and WHERE clauses.",
      "All date functions return DATE data type values."
    ],
    "correctIndex": 0,
    "correctAnswer": "Character functions can return character or number values.",
    "explanation": "Single-row character functions can accept character inputs and return either character strings (e.g., SUBSTR) or numbers (e.g., LENGTH, INSTR).",
    "hasSQL": true
  },
  {
    "id": 106,
    "module": 6,
    "question": "Evaluate the SQL statement: SELECT ROUND(45.953, -1), TRUNC(45.936, 2) FROM dual; Which values are displayed?",
    "options": [
      "50 and 45.93",
      "46 and 45",
      "46 and 45.93",
      "50 and 45.9"
    ],
    "correctIndex": 0,
    "correctAnswer": "50 and 45.93",
    "explanation": "ROUND(45.953, -1) rounds to the nearest ten (50). TRUNC(45.936, 2) truncates to 2 decimal places without rounding (45.93).",
    "hasSQL": true
  },
  {
    "id": 107,
    "module": 6,
    "question": "Which of the following is not a number function?",
    "options": [
      "TO_NUMBER.",
      "TRUNC",
      "SQRT",
      "ROUND"
    ],
    "correctIndex": 0,
    "correctAnswer": "TO_NUMBER.",
    "explanation": "TO_NUMBER is a data type conversion function that converts character strings to numbers, whereas ROUND, TRUNC, and SQRT are numeric functions.",
    "hasSQL": false
  },
  {
    "id": 108,
    "module": 6,
    "question": "You are using single row function in a SELECT statement which function can best be categorized as similar in function to an IF-THEN-ELSE statement?",
    "options": [
      "DECODE",
      "SQRT",
      "NEW_TIME",
      "ROWIDTOCHAR."
    ],
    "correctIndex": 0,
    "correctAnswer": "DECODE",
    "explanation": "The DECODE function evaluates expressions in a conditional IF-THEN-ELSE manner within Oracle SQL.",
    "hasSQL": true
  },
  {
    "id": 109,
    "module": 6,
    "question": "Which is not an attributes of single row functions?",
    "options": [
      "cannot be nested",
      "manipulate data items",
      "act on each row returned",
      "return one result per row"
    ],
    "correctIndex": 0,
    "correctAnswer": "cannot be nested",
    "explanation": "Single-row functions can be nested to any depth (e.g., LOWER(SUBSTR(col, 1, 3))). Thus, 'cannot be nested' is not a valid attribute.",
    "hasSQL": false
  },
  {
    "id": 110,
    "module": 6,
    "question": "Which SQL statement returns a numeric value?",
    "options": [
      "SELECT sysdate-hire_date FROM EMP;",
      "SELECT ADD_MONTHS(MAX(hire_Date), 6) FROM EMP;",
      "SELECT ROUND(hire_date) FROM EMP;",
      "SELECT TO_NUMBER(hire_date + 7) FROM EMP;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT sysdate-hire_date FROM EMP;",
    "explanation": "Subtracting two DATE values in Oracle (sysdate - hire_date) returns the numeric difference representing the number of days between the dates.",
    "hasSQL": true
  },
  {
    "id": 111,
    "module": 6,
    "question": "Which is not a type of Single Row functions available in SQL?",
    "options": [
      "calendar",
      "string",
      "character",
      "Numeric"
    ],
    "correctIndex": 0,
    "correctAnswer": "calendar",
    "explanation": "'calendar' is not a valid classification of single-row functions in SQL; standard categories include Character, Number, Date, Conversion, and General functions.",
    "hasSQL": false
  },
  {
    "id": 112,
    "module": 6,
    "question": "Management has asked you to calculate the value 12salarycommission_pct for all the employees in the EMP table. The EMP table contains these columns: LAST_NAME VARCHAR2(35) NOT NULL, SALARY NUMBER(9,2) NOT NULL, COMMISSION_PCT NUMBER(4,2). Which statement ensures that a value is displayed in the calculated columns for all employees?",
    "options": [
      "SELECT last_name, 12salary(nvl(commission_pct,0)) FROM emp;",
      "SELECT last_name, 12salarycommison_pct FROM emp;",
      "SELECT last_name, 12salary (commission_pct,0) FROM emp;",
      "SELECT last_name, 12salary(decode(commission_pct,0)) FROM emp;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT last_name, 12salary(nvl(commission_pct,0)) FROM emp;",
    "explanation": "To handle NULL commission rates when calculating 12salarycommission_pct, wrap commission_pct in NVL(commission_pct, 0) to convert NULLs to 0.",
    "hasSQL": true
  },
  {
    "id": 113,
    "module": 6,
    "question": "Evaluate the SQL statement: SELECT LPAD(salary, 10, ) FROM EMP WHERE EMP_ID = 1001; If the employee with the EMP_ID 1001 has a salary of 17000, what is displayed?",
    "options": [
      "An error statement",
      "17000.00",
      "17000*****",
      "*****17000"
    ],
    "correctIndex": 0,
    "correctAnswer": "An error statement",
    "explanation": "In LPAD(salary, 10, ), passing '' without single quotes causes a SQL syntax syntax error because string literals must be quoted.",
    "hasSQL": true
  },
  {
    "id": 114,
    "module": 6,
    "question": "The EMPLOYEE table has these columns: LAST_NAME VARCHAR2(35), SALARY NUMBER(8,2), COMMISSION_PCT NUMBER(5,2). You want to display the name and annual salary multiplied by the commission_pct for all employees. For records that have a NULL commission_pct, a zero must be displayed against the calculated column. Which SQL statement displays the desired results?",
    "options": [
      "SELECT last_name, (salary * 12) * NVL(commission_pct, 0) FROM EMPLOYEES;",
      "SELECT last_name, (salary * 12) * commission_pct FROM EMPLOYEES;",
      "SELECT last_name, (salary * 12) * IFNULL(commission_pct,0) FROM EMPLOYEES;",
      "SELECT last_name, (salary * 12) * NVL2(commission_pct, 0) FROM EMPLOYEES;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT last_name, (salary * 12) * NVL(commission_pct, 0) FROM EMPLOYEES;",
    "explanation": "To display 0 instead of NULL when multiplying salary by commission_pct, use (salary * 12) * NVL(commission_pct, 0).",
    "hasSQL": true
  },
  {
    "id": 115,
    "module": 6,
    "question": "You would like to display the system date in the format \"Monday, 01 June, 2001\". Which SELECT statement should you use?",
    "options": [
      "SELECT TO_CHAR(SYSDATE, 'FMDay, DD Month, YYYY') FROM dual;",
      "SELECT TO_DATE(SYSDATE, 'FMDAY, DD Month, YYYY') FROM dual;",
      "SELECT TO_CHAR(SYSDATE, 'FMDD, DY Month, 'YYY') FROM dual;",
      "SELECT TO_CHAR(SYSDATE, 'FMDY, DDD Month, YYYY') FROM dual;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT TO_CHAR(SYSDATE, 'FMDay, DD Month, YYYY') FROM dual;",
    "explanation": "TO_CHAR(SYSDATE, 'FMDay, DD Month, YYYY') uses the 'FM' (Fill Mode) modifier to strip leading/trailing spaces from day and month names.",
    "hasSQL": true
  },
  {
    "id": 116,
    "module": 6,
    "question": "Evaluate the SQL statement: SELECT ROUND(TRUNC(MOD(1600, 10), -1), 2) FROM dual; What will be displayed?",
    "options": [
      "0",
      "1",
      "0.00",
      "An error statement"
    ],
    "correctIndex": 0,
    "correctAnswer": "0",
    "explanation": "MOD(1600, 10) evaluates to 0. TRUNC(0, -1) is 0, and ROUND(0, 2) evaluates to 0.",
    "hasSQL": true
  },
  {
    "id": 117,
    "module": 6,
    "question": "Which SELECT statement will not display 2000 in the format '$2,000.00'",
    "options": [
      "SELECT TO_CHAR (2000, '$2,000.00') FROM dual;",
      "SELECT TO_CHAR (2000, '$0,000.00') FROM dual;",
      "SELECT TO_CHAR (2000, '$9,999.00') FROM dual;",
      "SELECT TO_CHAR (2000, '$9,999.99') FROM dual;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT TO_CHAR (2000, '$2,000.00') FROM dual;",
    "explanation": "TO_CHAR(2000, '$2,000.00') is invalid because '2' is not a valid numeric format model character (valid digit placeholders are 9 or 0).",
    "hasSQL": true
  },
  {
    "id": 118,
    "module": 6,
    "question": "Which statement is incorrect about functions that are available in SQL?",
    "options": [
      "NVL2 returns the first non-null expression in the expression list.",
      "DECODE translates an expression after comparing it to each search value.",
      "TRIM trims the heading of trailing characters (or both) from a character string.",
      "NULLIF compares two expressions and returns null if they are equal, or the first expression if they are not equal"
    ],
    "correctIndex": 0,
    "correctAnswer": "NVL2 returns the first non-null expression in the expression list.",
    "explanation": "NVL2(expr1, expr2, expr3) returns expr2 if expr1 is NOT NULL, and expr3 if expr1 IS NULL. Returning the first non-null expression is COALESCE's behavior.",
    "hasSQL": true
  },
  {
    "id": 119,
    "module": 6,
    "question": "Which is a character manipulation function?",
    "options": [
      "TRIM",
      "TRUNC",
      "TO_DATE",
      "MOD"
    ],
    "correctIndex": 0,
    "correctAnswer": "TRIM",
    "explanation": "TRIM is a character manipulation function that strips characters from string boundaries. TRUNC and MOD are numeric, and TO_DATE is conversion.",
    "hasSQL": false
  },
  {
    "id": 120,
    "module": 6,
    "question": "Which task can you perform by using the TO_CHAR function?",
    "options": [
      "Convert '10' to '10'",
      "Convert 10 to 'TEN'",
      "Convert '10' to 10",
      "Convert 'TEN' to 10"
    ],
    "correctIndex": 0,
    "correctAnswer": "Convert '10' to '10'",
    "explanation": "TO_CHAR converts numeric or date data into a character string, such as converting the number 10 into the string literal '10'.",
    "hasSQL": false
  },
  {
    "id": 121,
    "module": 7,
    "question": "Which statement is true about WHERE and HAVING clauses?",
    "options": [
      "A HAVING clause can be used to restrict groups only.",
      "A WHERE clause can be used to restrict groups only.",
      "A WHERE clause can be used to restrict both rows and groups.",
      "A HAVING clause can be used to restrict both rows and groups."
    ],
    "correctIndex": 3,
    "correctAnswer": "A HAVING clause can be used to restrict both rows and groups.",
    "explanation": "The HAVING clause can restrict individual row groups produced by GROUP BY, as well as rows when used without GROUP BY.",
    "hasSQL": true
  },
  {
    "id": 122,
    "module": 7,
    "question": "Examine the description of the EMPLOYEES table: EMP_ID NUMBER(4), LAST_NAME VARCHAR2(30), FIRST_NAME VARCHAR2(30), DEPT_ID NUMBER(2). Which statement produces the number of different departments that have employees with last name Smith?",
    "options": [
      "SELECT DISTINCT(COUNT(dept_id)) FROM employees WHERE last_name='Smith';",
      "SELECT COUNT(*) FROM employees WHERE last_name='Smith';",
      "SELECT COUNT(DISTINCT dept_id) FROM employees WHERE last_name='Smith';",
      "SELECT COUNT (dept_id) FROM employees WHERE last_name='Smith';"
    ],
    "correctIndex": 2,
    "correctAnswer": "SELECT COUNT(DISTINCT dept_id) FROM employees WHERE last_name='Smith';",
    "explanation": "To count the unique number of departments containing employees named Smith, use COUNT(DISTINCT dept_id) in the SELECT list.",
    "hasSQL": true
  },
  {
    "id": 123,
    "module": 7,
    "question": "What is true of using group functions on columns that contain NULL values?",
    "options": [
      "Group functions on columns returning dates include NULL values.",
      "Group functions on columns ignore NULL values.",
      "Group functions on columns cannot be accurately used on columns that contain NULL values.",
      "Group functions on columns returning numbers include NULL values."
    ],
    "correctIndex": 1,
    "correctAnswer": "Group functions on columns ignore NULL values.",
    "explanation": "Group (aggregate) functions automatically ignore NULL values when performing calculations across row sets (except COUNT(*)).",
    "hasSQL": false
  },
  {
    "id": 124,
    "module": 7,
    "question": "The STUDENT_GRADES table has these columns: STUDENT_ID NUMBER(12), SEMESTER_END DATE, GPA NUMBER(4,3). Which statement finds the highest grade point average (GPA) per semester?",
    "options": [
      "SELECT MAX(gpa) FROM student_grades WHERE gpa IS NOT NULL GROUP BY semester_end;",
      "SELECT (gpa) FROM student_grades GROUP BY semester_end WHERE gpa IS NOT NULL",
      "SELECT MAX(gpa) FROM student_grades WHERE gpa IS NOT NULL",
      "SELECT MAX(gpa) GROUP BY semester_end WHERE gpa IS NOT NULL FROM student_grades"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT MAX(gpa) FROM student_grades WHERE gpa IS NOT NULL GROUP BY semester_end;",
    "explanation": "To calculate the maximum GPA for each semester, use SELECT MAX(gpa) FROM student_grades WHERE gpa IS NOT NULL GROUP BY semester_end;.",
    "hasSQL": true
  },
  {
    "id": 125,
    "module": 7,
    "question": "Which of the following data types are compatible for applying the group functions such as MIN, MAX ?",
    "options": [
      "Numeric",
      "Date",
      "All of the above",
      "Character"
    ],
    "correctIndex": 2,
    "correctAnswer": "All of the above",
    "explanation": "MIN and MAX aggregate functions operate on Numeric, Date, and Character data types (using alphabetical ASCII ordering for strings).",
    "hasSQL": false
  },
  {
    "id": 126,
    "module": 7,
    "question": "Which of the following is not a valid variation of the COUNT function ?",
    "options": [
      "COUNT(*)",
      "COUNT(expr1, expr2)",
      "COUNT(DISTINCT expr)",
      "COUNT(expr)"
    ],
    "correctIndex": 1,
    "correctAnswer": "COUNT(expr1, expr2)",
    "explanation": "COUNT accepts COUNT(*), COUNT(expr), or COUNT(DISTINCT expr). COUNT(expr1, expr2) with multiple parameters is invalid syntax.",
    "hasSQL": false
  },
  {
    "id": 127,
    "module": 7,
    "question": "Which of the following statements calculates the Average commission percentage from the employees table by treating the NULLs as zeros wherever the commission percentage is NULL ?",
    "options": [
      "SELECT AVG(NVL(commission_pct, 0)) FROM employees",
      "SELECT NULLIF(AVG(commission_pct), 0) FROM employees",
      "SELECT AVG(NULLIF(commission_pct, 0)) FROM employees",
      "SELECT NVL(AVG(commission_pct), 0) FROM employees"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT AVG(NVL(commission_pct, 0)) FROM employees",
    "explanation": "To include NULL commission percentages as 0 in an average calculation, use AVG(NVL(commission_pct, 0)).",
    "hasSQL": true
  },
  {
    "id": 128,
    "module": 7,
    "question": "Which of the following statements will return error?",
    "options": [
      "SELECT AVG(salary) FROM employees GROUP BY department_id",
      "SELECT department_id, AVG(salary) FROM employees GROUP BY department_id",
      "SELECT job_id, AVG(salary) FROM employees GROUP BY department_id",
      "SELECT AVG(salary), job_id FROM employees GROUP BY department_id, job_id"
    ],
    "correctIndex": 2,
    "correctAnswer": "SELECT job_id, AVG(salary) FROM employees GROUP BY department_id",
    "explanation": "SELECT job_id, AVG(salary) FROM employees GROUP BY department_id; fails because 'job_id' is an unaggregated column missing from GROUP BY.",
    "hasSQL": true
  },
  {
    "id": 129,
    "module": 7,
    "question": "Which of the following statements is not correct?",
    "options": [
      "You cannot use the WHERE clause to restrict groups",
      "You can use group functions in the WHERE clause",
      "You cannot use group functions in the WHERE clause",
      "You use the HAVING clause to restrict groups"
    ],
    "correctIndex": 1,
    "correctAnswer": "You can use group functions in the WHERE clause",
    "explanation": "Group functions cannot be placed directly in the WHERE clause; group filtering must be performed in the HAVING clause.",
    "hasSQL": true
  },
  {
    "id": 130,
    "module": 7,
    "question": "Which of the following statements displays the number of distinct department values in the EMPLOYEES table",
    "options": [
      "SELECT COUNT(department_id) FROM employees",
      "SELECT DISTINCT COUNT(department_id) FROM employees",
      "SELECT COUNT(DISTINCT department_id) FROM employees",
      "SELECT DISTINCT department_id FROM employees;"
    ],
    "correctIndex": 2,
    "correctAnswer": "SELECT COUNT(DISTINCT department_id) FROM employees",
    "explanation": "To display the count of unique departments, use SELECT COUNT(DISTINCT department_id) FROM employees.",
    "hasSQL": true
  },
  {
    "id": 131,
    "module": 7,
    "question": "What will be the output of the following statement? SELECT department_id, AVG(salary) FROM employees WHERE AVG(salary) > 8000 GROUP BY department_id;",
    "options": [
      "The statement will display the list of department ids and average salary of the employees table where average",
      "The statement will display a list of departments and average salary of each department",
      "The statement will display a list departments and average salary of each department only for departments whose average salary is greater than 8000",
      "The statement will return an error"
    ],
    "correctIndex": 3,
    "correctAnswer": "The statement will return an error",
    "explanation": "Using WHERE AVG(salary) > 8000 causes a SQL syntax error because aggregate functions cannot appear in a WHERE clause.",
    "hasSQL": true
  },
  {
    "id": 132,
    "module": 7,
    "question": "Examine the description of the STUDENTS table: STD_ID NUMBER(4), COURSE_ID VARCHAR2(10), START_DATE DATE, END_DATE DATE. Which of the aggregate functions is valid on the START_DATE column?",
    "options": [
      "MIN(start_date)",
      "AVG(start_date)",
      "MAXIMUM(start_date)",
      "SUM(start_date)"
    ],
    "correctIndex": 0,
    "correctAnswer": "MIN(start_date)",
    "explanation": "MIN(start_date) is valid because MIN operates on DATE columns to find the earliest chronological date.",
    "hasSQL": false
  },
  {
    "id": 133,
    "module": 7,
    "question": "What is True about the below statement? SELECT MAX(AVG(salary)) FROM employees GROUP BY department_id;",
    "options": [
      "It will return an error as Group functions can not be nested",
      "It will return Maximum average salary for each department",
      "It will return error because Salary is not included in the group by clause",
      "It will display the maximum of the average salaries for each department"
    ],
    "correctIndex": 3,
    "correctAnswer": "It will display the maximum of the average salaries for each department",
    "explanation": "Nesting aggregate functions like MAX(AVG(salary)) evaluates the maximum of department salary averages across all groups.",
    "hasSQL": true
  },
  {
    "id": 134,
    "module": 7,
    "question": "Examine the description of the MARKS table: STD_ID NUMBER(4), STUDENT_NAME VARCHAR2(30), SUBJ1 NUMBER(3), SUBJ2 NUMBER(3). Examine this SELECT statement: SELECT subj1+subj2 total_marks, std_id FROM marks WHERE subj1 > AVG(subj1) AND subj2 > AVG(subj2) ORDER BY total marks; What is the result of the SELECT statement?",
    "options": [
      "The statement returns an error at the WHERE clause.",
      "The statement executes successfully and returns the student ID and sum of all marks for each student who obtained more than the average mark in each subject.",
      "The statement returns an error at the SELECT clause.",
      "The statement returns an error at the ORDER BY clause."
    ],
    "correctIndex": 0,
    "correctAnswer": "The statement returns an error at the WHERE clause.",
    "explanation": "Using WHERE subj1 > AVG(subj1) fails because group functions cannot be evaluated inside a WHERE clause.",
    "hasSQL": true
  },
  {
    "id": 135,
    "module": 7,
    "question": "Which statement is true about aggregate functions?",
    "options": [
      "You can mix single row columns with aggregate functions in the column list of a SELECT statement by grouping on the single row columns.",
      "You can use aggregate functions only in the column list of the SELECT clause and in the WHERE clause of a SELECT statement.",
      "You can use aggregate functions on a table, only by grouping the whole table as one single group.",
      "You can use aggregate functions in any clause of a SELECT statement."
    ],
    "correctIndex": 0,
    "correctAnswer": "You can mix single row columns with aggregate functions in the column list of a SELECT statement by grouping on the single row columns.",
    "explanation": "Individual non-aggregated columns can be included alongside group functions provided all non-aggregated columns are listed in GROUP BY.",
    "hasSQL": true
  },
  {
    "id": 136,
    "module": 7,
    "question": "Which clause should you use to exclude group results?",
    "options": [
      "HAVING",
      "RESTRICT",
      "WHERE",
      "GROUP BY"
    ],
    "correctIndex": 0,
    "correctAnswer": "HAVING",
    "explanation": "The HAVING clause is used to filter out or exclude aggregated group results based on group conditions.",
    "hasSQL": true
  },
  {
    "id": 137,
    "module": 7,
    "question": "In a SELECT statement that includes a WHERE clause, where should the GROUP BY clause placed?",
    "options": [
      "Before the WHERE clause",
      "After the ORDER BY clause",
      "Immediately after the SELECT clause",
      "After the WHERE clause"
    ],
    "correctIndex": 3,
    "correctAnswer": "After the WHERE clause",
    "explanation": "In a standard SQL SELECT statement, the GROUP BY clause must be placed immediately after the WHERE clause.",
    "hasSQL": true
  },
  {
    "id": 138,
    "module": 7,
    "question": "The EVENT table contains these columns: EVENT_ID NUMBER, EVENT_NAME VARCHAR2(30), EVENT_DESC VARCHAR2(100), EVENT_TYPE NUMBER, LOCATION_ID NUMBER. You have been asked to provide a report of the number of different event types at each location. Which SELECT statement will produce the desired result?",
    "options": [
      "SELECT COUNT(*), DISTINCT(location_id) FROM event;",
      "SELECT location_id, COUNT(DISTINCT event_type) FROM event GROUP BY location_id;",
      "SELECT DISTINCT (event_type) FROM event GROUP BY location_id;",
      "SELECT UNIQUE(location_id), COUNT(event_type) FROM event GROUP BY location_id;"
    ],
    "correctIndex": 1,
    "correctAnswer": "SELECT location_id, COUNT(DISTINCT event_type) FROM event GROUP BY location_id;",
    "explanation": "To count unique event types per location, use SELECT location_id, COUNT(DISTINCT event_type) FROM event GROUP BY location_id;.",
    "hasSQL": true
  },
  {
    "id": 139,
    "module": 7,
    "question": "Which statement about the evaluation of clauses in a SELECT statement is true?",
    "options": [
      "The Oracle Server will evaluate an ORDER BY clause before a WHERE clause.",
      "The Oracle Server will evaluate a WHERE clause before a GROUP BY clause.",
      "The Oracle Server will evaluate an ORDER BY clause before a HAVING clause.",
      "The Oracle Server will evaluate a HAVING clause before a WHERE clause"
    ],
    "correctIndex": 1,
    "correctAnswer": "The Oracle Server will evaluate a WHERE clause before a GROUP BY clause.",
    "explanation": "Oracle SQL execution order evaluates WHERE clause row filters before applying GROUP BY grouping operations.",
    "hasSQL": true
  },
  {
    "id": 140,
    "module": 7,
    "question": "You need to calculate the total of all salaries in the accounting department. Which group function should you use?",
    "options": [
      "COUNT",
      "MAX",
      "MIN",
      "SUM"
    ],
    "correctIndex": 3,
    "correctAnswer": "SUM",
    "explanation": "The SUM aggregate function calculates the cumulative total of numeric column values.",
    "hasSQL": false
  },
  {
    "id": 141,
    "module": 8,
    "question": "In which case would you use a FULL OUTER JOIN?",
    "options": [
      "You want all unmatched data from one table.",
      "You want all unmatched data from both tables.",
      "Both tables have NULL values.",
      "You want all matched data from both tables."
    ],
    "correctIndex": 1,
    "correctAnswer": "You want all unmatched data from both tables.",
    "explanation": "FULL OUTER JOIN returns all matched rows plus all unmatched rows from both the left and right participating tables.",
    "hasSQL": true
  },
  {
    "id": 142,
    "module": 8,
    "question": "What will be the output of the following query? SELECT * FROM employees, departments;",
    "options": [
      "It will display rows from employees table followed by rows from departments table.",
      "It will by default the join two tables on department_id because it is a referential integrity column.",
      "It will result in a Cartesian product as a joining condition is not specified",
      "It will return error as a join condition is not specified"
    ],
    "correctIndex": 2,
    "correctAnswer": "It will result in a Cartesian product as a joining condition is not specified",
    "explanation": "Omitting join conditions when querying multiple tables produces a Cartesian Product (cross join) combining every row of table 1 with table 2.",
    "hasSQL": true
  },
  {
    "id": 143,
    "module": 8,
    "question": "Which of the following queries will produce identical output as the query below? SELECT last_name, department_name FROM employees CROSS JOIN departments;",
    "options": [
      "SELECT last_name, department_name FROM employees e, departments d WHERE e.depatment_id (+) = d.department_id (+);",
      "SELECT last_name, department_name FROM employees JOIN departments USING (department_id)",
      "SELECT last_name, department_name FROM employees e, departments d WHERE e.depatment_id = d.department_id;",
      "SELECT last_name, department_name FROM employees e, departments d;"
    ],
    "correctIndex": 3,
    "correctAnswer": "SELECT last_name, department_name FROM employees e, departments d;",
    "explanation": "CROSS JOIN produces a Cartesian product, which is identical to listing tables in the FROM clause without a WHERE clause: SELECT ... FROM employees e, departments d;.",
    "hasSQL": true
  },
  {
    "id": 144,
    "module": 8,
    "question": "Which of the following is an outer join symbol?",
    "options": [
      "[+]",
      "(+)",
      "{+}",
      "+"
    ],
    "correctIndex": 1,
    "correctAnswer": "(+)",
    "explanation": "Oracle's legacy outer join operator syntax is (+), placed on the side of the join condition that is deficient in matching rows.",
    "hasSQL": false
  },
  {
    "id": 145,
    "module": 8,
    "question": "What will be the output of the following query? SELECT e.last_name, e.department_id, d.department_name FROM employees e, departments d WHERE e.department_id(+) = d.department_id;",
    "options": [
      "Displays employee last names, department ID's and department names for all employees irrespective of the matching department id present in departments table or not.",
      "Displays employee last names, department ID's and department names for all employees.",
      "Displays employee last names, department ID's for all employees and also the department names for all departments.",
      "Displays employee last names, department ID's and department names for all employees and also the department names of departments who have no match in employees table."
    ],
    "correctIndex": 3,
    "correctAnswer": "Displays employee last names, department ID's and department names for all employees and also the department names of departments who have no match in employees table.",
    "explanation": "WHERE e.department_id(+) = d.department_id is a Right Outer Join returning all departments, including departments with no matching employees.",
    "hasSQL": true
  },
  {
    "id": 146,
    "module": 8,
    "question": "Which of the following type of join was not available in Oracle versions 8i and prior?",
    "options": [
      "Full Outer Join",
      "Self Join",
      "Left Outer Join",
      "Right Outer Join"
    ],
    "correctIndex": 0,
    "correctAnswer": "Full Outer Join",
    "explanation": "Full Outer Join (ANSI SQL-92 syntax) was introduced in Oracle 9i and was not supported in Oracle 8i and earlier using (+).",
    "hasSQL": false
  },
  {
    "id": 147,
    "module": 8,
    "question": "Which of the following statements about use of table aliases and prefixes in Join queries is not Valid ?",
    "options": [
      "We can simplify queries by using table aliases.",
      "Table prefixes must be used to unambiguously identify the columns with same names.",
      "We can improve performance by using table prefixes.",
      "Table prefixes must be used when joining more than three tables."
    ],
    "correctIndex": 3,
    "correctAnswer": "Table prefixes must be used when joining more than three tables.",
    "explanation": "Table prefixes or aliases are required only to disambiguate identical column names across joined tables, not mandatory based on table count.",
    "hasSQL": false
  },
  {
    "id": 148,
    "module": 8,
    "question": "Which of the following statements indicate correct way of using a Natural Join?",
    "options": [
      "SELECT department_id, department_name, location_id, city FROM departments d NATURAL JOIN locations l using (l.location_id);",
      "SELECT department_id, department_name, location_id, city FROM departments NATURAL JOIN locations on (location_id);",
      "SELECT department_id, department_name, location_id, city FROM departments NATURAL JOIN locations;",
      "SELECT department_id, department_name, location_id, city FROM departments d NATURAL JOIN locations l WHERE d.location_id = l.location_id"
    ],
    "correctIndex": 2,
    "correctAnswer": "SELECT department_id, department_name, location_id, city FROM departments NATURAL JOIN locations;",
    "explanation": "NATURAL JOIN automatically joins tables based on all columns with matching names; adding an ON or USING clause to NATURAL JOIN is invalid.",
    "hasSQL": true
  },
  {
    "id": 149,
    "module": 8,
    "question": "Which of the following statements is not true about joins?",
    "options": [
      "To specify arbitrary conditions or specify columns to join, the ON clause is used.",
      "Natural join and using clause can be used together.",
      "Use the USING clause to match only one column when more than one column matches.",
      "If the columns having the same names have different data types, an error is returned in case of a Natural Join."
    ],
    "correctIndex": 1,
    "correctAnswer": "Natural join and using clause can be used together.",
    "explanation": "NATURAL JOIN and USING clauses are mutually exclusive and cannot be combined in the same join clause.",
    "hasSQL": false
  },
  {
    "id": 150,
    "module": 8,
    "question": "Which SQL statement produces the name, department name, and the city of all the employees who earn more than 10000?",
    "options": [
      "SELECT emp_name, department_name, city FROM employees e, departments d, locations 1 JOIN ON (e.department_id = d.department id) AND (d.location_id =1.location_id) AND salary > 10000;",
      "SELECT emp_name, department_name, city FROM employees e, departments d, locations 1 WHERE salary > 10000;",
      "SELECT emp_name, department_name, city FROM employees e JOIN departments d USING (department_id) JOIN locations 1 USING (location_id) WHERE salary > 10000;",
      "SELECT emp_name, department_name, city FROM employees e NATURAL JOIN departments, locations WHERE salary > 10000;"
    ],
    "correctIndex": 2,
    "correctAnswer": "SELECT emp_name, department_name, city FROM employees e JOIN departments d USING (department_id) JOIN locations 1 USING (location_id) WHERE salary > 10000;",
    "explanation": "Joining 3 tables with filtering requires valid join predicates and conditions: SELECT ... FROM employees e, departments d, locations l WHERE e.department_id = d.department_id AND d.location_id = l.location_id AND salary > 10000;.",
    "hasSQL": true
  },
  {
    "id": 151,
    "module": 8,
    "question": "You want to retrieve all employees, whether or not they have matching departments in the departments table. Which query would you use?",
    "options": [
      "SELECT last_name, department_name FROM employees e LEFT OUTER JOIN departments d ON (e.department_id = d.department_id);",
      "SELECT last_name, department_name FROM employees , departments(+);",
      "SELECT last_name, department_name FROM employees JOIN departments (+);",
      "SELECT last_name, department_name FROM employees e RIGHT OUTER JOIN departments d ON (e.department_id = d.department_id);"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT last_name, department_name FROM employees e LEFT OUTER JOIN departments d ON (e.department_id = d.department_id);",
    "explanation": "LEFT OUTER JOIN returns all rows from the left table regardless of whether matching rows exist in the right table.",
    "hasSQL": true
  },
  {
    "id": 152,
    "module": 8,
    "question": "Which is not true regarding the use of outer joins?",
    "options": [
      "In the WHERE condition, you use (+) following the name of the column in the table without matching rows, to perform an outerjoin.",
      "You use an outerjoin to see only the rows that do not meet the join condition.",
      "You cannot link a condition that is involved in an outerjoin to another condition by using the OR operator.",
      "You cannot an outer join while joining more than 2 tables"
    ],
    "correctIndex": 3,
    "correctAnswer": "You cannot an outer join while joining more than 2 tables",
    "explanation": "An outer join can be performed across more than 2 tables by chaining outer join clauses.",
    "hasSQL": true
  },
  {
    "id": 153,
    "module": 8,
    "question": "Which of the following joins is also called an Inner join?",
    "options": [
      "Self Join",
      "Outer Join",
      "Non-Equi Join",
      "Equi Join"
    ],
    "correctIndex": 2,
    "correctAnswer": "Equi Join",
    "explanation": "An Equi Join (matching equality of column values) is also referred to as an Inner Join.",
    "hasSQL": false
  },
  {
    "id": 154,
    "module": 8,
    "question": "What is true about joining tables through an equijoin?",
    "options": [
      "You specify an equijoin condition in the SELECT or FROM clauses of a SELECT statement.",
      "You can join n tables (all having single column primary keys) in a SQL statement by specifying a minimum of n-1 join conditions.",
      "You can join a maximum of two columns through an equijoin.",
      "You can join a maximum of two tables through an equijoin."
    ],
    "correctIndex": 1,
    "correctAnswer": "You can join n tables (all having single column primary keys) in a SQL statement by specifying a minimum of n-1 join conditions.",
    "explanation": "To join 'n' tables in an equijoin without generating a Cartesian product, a minimum of 'n - 1' join conditions are required.",
    "hasSQL": true
  },
  {
    "id": 155,
    "module": 8,
    "question": "For which situation would you use a non-equijoin query?",
    "options": [
      "To find the number of employees working for the Administrative department and earning less then 4000.",
      "To find the tax percentage for each of the employees",
      "To list the name, job id, and manager name for all the employees.",
      "To find the name, salary, and department name of employees who are not working with Smith."
    ],
    "correctIndex": 1,
    "correctAnswer": "To find the tax percentage for each of the employees",
    "explanation": "Finding tax percentage based on salary ranges (MIN_SALARY and MAX_SALARY) requires a Non-Equijoin (e.g., WHERE salary BETWEEN min_sal AND max_sal).",
    "hasSQL": false
  },
  {
    "id": 156,
    "module": 8,
    "question": "To produce a meaningful result set without any cartesian products, what is the minimum number of conditions that should appear in the WHERE clause of a four-table join?",
    "options": [
      "2",
      "4",
      "3",
      "8"
    ],
    "correctIndex": 2,
    "correctAnswer": "3",
    "explanation": "To join 4 tables without generating a Cartesian product, a minimum of 3 (n - 1) join conditions must appear in the WHERE/ON clause.",
    "hasSQL": true
  },
  {
    "id": 157,
    "module": 8,
    "question": "In which case would you use an outer join?",
    "options": [
      "The tables being joined have NOT NULL columns.",
      "The tables being joined have both matched and unmatched data.",
      "The tables being joined have only unmatched data",
      "The tables being joined have only matched data."
    ],
    "correctIndex": 1,
    "correctAnswer": "The tables being joined have both matched and unmatched data.",
    "explanation": "An Outer Join is used when query requirements demand displaying both matched and unmatched records across tables.",
    "hasSQL": false
  },
  {
    "id": 158,
    "module": 8,
    "question": "When will a Cartesian product occur?",
    "options": [
      "All rows in the first table are joined to all rows in the second table",
      "A join condition is omitted",
      "A join condition is invalid",
      "Two tables are joined on the columns having different names."
    ],
    "correctIndex": 3,
    "correctAnswer": "Two tables are joined on the columns having different names.",
    "explanation": "A Cartesian product occurs when two tables are joined on mismatching column names without an explicit join predicate or condition.",
    "hasSQL": false
  },
  {
    "id": 159,
    "module": 8,
    "question": "Which of the following is not a valid type of Join?",
    "options": [
      "External Join",
      "Outer Join",
      "Inner Join",
      "Natural join"
    ],
    "correctIndex": 0,
    "correctAnswer": "External Join",
    "explanation": "'External Join' is a non-existent database term; standard join types are Inner Join, Outer Join, and Natural Join.",
    "hasSQL": false
  },
  {
    "id": 160,
    "module": 8,
    "question": "Which type of join is used in the following query? SELECT e.employee_id, e.last_name, d.department_id, d.location_id FROM employees e, departments d WHERE e.department_id = d.department_id;",
    "options": [
      "Self Join",
      "Non-equi Join",
      "Equi join",
      "Left Outer join"
    ],
    "correctIndex": 2,
    "correctAnswer": "Equi join",
    "explanation": "WHERE e.department_id = d.department_id uses an equality operator (=), making it an Equi join.",
    "hasSQL": true
  },
  {
    "id": 161,
    "module": 9,
    "question": "Which operator can be used with a single-row subquery?",
    "options": [
      "=",
      "IN",
      "ANY",
      "ALL"
    ],
    "correctIndex": 0,
    "correctAnswer": "=",
    "explanation": "A single-row subquery returns exactly one row (and one column) to the outer query and must use single-row comparison operators (=, >, <, >=, <=, <>).",
    "hasSQL": false
  },
  {
    "id": 162,
    "module": 9,
    "question": "Which operator can be used with a multiple-row subquery?",
    "options": [
      "IN",
      "=",
      "<>",
      ">="
    ],
    "correctIndex": 0,
    "correctAnswer": "IN",
    "explanation": "Multiple-row subqueries return more than one row to the outer statement and require multiple-row comparison operators like IN, ANY, or ALL.",
    "hasSQL": false
  },
  {
    "id": 163,
    "module": 9,
    "question": "In which clause of a SELECT statement can a subquery NOT be used?",
    "options": [
      "GROUP BY",
      "WHERE",
      "HAVING",
      "FROM"
    ],
    "correctIndex": 0,
    "correctAnswer": "GROUP BY",
    "explanation": "Subqueries can be placed in SELECT, FROM, WHERE, and HAVING clauses. Placed in the FROM clause, a subquery is called an inline view.",
    "hasSQL": true
  },
  {
    "id": 164,
    "module": 9,
    "question": "Which statement is true about subqueries?",
    "options": [
      "Subqueries are enclosed in parentheses and executed first before the main query.",
      "Subqueries cannot be nested.",
      "A subquery must always return a single row.",
      "The inner query executes after the outer main query completes."
    ],
    "correctIndex": 0,
    "correctAnswer": "Subqueries are enclosed in parentheses and executed first before the main query.",
    "explanation": "Subqueries are enclosed in parentheses and executed first before the main outer query evaluates its condition.",
    "hasSQL": false
  },
  {
    "id": 165,
    "module": 9,
    "question": "Which clause can contain a subquery to filter aggregated group results?",
    "options": [
      "HAVING",
      "WHERE",
      "FROM",
      "ORDER BY"
    ],
    "correctIndex": 0,
    "correctAnswer": "HAVING",
    "explanation": "The HAVING clause can contain a subquery to compare aggregated group metrics against inner subquery output values.",
    "hasSQL": true
  },
  {
    "id": 166,
    "module": 9,
    "question": "What happens if a subquery evaluated by a NOT IN operator returns a NULL value?",
    "options": [
      "The entire outer query evaluates to no rows returned (NULL).",
      "The NULL values are automatically ignored and processing continues.",
      "An error message is raised immediately by Oracle.",
      "All rows from the outer table are returned."
    ],
    "correctIndex": 0,
    "correctAnswer": "The entire outer query evaluates to no rows returned (NULL).",
    "explanation": "If a multiple-row subquery returns NULL in its result set, using the NOT IN operator causes the entire query to evaluate to NULL (no rows returned).",
    "hasSQL": true
  },
  {
    "id": 167,
    "module": 9,
    "question": "What does the '< ANY' operator mean when used with a multiple-row subquery?",
    "options": [
      "Less than the maximum value returned by the subquery.",
      "Less than the minimum value returned by the subquery.",
      "Equal to any value returned by the subquery.",
      "Greater than the minimum value returned by the subquery."
    ],
    "correctIndex": 0,
    "correctAnswer": "Less than the maximum value returned by the subquery.",
    "explanation": "The ANY operator compares a value to each value returned by a subquery. '< ANY' means less than the maximum value in the subquery set.",
    "hasSQL": false
  },
  {
    "id": 168,
    "module": 9,
    "question": "What does the '> ALL' operator mean when used with a multiple-row subquery?",
    "options": [
      "Greater than the maximum value returned by the subquery.",
      "Greater than the minimum value returned by the subquery.",
      "Equal to all values returned by the subquery.",
      "Less than the maximum value returned by the subquery."
    ],
    "correctIndex": 0,
    "correctAnswer": "Greater than the maximum value returned by the subquery.",
    "explanation": "The ALL operator compares a value to every value returned by a subquery. '> ALL' means greater than the maximum value in the subquery set.",
    "hasSQL": false
  },
  {
    "id": 169,
    "module": 9,
    "question": "Which query correctly retrieves employees who earn the lowest salary in their respective departments?",
    "options": [
      "SELECT last_name, salary, department_id FROM employees WHERE (department_id, salary) IN (SELECT department_id, MIN(salary) FROM employees GROUP BY department_id);",
      "SELECT last_name, salary, department_id FROM employees WHERE salary = (SELECT MIN(salary) FROM employees);",
      "SELECT last_name, salary, department_id FROM employees WHERE salary IN (SELECT MIN(salary) FROM employees);",
      "SELECT last_name, salary, department_id FROM employees GROUP BY department_id HAVING salary = MIN(salary);"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT last_name, salary, department_id FROM employees WHERE (department_id, salary) IN (SELECT department_id, MIN(salary) FROM employees GROUP BY department_id);",
    "explanation": "To find employees who earn the minimum salary in their respective departments, use a pairwise multiple-row subquery: WHERE (department_id, salary) IN (SELECT department_id, MIN(salary) FROM employees GROUP BY department_id).",
    "hasSQL": true
  },
  {
    "id": 170,
    "module": 9,
    "question": "You need to display all employees earning more than the average salary of employees in department 60. Which query accomplishes this?",
    "options": [
      "SELECT last_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = 60);",
      "SELECT last_name, salary FROM employees WHERE salary > AVG(salary) AND department_id = 60;",
      "SELECT last_name, salary FROM employees HAVING salary > (SELECT AVG(salary) FROM employees WHERE department_id = 60);",
      "SELECT last_name, salary FROM employees WHERE department_id = 60 AND salary > AVG(salary);"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT last_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = 60);",
    "explanation": "To find employees earning more than the average salary of department 60, use: SELECT last_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = 60).",
    "hasSQL": true
  },
  {
    "id": 171,
    "module": 9,
    "question": "A subquery that returns exactly one row to the outer query is called a _____?",
    "options": [
      "Single-row subquery",
      "Multiple-row subquery",
      "Correlated subquery",
      "Inline view"
    ],
    "correctIndex": 0,
    "correctAnswer": "Single-row subquery",
    "explanation": "Single-row subqueries return exactly one row and work with scalar comparison operators like =, >, <, <=, >=, <>.",
    "hasSQL": false
  },
  {
    "id": 172,
    "module": 9,
    "question": "When a subquery is placed in the FROM clause of a SELECT statement, how is it treated by Oracle?",
    "options": [
      "As an Inline View",
      "As a Correlated Subquery",
      "As a Table Constraint",
      "As a Index"
    ],
    "correctIndex": 0,
    "correctAnswer": "As an Inline View",
    "explanation": "Subqueries in the FROM clause are evaluated first to construct temporary inline view tables for the outer query.",
    "hasSQL": true
  },
  {
    "id": 173,
    "module": 9,
    "question": "What is another term for a subquery used in the FROM clause of a SELECT query?",
    "options": [
      "Inline View",
      "Scalar Subquery",
      "Nested View",
      "Materialized View"
    ],
    "correctIndex": 0,
    "correctAnswer": "Inline View",
    "explanation": "An inline view is a subquery written directly in the FROM clause of a SELECT statement.",
    "hasSQL": true
  },
  {
    "id": 174,
    "module": 9,
    "question": "How must a subquery be formatted in SQL syntax?",
    "options": [
      "Enclosed within parentheses",
      "Enclosed within square brackets",
      "Enclosed within curly braces",
      "Placed after an ORDER BY clause"
    ],
    "correctIndex": 0,
    "correctAnswer": "Enclosed within parentheses",
    "explanation": "Subqueries must be enclosed within parentheses to establish evaluation precedence.",
    "hasSQL": false
  },
  {
    "id": 175,
    "module": 9,
    "question": "What is the result of a single-row subquery that returns no rows?",
    "options": [
      "NULL",
      "0",
      "Error: ORA-01427",
      "Empty String"
    ],
    "correctIndex": 0,
    "correctAnswer": "NULL",
    "explanation": "If a single-row subquery returns no rows (0 rows), the outer query receives NULL as the subquery result.",
    "hasSQL": false
  },
  {
    "id": 176,
    "module": 9,
    "question": "Which type of subquery compares more than one column between the main query and the subquery?",
    "options": [
      "Multiple-column subquery",
      "Single-row subquery",
      "Scalar subquery",
      "Correlated subquery"
    ],
    "correctIndex": 0,
    "correctAnswer": "Multiple-column subquery",
    "explanation": "Multiple-column subqueries compare two or more columns simultaneously against subquery results, using pairwise or non-pairwise syntax.",
    "hasSQL": false
  },
  {
    "id": 177,
    "module": 9,
    "question": "Which multiple-row comparison operator checks if a value matches any value in a list returned by a subquery?",
    "options": [
      "IN",
      "ALL",
      "EXISTS",
      "LIKE"
    ],
    "correctIndex": 0,
    "correctAnswer": "IN",
    "explanation": "The IN operator checks whether a candidate value matches any value in a subquery list or explicit set of values.",
    "hasSQL": false
  },
  {
    "id": 178,
    "module": 9,
    "question": "Can a SQL query contain multiple subqueries across different clauses?",
    "options": [
      "Yes, subqueries can be placed in SELECT, FROM, WHERE, and HAVING clauses.",
      "No, only one subquery is permitted per SELECT statement.",
      "No, subqueries are restricted exclusively to WHERE clauses.",
      "Yes, but only if they are all single-row subqueries."
    ],
    "correctIndex": 0,
    "correctAnswer": "Yes, subqueries can be placed in SELECT, FROM, WHERE, and HAVING clauses.",
    "explanation": "An outer query can contain multiple subqueries across different clauses (e.g., SELECT, FROM, WHERE, HAVING).",
    "hasSQL": true
  },
  {
    "id": 179,
    "module": 9,
    "question": "Nesting a subquery inside another subquery is known as _____?",
    "options": [
      "Subquery Nesting",
      "Correlated Joining",
      "Recursive Querying",
      "View Cascading"
    ],
    "correctIndex": 0,
    "correctAnswer": "Subquery Nesting",
    "explanation": "Nesting subqueries allows an inner query to feed its output directly into an enclosing subquery up to maximum system limit levels.",
    "hasSQL": false
  },
  {
    "id": 180,
    "module": 9,
    "question": "Which operator tests for the presence of rows returned by a subquery?",
    "options": [
      "EXISTS",
      "IN",
      "ANY",
      "ALL"
    ],
    "correctIndex": 0,
    "correctAnswer": "EXISTS",
    "explanation": "The EXISTS operator checks for the presence or existence of rows returned by a subquery, returning TRUE as soon as a matching row is found.",
    "hasSQL": false
  },
  {
    "id": 181,
    "module": 10,
    "question": "Which statement best describes a Correlated Subquery?",
    "options": [
      "A subquery that references columns from the outer query and executes once for each candidate row processed by the outer query.",
      "A subquery that executes once before the outer query completes and passes its result to the outer query.",
      "A subquery that returns a single scalar value to a WHERE clause.",
      "A subquery defined in the FROM clause using an inline view."
    ],
    "correctIndex": 0,
    "correctAnswer": "A subquery that references columns from the outer query and executes once for each candidate row processed by the outer query.",
    "explanation": "A correlated subquery references columns from the candidate row of the outer main query and evaluates once for each row processed by the outer query.",
    "hasSQL": true
  },
  {
    "id": 182,
    "module": 10,
    "question": "How does Oracle execute a Correlated Subquery?",
    "options": [
      "For each candidate row selected by the outer query, the inner subquery is executed using the candidate row's value.",
      "The inner subquery is executed once initially, and its results are stored in memory for the outer query.",
      "Both inner and outer queries execute completely independently in parallel.",
      "The outer query executes after the inner subquery returns its entire result set."
    ],
    "correctIndex": 0,
    "correctAnswer": "For each candidate row selected by the outer query, the inner subquery is executed using the candidate row's value.",
    "explanation": "Correlated subqueries execute iteratively: for each row candidate considered by the outer query, the inner subquery executes using that candidate row's value.",
    "hasSQL": false
  },
  {
    "id": 183,
    "module": 10,
    "question": "What is the primary benefit of using the EXISTS operator with a correlated subquery?",
    "options": [
      "It stops processing as soon as a matching row is found in the subquery, improving query execution efficiency.",
      "It converts NULL values to zeros before processing.",
      "It automatically sorts the result set in ascending order.",
      "It forces Oracle to perform a full table scan."
    ],
    "correctIndex": 0,
    "correctAnswer": "It stops processing as soon as a matching row is found in the subquery, improving query execution efficiency.",
    "explanation": "The EXISTS operator evaluates whether a subquery returns at least one row, stopping evaluation as soon as a match is found without reading full sets.",
    "hasSQL": false
  },
  {
    "id": 184,
    "module": 10,
    "question": "Which statement is true regarding the NOT EXISTS operator?",
    "options": [
      "It tests whether a subquery returns no rows, returning TRUE if zero rows match.",
      "It fails if any subquery row contains a NULL value.",
      "It requires single-row comparison operators like = or >.",
      "It forces the inner query to evaluate after the ORDER BY clause."
    ],
    "correctIndex": 0,
    "correctAnswer": "It tests whether a subquery returns no rows, returning TRUE if zero rows match.",
    "explanation": "The NOT EXISTS operator returns TRUE if the subquery returns no rows, making it ideal for finding records in table A that have no corresponding record in table B.",
    "hasSQL": false
  },
  {
    "id": 185,
    "module": 10,
    "question": "Correlated subqueries can be used in which of the following DML statements?",
    "options": [
      "Both UPDATE and DELETE statements",
      "Only SELECT statements",
      "Only UPDATE statements",
      "Only INSERT statements"
    ],
    "correctIndex": 0,
    "correctAnswer": "Both UPDATE and DELETE statements",
    "explanation": "Correlated UPDATE queries use outer table aliases inside the inner SELECT subquery to update candidate rows selectively.",
    "hasSQL": true
  },
  {
    "id": 186,
    "module": 10,
    "question": "Which query deletes all departments that currently have no employees assigned to them?",
    "options": [
      "DELETE FROM departments d WHERE NOT EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id);",
      "DELETE FROM departments WHERE department_id = NULL;",
      "DELETE FROM departments d WHERE EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id);",
      "DELETE FROM departments WHERE department_id NOT IN (SELECT department_id FROM employees);"
    ],
    "correctIndex": 0,
    "correctAnswer": "DELETE FROM departments d WHERE NOT EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id);",
    "explanation": "Correlated DELETE queries allow removing rows from a table based on conditions evaluated against another table using correlated references.",
    "hasSQL": true
  },
  {
    "id": 187,
    "module": 10,
    "question": "What is the purpose of the WITH clause (Subquery Factoring) in SQL?",
    "options": [
      "To define temporary named query blocks (CTEs) at the start of a statement to reuse results and improve readability.",
      "To grant user permissions on subquery views.",
      "To enforce primary key constraints on inline views.",
      "To physically persist temporary table data on disk storage."
    ],
    "correctIndex": 0,
    "correctAnswer": "To define temporary named query blocks (CTEs) at the start of a statement to reuse results and improve readability.",
    "explanation": "WITH clause (Common Table Expression / CTE) defines temporary named subqueries at the beginning of a statement to improve readability and performance.",
    "hasSQL": false
  },
  {
    "id": 188,
    "module": 10,
    "question": "A subquery that returns exactly one row and one column (a single value) is specifically termed a _____?",
    "options": [
      "Scalar Subquery",
      "Correlated Subquery",
      "Inline Subquery",
      "Composite Subquery"
    ],
    "correctIndex": 0,
    "correctAnswer": "Scalar Subquery",
    "explanation": "Scalar subqueries are subqueries that return exactly one column and one row (a single scalar value).",
    "hasSQL": false
  },
  {
    "id": 189,
    "module": 10,
    "question": "Where can a Scalar Subquery be used in an Oracle SQL statement?",
    "options": [
      "In most places where an expression or literal value is valid, including SELECT lists, WHERE clauses, and CASE expressions.",
      "Exclusively in the WHERE clause.",
      "Exclusively in the GROUP BY clause.",
      "Only inside the VALUES clause of an INSERT statement."
    ],
    "correctIndex": 0,
    "correctAnswer": "In most places where an expression or literal value is valid, including SELECT lists, WHERE clauses, and CASE expressions.",
    "explanation": "A scalar subquery can be used anywhere a literal constant or expression is valid in SQL, including SELECT lists, WHERE, and CASE expressions.",
    "hasSQL": true
  },
  {
    "id": 190,
    "module": 10,
    "question": "In which SQL statement clauses can a Correlated Subquery appear?",
    "options": [
      "WHERE, HAVING, SELECT, UPDATE, and DELETE clauses",
      "Only WHERE and HAVING clauses",
      "Only FROM and GROUP BY clauses",
      "Only ORDER BY clauses"
    ],
    "correctIndex": 0,
    "correctAnswer": "WHERE, HAVING, SELECT, UPDATE, and DELETE clauses",
    "explanation": "Correlated subqueries can be used in SELECT, WHERE, HAVING, UPDATE, and DELETE statements.",
    "hasSQL": true
  },
  {
    "id": 191,
    "module": 10,
    "question": "How does the WITH clause differ from a standard nested subquery?",
    "options": [
      "It defines named subquery blocks before the main query executes, allowing them to be referenced multiple times without repeating code.",
      "It creates permanent database tables in the user's schema.",
      "It bypasses query execution and returns cached data.",
      "It cannot be used with aggregate functions like SUM or AVG."
    ],
    "correctIndex": 0,
    "correctAnswer": "It defines named subquery blocks before the main query executes, allowing them to be referenced multiple times without repeating code.",
    "explanation": "The WITH clause simplifies complex queries by defining reusable query blocks (CTEs) executed before the main SELECT query.",
    "hasSQL": true
  },
  {
    "id": 192,
    "module": 10,
    "question": "Why can the NOT IN operator produce zero results when evaluated against a subquery containing NULL values?",
    "options": [
      "Because comparing any value to NULL using NOT IN evaluates to UNKNOWN/FALSE, causing the outer query condition to fail for all rows.",
      "Because NULL values cause an immediate compilation syntax error.",
      "Because NOT IN automatically converts NULL to 0.",
      "Because NOT IN converts NULL values to string spaces."
    ],
    "correctIndex": 0,
    "correctAnswer": "Because comparing any value to NULL using NOT IN evaluates to UNKNOWN/FALSE, causing the outer query condition to fail for all rows.",
    "explanation": "When evaluating NOT IN with a subquery containing NULL values, the truth value evaluates to UNKNOWN/FALSE for all rows, returning 0 rows.",
    "hasSQL": false
  },
  {
    "id": 193,
    "module": 10,
    "question": "Why is EXISTS safer than IN when subquery results might contain NULL values?",
    "options": [
      "Because EXISTS evaluates row presence (TRUE/FALSE) without comparing column values against NULLs.",
      "Because EXISTS replaces NULLs with empty strings automatically.",
      "Because EXISTS ignores primary key constraints.",
      "Because EXISTS converts NULLs into zero values."
    ],
    "correctIndex": 0,
    "correctAnswer": "Because EXISTS evaluates row presence (TRUE/FALSE) without comparing column values against NULLs.",
    "explanation": "The EXISTS predicate tests only for row existence and does not fail or get blocked by NULL values in the subquery result columns.",
    "hasSQL": false
  },
  {
    "id": 194,
    "module": 10,
    "question": "What creates the correlation in a Correlated Subquery?",
    "options": [
      "A column reference in the inner subquery that points to a column in the outer query table.",
      "Using the GROUP BY clause inside the inner subquery.",
      "Using the ORDER BY clause in the outer query.",
      "Using the UNION operator between two queries."
    ],
    "correctIndex": 0,
    "correctAnswer": "A column reference in the inner subquery that points to a column in the outer query table.",
    "explanation": "Correlated subqueries reference outer query columns, creating a execution dependency where inner execution depends on each outer row.",
    "hasSQL": false
  },
  {
    "id": 195,
    "module": 10,
    "question": "Can an Inline View contain subqueries within its own definition?",
    "options": [
      "Yes, an inline view can contain subqueries and complex join logic within its inner SELECT statement.",
      "No, inline views must strictly select from single physical tables without subqueries.",
      "No, inline views cannot contain aggregate functions or subqueries.",
      "Yes, but only if the inner subquery returns exactly one scalar value."
    ],
    "correctIndex": 0,
    "correctAnswer": "Yes, an inline view can contain subqueries and complex join logic within its inner SELECT statement.",
    "explanation": "Inline views defined in the FROM clause can contain correlated or uncorrelated subquery logic to create dynamic source tables.",
    "hasSQL": true
  },
  {
    "id": 196,
    "module": 10,
    "question": "Which correlated query finds employees earning more than the average salary of their own department?",
    "options": [
      "SELECT e.last_name, e.salary, e.department_id FROM employees e WHERE e.salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);",
      "SELECT last_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
      "SELECT last_name, salary FROM employees GROUP BY department_id HAVING salary > AVG(salary);",
      "SELECT last_name, salary FROM employees WHERE salary > AVG(salary);"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT e.last_name, e.salary, e.department_id FROM employees e WHERE e.salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);",
    "explanation": "To find employees whose salary is above the average salary of their own department, use a correlated subquery: WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id).",
    "hasSQL": true
  },
  {
    "id": 197,
    "module": 10,
    "question": "What error is raised if a scalar subquery in a SELECT list unexpectedly returns multiple rows at runtime?",
    "options": [
      "ORA-01427: single-row subquery returns more than one row",
      "ORA-00942: table or view does not exist",
      "ORA-00904: invalid identifier",
      "ORA-01722: invalid number"
    ],
    "correctIndex": 0,
    "correctAnswer": "ORA-01427: single-row subquery returns more than one row",
    "explanation": "Scalar subqueries returning more than one row raise the runtime error 'ORA-01427: single-row subquery returns more than one row'.",
    "hasSQL": true
  },
  {
    "id": 198,
    "module": 10,
    "question": "How does Subquery Factoring (WITH clause) optimize query performance in Oracle?",
    "options": [
      "Oracle can materialize the WITH subquery result once as a temporary table and reuse it across multiple references in the main query.",
      "It disables table indexes to speed up full table scans.",
      "It forces all subqueries to run on disk storage instead of RAM.",
      "It bypasses data dictionary validation."
    ],
    "correctIndex": 0,
    "correctAnswer": "Oracle can materialize the WITH subquery result once as a temporary table and reuse it across multiple references in the main query.",
    "explanation": "Subquery factoring using the WITH clause improves execution efficiency when a subquery block is referenced multiple times in the main statement.",
    "hasSQL": false
  },
  {
    "id": 199,
    "module": 10,
    "question": "What value does the EXISTS operator return when the inner subquery returns zero matching rows?",
    "options": [
      "FALSE",
      "TRUE",
      "NULL",
      "UNKNOWN"
    ],
    "correctIndex": 0,
    "correctAnswer": "FALSE",
    "explanation": "The EXISTS operator evaluates to TRUE if the inner subquery returns one or more rows, and FALSE if zero rows are returned.",
    "hasSQL": false
  },
  {
    "id": 200,
    "module": 10,
    "question": "Can a Correlated Subquery be used in the SET clause of an UPDATE statement?",
    "options": [
      "Yes, to dynamically update a column based on calculated values from a related table for each modified row.",
      "No, correlated subqueries are prohibited in UPDATE statements.",
      "No, UPDATE statements only accept static literal constants.",
      "Yes, but only if no WHERE clause is used in the UPDATE statement."
    ],
    "correctIndex": 0,
    "correctAnswer": "Yes, to dynamically update a column based on calculated values from a related table for each modified row.",
    "explanation": "Correlated subqueries can be used inside UPDATE statements to set column values dynamically based on matching criteria from related tables.",
    "hasSQL": true
  },
  {
    "id": 201,
    "module": 11,
    "question": "What is a View in a relational database?",
    "options": [
      "A logical or virtual table defined by a SELECT query that does not physically store data itself.",
      "A physical copy of a base table stored in a separate tablespace.",
      "A temporary index created on a primary key column.",
      "A transaction control backup file."
    ],
    "correctIndex": 0,
    "correctAnswer": "A logical or virtual table defined by a SELECT query that does not physically store data itself.",
    "explanation": "A View is a logical, virtual table defined by a SQL query. It does not physically store data rows itself (except materialized views).",
    "hasSQL": true
  },
  {
    "id": 202,
    "module": 11,
    "question": "Which statement best defines a Simple View?",
    "options": [
      "A view based on only one table that contains no group functions, GROUP BY clauses, or DISTINCT keywords.",
      "A view based on multiple tables joined together.",
      "A view that contains aggregate functions like SUM or AVG.",
      "A view that is read-only and cannot be queried."
    ],
    "correctIndex": 0,
    "correctAnswer": "A view based on only one table that contains no group functions, GROUP BY clauses, or DISTINCT keywords.",
    "explanation": "A Simple View is built on a single base table, contains no functions or GROUP BY clauses, and permits DML operations directly.",
    "hasSQL": false
  },
  {
    "id": 203,
    "module": 11,
    "question": "Which statement best defines a Complex View?",
    "options": [
      "A view that derives data from multiple tables, or contains group functions, GROUP BY, or DISTINCT clauses.",
      "A view created on a single table without functions or joins.",
      "A view that cannot be dropped once created.",
      "A view that physically allocates data blocks on disk storage."
    ],
    "correctIndex": 0,
    "correctAnswer": "A view that derives data from multiple tables, or contains group functions, GROUP BY, or DISTINCT clauses.",
    "explanation": "A Complex View derives data from multiple tables, or contains group functions, GROUP BY, DISTINCT, or pseudocolumns, restricting direct DML updates.",
    "hasSQL": true
  },
  {
    "id": 204,
    "module": 11,
    "question": "What is the effect of the WITH CHECK OPTION clause in a CREATE VIEW statement?",
    "options": [
      "It ensures that DML operations performed through the view cannot create or update rows that would not be visible through the view's query filter.",
      "It prevents users from selecting data from the view.",
      "It disables all constraints on underlying base tables.",
      "It forces the view to be stored as a physical table."
    ],
    "correctIndex": 0,
    "correctAnswer": "It ensures that DML operations performed through the view cannot create or update rows that would not be visible through the view's query filter.",
    "explanation": "The WITH CHECK OPTION clause prevents DML modifications (INSERT/UPDATE) on a view that produce rows not visible through the view's query filter.",
    "hasSQL": true
  },
  {
    "id": 205,
    "module": 11,
    "question": "What is the effect of the WITH READ ONLY clause in a CREATE VIEW statement?",
    "options": [
      "It prevents any DML operations (INSERT, UPDATE, DELETE) from being performed through the view.",
      "It allows SELECT operations only for the SYS user.",
      "It prevents users from executing SELECT queries against the view.",
      "It automatically drops the view after 24 hours."
    ],
    "correctIndex": 0,
    "correctAnswer": "It prevents any DML operations (INSERT, UPDATE, DELETE) from being performed through the view.",
    "explanation": "The WITH READ ONLY clause prevents any DML operations (INSERT, UPDATE, DELETE) from being performed through the view.",
    "hasSQL": true
  },
  {
    "id": 206,
    "module": 11,
    "question": "Why would you use the FORCE option when creating a view?",
    "options": [
      "To create the view successfully even if the underlying base tables do not yet exist or the user lacks privileges on them.",
      "To force Oracle to create a unique index on the view.",
      "To convert a complex view into a simple view automatically.",
      "To physically lock the underlying base table rows."
    ],
    "correctIndex": 0,
    "correctAnswer": "To create the view successfully even if the underlying base tables do not yet exist or the user lacks privileges on them.",
    "explanation": "FORCE creates a view regardless of whether the underlying base tables exist or whether the user has privileges on them at creation time.",
    "hasSQL": false
  },
  {
    "id": 207,
    "module": 11,
    "question": "Which technique is used to perform Top-N Analysis in Oracle SQL?",
    "options": [
      "Using an inline view containing an ORDER BY clause combined with ROWNUM filtering in the outer query.",
      "Using the GROUP BY clause with a HAVING condition.",
      "Using the WHERE clause with an = operator on PRIMARY KEY.",
      "Using the UNION operator across multiple tables."
    ],
    "correctIndex": 0,
    "correctAnswer": "Using an inline view containing an ORDER BY clause combined with ROWNUM filtering in the outer query.",
    "explanation": "Top-N Analysis uses an inline view with an ORDER BY clause combined with ROWNUM <= N (or FETCH FIRST N ROWS ONLY in Oracle 12c+) to extract top records.",
    "hasSQL": true
  },
  {
    "id": 208,
    "module": 11,
    "question": "You want to retrieve the top 5 highest paid employees. Which query produces the correct result?",
    "options": [
      "SELECT last_name, salary FROM (SELECT last_name, salary FROM employees ORDER BY salary DESC) WHERE ROWNUM <= 5;",
      "SELECT last_name, salary FROM employees WHERE ROWNUM <= 5 ORDER BY salary DESC;",
      "SELECT last_name, salary FROM employees ORDER BY salary DESC WHERE ROWNUM <= 5;",
      "SELECT last_name, salary FROM employees WHERE ROWNUM = 5 ORDER BY salary DESC;"
    ],
    "correctIndex": 0,
    "correctAnswer": "SELECT last_name, salary FROM (SELECT last_name, salary FROM employees ORDER BY salary DESC) WHERE ROWNUM <= 5;",
    "explanation": "To retrieve top records in Oracle legacy syntax, sort rows in an inner inline view before applying ROWNUM filtering in the outer query.",
    "hasSQL": true
  },
  {
    "id": 209,
    "module": 11,
    "question": "What happens when an UPDATE statement is executed against an updatable simple view?",
    "options": [
      "The data in the underlying base table is updated directly.",
      "Only the temporary view buffer in memory is updated.",
      "An error is returned because views cannot process updates.",
      "A duplicate table is created automatically."
    ],
    "correctIndex": 0,
    "correctAnswer": "The data in the underlying base table is updated directly.",
    "explanation": "Modifying data through a view updates the underlying physical base tables upon which the view is defined.",
    "hasSQL": true
  },
  {
    "id": 210,
    "module": 11,
    "question": "Which of the following is an advantage of using Views?",
    "options": [
      "Enhances data security, simplifies complex queries, and provides data independence.",
      "Increases physical disk storage capacity automatically.",
      "Bypasses primary key and foreign key constraint checks.",
      "Speeds up full table scans without indexes."
    ],
    "correctIndex": 0,
    "correctAnswer": "Enhances data security, simplifies complex queries, and provides data independence.",
    "explanation": "Views provide data security by restricting user access to specific columns/rows, simplify complex queries, and ensure data independence.",
    "hasSQL": false
  },
  {
    "id": 211,
    "module": 11,
    "question": "What happens to base tables when a view defined on them is dropped with DROP VIEW?",
    "options": [
      "The base tables and their data remain completely unchanged.",
      "The base tables are truncated immediately.",
      "The base tables are permanently deleted from the schema.",
      "The base table columns are set to NULL."
    ],
    "correctIndex": 0,
    "correctAnswer": "The base tables and their data remain completely unchanged.",
    "explanation": "Executing DROP VIEW removes only the view definition from the data dictionary; base tables and their physical data remain completely intact.",
    "hasSQL": true
  },
  {
    "id": 212,
    "module": 11,
    "question": "What is the advantage of using CREATE OR REPLACE VIEW instead of DROP VIEW followed by CREATE VIEW?",
    "options": [
      "It modifies the view definition without invalidating grants/privileges previously assigned on the view.",
      "It automatically converts the view into a materialized view.",
      "It bypasses data dictionary validation.",
      "It creates a backup copy of the original view."
    ],
    "correctIndex": 0,
    "correctAnswer": "It modifies the view definition without invalidating grants/privileges previously assigned on the view.",
    "explanation": "The OR REPLACE clause allows modifying an existing view definition without needing to drop the view and re-grant associated object privileges.",
    "hasSQL": false
  },
  {
    "id": 213,
    "module": 11,
    "question": "What is ROWNUM in Oracle SQL?",
    "options": [
      "A pseudocolumn that assigns a sequential integer to each row returned by a query.",
      "A physical column stored in every table.",
      "A foreign key constraint parameter.",
      "A data type used for storing phone numbers."
    ],
    "correctIndex": 0,
    "correctAnswer": "A pseudocolumn that assigns a sequential integer to each row returned by a query.",
    "explanation": "ROWNUM is a pseudocolumn assigned sequentially to rows as they are fetched from a query before any ORDER BY sorting is applied.",
    "hasSQL": false
  },
  {
    "id": 214,
    "module": 11,
    "question": "Why will SELECT * FROM employees WHERE ROWNUM <= 5 ORDER BY salary DESC; NOT return the true top 5 highest earners?",
    "options": [
      "Because ROWNUM is assigned to rows before the ORDER BY clause sorts the result set.",
      "Because ROWNUM requires a GROUP BY clause.",
      "Because ROWNUM cannot be used with the <= operator.",
      "Because ORDER BY automatically resets ROWNUM to zero."
    ],
    "correctIndex": 0,
    "correctAnswer": "Because ROWNUM is assigned to rows before the ORDER BY clause sorts the result set.",
    "explanation": "Inline views in Top-N queries ensure rows are ordered correctly before ROWNUM filters the desired top N rows.",
    "hasSQL": true
  },
  {
    "id": 215,
    "module": 11,
    "question": "A view created with CREATE VIEW emp_dept_v AS SELECT e.last_name, d.department_name FROM employees e JOIN departments d ON e.department_id = d.department_id; is classified as a _____?",
    "options": [
      "Complex View",
      "Simple View",
      "Inline View",
      "Materialized View"
    ],
    "correctIndex": 0,
    "correctAnswer": "Complex View",
    "explanation": "Creating a view based on group functions or JOINs classifies it as a Complex View.",
    "hasSQL": true
  },
  {
    "id": 216,
    "module": 11,
    "question": "Which clause combination is essential for an accurate Top-N Analysis query in legacy Oracle SQL?",
    "options": [
      "Inline view with ORDER BY + Outer query with ROWNUM condition",
      "GROUP BY + HAVING",
      "WHERE + UNION",
      "START WITH + CONNECT BY"
    ],
    "correctIndex": 0,
    "correctAnswer": "Inline view with ORDER BY + Outer query with ROWNUM condition",
    "explanation": "To perform Top-N filtering accurately, sort data inside an inline view subquery first, then filter ROWNUM <= N in the main query.",
    "hasSQL": true
  },
  {
    "id": 217,
    "module": 11,
    "question": "If a view is created with WITH CHECK OPTION, what occurs when an INSERT attempts to insert a row that violates the view's WHERE condition?",
    "options": [
      "Oracle rejects the INSERT statement and raises an error (ORA-01402).",
      "The row is inserted into the base table but hidden from the view.",
      "The row is inserted into a temporary table instead.",
      "Oracle automatically modifies the row values to match the condition."
    ],
    "correctIndex": 0,
    "correctAnswer": "Oracle rejects the INSERT statement and raises an error (ORA-01402).",
    "explanation": "The WITH CHECK OPTION clause ensures that any INSERT or UPDATE through the view satisfies the view's WHERE condition.",
    "hasSQL": true
  },
  {
    "id": 218,
    "module": 11,
    "question": "Can data be deleted through a complex view that contains the SUM() aggregate function?",
    "options": [
      "No, views containing group functions or aggregate expressions are not updatable/deletable.",
      "Yes, provided the user has DELETE ANY TABLE privileges.",
      "Yes, if the view is created with FORCE.",
      "Yes, if the base table has a Primary Key."
    ],
    "correctIndex": 0,
    "correctAnswer": "No, views containing group functions or aggregate expressions are not updatable/deletable.",
    "explanation": "Complex views containing aggregate functions (e.g., SUM, AVG) do not permit direct DML operations on aggregated virtual columns.",
    "hasSQL": true
  },
  {
    "id": 219,
    "module": 11,
    "question": "Which data dictionary view stores the defining SQL text of views owned by the current user?",
    "options": [
      "USER_VIEWS",
      "USER_TABLES",
      "USER_OBJECTS",
      "USER_CATALOG"
    ],
    "correctIndex": 0,
    "correctAnswer": "USER_VIEWS",
    "explanation": "Data dictionary view USER_VIEWS contains the defining query text and metadata for all views owned by the current user.",
    "hasSQL": false
  },
  {
    "id": 220,
    "module": 11,
    "question": "Which statement about views is FALSE?",
    "options": [
      "Views store physically duplicated copies of all base table data on disk.",
      "Views can restrict access to sensitive table columns.",
      "Views can join multiple tables into a single virtual object.",
      "Views can be dropped without affecting the underlying base tables."
    ],
    "correctIndex": 0,
    "correctAnswer": "Views store physically duplicated copies of all base table data on disk.",
    "explanation": "Views do not store duplicate physical copies of base table data; they present dynamic, real-time results evaluated at query time.",
    "hasSQL": false
  },
  {
    "id": 221,
    "module": 12,
    "question": "What is the function of the UNION set operator?",
    "options": [
      "Combines the result sets of two queries and removes all duplicate rows from the final result.",
      "Combines the result sets of two queries including all duplicate rows.",
      "Returns only rows that are common to both queries.",
      "Returns rows from the first query that are not present in the second query."
    ],
    "correctIndex": 0,
    "correctAnswer": "Combines the result sets of two queries and removes all duplicate rows from the final result.",
    "explanation": "UNION combines result sets from two queries and automatically removes duplicate rows from the final output.",
    "hasSQL": true
  },
  {
    "id": 222,
    "module": 12,
    "question": "How does UNION ALL differ from UNION?",
    "options": [
      "UNION ALL retains all duplicate rows and does not perform sorting, whereas UNION eliminates duplicates.",
      "UNION ALL removes duplicate rows, whereas UNION keeps them.",
      "UNION ALL works only on numeric columns.",
      "UNION ALL can join tables with different numbers of columns."
    ],
    "correctIndex": 0,
    "correctAnswer": "UNION ALL retains all duplicate rows and does not perform sorting, whereas UNION eliminates duplicates.",
    "explanation": "UNION ALL combines result sets from two queries including all duplicate rows, making it faster than UNION because no sorting/deduplication occurs.",
    "hasSQL": true
  },
  {
    "id": 223,
    "module": 12,
    "question": "What does the INTERSECT operator return?",
    "options": [
      "Only rows that are common to both component query result sets.",
      "All rows from both queries including duplicates.",
      "Rows from the first query that do not exist in the second query.",
      "All rows except common rows."
    ],
    "correctIndex": 0,
    "correctAnswer": "Only rows that are common to both component query result sets.",
    "explanation": "INTERSECT returns only the distinct common rows that are returned by both queries.",
    "hasSQL": true
  },
  {
    "id": 224,
    "module": 12,
    "question": "What does the MINUS operator return?",
    "options": [
      "Distinct rows returned by the first query that are NOT present in the second query's result set.",
      "All rows present in both queries.",
      "The mathematical difference between two numeric columns.",
      "Rows present in the second query but not the first."
    ],
    "correctIndex": 0,
    "correctAnswer": "Distinct rows returned by the first query that are NOT present in the second query's result set.",
    "explanation": "MINUS returns distinct rows from the first query that are not present in the second query's result set.",
    "hasSQL": false
  },
  {
    "id": 225,
    "module": 12,
    "question": "What rule must be followed regarding columns when using SET operators (UNION, INTERSECT, MINUS)?",
    "options": [
      "Both queries must have the same number of columns, and corresponding columns must belong to matching data type families.",
      "Column names in both SELECT lists must be identical.",
      "Tables referenced in both queries must have identical names.",
      "Both queries must contain an identical WHERE clause."
    ],
    "correctIndex": 0,
    "correctAnswer": "Both queries must have the same number of columns, and corresponding columns must belong to matching data type families.",
    "explanation": "For SET operators (UNION, UNION ALL, INTERSECT, MINUS), corresponding columns in both SELECT lists must match in number and data type family.",
    "hasSQL": true
  },
  {
    "id": 226,
    "module": 12,
    "question": "Where must the ORDER BY clause be placed in a compound query that uses SET operators?",
    "options": [
      "At the very end of the entire compound statement, referencing column names/aliases from the first SELECT clause.",
      "Inside each individual SELECT statement.",
      "Immediately after the first SELECT statement only.",
      "ORDER BY is strictly prohibited in set operations."
    ],
    "correctIndex": 0,
    "correctAnswer": "At the very end of the entire compound statement, referencing column names/aliases from the first SELECT clause.",
    "explanation": "The ORDER BY clause in set operations must appear at the very end of the entire statement, referencing column names or position numbers from the first query.",
    "hasSQL": true
  },
  {
    "id": 227,
    "module": 12,
    "question": "What is ROWNUM in Oracle SQL?",
    "options": [
      "A pseudocolumn returning a sequential number assigned to each row fetched from a table.",
      "A physical column storing row numbers permanently on disk.",
      "A primary key auto-increment function.",
      "A transaction log identifier."
    ],
    "correctIndex": 0,
    "correctAnswer": "A pseudocolumn returning a sequential number assigned to each row fetched from a table.",
    "explanation": "ROWNUM assigns a unique sequential integer to each row returned by a query, evaluated as rows satisfy WHERE conditions.",
    "hasSQL": true
  },
  {
    "id": 228,
    "module": 12,
    "question": "What is ROWID in Oracle SQL?",
    "options": [
      "A pseudocolumn returning the physical hexadecimal address of a row in the database.",
      "An internal table identifier number.",
      "A variable character column storing user logins.",
      "A foreign key reference string."
    ],
    "correctIndex": 0,
    "correctAnswer": "A pseudocolumn returning the physical hexadecimal address of a row in the database.",
    "explanation": "ROWID provides the physical location address of a row, making row retrieval via ROWID the fastest possible data access path in Oracle.",
    "hasSQL": false
  },
  {
    "id": 229,
    "module": 12,
    "question": "What does the SYSDATE pseudocolumn return?",
    "options": [
      "The current date and time of the database server OS.",
      "The date when the database table was created.",
      "The date when the user session opened.",
      "The expiration date of the user password."
    ],
    "correctIndex": 0,
    "correctAnswer": "The current date and time of the database server OS.",
    "explanation": "SYSDATE is a built-in date pseudocolumn/function returning the current system date and time of the database server.",
    "hasSQL": false
  },
  {
    "id": 230,
    "module": 12,
    "question": "What does the USER pseudocolumn return?",
    "options": [
      "The name of the current logged-in database user session.",
      "The owner name of the operating system.",
      "A list of all active database users.",
      "The DBA administrator account name."
    ],
    "correctIndex": 0,
    "correctAnswer": "The name of the current logged-in database user session.",
    "explanation": "USER is a pseudocolumn returning the username of the currently connected database session.",
    "hasSQL": false
  },
  {
    "id": 231,
    "module": 12,
    "question": "Which SELECT statement determines the column header names in the final output of a UNION query?",
    "options": [
      "The first SELECT statement in the compound query.",
      "The second SELECT statement in the compound query.",
      "The query with the longest column names.",
      "Column headers are generated as COL1, COL2 automatically."
    ],
    "correctIndex": 0,
    "correctAnswer": "The first SELECT statement in the compound query.",
    "explanation": "In set operations, column header names in the final output are determined by the column aliases or names specified in the first SELECT statement.",
    "hasSQL": true
  },
  {
    "id": 232,
    "module": 12,
    "question": "Why is UNION ALL faster in performance than UNION?",
    "options": [
      "UNION ALL does not sort the result set to eliminate duplicate rows.",
      "UNION ALL uses index scans while UNION uses full table scans.",
      "UNION ALL runs on multiple CPU threads simultaneously.",
      "UNION ALL skips checking table constraints."
    ],
    "correctIndex": 0,
    "correctAnswer": "UNION ALL does not sort the result set to eliminate duplicate rows.",
    "explanation": "UNION ALL retains all duplicates and does not perform sorting, achieving superior performance compared to UNION.",
    "hasSQL": false
  },
  {
    "id": 233,
    "module": 12,
    "question": "What is the result of executing SELECT * FROM employees WHERE ROWNUM = 2;?",
    "options": [
      "No rows returned (0 rows).",
      "The second row of the employees table.",
      "The top 2 rows of the employees table.",
      "An error message: ORA-00904."
    ],
    "correctIndex": 0,
    "correctAnswer": "No rows returned (0 rows).",
    "explanation": "Using ROWNUM = 2 directly in a WHERE clause returns 0 rows because ROWNUM 1 must be fetched before ROWNUM 2 can be assigned.",
    "hasSQL": true
  },
  {
    "id": 234,
    "module": 12,
    "question": "How can you retrieve rows starting from row number 10 to row number 20 using ROWNUM?",
    "options": [
      "By assigning ROWNUM an alias inside an inline view subquery, then filtering the alias in the outer query.",
      "By using WHERE ROWNUM BETWEEN 10 AND 20 directly in the main query.",
      "By using WHERE ROWNUM >= 10 AND ROWNUM <= 20.",
      "ROWNUM cannot be used for pagination under any circumstances."
    ],
    "correctIndex": 0,
    "correctAnswer": "By assigning ROWNUM an alias inside an inline view subquery, then filtering the alias in the outer query.",
    "explanation": "To use ROWNUM for pagination or offset filtering, wrap ROWNUM in an inline subquery with an alias.",
    "hasSQL": true
  },
  {
    "id": 235,
    "module": 12,
    "question": "In what order are set operators evaluated in a compound query with multiple set operations?",
    "options": [
      "From top to bottom (left to right), unless overridden by parentheses.",
      "INTERSECT first, followed by MINUS, then UNION.",
      "UNION ALL first, followed by UNION.",
      "In reverse order from bottom to top."
    ],
    "correctIndex": 0,
    "correctAnswer": "From top to bottom (left to right), unless overridden by parentheses.",
    "explanation": "Set operators evaluate queries from top to bottom unless parentheses are used to explicitly alter execution precedence.",
    "hasSQL": true
  },
  {
    "id": 236,
    "module": 12,
    "question": "Which data types are NOT supported in queries using SET operators like UNION or INTERSECT?",
    "options": [
      "BLOB, CLOB, BFILE, and LONG",
      "NUMBER and FLOAT",
      "VARCHAR2 and CHAR",
      "DATE and TIMESTAMP"
    ],
    "correctIndex": 0,
    "correctAnswer": "BLOB, CLOB, BFILE, and LONG",
    "explanation": "BLOB, CLOB, and LONG data types cannot be used in queries involving SET operators like UNION, INTERSECT, or MINUS.",
    "hasSQL": false
  },
  {
    "id": 237,
    "module": 12,
    "question": "Given Query A returns IDs {1, 2, 3, 4} and Query B returns IDs {3, 4, 5, 6}, what IDs are returned by Query A INTERSECT Query B?",
    "options": [
      "{3, 4}",
      "{1, 2, 3, 4, 5, 6}",
      "{1, 2}",
      "{5, 6}"
    ],
    "correctIndex": 0,
    "correctAnswer": "{3, 4}",
    "explanation": "INTERSECT returns only rows present in both component result sets.",
    "hasSQL": false
  },
  {
    "id": 238,
    "module": 12,
    "question": "Given Query A returns IDs {1, 2, 3, 4} and Query B returns IDs {3, 4, 5, 6}, what IDs are returned by Query A MINUS Query B?",
    "options": [
      "{1, 2}",
      "{5, 6}",
      "{3, 4}",
      "{1, 2, 3, 4, 5, 6}"
    ],
    "correctIndex": 0,
    "correctAnswer": "{1, 2}",
    "explanation": "MINUS subtracts the second result set from the first result set, returning unique rows belonging exclusively to the first query.",
    "hasSQL": false
  },
  {
    "id": 239,
    "module": 12,
    "question": "Which sequence pseudocolumn returns the next available value in a sequence generator?",
    "options": [
      "NEXTVAL",
      "CURRVAL",
      "ROWVAL",
      "SEQVAL"
    ],
    "correctIndex": 0,
    "correctAnswer": "NEXTVAL",
    "explanation": "NEXTVAL and CURRVAL are pseudocolumns used to retrieve sequence values; they cannot be used directly in set operations or GROUP BY clauses.",
    "hasSQL": false
  },
  {
    "id": 240,
    "module": 12,
    "question": "How can you handle a scenario where Query 1 returns 3 columns and Query 2 returns only 2 columns, but you need to combine them using UNION?",
    "options": [
      "Use a literal constant or NULL as a placeholder column in Query 2 to match the 3-column requirement.",
      "Use the FORCE keyword after UNION.",
      "Drop the missing column from Query 1 automatically using ALTER.",
      "It is impossible to combine queries with different column counts."
    ],
    "correctIndex": 0,
    "correctAnswer": "Use a literal constant or NULL as a placeholder column in Query 2 to match the 3-column requirement.",
    "explanation": "The NULL keyword can be used in SELECT lists of set operators as a placeholder to align matching column counts between queries.",
    "hasSQL": true
  },
  {
    "id": 241,
    "module": 13,
    "question": "What is Database Normalization?",
    "options": [
      "A systematic process of organizing database schema attributes and tables to eliminate data redundancy and prevent insertion, update, and deletion anomalies.",
      "The process of combining all database tables into a single master flat file.",
      "A procedure for backing up database files to cloud storage.",
      "The process of creating visual entity-relationship diagrams."
    ],
    "correctIndex": 0,
    "correctAnswer": "A systematic process of organizing database schema attributes and tables to eliminate data redundancy and prevent insertion, update, and deletion anomalies.",
    "explanation": "Database Normalization is the systematic process of organizing data attributes and tables to minimize data redundancy and eliminate update anomalies.",
    "hasSQL": false
  },
  {
    "id": 242,
    "module": 13,
    "question": "What requirement must a relation satisfy to be in First Normal Form (1NF)?",
    "options": [
      "All attributes must contain atomic (indivisible) values, and there must be no repeating groups or arrays.",
      "All non-key attributes must depend on the entire composite primary key.",
      "There must be no transitive dependencies between non-key attributes.",
      "Every determinant must be a candidate key."
    ],
    "correctIndex": 0,
    "correctAnswer": "All attributes must contain atomic (indivisible) values, and there must be no repeating groups or arrays.",
    "explanation": "First Normal Form (1NF) requires that all column attributes contain atomic (indivisible) values and that there are no repeating groups.",
    "hasSQL": false
  },
  {
    "id": 243,
    "module": 13,
    "question": "What requirement must a relation satisfy to be in Second Normal Form (2NF)?",
    "options": [
      "It must be in 1NF, and every non-key attribute must be fully functionally dependent on the entire primary key (no partial dependencies).",
      "It must contain no multi-valued attributes.",
      "It must have no transitive dependencies.",
      "It must have a single-column primary key only."
    ],
    "correctIndex": 0,
    "correctAnswer": "It must be in 1NF, and every non-key attribute must be fully functionally dependent on the entire primary key (no partial dependencies).",
    "explanation": "Second Normal Form (2NF) requires a table to be in 1NF and that every non-key column is fully functionally dependent on the entire primary key (no partial dependencies).",
    "hasSQL": false
  },
  {
    "id": 244,
    "module": 13,
    "question": "What requirement must a relation satisfy to be in Third Normal Form (3NF)?",
    "options": [
      "It must be in 2NF, and no non-key attribute can be transitively dependent on the primary key.",
      "All attributes must be character strings.",
      "It must contain no foreign key constraints.",
      "Every column must be part of a composite key."
    ],
    "correctIndex": 0,
    "correctAnswer": "It must be in 2NF, and no non-key attribute can be transitively dependent on the primary key.",
    "explanation": "Third Normal Form (3NF) requires a table to be in 2NF and that no non-key column is transitively dependent on the primary key (no transitive dependencies).",
    "hasSQL": false
  },
  {
    "id": 245,
    "module": 13,
    "question": "What requirement must a relation satisfy to be in Boyce-Codd Normal Form (BCNF)?",
    "options": [
      "It must be in 3NF, and for every functional dependency X -> Y, X must be a superkey (determinant is a key).",
      "It must have no foreign keys.",
      "It must be in 1NF only.",
      "It must contain at least 10 normalized tables."
    ],
    "correctIndex": 0,
    "correctAnswer": "It must be in 3NF, and for every functional dependency X -> Y, X must be a superkey (determinant is a key).",
    "explanation": "Boyce-Codd Normal Form (BCNF) is a stricter version of 3NF where every determinant in a functional dependency must be a superkey.",
    "hasSQL": false
  },
  {
    "id": 246,
    "module": 13,
    "question": "What does the notation X -> Y signify in database theory?",
    "options": [
      "A Functional Dependency where attribute set X uniquely determines attribute set Y.",
      "An outer join between table X and table Y.",
      "A transition state from table X to table Y.",
      "A mathematical subtraction of set Y from set X."
    ],
    "correctIndex": 0,
    "correctAnswer": "A Functional Dependency where attribute set X uniquely determines attribute set Y.",
    "explanation": "A Functional Dependency X -> Y indicates that the value of attribute set X uniquely determines the value of attribute set Y.",
    "hasSQL": true
  },
  {
    "id": 247,
    "module": 13,
    "question": "What is a Partial Dependency?",
    "options": [
      "A dependency where a non-key attribute depends on only part of a composite primary key.",
      "A dependency between two primary keys.",
      "A dependency where a non-key attribute depends on another non-key attribute.",
      "A foreign key referencing a non-existent parent row."
    ],
    "correctIndex": 0,
    "correctAnswer": "A dependency where a non-key attribute depends on only part of a composite primary key.",
    "explanation": "A Partial Dependency occurs when a non-key attribute depends on only a portion of a composite primary key, violating 2NF rules.",
    "hasSQL": true
  },
  {
    "id": 248,
    "module": 13,
    "question": "What is a Transitive Dependency?",
    "options": [
      "A dependency where a non-key attribute depends on another non-key attribute rather than directly on the primary key (A -> B and B -> C).",
      "A dependency on part of a composite key.",
      "A dependency between a primary key and a foreign key.",
      "A multi-valued dependency across three tables."
    ],
    "correctIndex": 0,
    "correctAnswer": "A dependency where a non-key attribute depends on another non-key attribute rather than directly on the primary key (A -> B and B -> C).",
    "explanation": "A Transitive Dependency occurs when a non-key attribute depends on another non-key attribute rather than directly on the primary key, violating 3NF rules.",
    "hasSQL": true
  },
  {
    "id": 249,
    "module": 13,
    "question": "What is Decomposition in database normalization?",
    "options": [
      "Breaking down a non-normalized table into smaller, normalized tables without data loss.",
      "Deleting unused tables from a schema.",
      "Truncating database tables to free disk space.",
      "Converting SQL statements into PL/SQL procedures."
    ],
    "correctIndex": 0,
    "correctAnswer": "Breaking down a non-normalized table into smaller, normalized tables without data loss.",
    "explanation": "Decomposition is the process of breaking a non-normalized table down into smaller, normalized tables while preserving data and dependencies.",
    "hasSQL": true
  },
  {
    "id": 250,
    "module": 13,
    "question": "What is a Lossless-Join Decomposition?",
    "options": [
      "A decomposition guaranteeing that joining the resulting tables reproduces the exact original table without creating spurious/fake rows.",
      "A join operation that returns no NULL values.",
      "A join that ignores foreign key constraints.",
      "Deleting records from child tables without affecting parent tables."
    ],
    "correctIndex": 0,
    "correctAnswer": "A decomposition guaranteeing that joining the resulting tables reproduces the exact original table without creating spurious/fake rows.",
    "explanation": "A Lossless-Join Decomposition guarantees that joining decomposed tables reproduces the exact original table without generating extraneous or spurious rows.",
    "hasSQL": true
  },
  {
    "id": 251,
    "module": 13,
    "question": "What is an Insertion Anomaly?",
    "options": [
      "Being unable to insert a record for an entity without forcing the entry of unrelated, unnecessary data for another entity.",
      "Failing to insert data due to disk space shortage.",
      "Inserting duplicate primary keys into a table.",
      "Inserting NULL values into a NOT NULL column."
    ],
    "correctIndex": 0,
    "correctAnswer": "Being unable to insert a record for an entity without forcing the entry of unrelated, unnecessary data for another entity.",
    "explanation": "An Insertion Anomaly occurs when a user cannot record a fact about an entity without improperly forcing unrelated data to be entered simultaneously.",
    "hasSQL": true
  },
  {
    "id": 252,
    "module": 13,
    "question": "What is a Deletion Anomaly?",
    "options": [
      "Unexpectedly losing secondary, vital data about one entity when deleting a record for a different entity.",
      "Failing to execute a DELETE command due to missing WHERE clause.",
      "Deleting a view instead of a table.",
      "Dropping a tablespace accidentally."
    ],
    "correctIndex": 0,
    "correctAnswer": "Unexpectedly losing secondary, vital data about one entity when deleting a record for a different entity.",
    "explanation": "A Deletion Anomaly occurs when deleting a record inadvertently deletes crucial secondary data that was stored in the same row.",
    "hasSQL": true
  },
  {
    "id": 253,
    "module": 13,
    "question": "What is an Update Anomaly?",
    "options": [
      "Inconsistency arising when updating redundant data stored in multiple places requires modifying many rows, risking partial updates.",
      "Failing to update a record due to a locked row.",
      "Updating a column with an invalid data type.",
      "Modifying a primary key constraint name."
    ],
    "correctIndex": 0,
    "correctAnswer": "Inconsistency arising when updating redundant data stored in multiple places requires modifying many rows, risking partial updates.",
    "explanation": "An Update Anomaly occurs when updating a data item stored redundantly in multiple rows requires updating every row, creating data inconsistency risk.",
    "hasSQL": true
  },
  {
    "id": 254,
    "module": 13,
    "question": "What is a Candidate Key?",
    "options": [
      "A minimal set of attributes that can uniquely identify any tuple (row) in a relation.",
      "Any column that accepts NULL values.",
      "A foreign key referenced in another table.",
      "A index created on a DATE column."
    ],
    "correctIndex": 0,
    "correctAnswer": "A minimal set of attributes that can uniquely identify any tuple (row) in a relation.",
    "explanation": "A Candidate Key is a minimal set of attributes that uniquely identifies any tuple in a database table.",
    "hasSQL": false
  },
  {
    "id": 255,
    "module": 13,
    "question": "What is the difference between a Superkey and a Candidate Key?",
    "options": [
      "A Superkey is any set of attributes that uniquely identifies a row; a Candidate Key is a minimal Superkey with no redundant attributes.",
      "A Candidate Key contains duplicate values, whereas a Superkey does not.",
      "A Superkey applies only to views, whereas a Candidate Key applies to tables.",
      "There is no difference; they are identical terms."
    ],
    "correctIndex": 0,
    "correctAnswer": "A Superkey is any set of attributes that uniquely identifies a row; a Candidate Key is a minimal Superkey with no redundant attributes.",
    "explanation": "A Superkey is any set of attributes that uniquely identifies a tuple; a candidate key is a minimal superkey.",
    "hasSQL": false
  },
  {
    "id": 256,
    "module": 13,
    "question": "How do you normalize an unnormalized table containing repeating comma-separated values in a single column (e.g., Phone_Numbers = '123, 456, 789') into 1NF?",
    "options": [
      "Split the repeating values into individual rows so that every row-column intersection holds an atomic value.",
      "Combine the phone numbers with the customer name in a single string.",
      "Add a CHECK constraint restricting phone numbers to numbers only.",
      "Create a view that converts numbers to uppercase."
    ],
    "correctIndex": 0,
    "correctAnswer": "Split the repeating values into individual rows so that every row-column intersection holds an atomic value.",
    "explanation": "To convert a table with repeating multi-valued fields into 1NF, separate repeating values into individual rows so every cell contains an atomic value.",
    "hasSQL": false
  },
  {
    "id": 257,
    "module": 13,
    "question": "Which step transforms a table from 1NF to 2NF?",
    "options": [
      "Removing partial functional dependencies by moving attributes depending on part of a composite key into separate tables.",
      "Removing transitive dependencies.",
      "Removing multi-valued dependencies.",
      "Adding synthetic surrogate keys to all tables."
    ],
    "correctIndex": 0,
    "correctAnswer": "Removing partial functional dependencies by moving attributes depending on part of a composite key into separate tables.",
    "explanation": "Removing partial dependencies from a 1NF table elevates the database design to Second Normal Form (2NF).",
    "hasSQL": true
  },
  {
    "id": 258,
    "module": 13,
    "question": "Which step transforms a table from 2NF to 3NF?",
    "options": [
      "Removing transitive functional dependencies (where a non-key attribute determines another non-key attribute).",
      "Removing atomic values.",
      "Removing primary keys from child tables.",
      "Combining all child tables into a parent table."
    ],
    "correctIndex": 0,
    "correctAnswer": "Removing transitive functional dependencies (where a non-key attribute determines another non-key attribute).",
    "explanation": "Removing transitive dependencies from a 2NF table elevates the database design to Third Normal Form (3NF).",
    "hasSQL": true
  },
  {
    "id": 259,
    "module": 13,
    "question": "What does Fourth Normal Form (4NF) deal with?",
    "options": [
      "Eliminating multi-valued dependencies (MVDs) where independent multi-valued attributes exist in a table.",
      "Eliminating partial dependencies on composite keys.",
      "Eliminating single-row subqueries in triggers.",
      "Eliminating NULL values across all columns."
    ],
    "correctIndex": 0,
    "correctAnswer": "Eliminating multi-valued dependencies (MVDs) where independent multi-valued attributes exist in a table.",
    "explanation": "Fourth Normal Form (4NF) eliminates multi-valued dependencies (MVDs) where one attribute determines a set of independent values for another attribute.",
    "hasSQL": true
  },
  {
    "id": 260,
    "module": 13,
    "question": "What is Denormalization and when is it intentionally used?",
    "options": [
      "The intentional process of combining normalized tables to re-introduce controlled redundancy, improving query READ performance at the cost of write efficiency.",
      "An accidental database design mistake that violates 1NF rules.",
      "The process of dropping indexes to save disk space.",
      "Converting relational database tables into NoSQL documents."
    ],
    "correctIndex": 0,
    "correctAnswer": "The intentional process of combining normalized tables to re-introduce controlled redundancy, improving query READ performance at the cost of write efficiency.",
    "explanation": "Denormalization is the intentional process of re-introducing redundancy into a normalized database schema to optimize read/query performance.",
    "hasSQL": false
  }
];
