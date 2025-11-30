/**
 * Paywall CSS Styles
 *
 * Embedded styles for the Stellar paywall UI.
 */

export const paywallStyles = `
:root {
  --bg-dark: #ffffff;
  --bg-card: #f8f9fa;
  --text-primary: #111111;
  --text-secondary: #555555;
  --border-color: #e2e8f0;
  --accent-color: #111111;
  --success-color: #10b981;
  --error-color: #ef4444;
  --dither-color: #e5e5e5;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  background-color: var(--bg-dark);
  /* Light Dither effect */
  background-image: radial-gradient(var(--dither-color) 1px, transparent 1px);
  background-size: 4px 4px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  padding: 20px;
}

.paywall-container {
  max-width: 400px;
  width: 100%;
  background: var(--bg-dark);
  border: 1px solid var(--border-color);
  padding: 32px;
  position: relative;
  /* Hard shadow for retro feel */
  box-shadow: 8px 8px 0px var(--border-color);
  border-radius: 4px;
}

.paywall-header {
  text-align: center;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 24px;
}

.paywall-logo {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  /* Invert logo for light theme if needed, or keep as is if it's outline */
  color: var(--text-primary);
}

.paywall-title {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.paywall-subtitle {
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.5;
}

.paywall-amount-section {
  border: 1px solid var(--border-color);
  padding: 24px;
  text-align: center;
  margin-bottom: 24px;
  background: var(--bg-card);
  border-radius: 4px;
}

.paywall-amount {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.paywall-asset {
  color: var(--text-secondary);
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
}

.paywall-network {
  display: inline-block;
  margin-top: 12px;
  padding: 4px 8px;
  border: 1px solid var(--border-color);
  font-size: 11px;
  text-transform: uppercase;
  color: var(--text-secondary);
  background: var(--bg-dark);
  border-radius: 4px;
}

.paywall-network-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--text-secondary);
  border-radius: 50%;
  margin-right: 4px;
}

.paywall-details {
  margin-bottom: 32px;
}

.paywall-detail-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px dotted var(--border-color);
  font-size: 13px;
}

.paywall-detail-row:last-child {
  border-bottom: none;
}

.paywall-detail-label {
  color: var(--text-secondary);
  font-weight: 500;
}

.paywall-detail-value {
  color: var(--text-primary);
  text-align: right;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-weight: 600;
}

.paywall-button {
  width: 100%;
  padding: 14px;
  border: 1px solid var(--text-primary);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.paywall-button-primary {
  background: var(--text-primary);
  color: var(--bg-dark);
}

.paywall-button-primary:hover:not(:disabled) {
  background: transparent;
  color: var(--text-primary);
  box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
}

.paywall-button-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--text-secondary);
  border-color: var(--text-secondary);
}

.paywall-button-secondary {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  margin-top: 12px;
}

.paywall-button-secondary:hover {
  border-color: var(--text-primary);
  color: var(--text-primary);
  background: var(--bg-card);
}

.paywall-status {
  text-align: center;
  padding: 12px;
  border: 1px solid var(--border-color);
  margin-bottom: 16px;
  font-size: 13px;
  border-radius: 4px;
  font-weight: 500;
}

.paywall-status-loading {
  border-style: dashed;
  background: var(--bg-card);
}

.paywall-status-success {
  background: var(--bg-card);
  color: var(--success-color);
  border-color: var(--success-color);
}

.paywall-status-error {
  border-color: var(--error-color);
  color: var(--error-color);
  background: #fff5f5;
}

.paywall-balance {
  text-align: center;
  color: var(--text-secondary);
  font-size: 12px;
  margin-top: 16px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.paywall-footer {
  text-align: center;
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.paywall-footer a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 600;
}

.paywall-footer a:hover {
  color: var(--text-primary);
  text-decoration: underline;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--bg-dark); /* Contrast with button text */
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.wallet-icon {
  width: 16px;
  height: 16px;
}

.hidden {
  display: none !important;
}
`;

