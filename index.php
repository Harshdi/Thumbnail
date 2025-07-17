<?php
    if(isset($_POST['download'])){
        $imgurl = $_POST['imgurl'];
        $ch = curl_init($imgurl);
        curl_setopt($ch ,CURLOPT_RETURNTRANSFER,1);
        $download = curl_exec($ch);
        curl_close($ch);
        header('Content-Type: image/png'); // or 'image/jpeg' depending on file
        header('content-disposition:attachment; filename="thumbnail.jpg"');
        echo $download;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download youtube video thumbnail</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
        <header>Dowalond Thumbnail</header>
        <div class="url-input">
            <span class="title">Paste video url:</span>

            <div class="field">
                <input type="text"  name="videourl" placeholder="https://www.youtube.com/watch?v=lqwdD2ivIbm" required>
                <input type="hidden" class="hidden-input" name="imgurl">
                <div class="bottom-line"></div>
            </div>
        </div>

        <div class="preview-area">
            <img class="thumbnail" src="img/1.jpg" alt="thumbnail">
            <i class=" icon fas fa-cloud-download-alt"></i>
            <span>paste video url to see preview</span>
        </div>

        <button class="download-btn" type="submit" name="download">Download Thumbnail</button>
    </form>

    <script src="script.js"></script>
</body>
</html>