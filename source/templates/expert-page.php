<?php
/* Template Name: Expert Page */
get_header();
$id = get_the_ID();
$page = get_post($id);
?>

<?php

/**Hero */
hm_get_template_part('template-parts/hero', ['page' => $page]);

?>

<section class="expert-page p-0">
    <div class="bg-dark-blue expert-page-container">
        <div class="text-white no-pad-gutters">
            <div class="container">
                <h3 class="text-uppercase mb-0"><?php echo $page->intro_title ?></h3>
                <div class="row">
                    <div class="col-md-8 mb-4">
                        <?php echo $page->post_content ?>
                    </div>
                </div>
            </div>
            <!--May implement the search and filter here-->
            <div>
                <div id="filter-section"></div>
            </div>
        </div>
    </div>
</section>

<!--May implement the experts profile list here-->

<?php
get_footer();
?>