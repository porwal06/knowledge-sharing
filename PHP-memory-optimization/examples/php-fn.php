<?php
for ($i=0; $i < 5; $i++) {
    $data = openssl_random_pseudo_bytes(1000000);
    echo "peak_memory_usage = " . memory_get_peak_usage(true) . "\n";
    doSomething($data);
    //unset($data);
}
echo "for loop completed, memory now at " . memory_get_usage(true) . "\n";

function doSomething($data) {
    echo "size:" . strlen($data) . "\n";
}
?>