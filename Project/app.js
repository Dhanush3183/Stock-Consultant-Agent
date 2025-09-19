// Stock Market Consultant Agent - Main Application Logic

class StockMarketApp {
    constructor() {
        this.portfolio = [];
        this.usageStats = {
            totalAdvice: 0,
            reportsGenerated: 0,
            totalSessions: 1
        };
        this.currentTheme = 'light';
        this.charts = {};
        
        // Comprehensive stock database from application_data_json
        this.comprehensiveStockDatabase = [
            {"symbol": "TCS", "name": "Tata Consultancy Services", "exchange": "NSE", "price": 3847.50, "change": 45.20, "changePercent": 1.19},
            {"symbol": "RELIANCE", "name": "Reliance Industries", "exchange": "NSE", "price": 2456.75, "change": -12.30, "changePercent": -0.50},
            {"symbol": "INFY", "name": "Infosys Limited", "exchange": "NSE", "price": 1789.40, "change": 23.15, "changePercent": 1.31},
            {"symbol": "HDFCBANK", "name": "HDFC Bank", "exchange": "NSE", "price": 1643.80, "change": 18.90, "changePercent": 1.16},
            {"symbol": "ICICIBANK", "name": "ICICI Bank", "exchange": "NSE", "price": 1287.25, "change": -8.75, "changePercent": -0.67},
            {"symbol": "SBIN", "name": "State Bank of India", "exchange": "NSE", "price": 847.30, "change": 12.45, "changePercent": 1.49},
            {"symbol": "BHARTIARTL", "name": "Bharti Airtel", "exchange": "NSE", "price": 1567.90, "change": 34.20, "changePercent": 2.23},
            {"symbol": "ITC", "name": "ITC Limited", "exchange": "NSE", "price": 456.75, "change": -2.15, "changePercent": -0.47},
            {"symbol": "KOTAKBANK", "name": "Kotak Mahindra Bank", "exchange": "NSE", "price": 1798.60, "change": 25.40, "changePercent": 1.43},
            {"symbol": "LT", "name": "Larsen & Toubro", "exchange": "NSE", "price": 3567.80, "change": 67.20, "changePercent": 1.92},
            {"symbol": "ASIANPAINT", "name": "Asian Paints", "exchange": "NSE", "price": 2987.45, "change": -15.30, "changePercent": -0.51},
            {"symbol": "MARUTI", "name": "Maruti Suzuki", "exchange": "NSE", "price": 12450.60, "change": 189.40, "changePercent": 1.54},
            {"symbol": "BAJFINANCE", "name": "Bajaj Finance", "exchange": "NSE", "price": 6789.25, "change": -45.80, "changePercent": -0.67},
            {"symbol": "HCLTECH", "name": "HCL Technologies", "exchange": "NSE", "price": 1456.90, "change": 28.70, "changePercent": 2.01},
            {"symbol": "WIPRO", "name": "Wipro Limited", "exchange": "NSE", "price": 567.80, "change": 8.45, "changePercent": 1.51},
            {"symbol": "ADANIPORTS", "name": "Adani Ports", "exchange": "NSE", "price": 1287.40, "change": 23.60, "changePercent": 1.87},
            {"symbol": "POWERGRID", "name": "Power Grid Corporation", "exchange": "NSE", "price": 287.90, "change": 4.20, "changePercent": 1.48},
            {"symbol": "NTPC", "name": "NTPC Limited", "exchange": "NSE", "price": 367.80, "change": -2.10, "changePercent": -0.57},
            {"symbol": "TATAMOTORS", "name": "Tata Motors", "exchange": "NSE", "price": 987.65, "change": 15.40, "changePercent": 1.58},
            {"symbol": "ULTRACEMCO", "name": "UltraTech Cement", "exchange": "NSE", "price": 10789.30, "change": 156.20, "changePercent": 1.47},
            {"symbol": "AXISBANK", "name": "Axis Bank", "exchange": "NSE", "price": 1198.75, "change": -8.90, "changePercent": -0.74},
            {"symbol": "TATASTEEL", "name": "Tata Steel", "exchange": "NSE", "price": 156.40, "change": 3.20, "changePercent": 2.09},
            {"symbol": "TECHM", "name": "Tech Mahindra", "exchange": "NSE", "price": 1678.90, "change": 34.50, "changePercent": 2.10},
            {"symbol": "TITAN", "name": "Titan Company", "exchange": "NSE", "price": 3456.80, "change": -23.40, "changePercent": -0.67},
            {"symbol": "SUNPHARMA", "name": "Sun Pharmaceutical", "exchange": "NSE", "price": 1789.60, "change": 45.20, "changePercent": 2.59},
            {"symbol": "NESTLEIND", "name": "Nestle India", "exchange": "NSE", "price": 2345.70, "change": 12.80, "changePercent": 0.55},
            {"symbol": "HINDUNILVR", "name": "Hindustan Unilever", "exchange": "NSE", "price": 2567.90, "change": -18.40, "changePercent": -0.71},
            {"symbol": "JSWSTEEL", "name": "JSW Steel", "exchange": "NSE", "price": 967.50, "change": 23.40, "changePercent": 2.48},
            {"symbol": "GRASIM", "name": "Grasim Industries", "exchange": "NSE", "price": 2456.80, "change": 34.20, "changePercent": 1.41},
            {"symbol": "COALINDIA", "name": "Coal India", "exchange": "NSE", "price": 456.70, "change": 8.90, "changePercent": 1.99},
            {"symbol": "AAPL", "name": "Apple Inc.", "exchange": "NASDAQ", "price": 190.85, "change": 2.34, "changePercent": 1.24},
            {"symbol": "MSFT", "name": "Microsoft Corporation", "exchange": "NASDAQ", "price": 415.26, "change": -1.89, "changePercent": -0.45},
            {"symbol": "GOOGL", "name": "Alphabet Inc.", "exchange": "NASDAQ", "price": 175.43, "change": 3.21, "changePercent": 1.87},
            {"symbol": "AMZN", "name": "Amazon.com Inc.", "exchange": "NASDAQ", "price": 178.32, "change": 1.45, "changePercent": 0.82},
            {"symbol": "TSLA", "name": "Tesla Inc.", "exchange": "NASDAQ", "price": 248.98, "change": -5.67, "changePercent": -2.23},
            {"symbol": "META", "name": "Meta Platforms Inc.", "exchange": "NASDAQ", "price": 512.78, "change": -2.34, "changePercent": -0.45},
            {"symbol": "NVDA", "name": "NVIDIA Corporation", "exchange": "NASDAQ", "price": 875.23, "change": 12.45, "changePercent": 1.44},
            {"symbol": "NFLX", "name": "Netflix Inc.", "exchange": "NASDAQ", "price": 645.12, "change": 8.90, "changePercent": 1.40},
            {"symbol": "ORCL", "name": "Oracle Corporation", "exchange": "NASDAQ", "price": 134.67, "change": 2.45, "changePercent": 1.85},
            {"symbol": "CRM", "name": "Salesforce Inc.", "exchange": "NYSE", "price": 287.43, "change": 4.56, "changePercent": 1.61},
            {"symbol": "ADBE", "name": "Adobe Inc.", "exchange": "NASDAQ", "price": 567.89, "change": -3.21, "changePercent": -0.56},
            {"symbol": "INTC", "name": "Intel Corporation", "exchange": "NASDAQ", "price": 34.56, "change": 0.89, "changePercent": 2.64},
            {"symbol": "AMD", "name": "Advanced Micro Devices", "exchange": "NASDAQ", "price": 156.78, "change": 4.23, "changePercent": 2.77},
            {"symbol": "QCOM", "name": "Qualcomm Inc.", "exchange": "NASDAQ", "price": 189.45, "change": 3.67, "changePercent": 1.98},
            {"symbol": "AVGO", "name": "Broadcom Inc.", "exchange": "NASDAQ", "price": 1456.78, "change": 23.45, "changePercent": 1.64},
            {"symbol": "CSCO", "name": "Cisco Systems", "exchange": "NASDAQ", "price": 56.78, "change": 1.23, "changePercent": 2.21},
            {"symbol": "IBM", "name": "International Business Machines", "exchange": "NYSE", "price": 189.67, "change": -1.45, "changePercent": -0.76},
            {"symbol": "PYPL", "name": "PayPal Holdings", "exchange": "NASDAQ", "price": 78.45, "change": 2.34, "changePercent": 3.08},
            {"symbol": "SQ", "name": "Block Inc.", "exchange": "NYSE", "price": 89.56, "change": 3.45, "changePercent": 4.01},
            {"symbol": "SHOP", "name": "Shopify Inc.", "exchange": "NYSE", "price": 78.90, "change": 1.67, "changePercent": 2.16},
            {"symbol": "ZOOM", "name": "Zoom Video Communications", "exchange": "NASDAQ", "price": 89.45, "change": -0.78, "changePercent": -0.86},
            {"symbol": "UBER", "name": "Uber Technologies", "exchange": "NYSE", "price": 67.89, "change": 2.45, "changePercent": 3.74},
            {"symbol": "LYFT", "name": "Lyft Inc.", "exchange": "NASDAQ", "price": 23.45, "change": 0.67, "changePercent": 2.94},
            {"symbol": "SNAP", "name": "Snap Inc.", "exchange": "NYSE", "price": 12.34, "change": -0.23, "changePercent": -1.83},
            {"symbol": "JPM", "name": "JPMorgan Chase", "exchange": "NYSE", "price": 456.78, "change": 8.90, "changePercent": 1.99},
            {"symbol": "BAC", "name": "Bank of America", "exchange": "NYSE", "price": 34.56, "change": 0.78, "changePercent": 2.31},
            {"symbol": "WFC", "name": "Wells Fargo", "exchange": "NYSE", "price": 56.78, "change": 1.45, "changePercent": 2.62},
            {"symbol": "GS", "name": "Goldman Sachs", "exchange": "NYSE", "price": 389.45, "change": 6.78, "changePercent": 1.77},
            {"symbol": "MS", "name": "Morgan Stanley", "exchange": "NYSE", "price": 98.76, "change": 2.34, "changePercent": 2.43},
            {"symbol": "C", "name": "Citigroup", "exchange": "NYSE", "price": 67.89, "change": 1.23, "changePercent": 1.85},
            {"symbol": "V", "name": "Visa Inc.", "exchange": "NYSE", "price": 289.45, "change": 4.56, "changePercent": 1.60},
            {"symbol": "MA", "name": "Mastercard Inc.", "exchange": "NYSE", "price": 456.78, "change": 7.89, "changePercent": 1.76},
            {"symbol": "AXP", "name": "American Express", "exchange": "NYSE", "price": 189.67, "change": 3.45, "changePercent": 1.85},
            {"symbol": "BRK.B", "name": "Berkshire Hathaway", "exchange": "NYSE", "price": 456.78, "change": 5.67, "changePercent": 1.26},
            {"symbol": "JNJ", "name": "Johnson & Johnson", "exchange": "NYSE", "price": 167.89, "change": 2.34, "changePercent": 1.41},
            {"symbol": "PFE", "name": "Pfizer Inc.", "exchange": "NYSE", "price": 34.56, "change": 0.78, "changePercent": 2.31},
            {"symbol": "ABBV", "name": "AbbVie Inc.", "exchange": "NYSE", "price": 189.45, "change": 3.67, "changePercent": 1.98},
            {"symbol": "MRK", "name": "Merck & Co.", "exchange": "NYSE", "price": 123.45, "change": 2.78, "changePercent": 2.30},
            {"symbol": "TMO", "name": "Thermo Fisher Scientific", "exchange": "NYSE", "price": 567.89, "change": 8.90, "changePercent": 1.59},
            {"symbol": "ABT", "name": "Abbott Laboratories", "exchange": "NYSE", "price": 123.45, "change": 2.34, "changePercent": 1.93},
            {"symbol": "CVS", "name": "CVS Health Corporation", "exchange": "NYSE", "price": 78.90, "change": 1.67, "changePercent": 2.16},
            {"symbol": "UNH", "name": "UnitedHealth Group", "exchange": "NYSE", "price": 567.89, "change": 9.87, "changePercent": 1.77},
            {"symbol": "KO", "name": "Coca-Cola Company", "exchange": "NYSE", "price": 67.89, "change": 1.23, "changePercent": 1.85},
            {"symbol": "PEP", "name": "PepsiCo Inc.", "exchange": "NASDAQ", "price": 189.45, "change": 2.67, "changePercent": 1.43},
            {"symbol": "WMT", "name": "Walmart Inc.", "exchange": "NYSE", "price": 167.89, "change": 3.45, "changePercent": 2.10},
            {"symbol": "HD", "name": "Home Depot", "exchange": "NYSE", "price": 389.67, "change": 6.78, "changePercent": 1.77},
            {"symbol": "MCD", "name": "McDonald's Corporation", "exchange": "NYSE", "price": 298.45, "change": 4.56, "changePercent": 1.55},
            {"symbol": "SBUX", "name": "Starbucks Corporation", "exchange": "NASDAQ", "price": 123.45, "change": 2.78, "changePercent": 2.30},
            {"symbol": "NKE", "name": "Nike Inc.", "exchange": "NYSE", "price": 123.45, "change": 1.89, "changePercent": 1.55},
            {"symbol": "DIS", "name": "Walt Disney Company", "exchange": "NYSE", "price": 123.45, "change": 2.34, "changePercent": 1.93},
            {"symbol": "ASML", "name": "ASML Holding", "exchange": "NASDAQ", "price": 789.45, "change": 12.34, "changePercent": 1.59},
            {"symbol": "SAP", "name": "SAP SE", "exchange": "NYSE", "price": 145.67, "change": 2.89, "changePercent": 2.02},
            {"symbol": "NESN", "name": "Nestle SA", "exchange": "OTC", "price": 123.45, "change": 1.67, "changePercent": 1.37},
            {"symbol": "LVMH", "name": "LVMH Moet Hennessy", "exchange": "OTC", "price": 456.78, "change": 7.89, "changePercent": 1.76},
            {"symbol": "TSM", "name": "Taiwan Semiconductor", "exchange": "NYSE", "price": 134.56, "change": 3.45, "changePercent": 2.63},
            {"symbol": "WIT", "name": "Wipro IT Services", "exchange": "NASDAQ", "price": 89.45, "change": 2.10, "changePercent": 2.40},
            {"symbol": "RELI", "name": "Reliance Energy", "exchange": "NSE", "price": 567.80, "change": 12.30, "changePercent": 2.21},
            {"symbol": "APLM", "name": "Applied Materials", "exchange": "NASDAQ", "price": 234.56, "change": 5.67, "changePercent": 2.48}
        ];
        
        this.marketIndices = [
            {"name": "NIFTY 50", "value": 24958.10, "change": 145.23, "changePercent": 0.58},
            {"name": "SENSEX", "value": 82365.77, "change": 498.34, "changePercent": 0.61},
            {"name": "NIFTY BANK", "value": 52847.65, "change": -234.56, "changePercent": -0.44}
        ];
        
        this.sectors = [
            {"name": "Technology", "performance": 2.1, "color": "#4F46E5"},
            {"name": "Healthcare", "performance": -0.8, "color": "#059669"},
            {"name": "Finance", "performance": 1.3, "color": "#DC2626"},
            {"name": "Consumer", "performance": 0.5, "color": "#7C2D12"},
            {"name": "Energy", "performance": -1.2, "color": "#B45309"}
        ];
        
        this.marketNews = [
            {"title": "Tech Stocks Rally on AI Optimism", "time": "2 hours ago", "sentiment": "positive"},
            {"title": "Federal Reserve Hints at Rate Stability", "time": "4 hours ago", "sentiment": "neutral"},
            {"title": "Q3 Earnings Season Shows Mixed Results", "time": "1 day ago", "sentiment": "neutral"},
            {"title": "Energy Sector Faces Headwinds", "time": "2 days ago", "sentiment": "negative"}
        ];
        
        this.investmentTerms = {
            "P/E Ratio": "Price-to-Earnings ratio measures how expensive a stock is relative to its earnings",
            "Market Cap": "Total value of a company's shares in the stock market",
            "Dividend Yield": "Annual dividend payment as a percentage of stock price",
            "RSI": "Relative Strength Index indicates if a stock is overbought or oversold",
            "Moving Average": "Average price over a specific period, used to identify trends",
            "Volatility": "Measure of how much a stock's price fluctuates over time"
        };
        
        this.riskLevels = {
            "low": {"color": "#059669", "description": "Conservative investment with stable returns"},
            "medium": {"color": "#D97706", "description": "Balanced risk-reward profile"},
            "high": {"color": "#DC2626", "description": "High potential returns with significant risk"}
        };

        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApp());
        } else {
            this.setupApp();
        }
    }

    setupApp() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.renderDashboard();
        this.renderEducationContent();
        this.updateUsageStats();
        this.startPriceUpdates();
    }

    setupEventListeners() {
        // Tab navigation - Use event delegation for better reliability
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav__tab')) {
                e.preventDefault();
                const tabName = e.target.getAttribute('data-tab');
                if (tabName) {
                    this.switchTab(tabName);
                }
            }
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Get started button
        const getStartedBtn = document.getElementById('getStartedBtn');
        if (getStartedBtn) {
            getStartedBtn.addEventListener('click', () => this.switchTab('portfolio'));
        }

        // Stock form - Use event delegation
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'stockForm') {
                e.preventDefault();
                this.addStock(e);
            }
        });

        // Stock symbol autocomplete - Use event delegation
        document.addEventListener('input', (e) => {
            if (e.target.id === 'stockSymbol') {
                this.handleStockInput(e);
            }
        });

        document.addEventListener('blur', (e) => {
            if (e.target.id === 'stockSymbol') {
                setTimeout(() => this.hideSuggestions(), 200);
            }
        });

        // Analyze portfolio
        const analyzeBtn = document.getElementById('analyzePortfolio');
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => this.analyzePortfolio());
        }

        // Modal events
        const modalCancel = document.getElementById('modalCancel');
        const modalConfirm = document.getElementById('modalConfirm');
        const modalBackdrop = document.querySelector('.modal__backdrop');
        
        if (modalCancel) modalCancel.addEventListener('click', () => this.hideModal());
        if (modalConfirm) modalConfirm.addEventListener('click', () => this.hideModal());
        if (modalBackdrop) modalBackdrop.addEventListener('click', () => this.hideModal());
    }

    switchTab(tabName) {
        // Update nav tabs
        const navTabs = document.querySelectorAll('.nav__tab');
        navTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-tab') === tabName) {
                tab.classList.add('active');
            }
        });

        // Update content
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        const targetTab = document.getElementById(tabName);
        if (targetTab) {
            targetTab.classList.add('active');
        }

        // Render specific content based on tab
        if (tabName === 'portfolio') {
            this.renderPortfolio();
        } else if (tabName === 'analytics') {
            // Delay chart rendering to ensure container is visible
            setTimeout(() => this.renderAnalytics(), 100);
        } else if (tabName === 'education') {
            this.renderEducationContent();
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-color-scheme', this.currentTheme);
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
        }
        this.saveToStorage();
    }

    renderDashboard() {
        // Render market indices
        const indicesContainer = document.getElementById('marketIndices');
        if (indicesContainer) {
            indicesContainer.innerHTML = this.marketIndices.map(index => `
                <div class="index-item">
                    <div class="index-name">${index.name}</div>
                    <div class="index-value">
                        <div class="index-price">${index.value.toLocaleString()}</div>
                        <div class="index-change ${index.change >= 0 ? 'positive' : 'negative'}">
                            ${index.change >= 0 ? '+' : ''}${index.change.toFixed(2)} (${index.changePercent.toFixed(2)}%)
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Render sectors
        const sectorsContainer = document.getElementById('sectorsPerformance');
        if (sectorsContainer) {
            sectorsContainer.innerHTML = this.sectors.map(sector => `
                <div class="sector-item">
                    <div class="sector-name">${sector.name}</div>
                    <div class="sector-performance ${sector.performance >= 0 ? 'positive' : 'negative'}">
                        ${sector.performance >= 0 ? '+' : ''}${sector.performance.toFixed(1)}%
                    </div>
                </div>
            `).join('');
        }

        // Render news
        const newsContainer = document.getElementById('marketNews');
        if (newsContainer) {
            newsContainer.innerHTML = this.marketNews.map(news => `
                <div class="news-item">
                    <div class="news-title">${news.title}</div>
                    <div class="news-time">${news.time}</div>
                </div>
            `).join('');
        }
    }

    handleStockInput(e) {
        const input = e.target.value.trim();
        const suggestions = document.getElementById('suggestions');
        
        if (!suggestions) return;
        
        if (input.length === 0) {
            this.hideSuggestions();
            return;
        }

        // Enhanced search: case-insensitive matching of both symbol and company name
        const matches = this.comprehensiveStockDatabase.filter(stock => {
            const symbolMatch = stock.symbol.toLowerCase().includes(input.toLowerCase());
            const nameMatch = stock.name.toLowerCase().includes(input.toLowerCase());
            return symbolMatch || nameMatch;
        }).slice(0, 10); // Show up to 10 suggestions

        if (matches.length > 0) {
            suggestions.innerHTML = matches.map(stock => `
                <div class="suggestion-item" data-symbol="${stock.symbol}">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <strong>${stock.symbol}</strong> - ${stock.name}
                            <div style="font-size: 12px; color: var(--color-text-secondary);">${stock.exchange}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-weight: bold;">$${stock.price.toFixed(2)}</div>
                            <div style="font-size: 12px;" class="${stock.change >= 0 ? 'positive' : 'negative'}">
                                ${stock.change >= 0 ? '+' : ''}${stock.changePercent.toFixed(2)}%
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
            suggestions.classList.add('show');
            
            // Add click event listeners to suggestion items
            const suggestionItems = suggestions.querySelectorAll('.suggestion-item');
            suggestionItems.forEach(item => {
                item.addEventListener('click', () => {
                    const symbol = item.getAttribute('data-symbol');
                    this.selectStock(symbol);
                });
            });
        } else {
            this.hideSuggestions();
        }
    }

    selectStock(symbol) {
        const stockSymbolInput = document.getElementById('stockSymbol');
        const purchasePriceInput = document.getElementById('purchasePrice');
        
        if (stockSymbolInput) {
            stockSymbolInput.value = symbol;
        }
        
        this.hideSuggestions();
        
        // Auto-fill current price as purchase price suggestion
        const stock = this.getStockData(symbol);
        if (stock && purchasePriceInput) {
            purchasePriceInput.value = stock.price.toFixed(2);
        }
        
        // Focus on quantity field
        const quantityInput = document.getElementById('quantity');
        if (quantityInput) {
            quantityInput.focus();
        }
    }

    hideSuggestions() {
        const suggestions = document.getElementById('suggestions');
        if (suggestions) {
            suggestions.classList.remove('show');
            suggestions.innerHTML = '';
        }
    }

    addStock(e) {
        e.preventDefault();
        
        const symbol = document.getElementById('stockSymbol').value.toUpperCase().trim();
        const quantity = parseInt(document.getElementById('quantity').value);
        const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
        const purchaseDate = document.getElementById('purchaseDate').value;

        // Validate inputs
        if (!symbol || !quantity || !purchasePrice || !purchaseDate) {
            this.showNotification('Please fill all fields', 'error');
            return;
        }

        if (quantity <= 0) {
            this.showNotification('Quantity must be greater than 0', 'error');
            return;
        }

        if (purchasePrice <= 0) {
            this.showNotification('Purchase price must be greater than 0', 'error');
            return;
        }

        // Validate stock exists
        const stockData = this.getStockData(symbol);
        if (!stockData) {
            this.showNotification('Stock symbol not found. Please select from suggestions.', 'error');
            return;
        }

        // Check if stock already exists in portfolio
        const existingStock = this.portfolio.find(stock => stock.symbol === symbol);
        if (existingStock) {
            // Update existing stock
            existingStock.quantity += quantity;
            existingStock.totalCost += (purchasePrice * quantity);
            existingStock.avgPrice = existingStock.totalCost / existingStock.quantity;
            this.showNotification(`Updated ${symbol} position in portfolio!`, 'success');
        } else {
            // Add new stock
            this.portfolio.push({
                symbol,
                name: stockData.name,
                quantity,
                purchasePrice,
                avgPrice: purchasePrice,
                totalCost: purchasePrice * quantity,
                purchaseDate
            });
            this.showNotification(`Added ${symbol} to portfolio successfully!`, 'success');
        }

        this.saveToStorage();
        this.renderPortfolio();
        this.updatePortfolioSummary();
        
        // Reset form
        const stockForm = document.getElementById('stockForm');
        if (stockForm) {
            stockForm.reset();
        }
        
        // Set today's date as default
        const purchaseDateInput = document.getElementById('purchaseDate');
        if (purchaseDateInput) {
            purchaseDateInput.value = new Date().toISOString().split('T')[0];
        }
    }

    removeStock(symbol) {
        if (confirm('Are you sure you want to remove this stock from your portfolio?')) {
            this.portfolio = this.portfolio.filter(stock => stock.symbol !== symbol);
            this.saveToStorage();
            this.renderPortfolio();
            this.updatePortfolioSummary();
            this.showNotification('Stock removed from portfolio', 'info');
        }
    }

    renderPortfolio() {
        const tbody = document.querySelector('#portfolioTable tbody');
        if (!tbody) return;
        
        if (this.portfolio.length === 0) {
            tbody.innerHTML = '<tr class="empty-state"><td colspan="8">No stocks in portfolio. Add your first stock above.</td></tr>';
            return;
        }

        tbody.innerHTML = this.portfolio.map(stock => {
            const currentData = this.getStockData(stock.symbol);
            const currentValue = currentData.price * stock.quantity;
            const totalCost = stock.totalCost;
            const pl = currentValue - totalCost;
            const plPercent = ((pl / totalCost) * 100).toFixed(2);
            
            return `
                <tr>
                    <td><strong>${stock.symbol}</strong></td>
                    <td>${stock.name}</td>
                    <td>${stock.quantity}</td>
                    <td>$${stock.avgPrice.toFixed(2)}</td>
                    <td>$${currentData.price.toFixed(2)}</td>
                    <td>$${currentValue.toFixed(2)}</td>
                    <td class="${pl >= 0 ? 'pl-positive' : 'pl-negative'}">
                        $${pl.toFixed(2)} (${plPercent}%)
                    </td>
                    <td>
                        <button class="remove-btn" data-symbol="${stock.symbol}">Remove</button>
                    </td>
                </tr>
            `;
        }).join('');

        // Add event listeners to remove buttons
        const removeButtons = tbody.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const symbol = e.target.getAttribute('data-symbol');
                this.removeStock(symbol);
            });
        });

        this.updatePortfolioSummary();
    }

    updatePortfolioSummary() {
        let totalValue = 0;
        let totalCost = 0;

        this.portfolio.forEach(stock => {
            const currentData = this.getStockData(stock.symbol);
            totalValue += currentData.price * stock.quantity;
            totalCost += stock.totalCost;
        });

        const totalPL = totalValue - totalCost;
        
        const totalPortfolioValueEl = document.getElementById('totalPortfolioValue');
        const portfolioValueEl = document.getElementById('portfolioValue');
        const totalPLEl = document.getElementById('totalPL');
        
        if (totalPortfolioValueEl) totalPortfolioValueEl.textContent = `$${totalValue.toFixed(2)}`;
        if (portfolioValueEl) portfolioValueEl.textContent = `$${totalValue.toFixed(2)}`;
        
        if (totalPLEl) {
            totalPLEl.textContent = `$${totalPL.toFixed(2)}`;
            totalPLEl.className = totalPL >= 0 ? 'pl-positive' : 'pl-negative';
        }
    }

    analyzePortfolio() {
        if (this.portfolio.length === 0) {
            this.showNotification('Please add stocks to your portfolio first.', 'warning');
            return;
        }

        this.usageStats.totalAdvice++;
        this.usageStats.reportsGenerated++;
        this.updateUsageStats();
        this.saveToStorage();

        const analysisStatus = document.getElementById('analysisStatus');
        if (analysisStatus) {
            analysisStatus.innerHTML = '<div class="loading"></div> Analyzing your portfolio...';
        }

        // Simulate analysis delay
        setTimeout(() => {
            this.generateAdvice();
            if (analysisStatus) {
                analysisStatus.innerHTML = '✅ Analysis complete!';
            }
        }, 2000);
    }

    generateAdvice() {
        const adviceResults = document.getElementById('adviceResults');
        if (!adviceResults) return;
        
        const advice = this.portfolio.map(stock => {
            const currentData = this.getStockData(stock.symbol);
            const analysis = this.analyzeStock(stock, currentData);
            
            return `
                <div class="advice-card">
                    <div class="advice-header">
                        <div class="stock-info">
                            <h3>${stock.symbol} - ${stock.name}</h3>
                            <div class="stock-price">Current: $${currentData.price.toFixed(2)} | Your avg: $${stock.avgPrice.toFixed(2)}</div>
                        </div>
                        <div class="recommendation">
                            <div class="recommendation-badge ${analysis.recommendation.toLowerCase()}">
                                ${analysis.recommendation}
                            </div>
                            <div class="confidence-score">Confidence: ${analysis.confidence}%</div>
                        </div>
                    </div>
                    <div class="advice-details">
                        <div class="detail-item">
                            <span class="detail-label">Risk Level:</span>
                            <span class="${analysis.risk}">${analysis.risk.toUpperCase()}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Target Price:</span>
                            <span>$${analysis.targetPrice.toFixed(2)}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Time Horizon:</span>
                            <span>${analysis.timeHorizon}</span>
                        </div>
                        <div class="explanation">
                            <h4>📝 Why this recommendation?</h4>
                            <p>${analysis.explanation}</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        adviceResults.innerHTML = advice;

        // Show high-risk warning if needed
        const hasHighRisk = this.portfolio.some(stock => {
            const analysis = this.analyzeStock(stock, this.getStockData(stock.symbol));
            return analysis.risk === 'high';
        });

        if (hasHighRisk) {
            this.showRiskWarning();
        }
    }

    analyzeStock(stock, currentData) {
        const priceChange = ((currentData.price - stock.avgPrice) / stock.avgPrice) * 100;
        const isGaining = priceChange > 0;
        const volatility = Math.abs(currentData.changePercent);
        
        let recommendation, risk, confidence, targetPrice, timeHorizon, explanation;

        // Simple algorithm for demonstration
        if (priceChange > 20) {
            recommendation = 'SELL';
            risk = 'medium';
            confidence = 75;
            targetPrice = currentData.price * 0.95;
            timeHorizon = '1-3 months';
            explanation = `${stock.symbol} has gained over 20% from your purchase price. Consider taking profits and securing gains. The stock might face resistance at current levels.`;
        } else if (priceChange < -15) {
            recommendation = 'BUY';
            risk = 'high';
            confidence = 70;
            targetPrice = currentData.price * 1.25;
            timeHorizon = '6-12 months';
            explanation = `${stock.symbol} is down 15%+ from your purchase price. If fundamentals remain strong, this could be a good opportunity to average down your position.`;
        } else if (volatility > 3) {
            recommendation = 'HOLD';
            risk = 'high';
            confidence = 65;
            targetPrice = currentData.price * 1.15;
            timeHorizon = '3-6 months';
            explanation = `${stock.symbol} is showing high volatility (${volatility.toFixed(1)}% daily change). Hold your position and monitor closely for trend confirmation.`;
        } else {
            recommendation = 'HOLD';
            risk = 'low';
            confidence = 80;
            targetPrice = currentData.price * 1.10;
            timeHorizon = '6-12 months';
            explanation = `${stock.symbol} is performing steadily. Continue holding as the stock shows stable growth patterns with manageable risk.`;
        }

        return { recommendation, risk, confidence, targetPrice, timeHorizon, explanation };
    }

    renderAnalytics() {
        if (this.portfolio.length === 0) {
            const analyticsGrid = document.querySelector('#analytics .analytics-grid');
            if (analyticsGrid) {
                analyticsGrid.innerHTML = '<div class="card"><div class="card__body"><p>Add stocks to your portfolio to see analytics.</p></div></div>';
            }
            return;
        }

        this.renderAllocationChart();
        this.renderRiskChart();
        this.renderSectorChart();
        this.renderPerformanceChart();
    }

    renderAllocationChart() {
        const ctx = document.getElementById('allocationChart');
        if (!ctx) return;
        
        if (this.charts.allocation) {
            this.charts.allocation.destroy();
        }

        const data = this.portfolio.map(stock => {
            const currentData = this.getStockData(stock.symbol);
            return {
                label: stock.symbol,
                value: currentData.price * stock.quantity
            };
        });

        this.charts.allocation = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.map(d => d.label),
                datasets: [{
                    data: data.map(d => d.value),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    renderRiskChart() {
        const ctx = document.getElementById('riskChart');
        if (!ctx) return;
        
        if (this.charts.risk) {
            this.charts.risk.destroy();
        }

        const riskCounts = { low: 0, medium: 0, high: 0 };
        this.portfolio.forEach(stock => {
            const analysis = this.analyzeStock(stock, this.getStockData(stock.symbol));
            riskCounts[analysis.risk]++;
        });

        this.charts.risk = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Low Risk', 'Medium Risk', 'High Risk'],
                datasets: [{
                    data: [riskCounts.low, riskCounts.medium, riskCounts.high],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    renderSectorChart() {
        const ctx = document.getElementById('sectorChart');
        if (!ctx) return;
        
        if (this.charts.sector) {
            this.charts.sector.destroy();
        }

        // Enhanced sector allocation based on comprehensive database
        const sectorAllocation = {
            'Technology': 0,
            'Finance': 0,
            'Healthcare': 0,
            'Consumer': 0,
            'Energy': 0,
            'Industrial': 0,
            'Materials': 0
        };

        this.portfolio.forEach(stock => {
            const value = this.getStockData(stock.symbol).price * stock.quantity;
            const symbol = stock.symbol;
            
            // Enhanced sector mapping
            if (['AAPL', 'MSFT', 'GOOGL', 'NVDA', 'META', 'NFLX', 'ORCL', 'CRM', 'ADBE', 'INTC', 'AMD', 'QCOM', 'AVGO', 'CSCO', 'IBM', 'TCS', 'INFY', 'HCLTECH', 'WIPRO', 'TECHM'].includes(symbol)) {
                sectorAllocation['Technology'] += value;
            } else if (['JPM', 'BAC', 'WFC', 'GS', 'MS', 'C', 'V', 'MA', 'AXP', 'BRK.B', 'PYPL', 'HDFCBANK', 'ICICIBANK', 'SBIN', 'KOTAKBANK', 'AXISBANK', 'BAJFINANCE'].includes(symbol)) {
                sectorAllocation['Finance'] += value;
            } else if (['JNJ', 'PFE', 'ABBV', 'MRK', 'TMO', 'ABT', 'CVS', 'UNH', 'SUNPHARMA'].includes(symbol)) {
                sectorAllocation['Healthcare'] += value;
            } else if (['KO', 'PEP', 'WMT', 'HD', 'MCD', 'SBUX', 'NKE', 'DIS', 'ITC', 'NESTLEIND', 'HINDUNILVR', 'MARUTI', 'TITAN'].includes(symbol)) {
                sectorAllocation['Consumer'] += value;
            } else if (['COALINDIA', 'NTPC', 'POWERGRID', 'RELIANCE', 'RELI'].includes(symbol)) {
                sectorAllocation['Energy'] += value;
            } else if (['LT', 'TATAMOTORS', 'ADANIPORTS', 'BHARTIARTL'].includes(symbol)) {
                sectorAllocation['Industrial'] += value;
            } else if (['TATASTEEL', 'JSWSTEEL', 'ULTRACEMCO', 'ASIANPAINT', 'GRASIM'].includes(symbol)) {
                sectorAllocation['Materials'] += value;
            }
        });

        // Filter out sectors with zero allocation
        const filteredSectors = Object.entries(sectorAllocation).filter(([sector, value]) => value > 0);

        this.charts.sector = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: filteredSectors.map(([sector]) => sector),
                datasets: [{
                    label: 'Portfolio Value by Sector',
                    data: filteredSectors.map(([sector, value]) => value),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    renderPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx) return;
        
        if (this.charts.performance) {
            this.charts.performance.destroy();
        }

        const performanceData = this.portfolio.map(stock => {
            const currentData = this.getStockData(stock.symbol);
            const performance = ((currentData.price - stock.avgPrice) / stock.avgPrice) * 100;
            return {
                label: stock.symbol,
                performance: performance
            };
        });

        this.charts.performance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: performanceData.map(d => d.label),
                datasets: [{
                    label: 'Stock Performance (%)',
                    data: performanceData.map(d => d.performance),
                    backgroundColor: performanceData.map(d => d.performance >= 0 ? '#1FB8CD' : '#B4413C')
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value.toFixed(1) + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    renderEducationContent() {
        // Render investment terms
        const termsContainer = document.getElementById('investmentTerms');
        if (termsContainer) {
            termsContainer.innerHTML = Object.entries(this.investmentTerms).map(([term, definition]) => `
                <div class="term-item">
                    <div class="term-name">${term}</div>
                    <p class="term-definition">${definition}</p>
                </div>
            `).join('');
        }

        // Render risk levels
        const riskContainer = document.getElementById('riskLevels');
        if (riskContainer) {
            riskContainer.innerHTML = Object.entries(this.riskLevels).map(([level, info]) => `
                <div class="risk-item">
                    <div class="risk-indicator" style="background-color: ${info.color}"></div>
                    <div class="risk-info">
                        <h4>${level} Risk</h4>
                        <p>${info.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    getStockData(symbol) {
        const stock = this.comprehensiveStockDatabase.find(s => s.symbol === symbol);
        if (stock) {
            // Simulate real-time price fluctuation
            const fluctuation = (Math.random() - 0.5) * 0.02; // ±1% random fluctuation
            return {
                ...stock,
                price: stock.price * (1 + fluctuation)
            };
        }
        return null;
    }

    updateUsageStats() {
        const totalAdviceEl = document.getElementById('totalAdvice');
        const reportsGeneratedEl = document.getElementById('reportsGenerated');
        const totalSessionsEl = document.getElementById('totalSessions');
        
        if (totalAdviceEl) totalAdviceEl.textContent = this.usageStats.totalAdvice;
        if (reportsGeneratedEl) reportsGeneratedEl.textContent = this.usageStats.reportsGenerated;
        if (totalSessionsEl) totalSessionsEl.textContent = this.usageStats.totalSessions;
    }

    startPriceUpdates() {
        // Simulate real-time price updates every 30 seconds
        setInterval(() => {
            this.updatePortfolioSummary();
            if (document.getElementById('portfolio').classList.contains('active')) {
                this.renderPortfolio();
            }
        }, 30000);
        
        // Set today's date as default for purchase date
        setTimeout(() => {
            const purchaseDateInput = document.getElementById('purchaseDate');
            if (purchaseDateInput && !purchaseDateInput.value) {
                purchaseDateInput.value = new Date().toISOString().split('T')[0];
            }
        }, 100);
    }

    showRiskWarning() {
        const modal = document.getElementById('riskWarningModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    hideModal() {
        const modal = document.getElementById('riskWarningModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    showNotification(message, type = 'info') {
        // Simple notification system
        const notification = document.createElement('div');
        notification.className = `status status--${type}`;
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.zIndex = '1001';
        notification.style.minWidth = '300px';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }

    saveToStorage() {
        const data = {
            portfolio: this.portfolio,
            usageStats: this.usageStats,
            currentTheme: this.currentTheme
        };
        try {
            localStorage.setItem('stockMarketApp', JSON.stringify(data));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    }

    loadFromStorage() {
        try {
            const saved = localStorage.getItem('stockMarketApp');
            if (saved) {
                const data = JSON.parse(saved);
                this.portfolio = data.portfolio || [];
                this.usageStats = { ...this.usageStats, ...data.usageStats };
                this.currentTheme = data.currentTheme || 'light';
                
                document.documentElement.setAttribute('data-color-scheme', this.currentTheme);
                const themeToggle = document.getElementById('themeToggle');
                if (themeToggle) {
                    themeToggle.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
                }
            }
        } catch (e) {
            console.warn('Error loading from storage:', e);
        }
    }
}

// Initialize the application
let app;

// Ensure DOM is ready before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new StockMarketApp();
    });
} else {
    app = new StockMarketApp();
}