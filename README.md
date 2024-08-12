# Lehjah

Lehjah is a no-code embedded accounting platform designed for financial platforms and vertical SaaS. With Lehjah, you can easily embed a comprehensive accounting view directly into your web pages, providing powerful financial management features to your users.

## Features

Lehjah offers a wide range of accounting functionalities, including:

- Bank Connection
- Transactions
- Reconciliation
- Journal Entries
- General Ledgers
- Receivables and Payables
- Prepayments
- Profit and Loss Statement
- Balance Sheet
- Trial Balance
- Statement of Cash Flow
- Analytics
- AI Assistant

## Installation

### NPM Installation

You can install the Lehjah package via npm:

```bash
npm install lehjah
```

### Usage

After installing the package, you can embed the Lehjah accounting view in your web application:

```javascript
const Lehjah = require('lehjah');

new Lehjah({
    business_id: 'your-business-id',
    public_key: 'your-public-key',
    token: 'your-token',
    environment: 'sandbox', // or 'production'
    target_id: 'target-element-id'
});
```

### Script Installation via HTML

Alternatively, you can include the Lehjah widget directly in your HTML page using the script from unpkg.com:

```html
<script src="https://unpkg.com/lehjah/index.js"></script>
<script>
    new Lehjah({
        business_id: 'your-business-id',
        public_key: 'your-public-key',
        token: 'your-token',
        environment: 'sandbox', // or 'production'
        target_id: 'target-element-id'
    });
</script>
```

## Configuration Parameters

When initializing the Lehjah widget, you need to provide a configuration object with the following parameters:

- **business_id**: *(required)*  
  The unique ID of the business on your platform for which the accounting view is being embedded.

- **public_key**: *(required)*  
  The developer API public key associated with your account. You can obtain this key from your account on [Lehjah](https://lehjah.tyms.io).

- **token**: *(optional - required for data sync with platform only)*  
  The authentication token of the user’s active session on your platform. This token is used to synchronize user data based on the configuration set up in your [Lehjah](https://lehjah.tyms.io) account.

- **environment**: *(optional, default: 'production')*  
  Specifies the environment to be used. This can be either `sandbox` or `production`. For access to these environments, please contact us at [developer@lehjah.com](mailto:developer@lehjah.com).

- **target_id**: *(required)*  
  The ID of the HTML element where the Lehjah widget will be embedded.

## Example

```html
<div id="lehjah-accounting" style="height: 100vh;"></div>

<script src="https://unpkg.com/lehjah/index.js"></script>
<script>
    new Lehjah({
        business_id: '123456',
        public_key: 'your-public-key',
        token: 'user-session-token',
        environment: 'sandbox',
        target_id: 'lehjah-accounting'
    });
</script>
```

In this example, the Lehjah widget will be embedded within the `div` with the ID `lehjah-accounting`. You can set the height to 100vh so as have a full height display.

## Contact Us

For any questions, support, or to request access to the sandbox and production environments, please reach out to us at [developer@lehjah.com](mailto:developer@lehjah.com).