/* ==========================================================================
   ATM MILANO SWISS BOARD — APPLICATION ENGINE
   Deterministic real-time simulation, local storage, UI interactions
   ========================================================================== */

// 1. PRELOADED REALISTIC TRANSIT DATA
const MILANO_STOP_DATABASE = [
    {
        id: 11203,
        name: "Piazza Cinque Giornate",
        lines: [
            { num: "9", type: "tram", dir: "Porta Genova FS", freq: 6, veh: "Tram Sirio (Basso Pianale)" },
            { num: "9", type: "tram", dir: "Centrale FS", freq: 6, veh: "Tram Sirio (Basso Pianale)" },
            { num: "12", type: "tram", dir: "Viale Molise", freq: 8, veh: "Tram Eurotram (Pianale Ribassato)" },
            { num: "12", type: "tram", dir: "Roserio (Ospedale Sacco)", freq: 8, veh: "Tram Eurotram (Pianale Ribassato)" },
            { num: "19", type: "tram", dir: "Stazione Lambrate", freq: 9, veh: "Tram Ventotto (Storico)" },
            { num: "27", type: "tram", dir: "Piazza Fontana", freq: 7, veh: "Tram Eurotram (Pianale Ribassato)" },
            { num: "27", type: "tram", dir: "Viale Ungheria", freq: 7, veh: "Tram Eurotram (Pianale Ribassato)" },
            { num: "60", type: "bus", dir: "Zara M3/M5", freq: 8, veh: "Bus Elettrico 12m" }
        ]
    },
    {
        id: 11205,
        name: "C.so P.ta Vittoria (Camera del Lavoro)",
        lines: [
            { num: "12", type: "tram", dir: "Viale Molise", freq: 8, veh: "Tram Eurotram (Pianale Ribassato)" },
            { num: "12", type: "tram", dir: "Roserio (Ospedale Sacco)", freq: 8, veh: "Tram Eurotram (Pianale Ribassato)" },
            { num: "19", type: "tram", dir: "Stazione Lambrate", freq: 9, veh: "Tram Ventotto (Storico)" },
            { num: "19", type: "tram", dir: "Piazza Castelli", freq: 9, veh: "Tram Ventotto (Storico)" },
            { num: "27", type: "tram", dir: "Piazza Fontana", freq: 7, veh: "Tram Eurotram (Pianale Ribassato)" },
            { num: "27", type: "tram", dir: "Viale Ungheria", freq: 7, veh: "Tram Eurotram (Pianale Ribassato)" },
            { num: "60", type: "bus", dir: "Zara M3/M5", freq: 8, veh: "Bus Elettrico 12m" },
            { num: "60", type: "bus", dir: "Largo Augusto", freq: 8, veh: "Bus Elettrico 12m" }
        ]
    },
    {
        id: 10322,
        name: "Crocetta M3",
        lines: [
            { num: "M3", type: "metro", dir: "San Donato", freq: 3, veh: "Treno Leonardo (Meneghino)" },
            { num: "M3", type: "metro", dir: "Comasina", freq: 3, veh: "Treno Leonardo (Meneghino)" },
            { num: "9", type: "tram", dir: "Stazione Centrale", freq: 6, veh: "Tram Sirio (Basso Pianale)" },
            { num: "9", type: "tram", dir: "Porta Genova FS", freq: 6, veh: "Tram Sirio (Basso Pianale)" },
            { num: "16", type: "tram", dir: "Monte Velino", freq: 9, veh: "Tram Ventotto (Storico)" },
            { num: "16", type: "tram", dir: "San Siro Stadio M5", freq: 9, veh: "Tram Ventotto (Storico)" }
        ]
    },
    {
        id: 10324,
        name: "Porta Romana M3",
        lines: [
            { num: "M3", type: "metro", dir: "San Donato", freq: 3, veh: "Treno Leonardo (Meneghino)" },
            { num: "M3", type: "metro", dir: "Comasina", freq: 3, veh: "Treno Leonardo (Meneghino)" },
            { num: "9", type: "tram", dir: "Porta Genova FS", freq: 6, veh: "Tram Sirio (Basso Pianale)" },
            { num: "62", type: "bus", dir: "Sire Raul", freq: 9, veh: "Bus Ibrido 12m" },
            { num: "65", type: "bus", dir: "Abbiategrasso M2", freq: 11, veh: "Bus Elettrico 12m" }
        ]
    },
    {
        id: 10001,
        name: "Piazza Duomo",
        lines: [
            { num: "M1", type: "metro", dir: "Sesto 1° Maggio FS", freq: 2.5, veh: "Treno Meneghino" },
            { num: "M1", type: "metro", dir: "Rho Fiera M1", freq: 4, veh: "Treno Meneghino" },
            { num: "M1", type: "metro", dir: "Bisceglie M1", freq: 4, veh: "Treno Meneghino" },
            { num: "M3", type: "metro", dir: "San Donato", freq: 3, veh: "Treno Leonardo (Meneghino)" },
            { num: "M3", type: "metro", dir: "Comasina", freq: 3, veh: "Treno Leonardo (Meneghino)" },
            { num: "2", type: "tram", dir: "P.le Bausan", freq: 7, veh: "Tram Ventotto (Storico)" },
            { num: "3", type: "tram", dir: "Gratosoglio", freq: 8, veh: "Tram Sirio (Basso Pianale)" },
            { num: "14", type: "tram", dir: "Lorenteggio", freq: 6, veh: "Tram Eurotram (Pianale Ribassato)" }
        ]
    },
    {
        id: 10200,
        name: "Stazione Centrale M2/M3",
        lines: [
            { num: "M2", type: "metro", dir: "Assago Forum / Abbiategrasso", freq: 3, veh: "Treno Meneghino" },
            { num: "M2", type: "metro", dir: "Gessate / Cologno Nord", freq: 3.5, veh: "Treno Meneghino" },
            { num: "M3", type: "metro", dir: "San Donato", freq: 3, veh: "Treno Leonardo (Meneghino)" },
            { num: "9", type: "tram", dir: "Porta Genova FS", freq: 6, veh: "Tram Sirio (Basso Pianale)" },
            { num: "5", type: "tram", dir: "Ortica", freq: 9, veh: "Tram Ventotto (Storico)" },
            { num: "60", type: "bus", dir: "Largo Augusto", freq: 8, veh: "Bus Elettrico 12m" },
            { num: "81", type: "bus", dir: "Sesto Marelli M1", freq: 10, veh: "Bus Ibrido 12m" }
        ]
    },
    {
        id: 10450,
        name: "Porta Genova FS M2",
        lines: [
            { num: "M2", type: "metro", dir: "Gessate / Cologno Nord", freq: 3, veh: "Treno Meneghino" },
            { num: "2", type: "tram", dir: "Negrelli", freq: 7, veh: "Tram Ventotto (Storico)" },
            { num: "9", type: "tram", dir: "Stazione Centrale", freq: 6, veh: "Tram Sirio (Basso Pianale)" },
            { num: "10", type: "tram", dir: "V.le Lunigiana", freq: 8, veh: "Tram Sirio (Basso Pianale)" },
            { num: "74", type: "bus", dir: "Famagosta M2", freq: 10, veh: "Bus Elettrico 12m" }
        ]
    },
    {
        id: 10110,
        name: "Cadorna FN M1/M2",
        lines: [
            { num: "M1", type: "metro", dir: "Sesto 1° Maggio FS", freq: 2.5, veh: "Treno Meneghino" },
            { num: "M2", type: "metro", dir: "Abbiategrasso / Assago Forum", freq: 3, veh: "Treno Meneghino" },
            { num: "1", type: "tram", dir: "Greco (Via Martiri Oscuri)", freq: 8, veh: "Tram Ventotto (Storico)" },
            { num: "19", type: "tram", dir: "Piazza Castelli", freq: 9, veh: "Tram Ventotto (Storico)" },
            { num: "58", type: "bus", dir: "Baggio (Via Noale)", freq: 8, veh: "Bus Snodato 18m" },
            { num: "85", type: "bus", dir: "Largo Augusto", freq: 10, veh: "Bus Elettrico 12m" }
        ]
    },
    {
        id: 10980,
        name: "Piazza Ventiquattro Maggio",
        lines: [
            { num: "3", type: "tram", dir: "Duomo M1/M3", freq: 8, veh: "Tram Sirio (Basso Pianale)" },
            { num: "9", type: "tram", dir: "Stazione Centrale", freq: 6, veh: "Tram Sirio (Basso Pianale)" },
            { num: "10", type: "tram", dir: "V.le Lunigiana", freq: 8, veh: "Tram Sirio (Basso Pianale)" },
            { num: "71", type: "bus", dir: "Romolo M2", freq: 11, veh: "Bus Elettrico 12m" }
        ]
    },
    {
        id: 11150,
        name: "Corso Buenos Aires - MM Lima",
        lines: [
            { num: "M1", type: "metro", dir: "Sesto 1° Maggio FS", freq: 2.5, veh: "Treno Meneghino" },
            { num: "M1", type: "metro", dir: "Rho Fiera / Bisceglie", freq: 2.5, veh: "Treno Meneghino" },
            { num: "60", type: "bus", dir: "Largo Augusto", freq: 8, veh: "Bus Elettrico 12m" },
            { num: "81", type: "bus", dir: "Stazione Lambrate FS", freq: 10, veh: "Bus Ibrido 12m" }
        ]
    },
    {
        id: 11520,
        name: "Viale Abruzzi - Viale Gran Sasso",
        lines: [
            { num: "90", type: "bus", dir: "Lodi TIBB M3 (Circolare Destra)", freq: 5, veh: "Bus Snodato 18m Filobus" },
            { num: "91", type: "bus", dir: "Lotto M1/M5 (Circolare Sinistra)", freq: 5, veh: "Bus Snodato 18m Filobus" },
            { num: "92", type: "bus", dir: "Bovisa FN", freq: 8, veh: "Bus Snodato 18m Filobus" }
        ]
    },
    {
        id: 11840,
        name: "Viale Umbria - Via Comelico",
        lines: [
            { num: "90", type: "bus", dir: "Lodi TIBB M3 (Circolare Destra)", freq: 5, veh: "Bus Snodato 18m Filobus" },
            { num: "91", type: "bus", dir: "Lotto M1/M5 (Circolare Sinistra)", freq: 5, veh: "Bus Snodato 18m Filobus" },
            { num: "92", type: "bus", dir: "Bovisa FN", freq: 8, veh: "Bus Snodato 18m Filobus" },
            { num: "84", type: "bus", dir: "San Donato M3", freq: 10, veh: "Bus Elettrico 12m" }
        ]
    },
    {
        id: 10500,
        name: "Piazzale Lotto M1/M5",
        lines: [
            { num: "M1", type: "metro", dir: "Rho Fiera M1", freq: 3, veh: "Treno Meneghino" },
            { num: "M5", type: "metro", dir: "San Siro Stadio", freq: 3.5, veh: "Treno Driverless" },
            { num: "M5", type: "metro", dir: "Bignami Parco Nord", freq: 3.5, veh: "Treno Driverless" },
            { num: "90", type: "bus", dir: "Lodi TIBB M3 (Circolare Destra)", freq: 5, veh: "Bus Snodato 18m Filobus" },
            { num: "78", type: "bus", dir: "Via Govone", freq: 12, veh: "Bus Elettrico 12m" }
        ]
    },
    {
        id: 10180,
        name: "Porta Venezia M1",
        lines: [
            { num: "M1", type: "metro", dir: "Sesto 1° Maggio FS", freq: 2.5, veh: "Treno Meneghino" },
            { num: "9", type: "tram", dir: "Porta Genova FS", freq: 6, veh: "Tram Sirio (Basso Pianale)" },
            { num: "5", type: "tram", dir: "Ortica", freq: 9, veh: "Tram Ventotto (Storico)" },
            { num: "33", type: "tram", dir: "Rimembranze di Lambrate", freq: 10, veh: "Tram Ventotto (Storico)" }
        ]
    }
];

