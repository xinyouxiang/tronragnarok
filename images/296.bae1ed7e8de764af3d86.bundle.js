/*! For license information please see 296.bae1ed7e8de764af3d86.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkragnarok_minting_landing = self.webpackChunkragnarok_minting_landing || []).push([
	[296], {
		35296: (t, e, n) => {
			n.r(e), n.d(e, {
				getAnalytics: () => ut,
				initializeAnalytics: () => dt,
				isSupported: () => ft,
				logEvent: () => wt,
				setAnalyticsCollectionEnabled: () => gt,
				setCurrentScreen: () => pt,
				setUserId: () => mt,
				setUserProperties: () => ht,
				settings: () => ct
			});
			var a = n(32238),
				i = n(53333),
				r = n(74444),
				o = n(8463),
				s = n(98676),
				c = n(25108);
			const l = "@firebase/installations",
				u = "0.5.5",
				d = "w:0.5.5",
				f = new r.LL("installations", "Installations", {
					"missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
					"not-registered": "Firebase Installation is not registered.",
					"installation-not-found": "Firebase Installation not found.",
					"request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
					"app-offline": "Could not process request. Application offline.",
					"delete-pending-registration": "Can't delete installation while there is a pending registration request."
				});

			function p(t) {
				return t instanceof r.ZR && t.code.includes("request-failed")
			}

			function m({
				projectId: t
			}) {
				return ``
			}

			function h(t) {
				return {
					token: t.token,
					requestStatus: 2,
					expiresIn: (e = t.expiresIn, Number(e.replace("s", "000"))),
					creationTime: Date.now()
				};
				var e
			}
			async function g(t, e) {
				const n = (await e.json()).error;
				return f.create("request-failed", {
					requestName: t,
					serverCode: n.code,
					serverMessage: n.message,
					serverStatus: n.status
				})
			}

			function w({
				apiKey: t
			}) {
				return new Headers({
					"Content-Type": "application/json",
					Accept: "application/json",
					"x-goog-api-key": t
				})
			}
			async function y(t) {
				const e = await t();
				return e.status >= 500 && e.status < 600 ? t() : e
			}

			function I(t) {
				return new Promise((e => {
					setTimeout(e, t)
				}))
			}
			const b = /^[cdef][\w-]{21}$/;

			function v() {
				try {
					const t = new Uint8Array(17);
					(self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
					const e = function(t) {
						return (e = t, btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_")).substr(0, 22);
						var e
					}(t);
					return b.test(e) ? e : ""
				} catch (t) {
					return ""
				}
			}

			function T(t) {
				return `${t.appName}!${t.appId}`
			}
			const k = new Map;

			function C(t, e) {
				const n = T(t);
				S(n, e),
					function(t, e) {
						const n = (!A && "BroadcastChannel" in self && (A = new BroadcastChannel("[Firebase] FID Change"), A.onmessage =
							t => {
								S(t.data.key, t.data.fid)
							}), A);
						n && n.postMessage({
							key: t,
							fid: e
						}), 0 === k.size && A && (A.close(), A = null)
					}(n, e)
			}

			function S(t, e) {
				const n = k.get(t);
				if (n)
					for (const t of n) t(e)
			}
			let A = null;
			const $ = "firebase-installations-store";
			let j = null;

			function P() {
				return j || (j = (0, s.openDb)("firebase-installations-database", 1, (t => {
					0 === t.oldVersion && t.createObjectStore($)
				}))), j
			}
			async function D(t, e) {
				const n = T(t),
					a = (await P()).transaction($, "readwrite"),
					i = a.objectStore($),
					r = await i.get(n);
				return await i.put(e, n), await a.complete, r && r.fid === e.fid || C(t, e.fid), e
			}
			async function q(t) {
				const e = T(t),
					n = (await P()).transaction($, "readwrite");
				await n.objectStore($).delete(e), await n.complete
			}
			async function F(t, e) {
				const n = T(t),
					a = (await P()).transaction($, "readwrite"),
					i = a.objectStore($),
					r = await i.get(n),
					o = e(r);
				return void 0 === o ? await i.delete(n) : await i.put(o, n), await a.complete, !o || r && r.fid === o.fid || C(
					t, o.fid), o
			}
			async function M(t) {
				let e;
				const n = await F(t, (n => {
					const a = function(t) {
							return N(t || {
								fid: v(),
								registrationStatus: 0
							})
						}(n),
						i = function(t, e) {
							if (0 === e.registrationStatus) {
								if (!navigator.onLine) return {
									installationEntry: e,
									registrationPromise: Promise.reject(f.create("app-offline"))
								};
								const n = {
										fid: e.fid,
										registrationStatus: 1,
										registrationTime: Date.now()
									},
									a = async function(t, e) {
										try {
											const n = await async function(t, {
												fid: e
											}) {
												const n = m(t),
													a = w(t),
													i = {
														fid: e,
														authVersion: "FIS_v2",
														appId: t.appId,
														sdkVersion: d
													},
													r = {
														method: "POST",
														headers: a,
														body: JSON.stringify(i)
													},
													o = await y((() => fetch(n, r)));
												if (o.ok) {
													const t = await o.json();
													return {
														fid: t.fid || e,
														registrationStatus: 2,
														refreshToken: t.refreshToken,
														authToken: h(t.authToken)
													}
												}
												throw await g("Create Installation", o)
											}(t, e);
											return D(t, n)
										} catch (n) {
											throw p(n) && 409 === n.customData.serverCode ? await q(t) : await D(t, {
												fid: e.fid,
												registrationStatus: 0
											}), n
										}
									}(t, n);
								return {
									installationEntry: n,
									registrationPromise: a
								}
							}
							return 1 === e.registrationStatus ? {
								installationEntry: e,
								registrationPromise: E(t)
							} : {
								installationEntry: e
							}
						}(t, a);
					return e = i.registrationPromise, i.installationEntry
				}));
				return "" === n.fid ? {
					installationEntry: await e
				} : {
					installationEntry: n,
					registrationPromise: e
				}
			}
			async function E(t) {
				let e = await x(t);
				for (; 1 === e.registrationStatus;) await I(100), e = await x(t);
				if (0 === e.registrationStatus) {
					const {
						installationEntry: e,
						registrationPromise: n
					} = await M(t);
					return n || e
				}
				return e
			}

			function x(t) {
				return F(t, (t => {
					if (!t) throw f.create("installation-not-found");
					return N(t)
				}))
			}

			function N(t) {
				return 1 === (e = t).registrationStatus && e.registrationTime + 1e4 < Date.now() ? {
					fid: t.fid,
					registrationStatus: 0
				} : t;
				var e
			}
			async function z({
				appConfig: t,
				platformLoggerProvider: e
			}, n) {
				const a = function(t, {
						fid: e
					}) {
						return `${m(t)}/${e}/authTokens:generate`
					}(t, n),
					i = function(t, {
						refreshToken: e
					}) {
						const n = w(t);
						return n.append("Authorization", function(t) {
							return `FIS_v2 ${t}`
						}(e)), n
					}(t, n),
					r = e.getImmediate({
						optional: !0
					});
				r && i.append("x-firebase-client", r.getPlatformInfoString());
				const o = {
						installation: {
							sdkVersion: d
						}
					},
					s = {
						method: "POST",
						headers: i,
						body: JSON.stringify(o)
					},
					c = await y((() => fetch(a, s)));
				if (c.ok) return h(await c.json());
				throw await g("Generate Auth Token", c)
			}
			async function O(t, e = !1) {
				let n;
				const a = await F(t.appConfig, (a => {
					if (!L(a)) throw f.create("not-registered");
					const i = a.authToken;
					if (!e && (2 === (r = i).requestStatus && ! function(t) {
							const e = Date.now();
							return e < t.creationTime || t.creationTime + t.expiresIn < e + 36e5
						}(r))) return a;
					var r;
					if (1 === i.requestStatus) return n = async function(t, e) {
						let n = await _(t.appConfig);
						for (; 1 === n.authToken.requestStatus;) await I(100), n = await _(t.appConfig);
						const a = n.authToken;
						return 0 === a.requestStatus ? O(t, e) : a
					}(t, e), a; {
						if (!navigator.onLine) throw f.create("app-offline");
						const e = function(t) {
							const e = {
								requestStatus: 1,
								requestTime: Date.now()
							};
							return Object.assign(Object.assign({}, t), {
								authToken: e
							})
						}(a);
						return n = async function(t, e) {
							try {
								const n = await z(t, e),
									a = Object.assign(Object.assign({}, e), {
										authToken: n
									});
								return await D(t.appConfig, a), n
							} catch (n) {
								if (!p(n) || 401 !== n.customData.serverCode && 404 !== n.customData.serverCode) {
									const n = Object.assign(Object.assign({}, e), {
										authToken: {
											requestStatus: 0
										}
									});
									await D(t.appConfig, n)
								} else await q(t.appConfig);
								throw n
							}
						}(t, e), e
					}
				}));
				return n ? await n : a.authToken
			}

			function _(t) {
				return F(t, (t => {
					if (!L(t)) throw f.create("not-registered");
					return 1 === (e = t.authToken).requestStatus && e.requestTime + 1e4 < Date.now() ? Object.assign(Object.assign({},
						t), {
						authToken: {
							requestStatus: 0
						}
					}) : t;
					var e
				}))
			}

			function L(t) {
				return void 0 !== t && 2 === t.registrationStatus
			}

			function K(t) {
				return f.create("missing-app-config-values", {
					valueName: t
				})
			}
			const X = "installations";
			(0, a.Xd)(new o.wA(X, (t => {
				const e = t.getProvider("app").getImmediate(),
					n = function(t) {
						if (!t || !t.options) throw K("App Configuration");
						if (!t.name) throw K("App Name");
						const e = ["projectId", "apiKey", "appId"];
						for (const n of e)
							if (!t.options[n]) throw K(n);
						return {
							appName: t.name,
							projectId: t.options.projectId,
							apiKey: t.options.apiKey,
							appId: t.options.appId
						}
					}(e);
				return {
					app: e,
					appConfig: n,
					platformLoggerProvider: (0, a.qX)(e, "platform-logger"),
					_delete: () => Promise.resolve()
				}
			}), "PUBLIC")), (0, a.Xd)(new o.wA("installations-internal", (t => {
				const e = t.getProvider("app").getImmediate(),
					n = (0, a.qX)(e, X).getImmediate();
				return {
					getId: () => async function(t) {
						const e = t,
							{
								installationEntry: n,
								registrationPromise: a
							} = await M(e.appConfig);
						return a ? a.catch(c.error) : O(e).catch(c.error), n.fid
					}(n),
					getToken: t => async function(t, e = !1) {
						const n = t;
						return await async function(t) {
							const {
								registrationPromise: e
							} = await M(t);
							e && await e
						}(n.appConfig), (await O(n, e)).token
					}(n, t)
				}
			}), "PRIVATE")), (0, a.KN)(l, u), (0, a.KN)(l, u, "esm2017");
			const B = "analytics",
				V = "https://www.googletagmanager.com/gtag/js",
				U = new i.Yd("@firebase/analytics");

			function R(t) {
				return Promise.all(t.map((t => t.catch((t => t)))))
			}
			const G = new r.LL("analytics", "Analytics", {
					"already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
					"already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
					"already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
					"interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
					"invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
					"indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
					"fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
					"config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
					"no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
					"no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'
				}),
				Z = new class {
					constructor(t = {}, e = 1e3) {
						this.throttleMetadata = t, this.intervalMillis = e
					}
					getThrottleMetadata(t) {
						return this.throttleMetadata[t]
					}
					setThrottleMetadata(t, e) {
						this.throttleMetadata[t] = e
					}
					deleteThrottleMetadata(t) {
						delete this.throttleMetadata[t]
					}
				};

			function H(t) {
				return new Headers({
					Accept: "application/json",
					"x-goog-api-key": t
				})
			}
			async function J(t, e = Z, n) {
				const {
					appId: a,
					apiKey: i,
					measurementId: r
				} = t.options;
				if (!a) throw G.create("no-app-id");
				if (!i) {
					if (r) return {
						measurementId: r,
						appId: a
					};
					throw G.create("no-api-key")
				}
				const o = e.getThrottleMetadata(a) || {
						backoffCount: 0,
						throttleEndTimeMillis: Date.now()
					},
					s = new Y;
				return setTimeout((async () => {
					s.abort()
				}), void 0 !== n ? n : 6e4), W({
					appId: a,
					apiKey: i,
					measurementId: r
				}, o, s, e)
			}
			async function W(t, {
				throttleEndTimeMillis: e,
				backoffCount: n
			}, a, i = Z) {
				const {
					appId: o,
					measurementId: s
				} = t;
				try {
					await
					function(t, e) {
						return new Promise(((n, a) => {
							const i = Math.max(e - Date.now(), 0),
								r = setTimeout(n, i);
							t.addEventListener((() => {
								clearTimeout(r), a(G.create("fetch-throttle", {
									throttleEndTimeMillis: e
								}))
							}))
						}))
					}(a, e)
				} catch (t) {
					if (s) return U.warn(
						`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${t.message}]`
					), {
						appId: o,
						measurementId: s
					};
					throw t
				}
				try {
					const e = await async function(t) {
						var e;
						const {
							appId: n,
							apiKey: a
						} = t, i = {
								method: "GET",
								headers: H(a)
							}, r = "".replace("{app-id}", n),
							o = await fetch(r, i);
						if (200 !== o.status && 304 !== o.status) {
							let t = "";
							try {
								const n = await o.json();
								(null === (e = n.error) || void 0 === e ? void 0 : e.message) && (t = n.error.message)
							} catch (t) {}
							throw G.create("config-fetch-failed", {
								httpStatus: o.status,
								responseMessage: t
							})
						}
						return o.json()
					}(t);
					return i.deleteThrottleMetadata(o), e
				} catch (e) {
					if (! function(t) {
							if (!(t instanceof r.ZR && t.customData)) return !1;
							const e = Number(t.customData.httpStatus);
							return 429 === e || 500 === e || 503 === e || 504 === e
						}(e)) {
						if (i.deleteThrottleMetadata(o), s) return U.warn(
							`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e.message}]`
						), {
							appId: o,
							measurementId: s
						};
						throw e
					}
					const c = 503 === Number(e.customData.httpStatus) ? (0, r.$s)(n, i.intervalMillis, 30) : (0, r.$s)(n, i.intervalMillis),
						l = {
							throttleEndTimeMillis: Date.now() + c,
							backoffCount: n + 1
						};
					return i.setThrottleMetadata(o, l), U.debug(`Calling attemptFetch again in ${c} millis`), W(t, l, a, i)
				}
			}
			class Y {
				constructor() {
					this.listeners = []
				}
				addEventListener(t) {
					this.listeners.push(t)
				}
				abort() {
					this.listeners.forEach((t => t()))
				}
			}
			class Q {
				constructor(t) {
					this.app = t
				}
				_delete() {
					return delete tt[this.app.options.appId], Promise.resolve()
				}
			}
			let tt = {},
				et = [];
			const nt = {};
			let at, it, rt = "dataLayer",
				ot = "gtag",
				st = !1;

			function ct(t) {
				if (st) throw G.create("already-initialized");
				t.dataLayerName && (rt = t.dataLayerName), t.gtagName && (ot = t.gtagName)
			}

			function lt(t, e, n) {
				! function() {
					const t = [];
					if ((0, r.ru)() && t.push("This is a browser extension environment."), (0, r.zI)() || t.push(
							"Cookies are not available."), t.length > 0) {
						const e = t.map(((t, e) => `(${e + 1}) ${t}`)).join(" "),
							n = G.create("invalid-analytics-context", {
								errorInfo: e
							});
						U.warn(n.message)
					}
				}();
				const a = t.options.appId;
				if (!a) throw G.create("no-app-id");
				if (!t.options.apiKey) {
					if (!t.options.measurementId) throw G.create("no-api-key");
					U.warn(
						`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`
					)
				}
				if (null != tt[a]) throw G.create("already-exists", {
					id: a
				});
				if (!st) {
					! function(t) {
						let e = [];
						Array.isArray(window[t]) ? e = window[t] : window[t] = e
					}(rt);
					const {
						wrappedGtag: t,
						gtagCore: e
					} = function(t, e, n, a, i) {
						let r = function(...t) {
							window[a].push(arguments)
						};
						return window[i] && "function" == typeof window[i] && (r = window[i]), window[i] = function(t, e, n, a) {
							return async function(i, r, o) {
								try {
									"event" === i ? await async function(t, e, n, a, i) {
										try {
											let r = [];
											if (i && i.send_to) {
												let t = i.send_to;
												Array.isArray(t) || (t = [t]);
												const a = await R(n);
												for (const n of t) {
													const t = a.find((t => t.measurementId === n)),
														i = t && e[t.appId];
													if (!i) {
														r = [];
														break
													}
													r.push(i)
												}
											}
											0 === r.length && (r = Object.values(e)), await Promise.all(r), t("event", a, i || {})
										} catch (t) {
											U.error(t)
										}
									}(t, e, n, r, o): "config" === i ? await async function(t, e, n, a, i, r) {
										const o = a[i];
										try {
											if (o) await e[o];
											else {
												const t = (await R(n)).find((t => t.measurementId === i));
												t && await e[t.appId]
											}
										} catch (t) {
											U.error(t)
										}
										t("config", i, r)
									}(t, e, n, a, r, o): t("set", r)
								} catch (t) {
									U.error(t)
								}
							}
						}(r, t, e, n), {
							gtagCore: r,
							wrappedGtag: window[i]
						}
					}(tt, et, nt, rt, ot);
					it = t, at = e, st = !0
				}
				return tt[a] = async function(t, e, n, a, i, o, s) {
					var c;
					const l = J(t);
					l.then((e => {
						n[e.measurementId] = e.appId, t.options.measurementId && e.measurementId !== t.options.measurementId && U
							.warn(
								`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`
							)
					})).catch((t => U.error(t))), e.push(l);
					const u = async function() {
						if (!(0, r.hl)()) return U.warn(G.create("indexeddb-unavailable", {
							errorInfo: "IndexedDB is not available in this environment."
						}).message), !1;
						try {
							await (0, r.eu)()
						} catch (t) {
							return U.warn(G.create("indexeddb-unavailable", {
								errorInfo: t
							}).message), !1
						}
						return !0
					}().then((t => t ? a.getId() : void 0)), [d, f] = await Promise.all([l, u]);
					(function() {
						const t = window.document.getElementsByTagName("script");
						for (const e of Object.values(t))
							if (e.src && e.src.includes(V)) return e;
						return null
					})() || function(t, e) {
						const n = document.createElement("script");
						n.src = `${V}?l=${t}&id=${e}`, n.async = !0, document.head.appendChild(n)
					}(o, d.measurementId), i("js", new Date);
					const p = null !== (c = null == s ? void 0 : s.config) && void 0 !== c ? c : {};
					return p.origin = "firebase", p.update = !0, null != f && (p.firebase_id = f), i("config", d.measurementId, p),
						d.measurementId
				}(t, et, nt, e, at, rt, n), new Q(t)
			}

			function ut(t = (0, a.Mq)()) {
				t = (0, r.m9)(t);
				const e = (0, a.qX)(t, B);
				return e.isInitialized() ? e.getImmediate() : dt(t)
			}

			function dt(t, e = {}) {
				const n = (0, a.qX)(t, B);
				if (n.isInitialized()) {
					const t = n.getImmediate();
					if ((0, r.vZ)(e, n.getOptions())) return t;
					throw G.create("already-initialized")
				}
				return n.initialize({
					options: e
				})
			}
			async function ft() {
				if ((0, r.ru)()) return !1;
				if (!(0, r.zI)()) return !1;
				if (!(0, r.hl)()) return !1;
				try {
					return await (0, r.eu)()
				} catch (t) {
					return !1
				}
			}

			function pt(t, e, n) {
				t = (0, r.m9)(t), async function(t, e, n, a) {
					if (a && a.global) return t("set", {
						screen_name: n
					}), Promise.resolve();
					t("config", await e, {
						update: !0,
						screen_name: n
					})
				}(it, tt[t.app.options.appId], e, n).catch((t => U.error(t)))
			}

			function mt(t, e, n) {
				t = (0, r.m9)(t), async function(t, e, n, a) {
					if (a && a.global) return t("set", {
						user_id: n
					}), Promise.resolve();
					t("config", await e, {
						update: !0,
						user_id: n
					})
				}(it, tt[t.app.options.appId], e, n).catch((t => U.error(t)))
			}

			function ht(t, e, n) {
				t = (0, r.m9)(t), async function(t, e, n, a) {
					if (a && a.global) {
						const e = {};
						for (const t of Object.keys(n)) e[`user_properties.${t}`] = n[t];
						return t("set", e), Promise.resolve()
					}
					t("config", await e, {
						update: !0,
						user_properties: n
					})
				}(it, tt[t.app.options.appId], e, n).catch((t => U.error(t)))
			}

			function gt(t, e) {
				t = (0, r.m9)(t), async function(t, e) {
					const n = await t;
					window[`ga-disable-${n}`] = !e
				}(tt[t.app.options.appId], e).catch((t => U.error(t)))
			}

			function wt(t, e, n, a) {
				t = (0, r.m9)(t), async function(t, e, n, a, i) {
					if (i && i.global) t("event", n, a);
					else {
						const i = await e;
						t("event", n, Object.assign(Object.assign({}, a), {
							send_to: i
						}))
					}
				}(it, tt[t.app.options.appId], e, n, a).catch((t => U.error(t)))
			}
			const yt = "@firebase/analytics",
				It = "0.7.5";
			(0, a.Xd)(new o.wA(B, ((t, {
					options: e
				}) => lt(t.getProvider("app").getImmediate(), t.getProvider("installations-internal").getImmediate(), e)),
				"PUBLIC")), (0, a.Xd)(new o.wA("analytics-internal", (function(t) {
				try {
					const e = t.getProvider(B).getImmediate();
					return {
						logEvent: (t, n, a) => wt(e, t, n, a)
					}
				} catch (t) {
					throw G.create("interop-component-reg-failed", {
						reason: t
					})
				}
			}), "PRIVATE")), (0, a.KN)(yt, It), (0, a.KN)(yt, It, "esm2017")
		}
	}
]);
