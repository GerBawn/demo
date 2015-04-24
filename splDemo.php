<?php
/**
 * Created by PhpStorm.
 * User: Ger
 * Date: 2015/4/21
 * Time: 22:23
 */

$doubleList = new SplDoublyLinkedList();
$doubleList->push(array('name' => 'lingchen', 'age' => 23));
$doubleList->push(array('name' => 'lingshi', 'age' => 25));
$doubleList->push(array('name' => 'lingchao', 'age' => 20));

//var_dump($doubleList);
$fruits = array(
    'apple' => 'apple value',
    'orange' => 'orange value',
    'grape' => 'grape value',
    'glum' => 'glum value',
);

//$obj = new ArrayObject($fruits);
//$it = $obj->getIterator();
//
//$it->rewind();
//while($it->valid()){
//    echo $it->key() . ': ' . $it->current(), PHP_EOL;
//    $it->next();
//}
//$arr1 = new ArrayIterator(array('a', 'b', 'c'));
//$arr2 = new ArrayIterator(array('d', 'e', 'g'));
//$it = new MultipleIterator(MultipleIterator::MIT_KEYS_ASSOC);
//$it->attachIterator($arr1, 'id');
//$it->attachIterator($arr2, 'name');
//foreach($it as $value){
//    var_dump($value);
//}
//$it = new FileSystemIterator('/tmp');
//foreach($it as $finfo){
//    var_dump($finfo);
//}
//function myDir($path, $whitespace = ''){
//    $dir = opendir($path);
//    echo $whitespace, $path, '<br />';
//    if($dir){
//        $whitespace .= '&nbsp;&nbsp';
//        while(false !== ($file = readdir($dir))){
//            if($file === '.' || $file === '..'){
//                continue;
//            }
//            $truePath = $path . '/' . $file;
//            if(!is_dir($truePath)){
//                echo $whitespace, $file, '<br />';
//            }else{
//                myDir($truePath, $whitespace);
//            }
//        }
//    }
//}

//myDir('/opt/lampp/htdocs');
echo number_format(123456, 4, '\\', '/');

