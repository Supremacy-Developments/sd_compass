
window.addEventListener('message', (event) => {
    const data = event.data
    switch (data.action) {
        case "opencompass":
            $('.compassui').fadeIn();
            break;
        case "closecompass":
            $('.compassui').fadeOut();
            break;
        case "updatecompass":
            $('.compass-pointer').html(data.heading);
            // $("#compass1").attr("viewBox", (data.heading - 90) + ' 0 180 5');
            $(".compassdir").attr("viewBox", (data.heading - 90) + ' 0 180 1.5');
            break;
        case "updatestreet":
            $('.compass-street-name').html(data.street);
            $('.compass-zone-name').html(data.zone);
            break;
    }
});