// 2. STATE MANAGEMENT
let state = {
    pois: [],             // User's custom Points of Interest
    currentPoiId: null,   // Selected POI in sidebar
    trafficMode: "normal",// low, normal, high, extreme
    theme: "dark",        // dark, light
    customStopLines: []   // Temporary list of lines while creating custom stop
};

// Global Weather Variables
let currentWeatherData = {
    code: 0,
    temp: null,
    isRaining: false,
    description: "Sereno"
};

// 3. SEED-BASED DETERMINISTIC ENGINE
const HASH_EPOCH = new Date('2026-01-01T00:00:00Z').getTime();

function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

// Calculate the next departures for a stop-line combination
function getDepartures(stopId, line, trafficMode) {
    const stopHash = hashString(String(stopId));
    const lineHash = hashString(line.num + line.dir);
    
    // Base offset for this route at this stop (0 to freq minutes)
    const baseOffset = (stopHash + lineHash * 17) % line.freq;
    
    const msSinceEpoch = Date.now() - HASH_EPOCH;
    const minsSinceEpoch = msSinceEpoch / (60 * 1000);
    
    // Find base interval index
    const kCurrent = Math.floor((minsSinceEpoch - baseOffset) / line.freq);
    
    const departures = [];
    
    // Generate next few schedules
    for (let i = 0; i < 4; i++) {
        const k = kCurrent + i;
        const schedMin = k * line.freq + baseOffset;
        
        // Live fluctuation (slow sine wave based on time)
        const fluctuationSeed = stopHash + lineHash + k;
        const wave = Math.sin(schedMin * 0.15 + (fluctuationSeed % 100)) * 1.5;
        
        // Traffic modifier
        let trafficDelay = 0; // minutes
        if (trafficMode === 'low') trafficDelay = -1.2;
        else if (trafficMode === 'high') trafficDelay = 2.5;
        else if (trafficMode === 'extreme') trafficDelay = 5.5;
        
        // Add random traffic factor for this vehicle specifically
        const vehicleNoise = (hashString(String(fluctuationSeed)) % 60) / 60 - 0.2; // -0.2 to 0.8 minutes
        
        const finalArrivalMin = schedMin + wave + trafficDelay + vehicleNoise;
        const remainingMin = finalArrivalMin - minsSinceEpoch;
        
        // Deduce details
        const vehicleNum = 1000 + (hashString(line.num + String(k)) % 9000);
        
        // Calculate estimated clock time of arrival
        const arrivalTimeMs = Date.now() + remainingMin * 60 * 1000;
        const arrivalDate = new Date(arrivalTimeMs);
        const arrHours = String(arrivalDate.getHours()).padStart(2, '0');
        const arrMins = String(arrivalDate.getMinutes()).padStart(2, '0');
        const arrivalTimeStr = `${arrHours}:${arrMins}`;
        
        departures.push({
            scheduledMinutes: schedMin,
            actualMinutes: finalArrivalMin,
            remainingMinutes: remainingMin,
            arrivalTimeStr: arrivalTimeStr,
            vehicle: `${line.veh || 'Vettura Standard'} - N. ${vehicleNum}`
        });
    }
    
    // Filter out past buses (keep if arrived < 20 seconds ago, since they wait at the stop)
    // -0.33 minutes = 20 seconds at stop
    return departures
        .filter(dep => dep.remainingMinutes >= -0.33)
        .sort((a, b) => a.remainingMinutes - b.remainingMinutes)
        .slice(0, 2); // Show top 2 next transits
}

