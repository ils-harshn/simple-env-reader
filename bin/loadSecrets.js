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

    const payload = version.payload.data.toString();
    process.env[secret.envKey] = payload;
    // }

    console.log("Secrets loaded into process.env");
  } catch (err) {
    console.log(err);
  }
}

module.exports = loadSecrets;
