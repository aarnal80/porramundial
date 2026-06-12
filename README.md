# Porra Real Madrid - Mundial 2026

Web estatica para GitHub Pages creada para votar resultados de partidos del Mundial:

- gana el equipo local
- empate
- gana el equipo visitante

Incluye la fase de grupos completa con 72 partidos y un dashboard separado en `dashboard.html`.

## Importante sobre guardar votos

GitHub Pages solo publica archivos estaticos. No tiene base de datos y una pagina de HTML puro no puede guardar votos compartidos para todos los usuarios.

La web queda preparada asi:

- **Modo local:** funciona sin configurar nada, pero los votos quedan solo en el navegador de cada persona.
- **Modo online:** usando Supabase, guarda usuarios y votos compartidos para que el dashboard sea comun y persistente.

## Activar votos compartidos

1. Crea un proyecto gratis en Supabase.
2. En **Authentication > Providers**, activa **Anonymous sign-ins**.
3. En **SQL Editor**, ejecuta:

```sql
create table public.participants (
  user_id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

create table public.votes (
  match_id text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  pick text not null check (pick in ('home', 'draw', 'away')),
  updated_at timestamptz not null default now(),
  primary key (match_id, user_id)
);

alter table public.participants enable row level security;
alter table public.votes enable row level security;

create policy "participants are readable"
on public.participants for select
to authenticated
using (true);

create policy "users create their participant"
on public.participants for insert
to authenticated
with check (auth.uid() = user_id);

create policy "users update their participant"
on public.participants for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "votes are readable"
on public.votes for select
to authenticated
using (true);

create policy "users create their votes"
on public.votes for insert
to authenticated
with check (auth.uid() = user_id);

create policy "users update their votes"
on public.votes for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "users delete their votes"
on public.votes for delete
to authenticated
using (auth.uid() = user_id);
```

4. En **Project Settings > API**, copia `Project URL` y `anon public key`.
5. En `app.js`, cambia:

```js
const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
const SUPABASE_ANON_KEY = "TU-ANON-KEY";
```

6. Sube el cambio a GitHub. La web mostrara **Online** cuando este conectada.

## Publicar en GitHub Pages

En GitHub, entra en **Settings > Pages** y usa **GitHub Actions** como fuente de despliegue.

## Editar partidos o probabilidades

Los partidos estan en `app.js`. Puedes cambiar nombres, fechas, sedes, rankings, textos y probabilidades orientativas.

Las probabilidades incluidas son una referencia visual editable, no cuotas en tiempo real de casas de apuestas.