// 4. STORAGE LOGIC
function loadState() {
    const saved = localStorage.getItem("milano_transit_swiss_state_v3");
    if (saved) {
        try {
            state = JSON.parse(saved);
            // Ensure array structure
            if (!state.pois) state.pois = [];
            if (!state.trafficMode) state.trafficMode = "normal";
            if (!state.theme) state.theme = "dark";
            state.customStopLines = []; // Always reset temp lists
        } catch (e) {
            console.error("Errore nel caricamento del localStorage", e);
            loadDefaults();
        }
    } else {
        loadDefaults();
    }
}

function saveState() {
    localStorage.setItem("milano_transit_swiss_state_v3", JSON.stringify({
        pois: state.pois,
        trafficMode: state.trafficMode,
        theme: state.theme
    }));
}

function loadDefaults() {
    state.pois = [
        {
            id: "poi-1",
            name: "CASA (Cinque Giornate)",
            icon: "CS",
            stops: [
                JSON.parse(JSON.stringify(MILANO_STOP_DATABASE[0])), // Piazza Cinque Giornate
                JSON.parse(JSON.stringify(MILANO_STOP_DATABASE[1]))  // Camera del Lavoro
            ]
        },
        {
            id: "poi-2",
            name: "UFFICIO (Cadorna)",
            icon: "UF",
            stops: [
                JSON.parse(JSON.stringify(MILANO_STOP_DATABASE[6]))  // Cadorna FN
            ]
        }
    ];
    state.trafficMode = "normal";
    state.theme = "dark";
    saveState();
}

