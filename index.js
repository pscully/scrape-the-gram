const Axios = require("axios");

const username = "ENTER YOUR USERNAME HERE - lowercase";

async function instagramPhotos() {
  const res = [];

  try {
    const userInfoSource = await Axios.get(
      `https://www.instagram. com/${username}`
    );

    const jsonObject = userInfoSource.data
      .match(
        /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
      )[1]
      .slice(0, -1);

    const userInfo = JSON.parse(jsonObject);
    // Retrieve only the first 10 results
    const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
      0,
      1
    );
    for (let media of mediaArray) {
      const node = media.node;

      // Process only if is an image
      if (node.__typename && node.__typename !== "GraphImage") {
        continue;
      }

      // Push the thumbnail src in the array
      res.push(node.thumbnail_src);
    }
  } catch (e) {
    console.error("Unable to retrieve photos. Reason: " + e.toString());
  }

  return res
}

instagramPhotos().then(val => buildImage(val));


function buildImage (array) {
    const el = document.getElementById('instagramImageSpot').childNodes;
    const imgSrc = array[0];
    el[0].style.backgroundImage = `url(${imgSrc})`;
    console.log("IMAGE", el[0]);
}


