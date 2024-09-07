class Lehjah{
    constructor(config) {
        this.businessId = config.business_id;
        this.publicKey = config.public_key;
        this.token = config.token || '';
        this.mode = config.mode || 'full';
        this.page = config.page || '';
        this.variable1 = config.variable1 || '';
        this.variable2 = config.variable2 || '';
        this.variable3 = config.variable3 || '';
        this.variable4 = config.variable4 || '';
        this.variable5 = config.variable5 || '';
        this.environment = config.environment || 'sandbox';
        this.targetId = config.target_id;

        this.baseUrl = this.environment === 'sandbox' 
            ? 'https://sandbox-widget.lehjah.com' 
            : 'https://widget.lehjah.com';

        this.init();
    }

    init() {
        if (!this.targetId || !this.businessId || !this.publicKey || !this.token) {
            console.error('Missing required configuration parameters');
            return;
        }

        const iframe = document.createElement('iframe');
        iframe.src = `${this.baseUrl}/v1/app/${this.publicKey}?business_id=${this.businessId}&token=${this.token}&mode=${this.mode}&page=${this.page}&variable1=${this.variable1}&variable2=${this.variable2}&variable3=${this.variable3}&variable4=${this.variable4}&variable5=${this.variable5}`;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none';

        const targetElement = document.getElementById(this.targetId);
        if (targetElement) {
            targetElement.appendChild(iframe);
        } else {
            console.error('Target element not found');
        }
    }
}

module.exports = Lehjah;