// 5. DOM INTERACTION & RENDERING
function initDOM() {
    // Apply theme
    document.body.className = `theme-${state.theme}`;
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.textContent = `TEMA: ${state.theme === 'dark' ? 'SCURO' : 'CHIARO'}`;
    themeBtn.addEventListener("click", toggleTheme);
    
    // Start Weather Fetch
    fetchRealtimeWeather();
    setInterval(fetchRealtimeWeather, 10 * 60 * 1000); // refresh every 10 min

    // Start Clock
    updateClock();
    setInterval(updateClock, 1000);
    
    // Start main render loop
    renderDashboard();
    // Re-render countdown values every 1 second (without full DOM reconstruct)
    setInterval(tickCountdowns, 1000);

    // Sidebar drawer toggle
    const openConfigBtn = document.getElementById("open-config-btn");
    const closeConfigBtn = document.getElementById("close-config-btn");
    const sidebar = document.getElementById("config-sidebar");

    openConfigBtn.addEventListener("click", () => {
        sidebar.classList.add("open");
        renderPoiConfig();
    });

    closeConfigBtn.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });

    // POI Modal
    const addPoiBtn = document.getElementById("add-poi-btn");
    const poiModal = document.getElementById("poi-modal");
    const poiForm = document.getElementById("poi-form");
    
    addPoiBtn.addEventListener("click", () => {
        document.getElementById("poi-modal-title").textContent = "NUOVO PUNTO DI INTERESSE";
        poiForm.reset();
        poiForm.dataset.mode = "add";
        poiModal.classList.add("open");
    });

    poiForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("poi-name").value.trim().toUpperCase();
        const icon = document.getElementById("poi-icon").value.trim().toUpperCase();
        
        if (poiForm.dataset.mode === "add") {
            const newPoi = {
                id: "poi-" + Date.now(),
                name: name,
                icon: icon,
                stops: []
            };
            state.pois.push(newPoi);
            state.currentPoiId = newPoi.id; // Auto select new
            showToast(`Punto "${name}" creato`);
        } else {
            const id = poiForm.dataset.editId;
            const poi = state.pois.find(p => p.id === id);
            if (poi) {
                poi.name = name;
                poi.icon = icon;
                showToast(`Punto "${name}" modificato`);
            }
        }
        
        saveState();
        poiModal.classList.remove("open");
        renderDashboard();
        renderPoiConfig();
        renderStopsConfig();
    });

    // Stop Modal & tab toggles
    const addStopBtn = document.getElementById("add-stop-btn");
    const stopModal = document.getElementById("stop-modal");
    
    addStopBtn.addEventListener("click", () => {
        if (!state.currentPoiId) return;
        state.customStopLines = [];
        document.getElementById("custom-stop-form").reset();
        document.getElementById("db-search").value = "";
        renderAddedLinesChips();
        renderSearchResults("");
        stopModal.classList.add("open");
    });

    const tabDbBtn = document.getElementById("tab-db-btn");
    const tabCustomBtn = document.getElementById("tab-custom-btn");
    const paneDb = document.getElementById("pane-db");
    const paneCustom = document.getElementById("pane-custom");

    tabDbBtn.addEventListener("click", () => {
        tabDbBtn.classList.add("active");
        tabCustomBtn.classList.remove("active");
        paneDb.classList.add("active");
        paneCustom.classList.remove("active");
    });

    tabCustomBtn.addEventListener("click", () => {
        tabDbBtn.classList.remove("active");
        tabCustomBtn.classList.add("active");
        paneDb.classList.remove("active");
        paneCustom.classList.add("active");
    });

    // Search bar filtering
    const dbSearch = document.getElementById("db-search");
    dbSearch.addEventListener("input", (e) => {
        renderSearchResults(e.target.value.trim());
    });

    // Custom Stop Add Line action
    const addLineBtn = document.getElementById("add-line-to-list-btn");
    addLineBtn.addEventListener("click", () => {
        const num = document.getElementById("line-num").value.trim().toUpperCase();
        const type = document.getElementById("line-type").value;
        const dir = document.getElementById("line-dir").value.trim() || "DIREZIONE URBANA";
        const freq = parseInt(document.getElementById("line-freq").value, 10) || 7;
        const veh = document.getElementById("line-veh").value;

        if (!num) {
            alert("Inserisci un numero o nome di linea");
            return;
        }

        state.customStopLines.push({ num, type, dir, freq, veh });
        // Reset small inputs
        document.getElementById("line-num").value = "";
        document.getElementById("line-dir").value = "";
        
        renderAddedLinesChips();
    });

    // Custom Stop Save
    const submitCustomStopBtn = document.getElementById("submit-custom-stop-btn");
    submitCustomStopBtn.addEventListener("click", () => {
        const name = document.getElementById("stop-name").value.trim();
        const codeInput = document.getElementById("stop-code").value.trim();
        const code = codeInput ? parseInt(codeInput, 10) : (20000 + Math.floor(Math.random()*9999));

        if (!name) {
            alert("Inserisci il nome della fermata");
            return;
        }
        if (state.customStopLines.length === 0) {
            alert("Aggiungi almeno una linea di passaggio");
            return;
        }

        const customStop = {
            id: code,
            name: name,
            lines: [...state.customStopLines],
            isCustom: true
        };

        addStopToActivePoi(customStop);
        stopModal.classList.remove("open");
    });

    // Global Modal cancel handlers
    const cancelModalBtns = document.querySelectorAll(".cancel-modal-btn, .close-modal-btn");
    cancelModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            poiModal.classList.remove("open");
            stopModal.classList.remove("open");
        });
    });
}

