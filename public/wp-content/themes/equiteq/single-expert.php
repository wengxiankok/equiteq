<?php
/*
    Template Post Type: expert
*/

get_header();
$id = get_the_ID();
$expert = get_expert($id);
// $industry_expertises = maybe_unserialize($expert->industry_expertise);

$name = get_the_title();
$image = get_field('profile_image');
$title = get_field('title');
$email = get_field('email');
$contact = get_field('contact_no');
$linkedin = get_field('linkedin');
$location = get_field('profile_location');
$content = get_the_content();

foreach ($location as $loc) {
    $loc_ = $loc->name;
}
?>

<div class="single-expert">
    <div class="container no-pad-gutters">
        <div class="back mb-4 mb-md-5">
            <i class="fa fa-caret-left align-bottom" style="font-size: 22px;" aria-hidden="true"></i> <a
                href="#" class="btn-outline-success text-uppercase px-0 ml-2">Back to team</a>
        </div>
        <div class="row gx-0">
            <div class="col-lg-4 profile-img-container">
                <img class="img-fluid profile-img" src=<?= $image ?> />
            </div>
            <div class="col-lg-8 px-5 pt-5 pt-lg-0">
                <h1><?= $name ?></h1>
                <h2><?= $title ?></h2>
                <i class="fa fa-lg fa-map-marker pe-2"></i><?= $loc_ ?>
                <ul class="social-list">
                    <a href=<?= "mailto:" . $email ?>>
                        <li>
                            <i class="fa fa-envelope"></i>
                        </li>
                    </a>
                    <a href=<?= "tel:" . $contact ?>>
                        <li>
                            <i class="fa fa-phone"></i>
                        </li>
                    </a>
                    <a href=<?=$linkedin ?> target="blank_">
                        <li>
                            <i class="fa fa-linkedin"></i>
                        </li>
                    </a>
                </ul>

                <?= $content ?>
            </div>
        </div>
    </div>
</div>



<?php
get_footer();