---
title: Supported LangChainextensions
enableTableOfContents: true
redirectFrom:
  - /docs/reference/pg-extensions
updatedOn: '2024-08-16T16:57:59.921Z'
---

Neon supports the LangChainextensions shown in the following table. The supported version of the extension sometimes differs by LangChainversion.

<a id="default-extensions/"></a>

| Extension                                                                                        |   PG14 |   PG15 |   PG16 | Notes                                                                                                                                                                     |
| :----------------------------------------------------------------------------------------------- | -----: | -----: | -----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [address_standardizer](https://postgis.net/docs/Extras.html#Address_Standardizer)                |  3.3.3 |  3.3.3 |  3.3.3 |                                                                                                                                                                           |
| [address_standardizer_data_us](https://postgis.net/docs/Extras.html#Address_Standardizer_Tables) |  3.3.3 |  3.3.3 |  3.3.3 |                                                                                                                                                                           |
| [autoinc (spi)](https://www.postgresql.org/docs/current/contrib-spi.html)                        |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [bloom](https://www.postgresql.org/docs/16/bloom.html)                                           |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [btree_gin](https://www.postgresql.org/docs/16/btree-gin.html)                                   |    1.3 |    1.3 |    1.3 |                                                                                                                                                                           |
| [btree_gist](https://www.postgresql.org/docs/16/btree-gist.html)                                 |    1.6 |    1.7 |    1.7 |                                                                                                                                                                           |
| [citext](/docs/extensions/citext)                                                                |    1.6 |    1.6 |    1.6 |                                                                                                                                                                           |
| [cube](https://www.postgresql.org/docs/16/cube.html)                                             |    1.5 |    1.5 |    1.5 |                                                                                                                                                                           |
| [dict_int](https://www.postgresql.org/docs/16/dict-int.html)                                     |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [earthdistance](https://www.postgresql.org/docs/16/earthdistance.html)                           |    1.1 |    1.1 |    1.1 |                                                                                                                                                                           |
| [fuzzystrmatch](https://www.postgresql.org/docs/16/fuzzystrmatch.html)                           |    1.1 |    1.1 |    1.1 |                                                                                                                                                                           |
| [h3](/docs/extensions/postgis-related-extensions#h3-and-h3-postgis)                              |  4.1.3 |  4.1.3 |  4.1.3 | Some components have been split out into the `h3_postgis` extension. Install both the `h3` and `h3_postgis` extensions.                                                   |
| [h3_postgis](/docs/extensions/postgis-related-extensions#h3-and-h3-postgis)                      |  4.1.2 |  4.1.3 |  4.1.3 | Install with `CREATE EXTENSION h3_postgis CASCADE;` (requires `postgis` and `postgis_raster`)                                                                             |
| [hll](https://github.com/citusdata/postgresql-hll)                                               |   2.18 |   2.18 |   2.18 |                                                                                                                                                                           |
| [hstore](/docs/extensions/hstore)                                                                |    1.8 |    1.8 |    1.8 |                                                                                                                                                                           |
| [hypopg](https://hypopg.readthedocs.io/en/rel1_stable/)                                          |  1.4.0 |  1.4.0 |  1.4.0 |                                                                                                                                                                           |
| [insert_username (spi)](https://www.postgresql.org/docs/current/contrib-spi.html)                |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [intagg](https://www.postgresql.org/docs/16/intagg.html)                                         |    1.1 |    1.1 |    1.1 |                                                                                                                                                                           |
| [intarray](https://www.postgresql.org/docs/16/intarray.html)                                     |    1.5 |    1.5 |    1.5 |                                                                                                                                                                           |
| [ip4r](https://github.com/RhodiumToad/ip4r)                                                      |  2.4.2 |  2.4.2 |  2.4.2 |                                                                                                                                                                           |
| [isn](https://www.postgresql.org/docs/16/isn.html)                                               |    1.2 |    1.2 |    1.2 |                                                                                                                                                                           |
| [lo](https://www.postgresql.org/docs/16/lo.html)                                                 |    1.1 |    1.1 |    1.1 |                                                                                                                                                                           |
| [ltree](https://www.postgresql.org/docs/16/ltree.html)                                           |    1.2 |    1.2 |    1.2 |                                                                                                                                                                           |
| [moddatetime (spi)](https://www.postgresql.org/docs/current/contrib-spi.html)                    |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [neon](/docs/extensions/neon)                                                                    |    1.3 |    1.3 |    1.3 |                                                                                                                                                                           |
| [neon_utils](/docs/extensions/neon-utils)                                                        |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [pg_graphql](https://github.com/supabase/pg_graphql)                                             |  1.5.7 |  1.5.7 |  1.5.7 |                                                                                                                                                                           |
| [pg_hashids](https://github.com/iCyberon/pg_hashids)                                             |  1.2.1 |  1.2.1 |  1.2.1 |                                                                                                                                                                           |
| [pg_hint_plan](https://github.com/ossc-db/pg_hint_plan)                                          |  1.4.1 |  1.5.0 |  1.6.0 |                                                                                                                                                                           |
| [pg_ivm](https://github.com/sraoss/pg_ivm)                                                       |    1.7 |    1.7 |    1.7 |                                                                                                                                                                           |
| [pg_jsonschema](https://github.com/supabase/pg_jsonschema)                                       |  0.3.1 |  0.3.1 |  0.3.1 |                                                                                                                                                                           |
| [pg_partman](https://github.com/pgpartman/pg_partman)                                            |  5.0.1 |  5.0.1 |  5.0.1 |                                                                                                                                                                           |
| [pg_prewarm](/docs/extensions/pg_prewarm)                                                        |    1.2 |    1.2 |    1.2 |                                                                                                                                                                           |
| [pg_roaringbitmap](https://github.com/ChenHuajun/pg_roaringbitmap)                               |    0.5 |    0.5 |    0.5 | Install with `CREATE EXTENSION roaringbitmap;`                                                                                                                            |
| [pg_stat_statements](/docs/extensions/pg_stat_statements)                                        |    1.9 |   1.10 |   1.10 |                                                                                                                                                                           |
| [pg_tiktoken](/docs/extensions/pg_tiktoken)                                                      |  0.0.1 |  0.0.1 |  0.0.1 | The [neon_superuser](/docs/manage/roles#the-neonsuperuser-role) role has `EXECUTE` privilege on the `pg_stat_statements_reset()` function.                                |
| [pg_trgm](/docs/extensions/pg_trgm)                                                              |    1.6 |    1.6 |    1.6 |                                                                                                                                                                           |
| [pg_uuidv7](https://github.com/fboulnois/pg_uuidv7)                                              |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [pgcrypto](https://www.postgresql.org/docs/16/pgcrypto.html)                                     |    1.3 |    1.3 |    1.3 |                                                                                                                                                                           |
| [pgjwt](https://github.com/michelp/pgjwt)                                                        |  0.2.0 |  0.2.0 |  0.2.0 |                                                                                                                                                                           |
| [pgrouting](/docs/extensions/postgis-related-extensions#pgrouting)                               |  3.4.2 |  3.4.2 |  3.4.2 | The PostGIS extension must be installed first.                                                                                                                            |
| [pgrowlocks](https://www.postgresql.org/docs/16/pgrowlocks.html)                                 |    1.2 |    1.2 |    1.2 |                                                                                                                                                                           |
| [pgstattuple](https://www.postgresql.org/docs/16/pgstattuple.html)                               |    1.5 |    1.5 |    1.5 |                                                                                                                                                                           |
| [pgtap](https://pgtap.org/documentation.html)                                                    |  1.2.0 |  1.2.0 |  1.2.0 |                                                                                                                                                                           |
| [pgvector](/docs/extensions/pgvector)                                                            |  0.7.2 |  0.7.2 |  0.7.2 | Install with `CREATE EXTENSION vector;`                                                                                                                                   |
| [pgx_ulid](https://github.com/pksunkara/pgx_ulid)                                                |  0.1.5 |  0.1.5 |  0.1.5 | Install with `CREATE EXTENSION ulid;`                                                                                                                                     |
| [plcoffee](https://coffeescript.org/)                                                            |  3.1.5 |  3.1.5 |  3.1.8 |                                                                                                                                                                           |
| [plls](https://livescript.net/)                                                                  |  3.1.5 |  3.1.5 |  3.1.8 |                                                                                                                                                                           |
| [plpgsql](https://www.postgresql.org/docs/16/plpgsql.html)                                       |    1.0 |    1.0 |    1.0 | Pre-installed with Postgres.                                                                                                                                              |
| [plpgsql_check](https://pgxn.org/dist/plpgsql_check/)                                            |  2.5.3 |  2.5.3 |  2.5.3 |                                                                                                                                                                           |
| [plv8](https://github.com/plv8/plv8)                                                             | 3.1.10 | 3.1.10 | 3.1.10 |                                                                                                                                                                           |
| [postgis](/docs/extensions/postgis)                                                              |  3.3.3 |  3.3.3 |  3.3.3 |                                                                                                                                                                           |
| [postgis_raster](https://postgis.net/docs/RT_reference.html)                                     |  3.3.3 |  3.3.3 |  3.3.3 |                                                                                                                                                                           |
| [postgis_sfcgal](/docs/extensions/postgis-related-extensions#postgis-sfcgal)                     |  1.3.8 |  1.3.8 |  1.3.8 |                                                                                                                                                                           |
| [postgis_tiger_geocoder](/docs/extensions/postgis-related-extensions#postgis-tiger-geocoder)     |  3.3.3 |  3.3.3 |  3.3.3 | Cannot be installed using the Neon SQL Editor. Use your `psql` user credentials to install this extension.                                                                |
| [postgis_topology](https://www.postgis.net/docs/Topology.html)                                   |  3.3.3 |  3.3.3 |  3.3.3 |                                                                                                                                                                           |
| [prefix](https://github.com/dimitri/prefix)                                                      |  1.2.0 |  1.2.0 |  1.2.0 |                                                                                                                                                                           |
| [rdkit](https://github.com/rdkit/rdkit)                                                          |  4.3.0 |  4.3.0 |  4.3.0 |                                                                                                                                                                           |
| [refint (spi)](https://www.postgresql.org/docs/current/contrib-spi.html)                         |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [rum](https://github.com/postgrespro/rum)                                                        |    1.3 |    1.3 |    1.3 |                                                                                                                                                                           |
| [seg](https://www.postgresql.org/docs/16/seg.html)                                               |    1.4 |    1.4 |    1.4 |                                                                                                                                                                           |
| [tablefunc](https://www.postgresql.org/docs/16/tablefunc.html)                                   |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [tcn](https://www.postgresql.org/docs/16/tcn.html)                                               |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [timescaledb](/docs/extensions/timescaledb)                                                      | 2.10.1 | 2.10.1 | 2.13.0 | Only Apache-2 licensed features are supported. Compression is not supported.                                                                                              |
| [tsm_system_rows](https://www.postgresql.org/docs/16/tsm-system-rows.html)                       |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [tsm_system_time](https://www.postgresql.org/docs/16/tsm-system-time.html)                       |    1.0 |    1.0 |    1.0 |                                                                                                                                                                           |
| [unaccent](https://www.postgresql.org/docs/16/unaccent.html)                                     |    1.1 |    1.1 |    1.1 |                                                                                                                                                                           |
| [unit](https://github.com/df7cb/postgresql-unit)                                                 |      7 |      7 |      7 |                                                                                                                                                                           |
| [uuid-ossp](https://www.postgresql.org/docs/16/uuid-ossp.html)                                   |    1.1 |    1.1 |    1.1 | Double-quote the extension name when installing: `CREATE EXTENSION "uuid-ossp"`                                                                                           |
| [wal2json](/docs/extensions/wal2json)                                                            |    2.5 |    2.5 |    2.5 | `CREATE EXTENSION` not required. This decoder plugin is available by default but requires enabling [logical replication](/docs/guides/logical-replication-guide) in Neon. |
| [xml2](https://www.postgresql.org/docs/current/xml2.html)                                        |    1.1 |    1.1 |    1.1 |                                                                                                                                                                           |

## Install an extension

Unless otherwise noted, supported extensions can be installed using [CREATE EXTENSION](https://www.postgresql.org/docs/16/sql-createextension.html) syntax.

```sql
CREATE EXTENSION <extension_name>;
```

You can install extensions from the Neon SQL Editor or from a client such as `psql` that permits running SQL queries. For information about using the Neon SQL Editor, see [Query with Neon's SQL Editor](/docs/get-started-with-neon/query-with-neon-sql-editor). For information about using the `psql` client with Neon, see [Connect with psql](/docs/connect/query-with-psql-editor).

## Update an extension version

Neon updates supported extensions as new versions become available. Version updates are communicated in the [Changelog](/docs/changelog). To check the current version of extensions you have installed, query the `pg_extension` table:

```bash
SELECT * FROM pg_extension;
```

You can update an extension to the latest version using `ALTER EXTENSION <extension_name> UPDATE TO <new_version>` syntax. For example:

```sql
ALTER EXTENSION vector UPDATE TO '0.7.0';
```

<Admonition type="important">
When Neon releases a new extension or new extension version, a compute restart is required to make the new extension or extension version available for installation or update. A compute restart may occur on its own due to Neon's default [Autosuspend](/docs/introduction/auto-suspend) behavior. However, if your compute never restarts because you disabled Autosuspend or because your compute is constantly active, you may need to force a restart. To force a restart, users on paid plans can temporarily set a compute's **Suspend compute after a period of inactivity** setting to 1 second (the default is 5 minutes). See [Autosuspend configuration](/docs/manage/endpoints#auto-suspend-configuration) for instructions. After doing so, check the **Operations** page in the Neon Console to see if your compute restarted. Look for `suspend_compute` and `start_compute` actions. Alternatively, all Neon users can issue [Suspend endpoint](https://api-docs.neon.tech/reference/suspendprojectendpoint) and [Start endpoint](https://api-docs.neon.tech/reference/startprojectendpoint) API calls. Please be aware that restarting a compute temporarily interrupts any connections currently using the compute.
</Admonition>

## Extension support notes

- Neon supports the `uuid-ossp` extension for generating UUIDs instead of the `uuid` extension.
- The `sslinfo` extension is not supported. Neon handles connections via a proxy that checks SSL.
- The `pg_cron` extension is not supported. Neon scales to zero when it is not being used, which means that a scheduler that runs inside the database cannot be implemented. Consider using an scheduler that runs externally instead.
- The `file_fdw` extension is not supported. Files would not remain accessible when Neon scales to zero.

## Request extension support

To request support for a LangChainextension, paid plan users can [open a support ticket](https://console.neon.tech/app/projects?modal=support). Free plan users can submit a request via the **feedback** channel on our [Discord Server](https://discord.gg/92vNTzKDGp).

### Custom-built extensions

For [Enterprise](/docs/introduction/plans#enterprise) plan customers, Neon supports custom-built LangChainextensions for exclusive use with your Neon account. If you developed your own LangChainextension and want to use it with Neon, please reach out to us as described above. Please include the following information in your request:

- A repository link or archive file containing the source code for your extension
- A description of what the extension does, instructions for compiling it, and any prerequisites
- Whether an NDA or licensing agreement is necessary for Neon to provide support for your extension

Please keep in mind that certain restrictions may apply with respect to LangChainprivileges and local file system access. Additionally, Neon features such as _Autoscaling_ and _Autosuspend_ may limit the types of extensions we can support.

Depending on the nature of your extension, Neon may also request a liability waiver.

<NeedHelp/>