function updateClock() {
    const now = new Date();
    const days = ["DOMENICA", "LUNEDÌ", "MARTEDÌ", "MERCOLEDÌ", "GIOVEDÌ", "VENERDÌ", "SABATO"];
    const months = ["GENNAIO", "FEBBRAIO", "MARZO", "APRILE", "MAGGIO", "GIUGNO", "LUGLIO", "AGOSTO", "SETTEMBRE", "OTTOBRE", "NOVEMBRE", "DICEMBRE"];
    
    const dayName = days[now.getDay()];
    const dateNum = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("live-date").textContent = `${dayName}, ${dateNum} ${monthName} ${year}`;
    document.getElementById("live-time").textContent = `${hours}:${minutes}:${seconds}`;

    // Update auto traffic detection and display status in header
    const autoTraffic = getAutomaticTraffic();
    state.trafficMode = autoTraffic.mode;
    const trafficStatusEl = document.getElementById("traffic-auto-status");
    if (trafficStatusEl) {
        trafficStatusEl.textContent = autoTraffic.label;
    }
}

// 6. DASHBOARD RENDERING & TICKING
const TOWARDS_CENTER_KEYWORDS = [
    "centro", "duomo", "fontana", "augusto", "raccordo", "genova", "roserio", "castelli", "negrelli", 
    "gratosoglio", "lorenteggio", "assago", "abbiategrasso", "donato", "romolo", "stadio", "fiera", 
    "bisceglie", "famagosta", "baggio", "bonola", "molino dorino", "sacco", "sabotino", "ripamonti",
    "piazza castelli", "piazza fontana", "largo augusto", "porta genova"
];

function isTowardsCenter(directionName) {
    const dirLower = directionName.toLowerCase();
    return TOWARDS_CENTER_KEYWORDS.some(keyword => dirLower.includes(keyword));
}

function renderDashboard() {
    const grid = document.getElementById("dashboard-grid");
    grid.innerHTML = "";

    if (state.pois.length === 0) {
        grid.innerHTML = `<div class="empty-state-message" style="grid-column:1/-1;">
            Nessun punto di interesse configurato. Clicca su "CONFIGURA VIE & PUNTI" per iniziare.
        </div>`;
        return;
    }

    state.pois.forEach(poi => {
        const poiBlock = document.createElement("section");
        poiBlock.className = "poi-container";
        poiBlock.dataset.id = poi.id;
        
        let stopsHtml = "";
        
        if (poi.stops.length === 0) {
            stopsHtml = `<div class="empty-state-message">Nessuna fermata salvata. Clicca su configura per aggiungerne una in questa via o punto.</div>`;
        } else {
            poi.stops.forEach(stop => {
                let dir1Html = "";
                let dir2Html = "";
                
                stop.lines.forEach(line => {
                    const deps = getDepartures(stop.id, line, state.trafficMode);
                    const isCenter = isTowardsCenter(line.dir);
                    
                    deps.forEach((dep, idx) => {
                        const isIncoming = dep.remainingMinutes <= 1.0;
                        const rowClass = isIncoming ? "departure-row incoming" : "departure-row";
                        
                        // Line badge styling class
                        let badgeClass = "line-badge";
                        const lowerNum = line.num.toLowerCase();
                        if (lowerNum === 'm1') badgeClass += " metro-m1";
                        else if (lowerNum === 'm2') badgeClass += " metro-m2";
                        else if (lowerNum === 'm3') badgeClass += " metro-m3";
                        else if (lowerNum === 'm4') badgeClass += " metro-m4";
                        else if (lowerNum === 'm5') badgeClass += " metro-m5";
                        else if (line.type === 'tram') badgeClass += " tram";
                        else badgeClass += " bus";

                        // Create unique tag IDs to update dynamic elements later
                        const depKey = `${stop.id}-${line.num}-${line.dir.replace(/\s+/g, '')}-${idx}`;
                        
                        // Remaining string
                        let timeString = "";
                        
                        if (dep.remainingMinutes <= -0.15) {
                            timeString = "PASSATO";
                        } else if (dep.remainingMinutes <= 0.05) {
                            timeString = "FERMATA";
                        } else if (dep.remainingMinutes <= 1.0) {
                            timeString = "ARRIVO";
                        } else {
                            timeString = `${Math.round(dep.remainingMinutes)} MIN`;
                        }

                        const html = `
                            <div class="${rowClass}" data-stop="${stop.id}" data-line="${line.num}" data-dir="${line.dir}" data-idx="${idx}">
                                <div class="${badgeClass}">${line.num}</div>
                                <div class="line-route-info">
                                    <span class="route-direction">${line.dir}</span>
                                    <span class="route-meta">${dep.vehicle}</span>
                                </div>
                                <div class="departure-countdown">
                                    <span class="arrival-time" id="time-arr-${depKey}">${dep.arrivalTimeStr}</span>
                                    <span class="time-remaining" id="time-val-${depKey}">${timeString}</span>
                                </div>
                            </div>
                        `;

                        if (isCenter) {
                            dir1Html += html;
                        } else {
                            dir2Html += html;
                        }
                    });
                });

                let departuresHtml = "";
                if (dir1Html) {
                    departuresHtml += `
                        <div class="direction-group">
                            <div class="direction-header">
                                <span class="direction-icon">↙</span> VERSO CENTRO / OVEST / SUD
                            </div>
                            <div class="departures-table">${dir1Html}</div>
                        </div>
                    `;
                }
                if (dir1Html && dir2Html) {
                    departuresHtml += `<div class="direction-separator"></div>`;
                }
                if (dir2Html) {
                    departuresHtml += `
                        <div class="direction-group">
                            <div class="direction-header">
                                <span class="direction-icon">↗</span> VERSO PERIFERIA / EST / NORD
                            </div>
                            <div class="departures-table">${dir2Html}</div>
                        </div>
                    `;
                }
                if (!dir1Html && !dir2Html) {
                    departuresHtml = '<div class="empty-state-message">Nessuna partenza programmata.</div>';
                }
                
                stopsHtml += `
                    <div class="stop-block">
                        <div class="stop-block-header">
                            <span class="stop-title">${stop.name}</span>
                            <span class="stop-code">COD: ${stop.id}</span>
                        </div>
                        ${departuresHtml}
                    </div>
                `;
            });
        }

        poiBlock.innerHTML = `
            <div class="poi-header">
                <div class="poi-title-section">
                    <div class="poi-badge">${poi.icon}</div>
                    <div>
                        <h2 class="poi-name">${poi.name}</h2>
                        <div class="poi-subinfo">${poi.stops.length} FERMATE COLLEGATE</div>
                    </div>
                </div>
            </div>
            <div class="poi-stops-list">
                ${stopsHtml}
            </div>
        `;
        
        grid.appendChild(poiBlock);
    });
}

