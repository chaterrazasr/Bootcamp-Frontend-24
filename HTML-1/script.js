class EmployeeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const company = this.getAttribute('company') || 'Company Name';
        const image = this.getAttribute('image') || 'https://via.placeholder.com/300';
        const name = this.getAttribute('name') || 'Employee Name';
        const role = this.getAttribute('role') || 'Employee Role';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    width: 300px;
                    border: 2px solid #000;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                .company {
                    background-color: #003366;
                    color: #ffffff;
                    padding: 16px;
                    text-align: center;
                    font-size: 1.2em;
                }
                .info {
                    background-color: #000000;
                    color: #ffffff;
                    padding: 16px;
                    text-align: center;
                }
                .info img {
                    width: 100%;
                    height: auto;
                    border-radius: 50%;
                }
                .role {
                    background-color: #d21f3c;
                    color: #ffffff;
                    padding: 16px;
                    text-align: center;
                    font-size: 1.2em;
                }
            </style>
            <div class="company">${company}</div>
            <div class="info">
                <img src="${image}" alt="${name}">
                <div>${name}</div>
            </div>
            <div class="role">${role}</div>
        `;
    }
}

customElements.define('employee-card', EmployeeCard);
