<?php
    require_once('../wp-load.php');

    $location_taxonomy = get_terms( array(
        'taxonomy' => 'location',
        'hide_empty' => false,
        'order' => 'DESC'
    ));

    $industry_taxonomy = get_terms( array(
        'taxonomy' => 'industry',
        'hide_empty' => false,
        'order' => 'DESC'
    ));

    $args = array(
        'post_type' => 'expert',
        'posts_per_page' => -1,
        'meta_key' => '',
        'orderby' => 'menu_order',
        'order' => 'DESC',
    );

    $query = new WP_Query($args);
    $experts = array();

    if ($query->found_posts) :
        if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post() ;

            $name = get_the_title();
            $position_title = get_field('title');
            $profile_img = get_field('profile_image');
            $email = get_field('email');
            $contact_no = get_field('contact_no');
            $linkedin_url = get_field('linkedin');
            $permalink = get_the_permalink();
            $location = get_field('profile_location');
            $expertise = get_field('industry_expertise');

            foreach($location as $loc) {
                $profile_location = $loc->name;
            }

            $temp_expert = [
                'link' => $permalink,
                'name' => $name,
                'position_title'=> $position_title,
                'profile_img' => $profile_img,
                'email' => $email,
                'contact_no' => $contact_no,
                'linkedin' => $linkedin_url,
                'location' => $profile_location,
                'industry' => []
            ];

            if ($expertise) {
                foreach($expertise as $exp) {
                    $temp_expert['industry'][] = $exp->name;
                }
            }

            $experts['experts'][] = $temp_expert;

        endwhile; endif;
    endif;

    foreach ($location_taxonomy as $loc_tax) {
        $temp_loc_taxonomy = [
            $loc_tax->name
        ];

        $experts['location_taxonomy'][] = $temp_loc_taxonomy;
    }

    foreach ($industry_taxonomy as $industry_tax) {
        $temp_industry_taxonomy = [
            $industry_tax->name
        ];
        $experts['industry_taxonomy'][] = $temp_industry_taxonomy;
    }

    echo json_encode($experts);
?>