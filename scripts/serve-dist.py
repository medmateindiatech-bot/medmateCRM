"""Serve dist/ like the production server does: /about -> about.html, unknown paths -> 404.html (HTTP 404).
Usage: python3 scripts/serve-dist.py [port]"""
import http.server, os, sys

DIST = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "dist")


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=DIST, **kw)

    def send_head(self):
        path = self.path.split("?", 1)[0].split("#", 1)[0]
        for candidate in (path, path.rstrip("/") + ".html", path.rstrip("/") + "/index.html"):
            full = os.path.join(DIST, candidate.lstrip("/"))
            if os.path.isfile(full):
                self.path = candidate
                return super().send_head()
        body = open(os.path.join(DIST, "404.html"), "rb").read()
        self.send_response(404)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)
        return None


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    http.server.ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()