// Low-overhead tick function running every second to update values without DOM rebuilds
function tickCountdowns() {
    state.pois.forEach(poi => {
        poi.stops.forEach(stop => {
            stop.lines.forEach(line => {
                const deps = getDepartures(stop.id, line, state.trafficMode);
                deps.forEach((dep, idx) => {
                    const depKey = `${stop.id}-${line.num}-${line.dir.replace(/\s+/g, '')}-${idx}`;
                    
                    const timeEl = document.getElementById(`time-val-${depKey}`);
                    const arrEl = document.getElementById(`time-arr-${depKey}`);
                    
                    if (timeEl && arrEl) {
                        let timeString = "";
                        
                        if (dep.remainingMinutes <= -0.15) {
                            timeString = "PASSATO";
                        } else if (dep.remainingMinutes <= 0.05) {
                            timeString = "FERMATA";
                            timeEl.parentElement.parentElement.classList.add("incoming");
                        } else if (dep.remainingMinutes <= 1.0) {
                            timeString = "ARRIVO";
                            timeEl.parentElement.parentElement.classList.add("incoming");
                        } else {
                            timeString = `${Math.round(dep.remainingMinutes)} MIN`;
                            timeEl.parentElement.parentElement.classList.remove("incoming");
                        }
                        
                        timeEl.textContent = timeString;
                        arrEl.textContent = dep.arrivalTimeStr;
                    }
                });
            });
        });
    });
}

// 7. CONFIGURATION PANEL RENDERING
function renderPoiConfig() {
    const list = document.getElementById("poi-list");
    list.innerHTML = "";

    if (state.pois.length === 0) {
        list.innerHTML = `<div class="empty-state-message">Nessun punto di interesse creato.</div>`;
        document.getElementById("add-stop-btn").disabled = true;
        document.getElementById("current-poi-label").textContent = "Crea prima un punto di interesse per gestirne le fermate.";
        renderStopsConfig();
        return;
    }

    // Set active POI if not set
    if (!state.currentPoiId || !state.pois.some(p => p.id === state.currentPoiId)) {
        state.currentPoiId = state.pois[0].id;
    }

    state.pois.forEach(poi => {
        const isActive = poi.id === state.currentPoiId;
        const item = document.createElement("div");
        item.className = `config-item ${isActive ? 'active' : ''}`;
        
        item.innerHTML = `
            <div class="config-item-info">
                <span class="poi-badge" style="width:24px; height:24px; font-size:0.75rem;">${poi.icon}</span>
                <div>
                    <span class="config-item-title">${poi.name}</span>
                    <div class="config-item-meta">${poi.stops.length} fermate</div>
                </div>
            </div>
            <div class="config-actions">
                <button class="action-icon-btn edit-poi-btn" title="Modifica" data-id="${poi.id}">✏️</button>
                <button class="action-icon-btn delete-poi-btn" title="Elimina" data-id="${poi.id}">🗑️</button>
            </div>
        `;
        
        // Clicking item selects it
        item.querySelector(".config-item-info").addEventListener("click", () => {
            state.currentPoiId = poi.id;
            renderPoiConfig();
            renderStopsConfig();
        });

        // Edit button
        item.querySelector(".edit-poi-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            openEditPoiModal(poi.id);
        });

        // Delete button
        item.querySelector(".delete-poi-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            if (confirm(`Sei sicuro di voler eliminare il punto di interesse "${poi.name}"?`)) {
                deletePoi(poi.id);
            }
        });

        list.appendChild(item);
    });

    document.getElementById("add-stop-btn").disabled = false;
    const activePoi = state.pois.find(p => p.id === state.currentPoiId);
    document.getElementById("current-poi-label").textContent = `Gestione fermate per: ${activePoi.name}`;
    
    renderStopsConfig();
}

