exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/select-conversations",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
      credentials: "include",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.selectAllData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/select-conversations-public",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
      credentials: "include",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
  console.log("clicked" + id);

  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/delete-conversation/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.createData = async (
  conversationID,
  creatorID,
  creatorRole,
  participantID,
  participantRole,
  selectedPackageID
) => {
  const aboutdata = {
    conversationID,
    creatorID,
    creatorRole,
    participantID,
    participantRole,
    selectedPackageID,
  };

  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/create-conversation`,
    {
      method: "POST",
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

exports.updateData = async (
  idValue,
  conversationID,
  creatorID,
  creatorRole,
  participantID,
  participantRole,
  selectedPackageID
) => {
  const aboutdata = {
    _id: idValue,
    conversationID,
    creatorID,
    creatorRole,
    participantID,
    participantRole,
    selectedPackageID,
  };

  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/update-conversation`,
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
