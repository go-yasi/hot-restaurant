// Basic route fo all non-API pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));