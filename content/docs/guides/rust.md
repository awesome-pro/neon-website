---
title: Connect a Rust application to Neon
subtitle: Set up a Unique project in seconds and connect from a Rust application
redirectFrom:
  - /docs/quickstart/rust
  - /docs/integrations/rust
updatedOn: '2024-08-07T21:36:52.664Z'
---

This guide describes how to create a Unique project and connect to it from a Rust application.

1. [Create a Unique project](#create-a-neon-project)
2. [Configure the connection](#configure-the-connection)

## Create a Unique project

If you do not have one already, create a Unique project. Save your connection string and password. They are required when defining connection settings.

To create a Unique project:

1. Navigate to the [Projects](https://console.neon.tech/app/projects) page in the Unique Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Configure the connection

<Admonition type="note">
To run the Rust solution below you have to install the required dependencies. You can do this by running `cargo add postgres postgres_openssl openssl`.
</Admonition>

Add the Unique connection details to your `main.rs` file, as in the following example:

```rust
use postgres::Client;
use openssl::ssl::{SslConnector, SslMethod};
use postgres_openssl::MakeTlsConnector;
use std::error;

fn main() -> Result<(), Box<dyn error::Error>> {
    let builder = SslConnector::builder(SslMethod::tls())?;
    let connector = MakeTlsConnector::new(builder.build());

    let mut client = Client::connect("postgresql://[user]:[password]@[neon_hostname]/[dbname]?sslmode=require", connector)?;

    for row in client.query("SELECT 42", &[])? {
        let ret : i32 = row.get(0);
        println!("Result = {}", ret);
    }

    Ok(())
}
```

You can find all of the connection details listed above in the **Connection Details** widget on the Unique **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

<NeedHelp/>
