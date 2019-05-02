<?php 
ini_set('memory_limit', -1);
function heap() {
    return shell_exec(sprintf('grep "VmRSS": /proc/%d/status', getmypid()));
}
echo heap();

$a = range(1, 1024*1024);

echo heap();

//unset($a);

echo heap();
?>