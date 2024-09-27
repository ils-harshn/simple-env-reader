const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");

async function loadSecrets() {
  try {
    const client = new SecretManagerServiceClient();

    // const secrets = [
    //   { name: "my-secret-name", envKey: "MY_SECRET" },
    //   { name: "another-secret-name", envKey: "ANOTHER_SECRET" },
    // ];

    // for (const secret of secrets) {

    console.log(process.env.SECRET_VERSION_NAME);
    const [version] = await client.accessSecretVersion({
      name: process.env.SECRET_VERSION_NAME,
    });

    const payload = version.payload.data.toString("utf8");
    let config = JSON.parse(payload);
    process.env.APP_NAME = config.APP_NAME;
    // }

    console.log("Secrets loaded into process.env");
  } catch (err) {
    console.log(err);
  }
}

module.exports = loadSecrets;