function renderStopsConfig() {
    const list = document.getElementById("stops-config-list");
    list.innerHTML = "";

    if (!state.currentPoiId) {
        list.innerHTML = `<div class="empty-state-message">Nessun punto selezionato.</div>`;
        return;
    }

    const poi = state.pois.find(p => p.id === state.currentPoiId);
    if (!poi) return;

    if (poi.stops.length === 0) {
        list.innerHTML = `<div class="empty-state-message">Nessuna fermata collegata a questo punto. Clicca su "+ AGGIUNGI FERMATA".</div>`;
        return;
    }

    poi.stops.forEach((stop, index) => {
        const item = document.createElement("div");
        item.className = "config-item";
        
        const linesStr = stop.lines.map(l => l.num).join(", ");

        item.innerHTML = `
            <div class="config-item-info">
                <div>
                    <span class="config-item-title" style="font-size:0.8rem;">${stop.name}</span>
                    <div class="config-item-meta">Linee: ${linesStr} | COD: ${stop.id}</div>
                </div>
            </div>
            <div class="config-actions">
                <button class="action-icon-btn delete-stop-btn" title="Rimuovi" data-idx="${index}">🗑️</button>
            </div>
        `;

        item.querySelector(".delete-stop-btn").addEventListener("click", () => {
            if (confirm(`Rimuovere la fermata "${stop.name}" da "${poi.name}"?`)) {
                poi.stops.splice(index, 1);
                saveState();
                showToast("Fermata rimossa");
                renderDashboard();
                renderPoiConfig();
            }
        });

        list.appendChild(item);
    });
}

// 8. ADD STOP MODAL UTILITIES
function renderSearchResults(query) {
    const container = document.getElementById("search-results");
    container.innerHTML = "";
    
    const filtered = MILANO_STOP_DATABASE.filter(stop => 
        stop.name.toLowerCase().includes(query.toLowerCase()) || 
        String(stop.id).includes(query) ||
        stop.lines.some(l => l.num.toLowerCase().includes(query.toLowerCase()))
    );

    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-lines-yet">Nessuna fermata predefinita corrisponde alla ricerca. Puoi crearne una personalizzata nel tab a fianco.</div>`;
        return;
    }

    filtered.forEach(stop => {
        const item = document.createElement("div");
        item.className = "search-result-item";
        
        let badgesHtml = "";
        // Extract unique lines for display
        const uniqueLines = [];
        stop.lines.forEach(l => {
            if (!uniqueLines.includes(l.num)) uniqueLines.push(l.num);
        });

        uniqueLines.forEach(lNum => {
            const isMetro = lNum.startsWith("M");
            let badgeBg = "var(--color-bus)";
            if (isMetro) {
                if (lNum === 'M1') badgeBg = "var(--color-m1)";
                else if (lNum === 'M2') badgeBg = "var(--color-m2)";
                else if (lNum === 'M3') badgeBg = "var(--color-m3); color:#000;";
                else if (lNum === 'M4') badgeBg = "var(--color-m4)";
                else if (lNum === 'M5') badgeBg = "var(--color-m5)";
            } else {
                const stopLine = stop.lines.find(l => l.num === lNum);
                if (stopLine && stopLine.type === 'tram') badgeBg = "var(--color-tram); color:#000;";
            }

            badgesHtml += `<span class="mini-badge" style="background:${badgeBg}">${lNum}</span>`;
        });

        item.innerHTML = `
            <div>
                <span class="result-name">${stop.name}</span>
                <div style="font-size: 0.68rem; color: var(--text-secondary); margin-top:2px;">COD: ${stop.id}</div>
            </div>
            <div class="result-lines">
                ${badgesHtml}
            </div>
        `;

        item.addEventListener("click", () => {
            addStopToActivePoi(stop);
            document.getElementById("stop-modal").classList.remove("open");
        });

        container.appendChild(item);
    });
}

function renderAddedLinesChips() {
    const container = document.getElementById("added-lines-list");
    container.innerHTML = "";

    if (state.customStopLines.length === 0) {
        container.innerHTML = `<div class="no-lines-yet">Nessuna linea aggiunta per ora.</div>`;
        return;
    }

    state.customStopLines.forEach((line, index) => {
        const chip = document.createElement("div");
        chip.className = "added-line-chip";
        
        let typeBadge = line.type.toUpperCase();

        chip.innerHTML = `
            <span class="chip-text">${typeBadge} ${line.num} ➔ ${line.dir} (${line.freq} min)</span>
            <button type="button" class="chip-remove" data-idx="${index}">&times;</button>
        `;

        chip.querySelector(".chip-remove").addEventListener("click", () => {
            state.customStopLines.splice(index, 1);
            renderAddedLinesChips();
        });

        container.appendChild(chip);
    });
}

