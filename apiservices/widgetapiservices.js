exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/select-widgets",
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
exports.selectDataPublic = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    "https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/select-widgets-public",
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
  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/delete-widget/${id}`,
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

exports.createData = async (widgetName, widgetPayload, activeStatus) => {
  const aboutdata = {
    widgetName: widgetName,
    widgetPayload: widgetPayload,
    activeStatus: activeStatus,
  };

  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/create-widget`,
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
  widgetName,
  widgetPayload,
  activeStatus,
  idValue
) => {
  const aboutdata = {
    _id: idValue,
    widgetName: widgetName,
    widgetPayload: widgetPayload,
    activeStatus: activeStatus,
  };

  const res = await fetch(
    `https://travel-booking-backend-express-js-mongo-db-vercel.vercel.app/apis/v1/update-widget`,
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
