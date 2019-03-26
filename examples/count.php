<?php
$start = microtime(true);
for($i=0; $i<100000000; $i++){
    //"Counting - {$i}";
    sprintf('Counting - %u', $i);    
}
$end = microtime(true);
echo $timediff = $end - $start."\n";

?>