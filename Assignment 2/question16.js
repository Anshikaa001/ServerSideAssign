function parseURL(url) {
    const [base, hash] = url.split('#');
    const [main, query] = base.split('?');
    const [protocol, rest] = main.split('//');
    const [host, ...pathParts] = rest.split('/');

    return {
        protocol,
        host,
        pathname: '/' + pathParts.join('/'),
        query,
        hash
    };
}

console.log(parseURL("https://www.example.com/path/to/page?name=John&age=30#section1"));