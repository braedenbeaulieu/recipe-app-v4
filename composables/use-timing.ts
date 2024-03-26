export default (mins: number|string) => {
    if(typeof mins === 'string') mins = parseInt(mins)
    let hours = (mins / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    
    let time = `${rminutes}m`;

    if(rhours > 0) {
        time = `${rhours}h`
        if(minutes > 0) {
            time += ` ${rminutes}m`
        }
    }

    return time
}