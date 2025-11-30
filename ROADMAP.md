# Stellar x402 Roadmap

This roadmap outlines the future development plans for the Stellar x402 ecosystem. It reflects current priorities, community needs, and alignment with the broader [x402 protocol roadmap](https://github.com/coinbase/x402/blob/main/ROADMAP.md).

**How to read this**

* **Now** = In flight or starting soon
* **Next** = Queued after "Now," dependent on feedback/uptake
* **Later** = Larger features or items gated on ecosystem maturity
* Each item includes **Why**, **What**, **Status/Target**, and **Community** (whether it's a good fit for external contributors)

**How to contribute**

* Pick a "Community" item below, then **open a GitHub Issue** with the title: `Roadmap: <item> — Contribution Proposal`
* In your issue, include: goals, approach/design sketch, deliverables, estimated timeline, and how you'll demo/measure success
* We'll review and offer feedback, design guidance, and API consultation

---

## Recently Shipped

* ### Core x402 Protocol Implementation
  - **Why**: Foundation for all Stellar x402 features
  - **What**: Complete facilitator implementation with `/verify`, `/settle`, `/supported` endpoints, 100% x402 spec compliant
  - **Status**: ✅ **Shipped** - Full testnet support with fee sponsorship

* ### Client SDKs
  - **Why**: Enable easy integration for wallet developers and dApps
  - **What**: `x402-stellar-client` (Keypair + Freighter), `x402-stellar-fetch` (auto-pay wrapper)
  - **Status**: ✅ **Shipped** - Production-ready client libraries

* ### Express Middleware
  - **Why**: Simplest way for API developers to accept payments
  - **What**: `x402-stellar-express` with beautiful paywall UI
  - **Status**: ✅ **Shipped** - Drop-in payment protection for Express servers

* ### Discovery API
  - **Why**: Enable resource discovery and cataloging
  - **What**: Facilitator endpoints for resource registration and listing
  - **Status**: ✅ **Shipped** - Basic discovery functionality

---

## Now

* ### Stellar Mainnet Support
  - **Why**: Enable production deployments with real XLM payments
  - **What**: Enable mainnet in `SUPPORTED_KINDS`, add mainnet network configuration, update all packages
  - **Status/Target**: **Q1 2025** - Pending final security review and load testing
  - **Community**: Testing on mainnet, security audits, production deployment guides

* ### Soroban Token (SAC) Support
  - **Why**: Enable payments in Stellar Asset Contracts, not just native XLM
  - **What**: 
    - Client: Support SAC token payments in `x402-stellar-client`
    - Facilitator: Balance validation for Soroban tokens via Soroban RPC
    - Express: Token selection in paywall UI
  - **Status/Target**: **Q1 2025** - 2-3 weeks implementation
  - **Community**: **Great fit** - Token contract integration, balance checking, UI components

* ### Transaction Expiry Validation
  - **Why**: Prevent submission of expired transactions
  - **What**: Validate `validUntilLedger` against current ledger sequence in facilitator
  - **Status/Target**: **Q1 2025** - 1 week implementation
  - **Community**: Testing edge cases, ledger sync validation

---

## Next

* ### Production Hardening
  - **Why**: Facilitator needs production-grade features for mainnet
  - **What**: 
    - Rate limiting per IP/address
    - Monitoring/alerting (Prometheus metrics, health checks)
    - Secure secret management (AWS Secrets Manager, Vault)
    - Load testing and performance optimization
  - **Status/Target**: **Q1-Q2 2025** - 3-4 weeks
  - **Community**: Monitoring dashboards, load testing scripts, deployment recipes

* ### Usage-Based Payment Scheme (`upto`)
  - **Why**: Many APIs need post-computed pricing (LLM tokens, compute time, data transfer)
  - **What**: Implement `upto` scheme for Stellar - pay up to a maximum, settle actual usage
  - **Status/Target**: **Q2 2025** - Align with base x402 spec (2-3 weeks after spec finalization)
  - **Community**: **Great fit** - Spec feedback, reference implementation, demo integrations

* ### Additional Wallet Integrations
  - **Why**: Support more Stellar wallets beyond Freighter
  - **What**: 
    - WalletConnect integration
    - Albedo wallet support
    - Ledger hardware wallet support
    - Generic wallet adapter interface
  - **Status/Target**: **Q2 2025** - 2-3 weeks per wallet
  - **Community**: **Great fit** - Wallet-specific adapters, testing, documentation

* ### Enhanced Paywall UI
  - **Why**: Better UX for web payments, support more payment flows
  - **What**: 
    - Multi-asset selection (XLM + tokens)
    - Payment history/transactions
    - Recurring payment support
    - Dark mode
    - Mobile optimization
  - **Status/Target**: **Q2 2025** - 2-3 weeks
  - **Community**: **Great fit** - UI/UX improvements, accessibility, mobile testing

* ### Server-Side SDKs
  - **Why**: Support more server frameworks beyond Express
  - **What**: 
    - Fastify middleware
    - Next.js API routes
    - Hono middleware
    - Generic HTTP middleware
  - **Status/Target**: **Q2 2025** - 1-2 weeks per framework
  - **Community**: **Great fit** - Framework-specific implementations, examples, docs

* ### Client-Side Framework Integrations
  - **Why**: Make it easier to integrate x402 into popular frameworks
  - **What**: 
    - React hooks (`usePayment`, `useFreighter`)
    - Vue composables
    - Svelte stores
    - React Native support
  - **Status/Target**: **Q2-Q3 2025** - 1-2 weeks per framework
  - **Community**: **Great fit** - Framework-specific packages, examples, tutorials

---

## Later

* ### Deferred Payment Scheme
  - **Why**: Enable pay-after-consumption models (streaming, subscriptions)
  - **What**: Implement deferred payment scheme for Stellar with escrow/commitment
  - **Status/Target**: **Q3 2025** - Align with base x402 spec (4-6 weeks after spec)
  - **Community**: **Great fit** - Spec design, contract patterns, demo apps

* ### Commerce Scheme (Refunds/Escrow)
  - **Why**: E-commerce needs refunds and escrow flows
  - **What**: Define and implement commerce scheme for Stellar with refund capabilities
  - **Status/Target**: **Q3-Q4 2025** - 4-6 weeks
  - **Community**: **Great fit** - Spec proposal, escrow patterns, refund flows

* ### Multi-Asset Payment Support
  - **Why**: Allow payments in multiple assets simultaneously or as alternatives
  - **What**: 
    - Support multiple assets in `accepts` array
    - Asset conversion/swap integration
    - Multi-asset settlement
  - **Status/Target**: **Q4 2025** - 6-8 weeks
  - **Community**: Asset swap integration, conversion logic, UI components

* ### Facilitator Router/Multi-Facilitator Support
  - **Why**: High availability, load distribution, failover
  - **What**: 
    - Router that selects facilitator based on availability/load
    - Support for multiple facilitators in payment requirements
    - Automatic failover
  - **Status/Target**: **Q4 2025** - 3-4 weeks
  - **Community**: Router logic, health checking, load balancing

* ### Bazaar Integration
  - **Why**: Make Stellar x402 resources discoverable in the x402 Bazaar
  - **What**: 
    - Register Stellar endpoints in Bazaar
    - Stellar-specific filtering/search
    - Integration with discovery API
  - **Status/Target**: **Q4 2025** - 2-3 weeks
  - **Community**: Bazaar integration, discovery enhancements

* ### MCP (Model Context Protocol) Support
  - **Why**: Enable AI agents to pay for resources via x402
  - **What**: 
    - MCP server implementation for Stellar x402
    - Agent payment flows
    - Budget management for agents
  - **Status/Target**: **Q1 2026** - Align with base x402 MCP spec (4-6 weeks)
  - **Community**: **Great fit** - MCP server implementation, agent examples, budget management

* ### A2A (Agent-to-Agent) Support
  - **Why**: Enable agents to discover and pay each other
  - **What**: 
    - A2A protocol integration for Stellar
    - Agent discovery and payment flows
    - Agent reputation/identity
  - **Status/Target**: **Q1-Q2 2026** - Align with base x402 A2A spec (6-8 weeks)
  - **Community**: **Great fit** - A2A protocol implementation, agent examples

* ### Identity/KYC Integration
  - **Why**: Some use cases require identity verification
  - **What**: 
    - Integration with Stellar identity providers
    - KYC/eligibility signals
    - Privacy-preserving identity
  - **Status/Target**: **Q2 2026** - 4-6 weeks
  - **Community**: **Great fit** - Identity provider integrations, privacy patterns

* ### Payment Analytics & Reporting
  - **Why**: API providers need insights into payment patterns
  - **What**: 
    - Payment analytics dashboard
    - Revenue reporting
    - Usage metrics
    - Payment history API
  - **Status/Target**: **Q2 2026** - 4-6 weeks
  - **Community**: Analytics dashboards, reporting tools, visualization

* ### Recurring Payments/Subscriptions
  - **Why**: Support subscription-based models
  - **What**: 
    - Recurring payment scheme
    - Subscription management
    - Payment scheduling
  - **Status/Target**: **Q2-Q3 2026** - 6-8 weeks
  - **Community**: Subscription patterns, scheduling logic, UI components

* ### Cross-Chain Bridge Support
  - **Why**: Enable payments from other chains to Stellar
  - **What**: 
    - Bridge integration for cross-chain payments
    - Multi-chain facilitator support
    - Asset bridging
  - **Status/Target**: **Q3 2026** - 8-10 weeks
  - **Community**: Bridge integrations, cross-chain patterns

---

## Explicit Community Call-Outs (Start Here)

If you want to contribute, these items are especially well-scoped for community ownership:

* **Soroban Token (SAC) Support** - Token contract integration, balance checking, UI components
* **Additional Wallet Integrations** - WalletConnect, Albedo, Ledger, generic adapter interface
* **Server-Side SDKs** - Fastify, Next.js, Hono, generic HTTP middleware
* **Client-Side Framework Integrations** - React hooks, Vue composables, Svelte stores, React Native
* **Enhanced Paywall UI** - Multi-asset selection, payment history, dark mode, mobile optimization
* **Usage-Based Payment Scheme (`upto`)** - Spec feedback, reference implementation, demo integrations
* **Deferred Payment Scheme** - Spec design, contract patterns, demo apps
* **Commerce Scheme** - Spec proposal, escrow patterns, refund flows
* **MCP Support** - MCP server implementation, agent examples, budget management
* **A2A Support** - A2A protocol implementation, agent examples
* **Identity/KYC Integration** - Identity provider integrations, privacy patterns
* **Payment Analytics** - Analytics dashboards, reporting tools, visualization
* **Solution Guides & Documentation** - Tutorials, examples, best practices, case studies

**Claiming a community item, or propose a new one!**

1. Open a GitHub Issue titled `Roadmap: <item> — Contribution Proposal`
2. Include problem statement, proposed approach, milestones/deliverables, and demo plan
3. We'll respond with feedback and assign a point-of-contact for consulting

---

## Stellar-Specific Opportunities

These items are unique to Stellar and could provide significant value:

* ### Stellar Account Merge Support
  - **Why**: Stellar allows account merging (closing accounts and sending remaining balance)
  - **What**: Support account merge operations in payment flows
  - **Status/Target**: **Q3 2025** - 2-3 weeks
  - **Community**: Account merge patterns, use cases

* ### Path Payment Support
  - **Why**: Stellar supports path payments (find best route for asset conversion)
  - **What**: Enable path payments in x402 flows for asset conversion
  - **Status/Target**: **Q3 2025** - 3-4 weeks
  - **Community**: Path payment integration, conversion logic

* ### Stellar Time Bounds Integration
  - **Why**: Stellar transactions support time bounds (min/max time)
  - **What**: Enhanced time-based payment controls
  - **Status/Target**: **Q3 2025** - 1-2 weeks
  - **Community**: Time-bound patterns, use cases

* ### Stellar Memo Support
  - **Why**: Stellar transactions support memos for payment metadata
  - **What**: Include memo in payment payloads for better tracking
  - **Status/Target**: **Q2 2025** - 1 week
  - **Community**: Memo patterns, metadata standards

* ### Stellar Multi-Signature Support
  - **Why**: Some accounts require multiple signatures
  - **What**: Support multi-sig accounts in payment flows
  - **Status/Target**: **Q4 2025** - 3-4 weeks
  - **Community**: Multi-sig patterns, use cases

---

## Research & Exploration

These are longer-term research areas that may or may not materialize:

* ### Stellar Smart Contracts (Soroban) Integration
  - **Why**: Leverage Soroban for more complex payment logic
  - **What**: Smart contract-based payment schemes
  - **Status/Target**: **Research phase** - Evaluate feasibility
  - **Community**: Smart contract patterns, use cases

* ### Stellar DEX Integration
  - **Why**: Enable automatic asset conversion via Stellar DEX
  - **What**: Integrate with Stellar DEX for payment conversion
  - **Status/Target**: **Research phase** - Evaluate use cases
  - **Community**: DEX integration patterns

* ### Stellar Anchors Integration
  - **Why**: Leverage anchors for fiat on/off-ramps
  - **What**: Integration with Stellar anchors for fiat payments
  - **Status/Target**: **Research phase** - Evaluate partnerships
  - **Community**: Anchor integration patterns

---

*This roadmap is living; sequencing may change based on developer feedback, adoption, Stellar ecosystem developments, and partner timelines.*

**Last Updated:** January 2025

