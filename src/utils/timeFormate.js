export function timeFormat(duration) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
}


export function timeFormatFromSecondsWithDays(durationInSeconds) {
    // Seconds in a day, hour, and minute
    const secondsInDay = 86400;
    const secondsInHour = 3600;
    const secondsInMinute = 60;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(durationInSeconds / secondsInDay);
    const remainingSeconds = durationInSeconds % secondsInDay;
    const hours = Math.floor(remainingSeconds / secondsInHour);
    const minutes = Math.floor((remainingSeconds % secondsInHour) / secondsInMinute);


    // Output like "1:01:05" or "3 days, 5:30:10"
    let ret = "";

    if (days > 0) {
        return ret = `${days} day${days > 1 ? 's' : ''} `;
    }

    ret = `${hours}:${(minutes < 10 ? "0" : "")}${minutes}`;

    return ret;
}



export function timeFormat2(duration) {
    const specificDate = new Date(duration);
    const time = new Date().getTime() - specificDate.getTime()
    let convertTime = timeFormatFromSecondsWithDays(time)
    return convertTime
}