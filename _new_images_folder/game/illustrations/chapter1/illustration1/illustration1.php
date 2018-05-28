<?php

include "../../../../../profile/imageGenerator.php";
include "../../illustrationGenerator.php";

$thisChapter = 1;
$thisIllustration = 1;

$destination = generateIllustration($thisChapter, $thisIllustration);

// Display the final product
header('Content-Type: image/png');
imagepng($destination);

// try
// {
//     function getFromJS()
//     {
//         $allVariables = array
//         (
//             'chapter',
//             'illustration',
//         );
        
//         $newVariables = array();
        
//         for($i = 0; $i < sizeof($allVariables); $i++)//For every variables
//         {
//             $column = $allVariables[$i];
        
//             if(isset($_POST[$column]))
//             {
//                 $columnValue = $_POST[$column];
//                 array_push($newVariables, $columnValue);

//                 echo $column . ": " . $columnValue . "\n";
//             }
//             else
//             {
//                 echo $column . " has not been set\n";
//             }
//         }
        
//         echo "chapter " . $newVariables[0] . ", Illustration " . $newVariables[1] . "\n";

//         $destination = generateIllustration($newVariables[0], $newVariables[1]);

//         // Display the final product
//         header('Content-Type: image/png');
//         imagepng($destination);
//     }

//     getFromJS();
// }
// catch (Exception $ex){}

?>