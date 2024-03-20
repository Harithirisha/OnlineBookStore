document.addEventListener('DOMContentLoaded', function() {
    // Get the anchor elements
    const customerReportsLink = document.querySelector('a[href="customer_report.html"]');
    const inventoryReportsLink = document.querySelector('a[href="inventory_reports.html"]');
    const salesReportsLink = document.querySelector('a[href="sales_reports.html"]');

    // Add event listeners to handle redirection
    customerReportsLink.addEventListener('click', redirectToCustomerReports);
    inventoryReportsLink.addEventListener('click', redirectToInventoryReports);
    salesReportsLink.addEventListener('click', redirectToSalesReports);

    // Functions to handle redirection
    function redirectToCustomerReports(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'customer_report.html'; // Redirect to customer reports page
    }

    function redirectToInventoryReports(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'inventory_reports.html'; // Redirect to inventory reports page
    }

    function redirectToSalesReports(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'sales_reports.html'; // Redirect to sales reports page
    }
});
