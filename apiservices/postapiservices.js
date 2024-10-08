exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/select-posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
       credentials: 'include'
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
exports.selectDataPublic = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/select-posts-public",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
       credentials: 'include'
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/delete-post/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
       credentials: 'include'
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.createData = async (
  postUser,
  postImageLink,
  postId,
  postTitleen,
  postDescriptionen,
  postCategoryen,
  postPopularityen,
  activeStatus
) => {
  const aboutdata = {
    postUser: postUser,
    postImageLink: postImageLink,
    postId: postId,
    postTitle: {
      en: postTitleen,
    },
    postDescription: {
      en: postDescriptionen,
    },
    postCategory: {
      en: postCategoryen,
    },
    postPopularity: {
      en: postPopularityen,
    },
    activeStatus: activeStatus,
  };

  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/create-post`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aboutdata),
       credentials: 'include'
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.updateData = async (
  postUser,
  postImageLink,
  postId,
  postTitleen,
  postDescriptionen,
  postCategoryen,
  postPopularityen,
  activeStatus,
  idValue
) => {
  const aboutdata = {
    _id: idValue,
    postUser: postUser,
    postImageLink: postImageLink,
    postId: postId,
    postTitle: {
      en: postTitleen,
    },
    postDescription: {
      en: postDescriptionen,
    },
    postCategory: {
      en: postCategoryen,
    },
    postPopularity: {
      en: postPopularityen,
    },
    activeStatus: activeStatus,
  };

  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/update-post`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aboutdata),
      credentials: "include",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
