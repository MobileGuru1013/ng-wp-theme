<?php
class YoastMetaTagsLoader {
    public function initMetaTags() {
        if (class_exists('WPSEO_Frontend')) {
            add_filter('rest_prepare_post', array($this, 'addPostFields'), 10, 3);
            add_filter('rest_prepare_page', array($this, 'addPostFields'), 10, 3);
            add_filter('rest_prepare_category', array($this, 'addTermFields'), 10, 3);
            add_filter('rest_prepare_post_tag', array($this, 'addTermFields'), 10, 3);
        }
    }

    public function addPostFields($data, $post, $context)
    {
        $yoastMeta = array(
            (object) array(
                'name' => 'description',
                'content' => get_post_meta($post->ID, '_yoast_wpseo_metadesc', true),
            ),
            (object) array(
                'name' => 'keywords',
                'content' => get_post_meta($post->ID, '_yoast_wpseo_metakeywords', true),
            ),
            (object) array(
                'property' => 'og:locale',
                'content' => get_locale(),
            ),
            (object) array(
                'property' => 'og:type',
                'content' => get_post_type($post->ID) === 'post' ? 'article' : 'website',
            ),
            (object) array(
                'property' => 'og:title',
                'content' => get_post_meta($post->ID, '_yoast_wpseo_opengraph-title', true),
            ),
            (object) array(
                'property' => 'og:description',
                'content' => get_post_meta($post->ID, '_yoast_wpseo_opengraph-description', true),
            ),
            (object) array(
                'property' => 'og:url',
                'content' => get_permalink(),
            ),
            (object) array(
                'property' => 'og:site_name',
                'content' => get_bloginfo('name'),
            ),
            (object) array(
                'property' => 'og:image',
                'content' => get_post_meta($post->ID, '_yoast_wpseo_opengraph-image', true),
            ),
            (object) array(
                'name' => 'twitter:title',
                'content' => get_post_meta($post->ID, '_yoast_wpseo_twitter-title', true),
            ),
            (object) array(
                'name' => 'twitter:description',
                'content' => get_post_meta($post->ID, '_yoast_wpseo_twitter-description', true),
            ),
            (object) array(
                'name' => 'twitter:image',
                'content' => get_post_meta($post->ID, '_yoast_wpseo_twitter-image', true),
            )
        );
        /**
         * @TODO processing the following tags:
         *
         *   'yoast_wpseo_focuskw'              => get_post_meta($post->ID, '_yoast_wpseo_focuskw', true),
         *   'yoast_wpseo_title'                => get_post_meta($post->ID, '_yoast_wpseo_title', true),
         *   'yoast_wpseo_linkdex'              => get_post_meta($post->ID, '_yoast_wpseo_linkdex', true),
         *   'yoast_wpseo_meta-robots-noindex'  => get_post_meta($post->ID, '_yoast_wpseo_meta-robots-noindex', true),
         *   'yoast_wpseo_meta-robots-nofollow' => get_post_meta($post->ID, '_yoast_wpseo_meta-robots-nofollow', true),
         *   'yoast_wpseo_meta-robots-adv'      => get_post_meta($post->ID, '_yoast_wpseo_meta-robots-adv', true),
         *   'yoast_wpseo_redirect'             => get_post_meta($post->ID, '_yoast_wpseo_redirect', true)
         */
        $data->data['yoast_meta'] = (array) $yoastMeta;

        return $data;
    }

    public function addTermFields($data, $term, $context)
    {
        $yoastMeta = array(
            (object) array(
                'name' => 'description',
                'content' => get_term_meta($term->term_id, '_yoast_wpseo_metadesc', true),
            ),
            (object) array(
                'name' => 'keywords',
                'content' => get_term_meta($term->term_id, '_yoast_wpseo_metakeywords', true),
            ),
            (object) array(
                'property' => 'og:locale',
                'content' => get_locale(),
            ),
            (object) array(
                'property' => 'og:type',
                'content' => 'website',
            ),
            (object) array(
                'property' => 'og:title',
                'content' => get_term_meta($term->term_id, '_yoast_wpseo_opengraph-title', true),
            ),
            (object) array(
                'property' => 'og:description',
                'content' => get_term_meta($term->term_id, '_yoast_wpseo_opengraph-description', true),
            ),
            (object) array(
                'property' => 'og:url',
                'content' => get_category_link($term->term_id),
            ),
            (object) array(
                'property' => 'og:site_name',
                'content' => get_bloginfo('name'),
            ),
            (object) array(
                'property' => 'og:image',
                'content' => get_term_meta($term->term_id, '_yoast_wpseo_opengraph-image', true),
            ),
            (object) array(
                'name' => 'twitter:title',
                'content' => get_term_meta($term->term_id, '_yoast_wpseo_twitter-title', true),
            ),
            (object) array(
                'name' => 'twitter:description',
                'content' => get_term_meta($term->term_id, '_yoast_wpseo_twitter-description', true),
            ),
            (object) array(
                'name' => 'twitter:image',
                'content' => get_term_meta($term->term_id, '_yoast_wpseo_twitter-image', true),
            )
        );
        /**
         * @TODO processing the following tags:
         *
         *   'yoast_wpseo_focuskw'              => get_term_meta($category->term_id, '_yoast_wpseo_focuskw', true),
         *   'yoast_wpseo_title'                => get_term_meta($category->term_id, '_yoast_wpseo_title', true),
         *   'yoast_wpseo_linkdex'              => get_term_meta($category->term_id, '_yoast_wpseo_linkdex', true),
         *   'yoast_wpseo_meta-robots-noindex'  => get_term_meta($category->term_id, '_yoast_wpseo_meta-robots-noindex', true),
         *   'yoast_wpseo_meta-robots-nofollow' => get_term_meta($category->term_id, '_yoast_wpseo_meta-robots-nofollow', true),
         *   'yoast_wpseo_meta-robots-adv'      => get_term_meta($category->term_id, '_yoast_wpseo_meta-robots-adv', true),
         *   'yoast_wpseo_redirect'             => get_term_meta($category->term_id, '_yoast_wpseo_redirect', true)
         */
        $data->data['yoast_meta'] = (array) $yoastMeta;

        return $data;
    }
}