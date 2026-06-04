/* ----------------------------------------------------
   INTERVUE // CORE APPLICATION & ENGINE LOGIC
   ---------------------------------------------------- */
// ==================== INTERVIEW QUESTIONS DATABASE ====================
const QUESTIONS_DATABASE = {
    "software-engineer": {
        "junior": [
            {
                id: "swe_jr_1",
                question: "Can you tell me about a project you worked on recently? What was your specific role and what technologies did you use?",
                modelAnswer: "Focus on describing your specific contributions, why you chose the technical stack (e.g. React, Node.js), and how you collaborated with others.",
                keywords: { situation: ["project", "school", "built"], task: ["role", "goal", "needed"], action: ["coded", "used", "created", "learned"], result: ["finished", "works", "learned"] }
            },
            {
                id: "swe_jr_2",
                question: "How do you approach debugging a complex issue in your code when you don't immediately know the solution?",
                modelAnswer: "Explain your systematic approach: reproducing the bug, reading log files/console errors, using breakpoints, isolating the code, and researching docs or asking peers.",
                keywords: { situation: ["bug", "error", "failed"], task: ["debug", "find", "resolve"], action: ["console.log", "breakpoints", "isolated", "searched", "docs"], result: ["fixed", "resolved", "understood"] }
            },
            {
                id: "swe_jr_3",
                question: "What is the difference between synchronous and asynchronous programming, and why is asynchronous programming important in modern web apps?",
                modelAnswer: "Synchronous execution blocks subsequent code while waiting, whereas asynchronous execution allows tasks to run in the background (using callbacks, Promises, or async/await) keeping UI responsive.",
                keywords: { situation: ["javascript", "web", "server"], task: ["asynchronous", "blocking", "promise"], action: ["fetch", "wait", "async", "await", "callbacks"], result: ["responsive", "speed", "smooth"] }
            }
        ],
        "mid": [
            {
                id: "swe_mid_1",
                question: "Can you describe a time you had to optimize a piece of code or database query that was performing poorly? What was the result?",
                modelAnswer: "Explain the bottleneck analysis (e.g., using chrome devtools, profiling, database EXPLAIN plans), the exact optimization (indexing, caching, eager loading), and the quantified performance boost (e.g., response time halved).",
                keywords: { situation: ["slow", "performance", "query", "database"], task: ["optimize", "reduce", "bottleneck"], action: ["index", "cached", "profiled", "refactored", "explain"], result: ["percent", "faster", "ms", "reduced", "improved"] }
            },
            {
                id: "swe_mid_2",
                question: "How do you design an application to ensure it is secure against common vulnerabilities like SQL injection or Cross-Site Scripting (XSS)?",
                modelAnswer: "Explain sanitation principles: parameterized queries/prepared statements for SQL, HTML sanitization/escaping for XSS, secure session storage, HTTPS, and regular dependency scanning.",
                keywords: { situation: ["security", "injection", "vulnerability", "xss"], task: ["prevent", "secure", "sanitize"], action: ["parameterized", "orm", "escaping", "headers", "token"], result: ["protected", "safe", "secure"] }
            },
            {
                id: "swe_mid_3",
                question: "Describe a scenario where you had a strong technical disagreement with a team member. How did you resolve it?",
                modelAnswer: "Highlight active listening, reviewing technical pros and cons objectively with data, seeking compromise or creating a rapid prototype to compare, and aligning on standard goals.",
                keywords: { situation: ["disagreement", "differed", "conflict", "discussion"], task: ["align", "resolve", "decide"], action: ["listened", "data", "prototype", "compared", "discussed"], result: ["agreed", "aligned", "resolution", "shipped"] }
            }
        ],
        "senior": [
            {
                id: "swe_sr_1",
                question: "How do you design a highly available and horizontally scalable system for an e-commerce platform that experiences sudden flash traffic spikes?",
                modelAnswer: "Discuss horizontal scaling with autoscaling groups, load balancers, database caching (Redis/Memcached), read replicas, CDN for assets, message queues (RabbitMQ/Kafka) to decouple workloads, and graceful degradation.",
                keywords: { situation: ["scale", "traffic", "spike", "load"], task: ["high availability", "scaling", "bottleneck"], action: ["redis", "cdn", "queue", "replica", "balancer", "decouple"], result: ["uptime", "seconds", "reliable", "millions"] }
            },
            {
                id: "swe_sr_2",
                question: "When inheriting a large, undocumented, monolithic legacy codebase, what is your strategy for modernizing it without disrupting active business operations?",
                modelAnswer: "Start with comprehensive integration testing, introduce observability, identify bounded contexts, apply Strangler Fig Pattern to carve out microservices, and introduce robust CI/CD pipelines.",
                keywords: { situation: ["legacy", "monolith", "undocumented", "messy"], task: ["modernize", "migrate", "rewrite"], action: ["strangler", "carve", "tests", "ci/cd", "observability"], result: ["operational", "seamless", "safely", "modular"] }
            },
            {
                id: "swe_sr_3",
                question: "How do you mentor junior developers on your team, and how do you foster a culture of high engineering standards and constructive code reviews?",
                modelAnswer: "Set clear guidelines, emphasize 'why' rather than 'what', conduct pair programming sessions, separate code reviews from personal evaluation, and write descriptive review templates emphasizing positive reinforcement.",
                keywords: { situation: ["junior", "team", "review", "culture"], task: ["mentor", "standards", "improve"], action: ["paired", "guidelines", "reviewed", "templates", "explained"], result: ["growth", "quality", "collaborative", "confidence"] }
            }
        ]
    },
    "frontend-developer": {
        "junior": [
            {
                id: "fe_jr_1",
                question: "What is the CSS box model, and how does setting 'box-sizing: border-box' change the way elements are sized?",
                modelAnswer: "Box model comprises Content, Padding, Border, and Margin. With 'content-box' (default), width/height apply only to content. With 'border-box', width/height include content, padding, and border, making layouts predictable.",
                keywords: { situation: ["css", "layout", "box"], task: ["sizing", "sizing-model"], action: ["border-box", "padding", "border", "content-box"], result: ["aligned", "predictable", "fixed"] }
            },
            {
                id: "fe_jr_2",
                question: "Can you explain how the DOM works, and what the key differences are between the virtual DOM and the real DOM?",
                modelAnswer: "DOM is tree representation of HTML. Real DOM updates cause heavy layout re-calculations. Virtual DOM (e.g. in React) is a lightweight copy; updates are batched and synced via diffing algorithms to optimize painting.",
                keywords: { situation: ["dom", "browser", "html"], task: ["render", "update", "react"], action: ["virtual", "diffing", "batching", "reconciliation"], result: ["faster", "performant", "smooth"] }
            }
        ],
        "mid": [
            {
                id: "fe_mid_1",
                question: "How do you optimize a web application to achieve high Google Lighthouse scores, specifically focusing on metrics like First Contentful Paint and Cumulative Layout Shift?",
                modelAnswer: "Optimize images (WebP, explicit sizing), implement code splitting/lazy loading, defer non-critical JS, use critical inline CSS, preconnect resources, and ensure fonts are loaded using 'font-display: swap'.",
                keywords: { situation: ["slow", "lighthouse", "performance", "core web vitals"], task: ["fcp", "cls", "optimize", "speed"], action: ["splitting", "lazy", "webp", "preload", "fonts", "minify"], result: ["score", "increased", "faster", "ms", "lighthouse"] }
            },
            {
                id: "fe_mid_2",
                question: "Describe your approach to implementing state management in a large-scale single-page application. When do you use local vs. global state?",
                modelAnswer: "Use local component state (useState) for UI-only variables. Use global state managers (Redux, Zustand, Context API) for shared data like user sessions, shopping carts, or app-wide settings to prevent prop-drilling.",
                keywords: { situation: ["spa", "state", "scale", "props"], task: ["manage", "sharing", "drill"], action: ["redux", "zustand", "context", "localstate", "reducer"], result: ["organized", "clean", "maintainable"] }
            }
        ],
        "senior": [
            {
                id: "fe_sr_1",
                question: "What is your architectural checklist when setting up a brand-new frontend project? How do you ensure modularity, accessibility, and high performance from day one?",
                modelAnswer: "Include TypeScript, strict ESLint/Prettier, component-driven design (Atomic Design), semantic HTML with ARIA descriptors, automated accessibility testing (axe-core), bundle analyzers, static builds, and automated CI/CD.",
                keywords: { situation: ["new project", "setup", "architecture"], task: ["scalability", "accessibility", "maintainability"], action: ["typescript", "aria", "linting", "atomic", "bundle", "ci/cd"], result: ["robust", "accessible", "scalable", "lighthouse 100"] }
            }
        ]
    },
    "backend-developer": {
        "junior": [
            {
                id: "be_jr_1",
                question: "What is a RESTful API? Can you name the main HTTP verbs and explain what HTTP status codes in the 200, 400, and 500 ranges mean?",
                modelAnswer: "REST organizes resources via URLs. Verbs: GET (read), POST (create), PUT (update), DELETE. Codes: 2xx represents success (200 OK), 4xx represents client errors (400 Bad Request), 5xx represents server errors (500 Internal Error).",
                keywords: { situation: ["api", "rest", "web"], task: ["request", "response", "endpoints"], action: ["get", "post", "put", "delete", "status", "headers"], result: ["parsed", "success", "resolved"] }
            }
        ],
        "mid": [
            {
                id: "be_mid_1",
                question: "How do you handle database concurrency issues, like two users trying to book the exact same concert ticket simultaneously?",
                modelAnswer: "Discuss locking strategies: Pessimistic Locking (blocking records during transaction) or Optimistic Locking (version columns checking changes before commit), or utilizing atomic database operations and queue systems.",
                keywords: { situation: ["booking", "concurrency", "simultaneous", "race condition"], task: ["lock", "prevent", "double"], action: ["pessimistic", "optimistic", "version", "transaction", "isolation"], result: ["exact", "integrity", "prevented", "booked"] }
            }
        ],
        "senior": [
            {
                id: "be_sr_1",
                question: "Explain the microservices architecture. When is it beneficial to move away from a monolith, and what network transport layers (e.g. gRPC, REST, WebSockets) would you select?",
                modelAnswer: "Benefits include independent scaling and deployments. Select REST for external APIs, gRPC (Protocol Buffers) for internal synchronous high-throughput services due to speed, and Kafka/RabbitMQ for asynchronous event-driven queues.",
                keywords: { situation: ["monolith", "scale", "microservices"], task: ["decouple", "architect", "network"], action: ["grpc", "protobufs", "rest", "kafka", "rabbit", "queues"], result: ["decoupled", "scaled", "throughput", "isolated"] }
            }
        ]
    },
    "data-scientist": {
        "mid": [
            {
                id: "ds_mid_1",
                question: "What is overfitting in machine learning? How do you diagnose it, and what techniques do you use to prevent it in your models?",
                modelAnswer: "Overfitting is when a model learns training data noise too well, failing to generalize. Diagnose via a gap between train and test loss. Prevent via regularization (L1/L2), dropout, early stopping, cross-validation, and pruning.",
                keywords: { situation: ["model", "learning", "data"], task: ["overfitting", "generalize", "noise"], action: ["regularization", "dropout", "validation", "stopping", "l1", "l2"], result: ["accuracy", "generalizes", "balanced"] }
            }
        ],
        "senior": [
            {
                id: "ds_sr_1",
                question: "How do you handle feature engineering and model evaluation for highly imbalanced datasets, such as in credit card fraud detection?",
                modelAnswer: "Avoid using simple Accuracy. Use Precision, Recall, F1-Score, and ROC-AUC. Address imbalance using SMOTE resampling, class weighting, tree-based models (XGBoost), or converting the task to anomaly detection.",
                keywords: { situation: ["imbalanced", "fraud", "skewed"], task: ["evaluation", "metric", "resample"], action: ["smote", "precision", "recall", "auc", "xgboost", "weights"], result: ["detected", "f1", "minimized", "recall"] }
            }
        ]
    },
    "product-manager": {
        "mid": [
            {
                id: "pm_mid_1",
                question: "How do you prioritize your product roadmap when faced with competing requests from engineering, sales, and executives?",
                modelAnswer: "Use prioritization frameworks like RICE (Reach, Impact, Confidence, Effort) or Kano. Align features with strategic business goals, gather user data, and balance quick wins with strategic initiatives.",
                keywords: { situation: ["roadmap", "requests", "backlog"], task: ["prioritize", "align", "effort"], action: ["rice", "kano", "framework", "metrics", "interviewed"], result: ["impact", "shipped", "aligned", "revenue"] }
            }
        ],
        "senior": [
            {
                id: "pm_sr_1",
                question: "Describe a product launch that failed. How did you measure failure, what were the root causes, and what did you learn?",
                modelAnswer: "Explain the context, key failure metrics (e.g. low adoption, churn), root cause analysis (poor product-market fit, bad onboarding), and the concrete lessons implemented in subsequent launches.",
                keywords: { situation: ["failed", "launch", "metrics", "adoption"], task: ["analyze", "root cause", "learn"], action: ["interviewed", "analytics", "churn", "adjusted", "pivoted"], result: ["learned", "growth", "improved", "success"] }
            }
        ]
    },
    "behavioral-only": {
        "junior": [
            {
                id: "beh_jr_1",
                question: "Can you describe a time when you had to work under a tight deadline? How did you manage your time and ensure high-quality results?",
                modelAnswer: "Apply the STAR method. Describe the situation, the deadline bottleneck, your prioritization actions (e.g., scoping MVP, reducing distractions, daily standups), and the successful delivery on time.",
                keywords: { situation: ["deadline", "rush", "time", "tight"], task: ["prioritize", "manage", "schedule"], action: ["mvp", "scoped", "focused", "standup", "delegated"], result: ["delivered", "quality", "percent", "on time"] }
            }
        ],
        "mid": [
            {
                id: "beh_mid_1",
                question: "Tell me about a time you made a mistake on a project. How did you discover it, what did you do to fix it, and what did you learn?",
                modelAnswer: "Apply the STAR method. Take accountability, explain the immediate corrective actions, show how you communicated the mistake transparently, and discuss the preventative processes you established later.",
                keywords: { situation: ["mistake", "bug", "broke", "error"], task: ["fix", "resolve", "correct"], action: ["owned", "reverted", "communicated", "patched", "alerts"], result: ["learned", "prevented", "improved", "safeguard"] }
            }
        ],
        "senior": [
            {
                id: "beh_sr_1",
                question: "Describe a time you had to lead a critical project with vague or changing requirements. How did you keep the team aligned and deliver value?",
                modelAnswer: "Apply the STAR method. Highlight establishing agile iterations, creating alignment through clear milestones, building flexible architectures, conducting feedback sessions, and communicating status clearly to stakeholders.",
                keywords: { situation: ["vague", "changing", "scope", "ambiguous"], task: ["align", "lead", "coordinate"], action: ["agile", "milestones", "flexible", "iterated", "comms"], result: ["delivered", "shipped", "aligned", "success"] }
            }
        ]
    }
};
// Fallback questions for category mismatches
const FALLBACK_QUESTIONS = [
    {
        id: "fb_1",
        question: "Can you describe a challenging technical or operational problem you solved recently? What was your approach?",
        modelAnswer: "Explain the bottleneck, your structured diagnostic steps, why you chose the final solution, and what positive impact it created.",
        keywords: { situation: ["problem", "challenge", "bottleneck"], task: ["solve", "investigate", "fix"], action: ["analyzed", "designed", "implemented", "resolved"], result: ["fixed", "improved", "metrics"] }
    }
];
// Vocal Twisters list
const TONGUE_TWISTERS = [
    { text: "Red leather, yellow leather, red leather, yellow leather.", caption: "Relaxes the throat and sharpens articulation." },
    { text: "She sells sanctuary seashells by the shimmering seashore.", caption: "Excellent for sibilant clarity and pace control." },
    { text: "Proper copper coffee pot, proper copper coffee pot.", caption: "Loosens up the lips and jaw muscles." },
    { text: "A smart scientist feels comfortable speaking clearly.", caption: "Focuses on steady breathing and vocal resonance." }
];
// Affirmations list
const AFFIRMATIONS = [
    { text: "An interview is just a mutual conversation to see if we're a good fit, not an interrogation.", caption: "Psychological Reset" },
    { text: "I possess the exact skills and expertise I need. I am simply sharing my story.", caption: "Confidence Anchor" },
    { text: "If I make a mistake, I can pause, smile, take a breath, and redirect. It shows maturity.", caption: "Grace Under Pressure" },
    { text: "My pacing is steady. I speak with authority when I speak slowly.", caption: "Vocal Alignment" }
];
// ==================== STATE MANAGEMENT ====================
const state = {
    // Session Configuration
    role: "software-engineer",
    level: "mid",
    qLength: 5,
    personality: "friendly",
    voiceEnabled: true,
    speechRecEnabled: true,
    
    // Warm-up States
    twisterIndex: 0,
    affirmationIndex: 0,
    breathingTimer: null,
    breathingMode: "idle", // 'idle', 'inhale', 'hold', 'exhale'
    breathingTicks: 0,
    
    // Simulator States
    questions: [],
    currentQuestionIndex: 0,
    sessionAnswers: [], // Array of { questionObj, userTranscript, wpm, fillers: {}, comfortScore, starCheck: {} }
    
    // Real-time Analytics States
    elapsedSeconds: 0,
    timerInterval: null,
    wordCount: 0,
    fillerHits: {
        "um": 0, // covers 'um', 'uh'
        "like": 0,
        "so": 0, // covers 'so', 'basically'
        "you-know": 0
    },
    liveTranscript: "",
    comfortScore: 100,
    
    // Speech Recognition & Synthesis refs
    recognition: null,
    synth: window.speechSynthesis,
    activeVoice: null,
    speechActive: false
};
// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Check Speech Recognition support
    checkSpeechSupport();
    
    // Attach Event Listeners
    setupEventListeners();
    
    // Load local history
    loadSessionHistory();
});
// ==================== EVENT LISTENERS SETUP ====================
function setupEventListeners() {
    // Screen 1: Welcome page
    const personalityLabels = document.querySelectorAll(".personality-option");
    personalityLabels.forEach(label => {
        label.addEventListener("click", () => {
            personalityLabels.forEach(l => l.classList.remove("active"));
            label.classList.add("active");
        });
    });
    document.getElementById("btn-enter-warmup").addEventListener("click", navigateToWarmup);
    
    // Screen 2: Calming Zone
    document.getElementById("btn-start-breathing").addEventListener("click", startBreathing);
    document.getElementById("btn-stop-breathing").addEventListener("click", stopBreathing);
    document.getElementById("btn-next-twister").addEventListener("click", nextTwister);
    document.getElementById("btn-next-affirmation").addEventListener("click", nextAffirmation);
    document.getElementById("btn-back-to-setup").addEventListener("click", () => switchScreen("screen-welcome"));
    document.getElementById("btn-start-simulation").addEventListener("click", startMockInterview);
    // Screen 3: Simulator Page
    document.getElementById("btn-toggle-mic").addEventListener("click", toggleSpeechInput);
    document.getElementById("btn-pause-mic").addEventListener("click", pauseSpeechInput);
    document.getElementById("btn-clear-response").addEventListener("click", clearResponseArea);
    document.getElementById("btn-submit-answer").addEventListener("click", submitAnswer);
    document.getElementById("btn-repeat-question").addEventListener("click", () => speakQuestion(state.questions[state.currentQuestionIndex].question));
    document.getElementById("btn-sim-emergency-calm").addEventListener("click", openEmergencyCalm);
    
    // Modal Calm
    document.getElementById("btn-close-calming-modal").addEventListener("click", closeEmergencyCalm);
    document.getElementById("btn-close-calming-modal-btn").addEventListener("click", closeEmergencyCalm);
    
    // Screen 4: Report Page
    document.getElementById("btn-new-interview").addEventListener("click", resetToNewSession);
    document.getElementById("btn-download-session").addEventListener("click", downloadReportJSON);
    document.getElementById("btn-clear-history").addEventListener("click", clearSessionHistory);
    
    // Textarea input watcher (fallback if voice is disabled or keyboard override is used)
    const textAnswerArea = document.getElementById("user-response-textarea");
    textAnswerArea.addEventListener("input", handleManualTextInput);
}
// Check if browser supports speech APIs
function checkSpeechSupport() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const supportBadge = document.getElementById("speech-support-badge");
    
    if (!SpeechRec) {
        supportBadge.innerHTML = `<i data-lucide="mic-off"></i> Keyboard Mode`;
        supportBadge.classList.replace("badge-emerald", "badge-amber");
        state.speechRecEnabled = false;
        document.getElementById("enable-speech-rec").checked = false;
        document.getElementById("enable-speech-rec").disabled = true;
        lucide.createIcons();
    }
}
// ==================== SCREEN SWITCHER ====================
function switchScreen(screenId) {
    const screens = document.querySelectorAll(".app-screen");
    screens.forEach(screen => {
        screen.classList.remove("active");
    });
    
    const activeScreen = document.getElementById(screenId);
    activeScreen.classList.add("active");
    window.scrollTo(0, 0);
}
// ==================== NAVIGATION: SETUP -> WARM-UP ====================
function navigateToWarmup() {
    // Capture user configuration
    state.role = document.getElementById("job-role").value;
    state.level = document.getElementById("experience-level").value;
    state.qLength = parseInt(document.getElementById("session-length").value);
    
    const activePersonality = document.querySelector('input[name="interviewer-personality"]:checked').value;
    state.personality = activePersonality;
    
    state.voiceEnabled = document.getElementById("enable-voice-synth").checked;
    // speech recognition checkbox config
    const speechBox = document.getElementById("enable-speech-rec");
    state.speechRecEnabled = speechBox ? speechBox.checked : false;
    // Pick voices based on personality
    selectInterviewerVoice();
    // Switch Screen
    switchScreen("screen-warmup");
}
function selectInterviewerVoice() {
    if (!state.synth) return;
    
    const voices = state.synth.getVoices();
    if (!voices || voices.length === 0) {
        // Wait for voices to load
        state.synth.onvoiceschanged = selectInterviewerVoice;
        return;
    }
    
    // Attempt to pick a good sounding voice (UK English, US English, or similar)
    const matchStrings = {
        friendly: ["google uk english female", "zira", "hazel", "female", "en-gb", "en-us"],
        neutral: ["google us english", "david", "mark", "en-us", "en-gb"],
        stress: ["google us english male", "ravi", "george", "male", "en-us", "en-in"]
    };
    
    const priorities = matchStrings[state.personality] || matchStrings.neutral;
    for (let term of priorities) {
        let found = voices.find(v => v.name.toLowerCase().includes(term));
        if (found) {
            state.activeVoice = found;
            break;
        }
    }
    
    if (!state.activeVoice) {
        state.activeVoice = voices.find(v => v.lang.startsWith("en")) || voices[0];
    }
}
// ==================== CALMING COOPERATIVE ZONE LOGIC ====================
// 4-7-8 Breathing Loop
function startBreathing() {
    stopBreathing();
    
    const startBtn = document.getElementById("btn-start-breathing");
    const stopBtn = document.getElementById("btn-stop-breathing");
    
    startBtn.classList.add("hidden");
    stopBtn.classList.remove("hidden");
    
    runBreathingCycle();
}
function runBreathingCycle() {
    const container = document.querySelector(".breathe-container");
    const instruction = document.querySelector(".breathe-instruction");
    const timerText = document.querySelector(".breathe-timer");
    
    // Initial loop State: Inhale 4s
    state.breathingMode = "inhale";
    state.breathingTicks = 4;
    
    container.className = "breathe-container inhale";
    instruction.innerText = "Inhale...";
    timerText.innerText = `${state.breathingTicks}s`;
    
    state.breathingTimer = setInterval(() => {
        state.breathingTicks--;
        
        if (state.breathingTicks <= 0) {
            // State Transition
            if (state.breathingMode === "inhale") {
                state.breathingMode = "hold";
                state.breathingTicks = 7;
                container.className = "breathe-container hold";
                instruction.innerText = "Hold Breathe...";
            } else if (state.breathingMode === "hold") {
                state.breathingMode = "exhale";
                state.breathingTicks = 8;
                container.className = "breathe-container exhale";
                instruction.innerText = "Exhale slowly...";
            } else if (state.breathingMode === "exhale") {
                state.breathingMode = "inhale";
                state.breathingTicks = 4;
                container.className = "breathe-container inhale";
                instruction.innerText = "Inhale...";
            }
        }
        
        timerText.innerText = `${state.breathingTicks}s`;
    }, 1000);
}
function stopBreathing() {
    if (state.breathingTimer) {
        clearInterval(state.breathingTimer);
        state.breathingTimer = null;
    }
    
    state.breathingMode = "idle";
    
    const container = document.querySelector(".breathe-container");
    const instruction = document.querySelector(".breathe-instruction");
    const timerText = document.querySelector(".breathe-timer");
    
    if (container) container.className = "breathe-container";
    if (instruction) instruction.innerText = "Ready";
    if (timerText) timerText.innerText = "4s";
    
    const startBtn = document.getElementById("btn-start-breathing");
    const stopBtn = document.getElementById("btn-stop-breathing");
    
    if (startBtn) startBtn.classList.remove("hidden");
    if (stopBtn) stopBtn.classList.add("hidden");
}
// Emergency Breathing modal overlay during simulator
function openEmergencyCalm() {
    // Pause any active speech recognition
    if (state.recognition && state.speechActive) {
        state.recognition.stop();
    }
    
    const modal = document.getElementById("calming-modal");
    modal.classList.remove("hidden");
    
    // Run breath loops inside modal
    const modalContainer = modal.querySelector(".breathe-container");
    const modalInstruction = modal.querySelector(".breathe-instruction");
    const modalTimer = modal.querySelector(".breathe-timer");
    
    let modalTicks = 4;
    let modalMode = "inhale";
    
    modalContainer.className = "breathe-container modal-breathe inhale";
    modalInstruction.innerText = "Inhale...";
    modalTimer.innerText = "4s";
    
    state.modalBreathingTimer = setInterval(() => {
        modalTicks--;
        if (modalTicks <= 0) {
            if (modalMode === "inhale") {
                modalMode = "hold";
                modalTicks = 7;
                modalContainer.className = "breathe-container modal-breathe hold";
                modalInstruction.innerText = "Hold...";
            } else if (modalMode === "hold") {
                modalMode = "exhale";
                modalTicks = 8;
                modalContainer.className = "breathe-container modal-breathe exhale";
                modalInstruction.innerText = "Exhale...";
            } else if (modalMode === "exhale") {
                modalMode = "inhale";
                modalTicks = 4;
                modalContainer.className = "breathe-container modal-breathe inhale";
                modalInstruction.innerText = "Inhale...";
            }
        }
        modalTimer.innerText = `${modalTicks}s`;
    }, 1000);
}
function closeEmergencyCalm() {
    if (state.modalBreathingTimer) {
        clearInterval(state.modalBreathingTimer);
    }
    
    document.getElementById("calming-modal").classList.add("hidden");
    
    // Resume mic recording if enabled and voice was previously listening
    if (state.speechRecEnabled && document.getElementById("btn-toggle-mic").classList.contains("btn-emerald")) {
        startSpeechRecognition();
    }
}
// Dynamic twister warmups switching
function nextTwister() {
    state.twisterIndex = (state.twisterIndex + 1) % TONGUE_TWISTERS.length;
    const current = TONGUE_TWISTERS[state.twisterIndex];
    document.getElementById("tongue-twister-text").innerText = `"${current.text}"`;
    document.querySelector("#tongue-twister-box .box-caption").innerText = current.caption;
}
// Dynamic affirmations switching
function nextAffirmation() {
    state.affirmationIndex = (state.affirmationIndex + 1) % AFFIRMATIONS.length;
    const current = AFFIRMATIONS[state.affirmationIndex];
    document.getElementById("affirmation-text").innerText = `"${current.text}"`;
    document.querySelector("#affirmation-box .box-caption").innerText = current.caption;
}
// ==================== SIMULATOR CORE ENGINE ====================
function startMockInterview() {
    // Make sure breathing sequences are disabled
    stopBreathing();
    
    // Retrieve correct category of questions
    let pool = [];
    if (QUESTIONS_DATABASE[state.role] && QUESTIONS_DATABASE[state.role][state.level]) {
        pool = QUESTIONS_DATABASE[state.role][state.level];
    } else {
        pool = FALLBACK_QUESTIONS;
    }
    
    // Shuffle and pick session questions
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    state.questions = shuffled.slice(0, state.qLength);
    
    // Reset state values
    state.currentQuestionIndex = 0;
    state.sessionAnswers = [];
    
    // Setup UI markers
    const roleTextMap = {
        "software-engineer": "Software Generalist",
        "frontend-developer": "Frontend Engineer",
        "backend-developer": "Backend Engineer",
        "data-scientist": "Data Scientist",
        "product-manager": "Product Manager",
        "behavioral-only": "Behavioral Only"
    };
    
    const badgeEl = document.getElementById("sim-role-badge");
    badgeEl.innerText = `${roleTextMap[state.role]} (${state.level.toUpperCase()})`;
    
    // Navigate to Simulator
    switchScreen("screen-simulation");
    
    // Load Question 1
    loadQuestion(0);
}
function loadQuestion(index) {
    if (index >= state.questions.length) {
        completeSession();
        return;
    }
    
    // Stop speaking if active
    if (state.synth) {
        state.synth.cancel();
    }
    
    // Stop recording if active
    if (state.recognition && state.speechActive) {
        state.recognition.stop();
    }
    
    // Load question details
    state.currentQuestionIndex = index;
    const questionObj = state.questions[index];
    
    // Reset live timers and counts
    state.elapsedSeconds = 0;
    state.wordCount = 0;
    state.liveTranscript = "";
    state.comfortScore = 100;
    state.fillerHits = { "um": 0, "like": 0, "so": 0, "you-know": 0 };
    
    // Update question counters
    document.getElementById("sim-question-counter").innerText = `Question ${index + 1} of ${state.questions.length}`;
    const percent = ((index) / state.questions.length) * 100;
    document.getElementById("sim-progress-fill").style.width = `${percent}%`;
    
    // Set UI values
    document.getElementById("interviewer-question-text").innerText = `"${questionObj.question}"`;
    
    const persNames = {
        friendly: "Interviewer (Warm & Friendly)",
        neutral: "Interviewer (Professional)",
        stress: "Interviewer (Challenging & Fast)"
    };
    document.getElementById("interviewer-name-tag").innerText = persNames[state.personality];
    
    // Clear response textarea
    const ta = document.getElementById("user-response-textarea");
    ta.value = "";
    ta.placeholder = state.speechRecEnabled ? "Click 'Start Speaking' to answer with your voice, or start typing directly..." : "Voice recognition is disabled. Type your answer here...";
    
    // Reset Live sidecoach panels
    document.getElementById("live-wpm").innerText = "0 WPM";
    document.getElementById("speed-pointer").style.left = "50%";
    document.getElementById("live-pacing-feedback").innerText = "Start speaking to track pacing. Keep it steady.";
    document.getElementById("live-fillers-total").innerText = "0 words";
    document.querySelectorAll(".filler-pill").forEach(p => {
        p.classList.remove("active-hit");
        p.querySelector(".count").innerText = "0";
    });
    
    document.getElementById("live-comfort-score").innerText = "100%";
    document.getElementById("live-comfort-bar").style.width = "100%";
    document.getElementById("live-comfort-bar").style.backgroundColor = "var(--emerald)";
    document.getElementById("live-anxiety-tip").innerText = "Solid pause control and clean articulation. Keep it up!";
    
    // Reset mic buttons
    resetMicControls();
    // Trigger Voice synthesis if configured
    if (state.voiceEnabled) {
        speakQuestion(questionObj.question);
    } else {
        setInterviewerStatus("idle");
    }
}
// ==================== SPEECH SYNTHESIS ENGINE ====================
function speakQuestion(text) {
    if (!state.synth) return;
    
    state.synth.cancel(); // Stop anything else
    
    setInterviewerStatus("speaking");
    
    const utterance = new SpeechSynthesisUtterance(text);
    if (state.activeVoice) {
        utterance.voice = state.activeVoice;
    }
    
    // Configure voice speed based on personality setting
    if (state.personality === "friendly") {
        utterance.rate = 0.88;
        utterance.pitch = 1.02;
    } else if (state.personality === "stress") {
        utterance.rate = 1.15;
        utterance.pitch = 0.95;
    } else {
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
    }
    
    utterance.onend = () => {
        setInterviewerStatus("listening");
        
        // Auto-trigger Speech recognition if configured & enabled
        if (state.speechRecEnabled) {
            startSpeechRecognition();
        }
    };
    
    utterance.onerror = () => {
        setInterviewerStatus("idle");
    };
    
    state.synth.speak(utterance);
}
function setInterviewerStatus(status) {
    const avatarContainer = document.querySelector(".interviewer-avatar-container");
    const statusBadge = document.getElementById("interviewer-status-badge");
    const waveEl = document.getElementById("interviewer-wave");
    const botIcon = document.getElementById("avatar-bot-icon");
    
    if (status === "speaking") {
        avatarContainer.className = "interviewer-avatar-container speaking";
        statusBadge.innerText = "Speaking...";
        if (waveEl) waveEl.classList.remove("hidden");
        if (botIcon) botIcon.classList.add("hidden");
    } else if (status === "listening") {
        avatarContainer.className = "interviewer-avatar-container listening";
        statusBadge.innerText = "Listening...";
        if (waveEl) waveEl.classList.add("hidden");
        if (botIcon) botIcon.classList.remove("hidden");
    } else {
        avatarContainer.className = "interviewer-avatar-container";
        statusBadge.innerText = "Idle";
        if (waveEl) waveEl.classList.add("hidden");
        if (botIcon) botIcon.classList.remove("hidden");
    }
}
// ==================== SPEECH RECOGNITION ENGINE ====================
function startSpeechRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) return;
    
    if (state.recognition) {
        state.recognition.abort();
    }
    
    state.recognition = new SpeechRec();
    state.recognition.continuous = true;
    state.recognition.interimResults = true;
    state.recognition.lang = 'en-US';
    
    state.recognition.onstart = () => {
        state.speechActive = true;
        
        // Update mic button style to listening
        const micBtn = document.getElementById("btn-toggle-mic");
        micBtn.className = "btn btn-emerald btn-glow";
        document.getElementById("btn-mic-text").innerText = "Listening Voice";
        
        document.getElementById("btn-pause-mic").classList.remove("hidden");
        document.getElementById("rec-recording-badge").classList.remove("hidden");
        document.getElementById("rec-paused-badge").classList.add("hidden");
        document.getElementById("voice-waves").classList.remove("hidden");
        
        // Start live session timer
        startRecordingTimer();
    };
    
    state.recognition.onresult = (event) => {
        let finalTrans = "";
        let interimTrans = "";
        
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTrans += event.results[i][0].transcript;
            } else {
                interimTrans += event.results[i][0].transcript;
            }
        }
        
        // Update response text area
        const currentBuffer = state.liveTranscript + finalTrans;
        const currentFull = currentBuffer + interimTrans;
        
        document.getElementById("user-response-textarea").value = currentFull;
        
        // Perform real-time speech analytics!
        analyzeSpeechInput(currentFull);
    };
    
    state.recognition.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
        if (event.error === "not-allowed") {
            alert("Microphone permission denied. Please allow microphone access in your browser or type your responses manually!");
            stopRecordingTimer();
            resetMicControls();
        }
    };
    
    state.recognition.onend = () => {
        state.speechActive = false;
        document.getElementById("rec-recording-badge").classList.add("hidden");
        document.getElementById("voice-waves").classList.add("hidden");
        
        // Append final transcript
        state.liveTranscript = document.getElementById("user-response-textarea").value;
    };
    
    state.recognition.start();
}
function stopSpeechRecognition() {
    if (state.recognition && state.speechActive) {
        state.recognition.stop();
        stopRecordingTimer();
    }
}
function toggleSpeechInput() {
    if (!state.speechRecEnabled) {
        alert("Speech Recognition is not supported by your current browser. You can type your responses!");
        return;
    }
    
    const micBtn = document.getElementById("btn-toggle-mic");
    
    if (micBtn.classList.contains("btn-emerald")) {
        // Stop/Pause listening
        stopSpeechRecognition();
        micBtn.className = "btn btn-primary";
        document.getElementById("btn-mic-text").innerText = "Resume Speaking";
        document.getElementById("btn-pause-mic").classList.add("hidden");
        document.getElementById("rec-paused-badge").classList.remove("hidden");
    } else {
        // Start listening
        startSpeechRecognition();
    }
}
function pauseSpeechInput() {
    stopSpeechRecognition();
    
    const micBtn = document.getElementById("btn-toggle-mic");
    micBtn.className = "btn btn-primary";
    document.getElementById("btn-mic-text").innerText = "Resume Speaking";
    document.getElementById("btn-pause-mic").classList.add("hidden");
    document.getElementById("rec-paused-badge").classList.remove("hidden");
}
function resetMicControls() {
    const micBtn = document.getElementById("btn-toggle-mic");
    micBtn.className = "btn btn-primary";
    document.getElementById("btn-mic-text").innerText = state.speechRecEnabled ? "Start Speaking" : "Keyboard Only";
    document.getElementById("btn-pause-mic").classList.add("hidden");
    document.getElementById("rec-recording-badge").classList.add("hidden");
    document.getElementById("rec-paused-badge").classList.add("hidden");
    document.getElementById("voice-waves").classList.add("hidden");
    
    stopRecordingTimer();
}
function clearResponseArea() {
    document.getElementById("user-response-textarea").value = "";
    state.liveTranscript = "";
    state.wordCount = 0;
    
    // Reset specific live scoring
    state.fillerHits = { "um": 0, "like": 0, "so": 0, "you-know": 0 };
    document.querySelectorAll(".filler-pill").forEach(p => {
        p.classList.remove("active-hit");
        p.querySelector(".count").innerText = "0";
    });
    document.getElementById("live-fillers-total").innerText = "0 words";
    document.getElementById("live-comfort-score").innerText = "100%";
    document.getElementById("live-comfort-bar").style.width = "100%";
    document.getElementById("live-comfort-bar").style.backgroundColor = "var(--emerald)";
}
// Live Session Timer
function startRecordingTimer() {
    if (state.timerInterval) return;
    
    state.timerInterval = setInterval(() => {
        state.elapsedSeconds++;
        // Trigger WPM refresh if typing has occurred
        if (state.wordCount > 0) {
            updateLivePacingMetrics();
        }
    }, 1000);
}
function stopRecordingTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}
// ==================== REAL-TIME TELEMETRY & SPEECH COCHING ====================
function handleManualTextInput() {
    // If typing manually, start timer automatically
    if (state.elapsedSeconds === 0) {
        startRecordingTimer();
    }
    
    const text = document.getElementById("user-response-textarea").value;
    analyzeSpeechInput(text);
}
function analyzeSpeechInput(text) {
    if (!text.trim()) {
        state.wordCount = 0;
        return;
    }
    
    // 1. Calculate word counts
    const cleanText = text.trim().replace(/\s+/g, ' ');
    const words = cleanText.split(' ');
    state.wordCount = words.length;
    
    // 2. Count Filler words using exact boundary regex
    const fillerPatterns = {
        "um": /\b(um|uh)\b/gi,
        "like": /\b(like)\b/gi,
        "so": /\b(so|basically)\b/gi,
        "you-know": /\b(you know)\b/gi
    };
    
    let totalFillers = 0;
    
    Object.keys(fillerPatterns).forEach(key => {
        const matches = text.match(fillerPatterns[key]);
        const count = matches ? matches.length : 0;
        
        const pill = document.querySelector(`.filler-pill[data-word="${key}"]`);
        const countEl = document.getElementById(`count-${key}`);
        
        // If count increased, trigger a brief glow highlight!
        if (count > state.fillerHits[key]) {
            pill.classList.add("active-hit");
            setTimeout(() => {
                pill.classList.remove("active-hit");
            }, 800);
        }
        
        state.fillerHits[key] = count;
        countEl.innerText = count;
        totalFillers += count;
    });
    
    document.getElementById("live-fillers-total").innerText = `${totalFillers} word${totalFillers === 1 ? '' : 's'}`;
    
    // 3. Compute dynamic pacing
    updateLivePacingMetrics();
    
    // 4. Calculate live comfort score
    computeComfortScore(totalFillers);
}
function updateLivePacingMetrics() {
    if (state.elapsedSeconds <= 0) return;
    
    const min = state.elapsedSeconds / 60;
    const wpm = Math.round(state.wordCount / min);
    
    document.getElementById("live-wpm").innerText = `${wpm} WPM`;
    
    // Speedometer needle left position adjustment (bounded between 5% and 95%)
    // Perfect range: 110-150. Speedometer limits: 50 WPM - 200 WPM
    let percent = 50; // midpoint default
    if (wpm < 50) {
        percent = 5 + (wpm / 50) * 20; // 5% to 25%
    } else if (wpm >= 50 && wpm < 110) {
        percent = 25 + ((wpm - 50) / 60) * 20; // 25% to 45%
    } else if (wpm >= 110 && wpm <= 150) {
        percent = 45 + ((wpm - 110) / 40) * 15; // 45% to 60%
    } else if (wpm > 150 && wpm < 200) {
        percent = 60 + ((wpm - 150) / 50) * 25; // 60% to 85%
    } else {
        percent = 85 + Math.min(10, ((wpm - 200) / 100) * 10); // 85% to 95%
    }
    
    const pointer = document.getElementById("speed-pointer");
    pointer.style.left = `${percent}%`;
    
    // Custom Live coaching feedback
    const tipEl = document.getElementById("live-pacing-feedback");
    if (wpm < 85) {
        tipEl.innerHTML = `<span class="text-indigo">Pacing is quite slow (${wpm} WPM). Speak with slightly more flow, but keep your breathing comfortable.</span>`;
    } else if (wpm >= 85 && wpm < 110) {
        tipEl.innerHTML = `<span class="text-emerald">Nice, steady slow pace. Highly articulate and clear for technical system details.</span>`;
    } else if (wpm >= 110 && wpm <= 150) {
        tipEl.innerHTML = `<span class="text-emerald">✨ Perfect storytelling pace (${wpm} WPM). You sound extremely confident and structured.</span>`;
    } else if (wpm > 150 && wpm <= 175) {
        tipEl.innerHTML = `<span class="text-amber">Pacing is a bit rushed (${wpm} WPM). Take a quick breath, drop your shoulders, and slow down.</span>`;
    } else {
        tipEl.innerHTML = `<span class="text-danger">Speaking very fast (${wpm} WPM). Relax, there is no rush. Pause after full sentences.</span>`;
    }
}
function computeComfortScore(totalFillers) {
    // Math: starts at 100. Deduct 4% for every filler word.
    // Also deduct if pacing is extreme (fast WPM or slow WPM).
    let score = 100 - (totalFillers * 4);
    
    const min = state.elapsedSeconds / 60;
    const wpm = min > 0 ? Math.round(state.wordCount / min) : 120;
    
    if (wpm > 165) {
        score -= 10;
    } else if (wpm < 70) {
        score -= 8;
    }
    
    score = Math.max(10, Math.min(100, score));
    state.comfortScore = score;
    
    document.getElementById("live-comfort-score").innerText = `${score}%`;
    
    const bar = document.getElementById("live-comfort-bar");
    bar.style.width = `${score}%`;
    
    // Color thresholds
    if (score >= 80) {
        bar.style.backgroundColor = "var(--emerald)";
        document.getElementById("live-anxiety-tip").innerText = "Excellent composure! Keep maintaining steady breathing loops.";
    } else if (score >= 60) {
        bar.style.backgroundColor = "var(--amber)";
        document.getElementById("live-anxiety-tip").innerHTML = `<span class="text-amber">Comfort index is stable. Try to embrace silent pauses instead of using filler words.</span>`;
    } else {
        bar.style.backgroundColor = "var(--danger)";
        document.getElementById("live-anxiety-tip").innerHTML = `<span class="text-danger">Anxiety levels detected. Click the 'Emergency Pause' button for a 20s breathing reset.</span>`;
    }
}
// ==================== SUBMIT & EVALUATE QUESTIONS ====================
function submitAnswer() {
    const textInput = document.getElementById("user-response-textarea").value.trim();
    if (!textInput) {
        alert("Please speak or type an answer before submitting!");
        return;
    }
    
    // Stop recording and speaking
    stopSpeechRecognition();
    if (state.synth) state.synth.cancel();
    
    // Evaluate answer details
    const questionObj = state.questions[state.currentQuestionIndex];
    const elapsed = Math.max(5, state.elapsedSeconds);
    const finalWpm = Math.round(state.wordCount / (elapsed / 60));
    
    // Compile total fillers
    let finalFillers = 0;
    Object.keys(state.fillerHits).forEach(k => {
        finalFillers += state.fillerHits[k];
    });
    
    // STAR Method Keyword Checklist Evaluate
    const starCheck = evaluateStarMethod(textInput, questionObj.keywords);
    
    // Push answer log
    state.sessionAnswers.push({
        questionObj: questionObj,
        userTranscript: textInput,
        wpm: finalWpm,
        fillers: { ...state.fillerHits },
        totalFillers: finalFillers,
        comfortScore: state.comfortScore,
        starCheck: starCheck
    });
    
    // Proceed to next question or display report
    const nextIdx = state.currentQuestionIndex + 1;
    if (nextIdx < state.questions.length) {
        loadQuestion(nextIdx);
    } else {
        completeSession();
    }
}
function evaluateStarMethod(answer, keywords) {
    const text = answer.toLowerCase();
    
    // Fallback checks if category is behavioral vs technical
    const checks = {
        situation: keywords?.situation || ["was", "team", "project", "when", "system", "needed"],
        task: keywords?.task || ["goal", "task", "objective", "problem", "bottleneck", "challenge"],
        action: keywords?.action || ["implemented", "built", "coded", "created", "designed", "led", "refactored"],
        result: keywords?.result || ["result", "metrics", "percent", "faster", "achieved", "improvement", "%"]
    };
    
    const results = {
        situation: { detected: false, detail: "Context / Problem setup details" },
        task: { detected: false, detail: "Explicit goals, target metrics, or bottlenecks" },
        action: { detected: false, detail: "Your specific technical/strategic steps" },
        result: { detected: false, detail: "Quantified impact or lessons learned" }
    };
    
    Object.keys(checks).forEach(key => {
        let hit = false;
        for (let word of checks[key]) {
            if (text.includes(word)) {
                hit = true;
                break;
            }
        }
        results[key].detected = hit;
    });
    
    return results;
}
// ==================== SESSION COMPLETE & REVIEW DASHBOARD ====================
function completeSession() {
    stopRecordingTimer();
    if (state.synth) state.synth.cancel();
    if (state.recognition) state.recognition.abort();
    
    setInterviewerStatus("idle");
    
    // Compile global metrics
    let totalWpmSum = 0;
    let totalFillersSum = 0;
    let comfortScoreSum = 0;
    
    state.sessionAnswers.forEach(ans => {
        totalWpmSum += ans.wpm;
        totalFillersSum += ans.totalFillers;
        comfortScoreSum += ans.comfortScore;
    });
    
    const count = state.sessionAnswers.length || 1;
    const avgWpm = Math.round(totalWpmSum / count);
    const avgComfort = Math.round(comfortScoreSum / count);
    
    // Compute grade
    let grade = "B+";
    let gradeCaption = "Constructive progress. Work on structuring results.";
    
    if (avgComfort >= 90 && avgWpm >= 105 && avgWpm <= 150 && totalFillersSum <= 3) {
        grade = "A+";
        gradeCaption = "Exceptional composure, fluid storytelling, and clear articulation.";
    } else if (avgComfort >= 82 && avgWpm >= 95 && avgWpm <= 160 && totalFillersSum <= 6) {
        grade = "A";
        gradeCaption = "Highly articulate and calm. Excellent command over pacing.";
    } else if (avgComfort >= 70 && totalFillersSum <= 12) {
        grade = "B";
        gradeCaption = "Good content framework. Pacing was slightly uneven.";
    } else {
        grade = "C";
        gradeCaption = "Work on anxiety-reduction techniques, deep breathing, and slow pacing.";
    }
    
    // Render Dashboard Headers
    const roleTextMap = {
        "software-engineer": "Software Generalist",
        "frontend-developer": "Frontend Engineer",
        "backend-developer": "Backend Engineer",
        "data-scientist": "Data Scientist",
        "product-manager": "Product Manager",
        "behavioral-only": "Behavioral Only"
    };
    
    document.getElementById("report-meta-text").innerText = `Session summary for ${roleTextMap[state.role]} (${state.level.toUpperCase()}) practice // Interviewer: ${state.personality.toUpperCase()} Tone`;
    
    // Populate stats elements
    document.getElementById("report-grade").innerText = grade;
    document.getElementById("report-grade-caption").innerText = gradeCaption;
    
    document.getElementById("report-avg-wpm").innerHTML = `${avgWpm} <small>WPM</small>`;
    
    const pacingStatusEl = document.getElementById("report-pacing-status");
    if (avgWpm >= 110 && avgWpm <= 145) {
        pacingStatusEl.className = "text-emerald";
        pacingStatusEl.innerHTML = `<i data-lucide="check-circle-2"></i> Perfect Rhythm`;
    } else if (avgWpm >= 85 && avgWpm < 110) {
        pacingStatusEl.className = "text-indigo";
        pacingStatusEl.innerHTML = `<i data-lucide="info"></i> Deliberate & Calm`;
    } else if (avgWpm > 145 && avgWpm <= 165) {
        pacingStatusEl.className = "text-amber";
        pacingStatusEl.innerHTML = `<i data-lucide="alert-circle"></i> Slightly Rushed`;
    } else {
        pacingStatusEl.className = "text-danger";
        pacingStatusEl.innerHTML = `<i data-lucide="alert-triangle"></i> Needs Composure Reset`;
    }
    
    document.getElementById("report-fillers-total").innerHTML = `${totalFillersSum} <small>time${totalFillersSum === 1 ? '' : 's'}</small>`;
    
    const fillerStatusEl = document.getElementById("report-fillers-status");
    if (totalFillersSum <= 2) {
        fillerStatusEl.innerText = "Highly polished communication (Top 5%)";
    } else if (totalFillersSum <= 6) {
        fillerStatusEl.innerText = "Standard communication range (Top 25%)";
    } else {
        fillerStatusEl.innerText = "Slightly high frequency. Try pauses.";
    }
    
    document.getElementById("report-confidence-score").innerText = `${avgComfort}%`;
    
    const confidenceStatusEl = document.getElementById("report-confidence-status");
    if (avgComfort >= 88) {
        confidenceStatusEl.innerText = "High verbal composure index";
    } else if (avgComfort >= 70) {
        confidenceStatusEl.innerText = "Moderate stress composure index";
    } else {
        confidenceStatusEl.innerText = "Anxiety patterns detected in flow";
    }
    
    // Render Comfort Diagnostic scores
    const evalBars = document.querySelectorAll(".eval-bar-fill");
    evalBars[0].style.width = `${Math.min(100, Math.round(avgComfort * 1.05))}%`; // clarity
    evalBars[0].parentNode.previousElementSibling.querySelector("strong").innerText = `${Math.min(100, Math.round(avgComfort * 1.05))}%`;
    
    evalBars[1].style.width = `${Math.min(100, Math.round(avgWpm > 150 ? (150/avgWpm)*100 : (avgWpm/130)*100))}%`; // rhythm
    evalBars[1].parentNode.previousElementSibling.querySelector("strong").innerText = `${Math.min(100, Math.round(avgWpm > 150 ? (150/avgWpm)*100 : (avgWpm/130)*100))}%`;
    
    evalBars[2].style.width = `${avgComfort}%`; // anxiety composure
    evalBars[2].parentNode.previousElementSibling.querySelector("strong").innerText = `${avgComfort}%`;
    
    // Dynamic Global Coach summary text
    let globalAdvice = "";
    if (grade.startsWith("A")) {
        globalAdvice = `"Outstanding articulation! You demonstrated an incredible command over structural storytelling under the pressure of the simulated interviewer. Your breathing intervals before the session clearly stabilized your speaking cadence. Keep practicing this exact focus routine to master the real room."`;
    } else if (grade.startsWith("B")) {
        globalAdvice = `"A very solid baseline! You successfully structured your solutions and responded to all key points. Your main avenue of growth lies in replacing vocalized pauses (like 'um' or 'so') with silent, deliberate breathing pauses. Slow down by just 10% to give your mind more prep time."`;
    } else {
        globalAdvice = `"Great work completing this! Interview anxiety is completely biological, and facing the simulator is the best way to conquer it. I highly recommend running through the 4-7-8 breathing sequence twice more before your next session, and speaking at a slower storytelling pace."`;
    }
    document.getElementById("report-coach-text").innerText = globalAdvice;
    
    // Render Q&A Detailed timeline
    renderTimelineData();
    
    // Save to local history
    saveSessionToHistory(grade, avgComfort, roleTextMap[state.role]);
    
    // Refresh Icons inside generated contents
    lucide.createIcons();
    
    // Switch Screen
    switchScreen("screen-report");
}
function renderTimelineData() {
    const timelineEl = document.getElementById("report-qa-timeline");
    timelineEl.innerHTML = "";
    
    state.sessionAnswers.forEach((ans, i) => {
        const itemEl = document.createElement("div");
        itemEl.className = "qa-item";
        
        // Compute STAR rating
        let hits = 0;
        Object.keys(ans.starCheck).forEach(k => {
            if (ans.starCheck[k].detected) hits++;
        });
        const starPercentage = (hits / 4) * 100;
        
        // Pacing class
        let pacingClass = "ideal-pill";
        let pacingLabel = `${ans.wpm} WPM (Ideal)`;
        if (ans.wpm < 85) {
            pacingClass = "slow-pill";
            pacingLabel = `${ans.wpm} WPM (Slow)`;
        } else if (ans.wpm > 150) {
            pacingClass = "fast-pill";
            pacingLabel = `${ans.wpm} WPM (Fast)`;
        }
        
        // Formulate feedback notes
        let customAdvice = "";
        if (ans.totalFillers > 2) {
            customAdvice += `Try to focus on silent pauses instead of using '${Object.keys(ans.fillers).filter(k => ans.fillers[k] > 0).join('/')}'. `;
        }
        if (ans.wpm > 155) {
            customAdvice += "Slow down your delivery rate by focusing on your breathing between sentences. ";
        }
        if (starPercentage < 75) {
            const missing = Object.keys(ans.starCheck).filter(k => !ans.starCheck[k].detected);
            customAdvice += `To improve answer structure, ensure you explicitly cover the: ${missing.map(m => m.toUpperCase()).join(' & ')} steps of the STAR method.`;
        }
        if (!customAdvice) {
            customAdvice = "Excellent structure, clear articulation, and perfect rhythmic pauses. Flawless response execution!";
        }
        
        itemEl.innerHTML = `
            <div class="qa-badge">Q${i+1}</div>
            <div class="glass-card qa-card">
                <h4 class="qa-question">"${ans.questionObj.question}"</h4>
                <div class="qa-user-answer">
                    <h5>Your Answer Transcript:</h5>
                    <p>"${ans.userTranscript}"</p>
                </div>
                <div class="qa-metrics">
                    <span class="metric-pill ${pacingClass}"><i data-lucide="gauge"></i> ${pacingLabel}</span>
                    <span class="metric-pill filler-pill"><i data-lucide="alert-circle"></i> ${ans.totalFillers} filler${ans.totalFillers === 1 ? '' : 's'}</span>
                    <span class="metric-pill star-pill"><i data-lucide="star"></i> STAR Score: ${starPercentage}%</span>
                </div>
                
                <div class="qa-star-details">
                    <h5><i data-lucide="star" class="text-amber"></i> STAR Method Diagnostic:</h5>
                    <ul class="star-check-list">
                        <li class="${ans.starCheck.situation.detected ? 'checked' : ''}">
                            <i data-lucide="${ans.starCheck.situation.detected ? 'check' : 'x'}"></i> 
                            <strong>Situation:</strong> ${ans.starCheck.situation.detected ? 'Context and background established' : 'Vague context setup'}
                        </li>
                        <li class="${ans.starCheck.task.detected ? 'checked' : ''}">
                            <i data-lucide="${ans.starCheck.task.detected ? 'check' : 'x'}"></i> 
                            <strong>Task:</strong> ${ans.starCheck.task.detected ? 'Identified problems or goals' : 'Missing clear problem/target details'}
                        </li>
                        <li class="${ans.starCheck.action.detected ? 'checked' : ''}">
                            <i data-lucide="${ans.starCheck.action.detected ? 'check' : 'x'}"></i> 
                            <strong>Action:</strong> ${ans.starCheck.action.detected ? 'Detailed specific technical steps' : 'Lacks specific actions taken'}
                        </li>
                        <li class="${ans.starCheck.result.detected ? 'checked' : ''}">
                            <i data-lucide="${ans.starCheck.result.detected ? 'check' : 'x'}"></i> 
                            <strong>Result:</strong> ${ans.starCheck.result.detected ? 'Quantified performance outcomes' : 'Missing concrete results or lessons'}
                        </li>
                    </ul>
                </div>
                
                <div class="qa-coach-feedback">
                    <h5><i data-lucide="lightbulb" class="text-indigo"></i> Comfort Coaching Review:</h5>
                    <p>${customAdvice}</p>
                </div>
            </div>
        `;
        
        timelineEl.appendChild(itemEl);
    });
}
// ==================== PERSIST LOCAL STORAGE HISTORY ====================
function saveSessionToHistory(grade, comfort, discipline) {
    let history = [];
    try {
        const stored = localStorage.getItem("intervue_history");
        if (stored) {
            history = JSON.parse(stored);
        }
    } catch (e) {
        console.error("Error reading localStorage", e);
    }
    
    const entry = {
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        grade: grade,
        comfort: comfort,
        role: discipline
    };
    
    history.unshift(entry);
    
    // limit to 6 items to keep cleanly formatted
    if (history.length > 6) {
        history.pop();
    }
    
    try {
        localStorage.setItem("intervue_history", JSON.stringify(history));
    } catch(e) {
        console.error("Error writing localStorage", e);
    }
    
    loadSessionHistory();
}
function loadSessionHistory() {
    const listEl = document.getElementById("history-items");
    if (!listEl) return;
    
    listEl.innerHTML = "";
    
    let history = [];
    try {
        const stored = localStorage.getItem("intervue_history");
        if (stored) {
            history = JSON.parse(stored);
        }
    } catch(e) {}
    
    if (history.length === 0) {
        listEl.innerHTML = `<div class="history-empty">No previous sessions logged. Finish this practice to record your first entry!</div>`;
        return;
    }
    
    history.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = "history-item";
        
        itemEl.innerHTML = `
            <div class="history-details">
                <span class="history-role">${item.role}</span>
                <span class="history-date">${item.date}</span>
            </div>
            <span class="history-score">${item.grade} (${item.comfort}%)</span>
        `;
        
        listEl.appendChild(itemEl);
    });
}
function clearSessionHistory() {
    if (confirm("Are you sure you want to clear your local performance history?")) {
        localStorage.removeItem("intervue_history");
        loadSessionHistory();
    }
}
// Download session log as JSON file
function downloadReportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.sessionAnswers, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", `Intervue-SessionReport-${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchorElem.click();
}
function resetToNewSession() {
    // Clear and return to welcome form
    switchScreen("screen-welcome");
}
