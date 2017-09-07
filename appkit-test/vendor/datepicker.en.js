(function () {
    $.fn.datepicker.dates['en'] = {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today",
        clear: "Clear",
        format: "mm/dd/yyyy",
        titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
        weekStart: 0
    };

    $.fn.datepicker.defaults.templates = {
        leftArrow: '<svg width="16px" height="16px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Fill-v2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Left-Chevron" fill="#212121"><path d="M15.341,0.65925 L4,12.00025 L15.341,23.34125 C16.219,24.22025 17.644,24.22025 18.523,23.34125 C19.401,22.46225 19.401,21.03825 18.523,20.15925 L10.363,12.00025 L18.523,3.84125 C18.962,3.40125 19.182,2.82625 19.182,2.25025 C19.182,1.67425 18.962,1.09825 18.523,0.65925 C17.644,-0.21975 16.219,-0.21975 15.341,0.65925" id="Fill-1"></path></g></g></svg>',
        rightArrow: '<svg width="16px" height="16px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Fill-v2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Right-Chevron" fill="#212121"><path d="M7.84049408,23.3381756 L19.1800003,11.9986694 L7.84049408,0.659163167 C6.96260973,-0.219721056 5.53779742,-0.219721056 4.6589132,0.659163167 C3.78102885,1.53804739 3.78102885,2.96185983 4.6589132,3.84074405 L12.8178384,11.9986694 L4.6589132,20.1565947 C4.21997102,20.5965368 4,21.171461 4,21.7473852 C4,22.3233093 4.21997102,22.8992334 4.6589132,23.3381756 C5.53779742,24.2170598 6.96260973,24.2170598 7.84049408,23.3381756" id="Fill-1"></path></g></g></svg>'
    };
})();