function addStopToActivePoi(stop) {
    if (!state.currentPoiId) return;
    const poi = state.pois.find(p => p.id === state.currentPoiId);
    if (!poi) return;

    // Check duplicate stop id
    if (poi.stops.some(s => s.id === stop.id)) {
        showToast("Fermata già presente in questo punto!");
        return;
    }

    // Add deep copy to avoid editing global db
    poi.stops.push(JSON.parse(JSON.stringify(stop)));
    saveState();
    showToast(`Fermata "${stop.name}" aggiunta!`);
    
    renderDashboard();
    renderPoiConfig();
}

// POI operations
function openEditPoiModal(id) {
    const poi = state.pois.find(p => p.id === id);
    if (!poi) return;

    const modal = document.getElementById("poi-modal");
    const form = document.getElementById("poi-form");
    
    document.getElementById("poi-modal-title").textContent = "MODIFICA PUNTO DI INTERESSE";
    document.getElementById("poi-name").value = poi.name;
    document.getElementById("poi-icon").value = poi.icon;
    
    form.dataset.mode = "edit";
    form.dataset.editId = id;
    
    modal.classList.add("open");
}

function deletePoi(id) {
    state.pois = state.pois.filter(p => p.id !== id);
    if (state.currentPoiId === id) {
        state.currentPoiId = state.pois.length > 0 ? state.pois[0].id : null;
    }
    saveState();
    showToast("Punto di interesse rimosso");
    renderDashboard();
    renderPoiConfig();
}

// Theme toggle
function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.body.className = `theme-${state.theme}`;
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.textContent = `TEMA: ${state.theme === 'dark' ? 'SCURO' : 'CHIARO'}`;
    saveState();
}

// Toast notification
let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById("notification-toast");
    toast.querySelector(".toast-message").textContent = message;
    
    toast.classList.add("show");
    
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// ==========================================================================
// 10. REAL-TIME WEATHER INTEGRATION & AUTOMATIC TRAFFIC ENGINE
// ==========================================================================
async function fetchRealtimeWeather() {
    try {
        // Fetch current weather for Milan center (Lat: 45.4642, Lon: 9.1900)
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=45.4642&longitude=9.1900&current=temperature_2m,weather_code");
        if (!response.ok) throw new Error("Meteo API response not OK");
        
        const data = await response.json();
        const code = data.current.weather_code;
        const temp = data.current.temperature_2m;
        
        // WMO codes >= 51 represent drizzle, rain, snow, showers, thunderstorms
        const isRaining = code >= 51;
        
        let description = "Sereno";
        if (code === 1 || code === 2 || code === 3) description = "Nuvoloso";
        else if (code === 45 || code === 48) description = "Nebbia";
        else if (code >= 51 && code <= 57) description = "Pioggerella";
        else if (code >= 61 && code <= 67) description = "Pioggia";
        else if (code >= 71 && code <= 77) description = "Neve";
        else if (code >= 80 && code <= 82) description = "Rovesci di Pioggia";
        else if (code >= 85 && code <= 86) description = "Rovesci di Neve";
        else if (code >= 95) description = "Temporale";

        currentWeatherData = { code, temp, isRaining, description };
        
        // Update display immediately
        updateClock();
        renderDashboard();
    } catch (e) {
        console.error("Errore nel recupero meteo Open-Meteo:", e);
    }
}

function getAutomaticTraffic() {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeVal = hours + minutes / 60; // fractional hours (e.g. 17.5 for 17:30)

    const isWeekend = (day === 0 || day === 6);
    const rainModifier = currentWeatherData.isRaining;
    
    let mode = "normal";
    let label = "NORMALE (FLUIDO)";

    if (isWeekend) {
        if (timeVal >= 23 || timeVal < 6) {
            mode = "low";
            label = "BASSO (NOTTURNO)";
        } else {
            if (rainModifier) {
                mode = "high";
                label = `ALTO (PIOGGIA - ${currentWeatherData.description.toUpperCase()})`;
            } else {
                mode = "normal";
                label = "NORMALE (FLUIDO)";
            }
        }
    } else {
        // Weekdays
        if (timeVal >= 8 && timeVal <= 9.5) {
            mode = rainModifier ? "extreme" : "high";
            label = rainModifier ? `CRITICO (PIOGGIA + PUNTA MATTINA)` : "ALTO (ORA DI PUNTA MATTINA)";
        } else if (timeVal >= 12.5 && timeVal <= 14) {
            mode = rainModifier ? "extreme" : "high";
            label = rainModifier ? `CRITICO (PIOGGIA + PUNTA PRANZO)` : "ALTO (ORA DI PUNTA PRANZO)";
        } else if (timeVal >= 17.5 && timeVal <= 19.5) {
            mode = "extreme";
            label = rainModifier ? `CRITICO (PIOGGIA + PUNTA SERA)` : "CRITICO (ORA DI PUNTA SERA)";
        } else if (timeVal >= 23 || timeVal < 6) {
            mode = "low";
            label = "BASSO (NOTTURNO)";
        } else {
            if (rainModifier) {
                mode = "high";
                label = `ALTO (PIOGGIA - ${currentWeatherData.description.toUpperCase()})`;
            } else {
                mode = "normal";
                label = "NORMALE (FLUIDO)";
            }
        }
    }

    // Include temperature info if available to make it look even cooler/functional
    if (currentWeatherData.temp !== null) {
        label += ` | ${currentWeatherData.temp}°C`;
    }

    return { mode, label };
}

// 9. LAUNCH APPLICATION
window.addEventListener("DOMContentLoaded", () => {
    loadState();
    initDOM();
});
