function getSrcSet(media) {
  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;
  return srcset;
}

export function getMediaAttributes(state, id) {
  const media = state.source.attachment[id];
  if (!media) return {};

  const srcSet = getSrcSet(media);

  return {
    id,
    alt: media.alt_text,
    src: media.source_url,
    srcSet,
  };
}

export function getPostCategories(state, post) {
  const allCategories = state.source.category;
  const categories =
    post.categories && post.categories.map((catId) => allCategories[catId]);
  return categories ? categories.filter(Boolean) : [];
}

export function getPostAuthor(state, post) {
  return state.source.author[post.author];
}

export function getPostTags(state, post) {
  const allTags = state.source.tag;
  const tags = post.tags && post.tags.map((tagId) => allTags[tagId]);
  return tags ? tags.filter(Boolean) : [];
}

export function getPostData(state) {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  return { ...post, isReady: data.isReady, isPage: data.isPage };
}
export function getTaxonomies(state, post, taxonomy, taxonomies) {
  const allTaxonomies = state.source[taxonomy];
  const taxs =
    post[taxonomies] && post[taxonomies].map(itemId => allTaxonomies[itemId]);
  return taxs ? taxs.filter(Boolean) : [];
}
export function formatPostData(state, post) {
  return {
    id: post.id,
    author: getPostAuthor(state, post),
    publishDate: post.date,
    title: post.title.rendered,
    categories: getPostCategories(state, post),
    tags: getTaxonomies(state, post, "tag", "tags"),
    link: post.link,
    featured_media: getMediaAttributes(state, post.featured_media),
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
  };
}

export function getAllPost(state, routeData) {
  const allpost = [];

  routeData.forEach((item, idx) => {
    const itemData = state.source[item.type][item.id];
    allpost.push(itemData);
  });

  return [allpost];
}

export function omitConnectProps(props) {
  const out = {};
  const propsToOmit = [
    "state",
    "actions",
    "roots",
    "fills",
    "libraries",
    "getSnapshot",
  ];
  const isGetSnapshot = (prop) =>
    typeof prop === "function" && prop.name === "getSnapshot";

  for (const prop in props) {
    if (propsToOmit.includes(prop) || isGetSnapshot(prop)) continue;
    out[prop] = props[prop];
  }

  return out;
}

const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export function formatDate(date) {
  const jsDate = new Date(date);
  const day = jsDate.getDate();
  const month = jsDate.getMonth();
  const year = jsDate.getFullYear();

  return `${day} ${monthNames[month]} ${year}`;
}

export function isUrl(str) {
  var regexp =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-/]))?/;
  return regexp.test(str);
}

export function debounce(fn) {
  let queued = null;
  return [
    (...args) => {
      if (queued) cancelAnimationFrame(queued);
      queued = requestAnimationFrame(fn.bind(fn, ...args));
    },
    () => {
      cancelAnimationFrame(queued);
    },
  ];
}
