# scrape-the-gram
Grab the latest image from Instagram for your website.

This particular scripts uses Axios for the GET request to Instagram. Can be done with Fetch or any other promise based library. 

You will also need to use Browserify or something similar to create a final script to add to your site. 

(at least that is what I did)

Steps:

1. Add your username as the username variable.
2. npm install axios to your project
2. Add a div to your webpage with an id of "instagramImageSpot"
3. Run Browersify or something similar on index.js to generate bundle.js

This was created for a WordPress site so we then used wp_enqueue_script to add to the site. 

Works a charm. Every time our web page is loaded our script will grab the latest image posted to Instagram and add it to our site. 

This could also be used to download the latest image and then add to site using a local image. 

Can then be set up as a cronjob to run every day and grab the latest image, save, and show the local image. This way the script is not running every time the page loads. 

NOTE: this was created a beginner so there are probably a 100 million better ways to do this.
