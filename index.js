class Lehjah{
    constructor(config) {
        this.businessId = config.business_id;
        this.publicKey = config.public_key;
        this.token = config.token;
        this.environment = config.environment || 'production';
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
        iframe.src = `${this.baseUrl}/v1/app/${this.publicKey}?business_id=${this.businessId}&token=${this.token}`;
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
