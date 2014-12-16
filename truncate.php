<?php

function truncate( $string, $limit = NULL )
{
    if ( strlen($string) > $limit )
    {
        $string = substr( $string, 0, $limit );
        $end = strrpos( $string, ' ' );

        if ($end === false)
        {
            $end = $limit;
        }

        $string = substr($string, 0, $end) . '...';
    }

    return $string;
}

?>