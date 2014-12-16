
function truncate( str, limit ) {

    if (str != null && str.length > limit) {

        var nextspc = str.lastIndexOf(" ", limit);
        str = str.substring(0, (nextspc > 0)? nextspc : limit ).replace(/^\s+|\s+$/g,"") + "...";
    }

    return str;

    //-- hard cutoff
    //-- return (str.length > limit)? str.slice(0,limit) + "..." : str;
}