export function checkTime(from, to) {

    // get date and split it to 3 parts (day/month/year)
    const dateFrom = from.split("/");
    const dateTo = to.split("/");

    const fromDay = dateFrom[0];
    const fromMonth = dateFrom[1];
    let fromYear = dateFrom[2];

    const toDay = dateTo[0];
    const toMonth = dateTo[1];
    let toYear = dateTo[2];

    // check if the years from and to are in the same year or next one
    if (fromYear === 'current') { fromYear = new Date().getFullYear(); }
    else if (fromYear === 'next') { fromYear = new Date().getFullYear() + 1; }

    if (toYear === 'current') { toYear = new Date().getFullYear(); }
    else if (toYear === 'next') { toYear = new Date().getFullYear() + 1; }

    // get current date
    const currentday = new Date().getDate();
    const currentmonth = new Date().getMonth() + 1;
    const currentyear = new Date().getFullYear();

    // check if date is vaild
    const checkFrom = new Date(fromYear, Number(fromMonth) - 1, fromDay);
    const checkTo = new Date(toYear, Number(toMonth) - 1, toDay);
    const check = new Date(currentyear, Number(currentmonth) - 1, currentday);


    return check >= checkFrom && check <= checkTo;
}

// checkTime('10/1/current', '24/7/next');