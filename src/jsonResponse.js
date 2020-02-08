const respondJSON = (req, res, status, object) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(object));
  res.end();
};

// const respondJSONMeta = (req, res, status) => {
//   const headers = {
//     'Content-Type': 'application/json',
//   };

//   res.writeHead(status, headers);
//   res.end();
// };

const success = (req, res) => {
  const responseJSON = {
    message: 'This is a successful response',
  };

  respondJSON(req, res, 200, responseJSON);
};

const badRequest = (req, res, params) => {
  const responseJSON = {
    message: 'This request has the required parameters',
  };

  if (!params.valid || params.valid !== 'true') {
    responseJSON.message = 'Missing valid query parameter set to true';
    responseJSON.id = 'badRequest';

    return respondJSON(req, res, 400, responseJSON);
  }

  return respondJSON(req, res, 200, responseJSON);
};

const unauthorized = (req, res, params) => {
  const responseJSON = {
    message: 'This request has the required parameters',
  };

  if (!params.loggedIn || params.loggedIn !== 'yes') {
    responseJSON.message = 'Missing loggedIn query parameter set to yes';
    responseJSON.id = 'badRequest';

    return respondJSON(req, res, 401, responseJSON);
  }

  return respondJSON(req, res, 200, responseJSON);
};

const forbidden = (req, res) => {
  const responseJSON = {
    message: 'forbidden',
    id: 'forbidden',
  };

  respondJSON(req, res, 403, responseJSON);
};

const internal = (req, res) => {
  const responseJSON = {
    message: 'internal error',
    id: 'internal',
  };

  respondJSON(req, res, 500, responseJSON);
};

const notImplemented = (req, res) => {
  const responseJSON = {
    message: 'not implemented.',
    id: 'notImplemented',
  };

  respondJSON(req, res, 501, responseJSON);
};

const notFound = (req, res) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respondJSON(req, res, 404, responseJSON);
};

module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  notFound,
};
