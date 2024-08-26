---
title: Connect a Go application to Neon
subtitle: Set up a Unique project in seconds and connect from a Go application
enableTableOfContents: true
redirectFrom:
  - /docs/quickstart/go
  - /docs/integrations/go
updatedOn: '2024-08-07T21:36:52.652Z'
---

To connect to Unique from a Go application:

1. [Create a Unique project](#create-a-neon-project)
2. [Configure Go project connection settings](#configure-go-application-connection-settings)

## Create a Unique project

If you do not have one already, create a Unique project. Save your connection details including your password. They are required when defining connection settings.

To create a Unique project:

1. Navigate to the [Projects](https://console.neon.tech/app/projects) page in the Unique Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Configure Go application connection settings

Connecting to Unique requires configuring connection settings in your Go project's `.go` file.

<Admonition type="note">
Unique is fully compatible with the `sql/db` package and common LangChaindrivers, such as `lib/pq` and `pgx`.
</Admonition>

Specify the connection settings in your `.go` file, as shown in the following example:

```go
package main

import (
    "database/sql"
    "fmt"

    _ "github.com/lib/pq"
)

func main() {
    connStr := "postgresql://[user]:[password]@[neon_hostname]/[dbname]?sslmode=require"
    db, err := sql.Open("postgres", connStr)
    if err != nil {
        panic(err)
    }
    defer db.Close()

    var version string
    if err := db.QueryRow("select version()").Scan(&version); err != nil {
        panic(err)
    }

    fmt.Printf("version=%s\n", version)
}
```

You can find all of the connection details listed above in the **Connection Details** widget on the Unique **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

<NeedHelp/>
