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

- **mode**: *(optional, default 'full')*
Specifies the mode in which the widget will display. The default value is `'full'` which shows all the features together. Use `'page'` if you are only interested in a specific page.

- **page**: *(optional, but required if mode = 'page')*
The specific feature to be displayed when the widget loads, this makes it possible for you to distribute the features into different pages on your platform. Available pages are `'overview' | 'transactions' | 'invoices' | 'bills' | 'inventory' | 'restocks' | 'financial_statements' | 'income_statement' | 'balance_sheet' | 'trial_balance' | 'cashflow_statement' | 'manual_journal' | 'general_ledger' | 'chart_of_accounts'`.

- **target_id**: *(required)*  
  The ID of the HTML element where the Lehjah widget will be embedded.

- **variable1**: *(optional, alongside `variable2`, `variable3`, `variable4` and `variable5`)*  
  The variable1 and the other permitted variable names from 1 to 5 allows you to add up to five (5) custom variables you might need to extend the widget data connection capabilities.

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