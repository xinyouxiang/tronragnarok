/*! For license information please see 51.f5dafe92ed1c0609e040.bundle.js.LICENSE.txt */
(self.webpackChunkragnarok_minting_landing = self.webpackChunkragnarok_minting_landing || []).push([
			[51], {
				71246: (e, t, a) => {
					"use strict";
					a.d(t, {
						me: () => c,
						UL: () => i
					});
					var r = a(63646);
					class n extends r.xE {
						constructor(e) {
							super(e)
						}
						setFilters(e, t) {}
						setWraps(e, t) {}
						dispose() {}
					}
					class c extends r.m8 {
						constructor(e = "", t = null) {
							super((e => new n(e)), e, t)
						}
					}
					class i {
						constructor(e) {
							this.triangleRendering = !1, this.debugRendering = !1, this.vertices = r.cQ.newFloatArray(8192), this.tempColor =
								new r.Il, this.ctx = e
						}
						draw(e) {
							this.triangleRendering ? this.drawTriangles(e) : this.drawImages(e)
						}
						drawImages(e) {
							let t = this.ctx,
								a = this.tempColor,
								n = e.color,
								c = e.drawOrder;
							this.debugRendering && (t.strokeStyle = "green");
							for (let e = 0, i = c.length; e < i; e++) {
								let i = c[e],
									d = i.bone;
								if (!d.active) continue;
								let f = i.getAttachment();
								if (!(f instanceof r.MM)) continue;
								let o = f.region,
									s = o.page.texture.getImage(),
									b = i.color,
									u = f.color;
								a.set(n.r * b.r * u.r, n.g * b.g * u.g, n.b * b.b * u.b, n.a * b.a * u.a), t.save(), t.transform(d.a, d.c, d.b,
									d.d, d.worldX, d.worldY), t.translate(f.offset[0], f.offset[1]), t.rotate(f.rotation * Math.PI / 180);
								let h = f.width / o.originalWidth;
								t.scale(h * f.scaleX, h * f.scaleY);
								let l = o.width,
									x = o.height;
								if (t.translate(l / 2, x / 2), 90 == f.region.degrees) {
									let e = l;
									l = x, x = e, t.rotate(-Math.PI / 2)
								}
								t.scale(1, -1), t.translate(-l / 2, -x / 2), t.globalAlpha = a.a, t.drawImage(s, o.x, o.y, l, x, 0, 0, l, x),
									this.debugRendering && t.strokeRect(0, 0, l, x), t.restore()
							}
						}
						drawTriangles(e) {
							let t = this.ctx,
								a = this.tempColor,
								n = e.color,
								c = e.drawOrder,
								d = null,
								f = this.vertices,
								o = null;
							for (let e = 0, b = c.length; e < b; e++) {
								let b, u, h = c[e],
									l = h.getAttachment();
								if (l instanceof r.MM) {
									let e = l;
									f = this.computeRegionVertices(h, e, !1), o = i.QUAD_TRIANGLES, u = e.region, b = u.page.texture.getImage()
								} else {
									if (!(l instanceof r._g)) continue; {
										let e = l;
										f = this.computeMeshVertices(h, e, !1), o = e.triangles, b = e.region.renderObject.page.texture.getImage()
									}
								}
								if (b) {
									h.data.blendMode != d && (d = h.data.blendMode);
									let e = h.color,
										r = l.color;
									a.set(n.r * e.r * r.r, n.g * e.g * r.g, n.b * e.b * r.b, n.a * e.a * r.a), t.globalAlpha = a.a;
									for (var s = 0; s < o.length; s += 3) {
										let e = 8 * o[s],
											a = 8 * o[s + 1],
											r = 8 * o[s + 2],
											n = f[e],
											c = f[e + 1],
											i = f[e + 6],
											d = f[e + 7],
											u = f[a],
											h = f[a + 1],
											l = f[a + 6],
											x = f[a + 7],
											p = f[r],
											m = f[r + 1],
											g = f[r + 6],
											y = f[r + 7];
										this.drawTriangle(b, n, c, i, d, u, h, l, x, p, m, g, y), this.debugRendering && (t.strokeStyle = "green",
											t.beginPath(), t.moveTo(n, c), t.lineTo(u, h), t.lineTo(p, m), t.lineTo(n, c), t.stroke())
									}
								}
							}
							this.ctx.globalAlpha = 1
						}
						drawTriangle(e, t, a, r, n, c, i, d, f, o, s, b, u) {
							let h = this.ctx;
							r *= e.width, n *= e.height, d *= e.width, f *= e.height, b *= e.width, u *= e.height, h.beginPath(), h.moveTo(
								t, a), h.lineTo(c, i), h.lineTo(o, s), h.closePath();
							var l = 1 / ((d -= r) * (u -= n) - (b -= r) * (f -= n)),
								x = (u * (c -= t) - f * (o -= t)) * l,
								p = (u * (i -= a) - f * (s -= a)) * l,
								m = (d * o - b * c) * l,
								g = (d * s - b * i) * l,
								y = t - x * r - m * n,
								v = a - p * r - g * n;
							h.save(), h.transform(x, p, m, g, y, v), h.clip(), h.drawImage(e, 0, 0), h.restore()
						}
						computeRegionVertices(e, t, a) {
							let n = e.bone.skeleton.color,
								c = e.color,
								d = t.color,
								f = n.a * c.a * d.a,
								o = a ? f : 1,
								s = this.tempColor;
							s.set(n.r * c.r * d.r * o, n.g * c.g * d.g * o, n.b * c.b * d.b * o, f), t.computeWorldVertices(e.bone, this.vertices,
								0, i.VERTEX_SIZE);
							let b = this.vertices,
								u = t.uvs;
							return b[r.MM.C1R] = s.r, b[r.MM.C1G] = s.g, b[r.MM.C1B] = s.b, b[r.MM.C1A] = s.a, b[r.MM.U1] = u[0], b[r.MM.V1] =
								u[1], b[r.MM.C2R] = s.r, b[r.MM.C2G] = s.g, b[r.MM.C2B] = s.b, b[r.MM.C2A] = s.a, b[r.MM.U2] = u[2], b[r.MM.V2] =
								u[3], b[r.MM.C3R] = s.r, b[r.MM.C3G] = s.g, b[r.MM.C3B] = s.b, b[r.MM.C3A] = s.a, b[r.MM.U3] = u[4], b[r.MM.V3] =
								u[5], b[r.MM.C4R] = s.r, b[r.MM.C4G] = s.g, b[r.MM.C4B] = s.b, b[r.MM.C4A] = s.a, b[r.MM.U4] = u[6], b[r.MM.V4] =
								u[7], b
						}
						computeMeshVertices(e, t, a) {
							let n = e.bone.skeleton.color,
								c = e.color,
								d = t.color,
								f = n.a * c.a * d.a,
								o = a ? f : 1,
								s = this.tempColor;
							s.set(n.r * c.r * d.r * o, n.g * c.g * d.g * o, n.b * c.b * d.b * o, f);
							let b = t.worldVerticesLength / 2,
								u = this.vertices;
							u.length < t.worldVerticesLength && (this.vertices = u = r.cQ.newFloatArray(t.worldVerticesLength)), t.computeWorldVertices(
								e, 0, t.worldVerticesLength, u, 0, i.VERTEX_SIZE);
							let h = t.uvs;
							for (let e = 0, t = 0, a = 2; e < b; e++) u[a++] = s.r, u[a++] = s.g, u[a++] = s.b, u[a++] = s.a, u[a++] = h[t++],
								u[a++] = h[t++], a += 2;
							return u
						}
					}
					i.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0], i.VERTEX_SIZE = 8
				},
				63646: (e, t, a) => {
					"use strict";
					var r, n;
					a.d(t, {
						SR: () => H,
						OZ: () => ee,
						m8: () => Ee,
						N0: () => ke,
						bt: () => se,
						Ad: () => ae,
						Il: () => i,
						_g: () => ye,
						vu: () => ve,
						MM: () => _e,
						Od: () => Ne,
						Cf: () => je,
						$c: () => Fe,
						CE: () => Ge,
						xE: () => re,
						Qb: () => ne,
						cQ: () => f,
						FM: () => s
					}), a(25108);
					class c {
						constructor() {
							this.entries = {}, this.size = 0
						}
						add(e) {
							let t = this.entries[e];
							return this.entries[e] = !0, !t && (this.size++, !0)
						}
						addAll(e) {
							let t = this.size;
							for (var a = 0, r = e.length; a < r; a++) this.add(e[a]);
							return t != this.size
						}
						contains(e) {
							return this.entries[e]
						}
						clear() {
							this.entries = {}, this.size = 0
						}
					}
					class i {
						constructor(e = 0, t = 0, a = 0, r = 0) {
							this.r = e, this.g = t, this.b = a, this.a = r
						}
						set(e, t, a, r) {
							return this.r = e, this.g = t, this.b = a, this.a = r, this.clamp()
						}
						setFromColor(e) {
							return this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this
						}
						setFromString(e) {
							return e = "#" == e.charAt(0) ? e.substr(1) : e, this.r = parseInt(e.substr(0, 2), 16) / 255, this.g =
								parseInt(e.substr(2, 2), 16) / 255, this.b = parseInt(e.substr(4, 2), 16) / 255, this.a = 8 != e.length ? 1 :
								parseInt(e.substr(6, 2), 16) / 255, this
						}
						add(e, t, a, r) {
							return this.r += e, this.g += t, this.b += a, this.a += r, this.clamp()
						}
						clamp() {
							return this.r < 0 ? this.r = 0 : this.r > 1 && (this.r = 1), this.g < 0 ? this.g = 0 : this.g > 1 && (this.g =
								1), this.b < 0 ? this.b = 0 : this.b > 1 && (this.b = 1), this.a < 0 ? this.a = 0 : this.a > 1 && (this.a =
								1), this
						}
						static rgba8888ToColor(e, t) {
							e.r = ((4278190080 & t) >>> 24) / 255, e.g = ((16711680 & t) >>> 16) / 255, e.b = ((65280 & t) >>> 8) / 255, e
								.a = (255 & t) / 255
						}
						static rgb888ToColor(e, t) {
							e.r = ((16711680 & t) >>> 16) / 255, e.g = ((65280 & t) >>> 8) / 255, e.b = (255 & t) / 255
						}
						static fromString(e) {
							return (new i).setFromString(e)
						}
					}
					i.WHITE = new i(1, 1, 1, 1), i.RED = new i(1, 0, 0, 1), i.GREEN = new i(0, 1, 0, 1), i.BLUE = new i(0, 0, 1, 1),
						i.MAGENTA = new i(1, 0, 1, 1);
					class d {
						static clamp(e, t, a) {
							return e < t ? t : e > a ? a : e
						}
						static cosDeg(e) {
							return Math.cos(e * d.degRad)
						}
						static sinDeg(e) {
							return Math.sin(e * d.degRad)
						}
						static signum(e) {
							return e > 0 ? 1 : e < 0 ? -1 : 0
						}
						static toInt(e) {
							return e > 0 ? Math.floor(e) : Math.ceil(e)
						}
						static cbrt(e) {
							let t = Math.pow(Math.abs(e), 1 / 3);
							return e < 0 ? -t : t
						}
						static randomTriangular(e, t) {
							return d.randomTriangularWith(e, t, .5 * (e + t))
						}
						static randomTriangularWith(e, t, a) {
							let r = Math.random(),
								n = t - e;
							return r <= (a - e) / n ? e + Math.sqrt(r * n * (a - e)) : t - Math.sqrt((1 - r) * n * (t - a))
						}
						static isPowerOfTwo(e) {
							return e && 0 == (e & e - 1)
						}
					}
					d.PI = 3.1415927, d.PI2 = 2 * d.PI, d.radiansToDegrees = 180 / d.PI, d.radDeg = d.radiansToDegrees, d.degreesToRadians =
						d.PI / 180, d.degRad = d.degreesToRadians;
					class f {
						static arrayCopy(e, t, a, r, n) {
							for (let c = t, i = r; c < t + n; c++, i++) a[i] = e[c]
						}
						static arrayFill(e, t, a, r) {
							for (let n = t; n < a; n++) e[n] = r
						}
						static setArraySize(e, t, a = 0) {
							let r = e.length;
							if (r == t) return e;
							if (e.length = t, r < t)
								for (let n = r; n < t; n++) e[n] = a;
							return e
						}
						static ensureArrayCapacity(e, t, a = 0) {
							return e.length >= t ? e : f.setArraySize(e, t, a)
						}
						static newArray(e, t) {
							let a = new Array(e);
							for (let r = 0; r < e; r++) a[r] = t;
							return a
						}
						static newFloatArray(e) {
							if (f.SUPPORTS_TYPED_ARRAYS) return new Float32Array(e); {
								let t = new Array(e);
								for (let e = 0; e < t.length; e++) t[e] = 0;
								return t
							}
						}
						static newShortArray(e) {
							if (f.SUPPORTS_TYPED_ARRAYS) return new Int16Array(e); {
								let t = new Array(e);
								for (let e = 0; e < t.length; e++) t[e] = 0;
								return t
							}
						}
						static toFloatArray(e) {
							return f.SUPPORTS_TYPED_ARRAYS ? new Float32Array(e) : e
						}
						static toSinglePrecision(e) {
							return f.SUPPORTS_TYPED_ARRAYS ? Math.fround(e) : e
						}
						static webkit602BugfixHelper(e, t) {}
						static contains(e, t, a = !0) {
							for (var r = 0; r < e.length; r++)
								if (e[r] == t) return !0;
							return !1
						}
						static enumValue(e, t) {
							return e[t[0].toUpperCase() + t.slice(1)]
						}
					}
					f.SUPPORTS_TYPED_ARRAYS = "undefined" != typeof Float32Array;
					class o {
						constructor(e) {
							this.items = new Array, this.instantiator = e
						}
						obtain() {
							return this.items.length > 0 ? this.items.pop() : this.instantiator()
						}
						free(e) {
							e.reset && e.reset(), this.items.push(e)
						}
						freeAll(e) {
							for (let t = 0; t < e.length; t++) this.free(e[t])
						}
						clear() {
							this.items.length = 0
						}
					}
					class s {
						constructor(e = 0, t = 0) {
							this.x = e, this.y = t
						}
						set(e, t) {
							return this.x = e, this.y = t, this
						}
						length() {
							let e = this.x,
								t = this.y;
							return Math.sqrt(e * e + t * t)
						}
						normalize() {
							let e = this.length();
							return 0 != e && (this.x /= e, this.y /= e), this
						}
					}
					class b {
						constructor(e) {
							if (!e) throw new Error("name cannot be null.");
							this.name = e
						}
					}
					class u extends b {
						constructor(e) {
							super(e), this.id = u.nextID++, this.bones = null, this.vertices = null, this.worldVerticesLength = 0, this.deformAttachment =
								this
						}
						computeWorldVertices(e, t, a, r, n, c) {
							a = n + (a >> 1) * c;
							let i = e.bone.skeleton,
								d = e.deform,
								f = this.vertices,
								o = this.bones;
							if (!o) {
								d.length > 0 && (f = d);
								let i = e.bone,
									o = i.worldX,
									s = i.worldY,
									b = i.a,
									u = i.b,
									h = i.c,
									l = i.d;
								for (let e = t, i = n; i < a; e += 2, i += c) {
									let t = f[e],
										a = f[e + 1];
									r[i] = t * b + a * u + o, r[i + 1] = t * h + a * l + s
								}
								return
							}
							let s = 0,
								b = 0;
							for (let e = 0; e < t; e += 2) {
								let e = o[s];
								s += e + 1, b += e
							}
							let u = i.bones;
							if (0 == d.length)
								for (let e = n, t = 3 * b; e < a; e += c) {
									let a = 0,
										n = 0,
										c = o[s++];
									for (c += s; s < c; s++, t += 3) {
										let e = u[o[s]],
											r = f[t],
											c = f[t + 1],
											i = f[t + 2];
										a += (r * e.a + c * e.b + e.worldX) * i, n += (r * e.c + c * e.d + e.worldY) * i
									}
									r[e] = a, r[e + 1] = n
								} else {
									let e = d;
									for (let t = n, i = 3 * b, d = b << 1; t < a; t += c) {
										let a = 0,
											n = 0,
											c = o[s++];
										for (c += s; s < c; s++, i += 3, d += 2) {
											let t = u[o[s]],
												r = f[i] + e[d],
												c = f[i + 1] + e[d + 1],
												b = f[i + 2];
											a += (r * t.a + c * t.b + t.worldX) * b, n += (r * t.c + c * t.d + t.worldY) * b
										}
										r[t] = a, r[t + 1] = n
									}
								}
						}
						copyTo(e) {
							this.bones ? (e.bones = new Array(this.bones.length), f.arrayCopy(this.bones, 0, e.bones, 0, this.bones.length)) :
								e.bones = null, this.vertices ? (e.vertices = f.newFloatArray(this.vertices.length), f.arrayCopy(this.vertices,
									0, e.vertices, 0, this.vertices.length)) : e.vertices = null, e.worldVerticesLength = this.worldVerticesLength,
								e.deformAttachment = this.deformAttachment
						}
					}
					u.nextID = 0;
					class h {
						constructor(e, t, a) {
							if (this.timelines = null, this.timelineIds = null, !e) throw new Error("name cannot be null.");
							this.name = e, this.setTimelines(t), this.duration = a
						}
						setTimelines(e) {
							if (!e) throw new Error("timelines cannot be null.");
							this.timelines = e, this.timelineIds = new c;
							for (var t = 0; t < e.length; t++) this.timelineIds.addAll(e[t].getPropertyIds())
						}
						hasTimeline(e) {
							for (let t = 0; t < e.length; t++)
								if (this.timelineIds.contains(e[t])) return !0;
							return !1
						}
						apply(e, t, a, r, n, c, i, d) {
							if (!e) throw new Error("skeleton cannot be null.");
							r && 0 != this.duration && (a %= this.duration, t > 0 && (t %= this.duration));
							let f = this.timelines;
							for (let r = 0, o = f.length; r < o; r++) f[r].apply(e, t, a, n, c, i, d)
						}
					}! function(e) {
						e[e.setup = 0] = "setup", e[e.first = 1] = "first", e[e.replace = 2] = "replace", e[e.add = 3] = "add"
					}(r || (r = {})),
					function(e) {
						e[e.mixIn = 0] = "mixIn", e[e.mixOut = 1] = "mixOut"
					}(n || (n = {}));
					class l {
						constructor(e, t) {
							this.propertyIds = null, this.frames = null, this.propertyIds = t, this.frames = f.newFloatArray(e * this.getFrameEntries())
						}
						getPropertyIds() {
							return this.propertyIds
						}
						getFrameEntries() {
							return 1
						}
						getFrameCount() {
							return this.frames.length / this.getFrameEntries()
						}
						getDuration() {
							return this.frames[this.frames.length - this.getFrameEntries()]
						}
						static search1(e, t) {
							let a = e.length;
							for (let r = 1; r < a; r++)
								if (e[r] > t) return r - 1;
							return a - 1
						}
						static search(e, t, a) {
							let r = e.length;
							for (let n = a; n < r; n += a)
								if (e[n] > t) return n - a;
							return r - a
						}
					}
					class x extends l {
						constructor(e, t, a) {
							super(e, a), this.curves = null, this.curves = f.newFloatArray(e + 18 * t), this.curves[e - 1] = 1
						}
						setLinear(e) {
							this.curves[e] = 0
						}
						setStepped(e) {
							this.curves[e] = 1
						}
						shrink(e) {
							let t = this.getFrameCount() + 18 * e;
							if (this.curves.length > t) {
								let e = f.newFloatArray(t);
								f.arrayCopy(this.curves, 0, e, 0, t), this.curves = e
							}
						}
						setBezier(e, t, a, r, n, c, i, d, f, o, s) {
							let b = this.curves,
								u = this.getFrameCount() + 18 * e;
							0 == a && (b[t] = 2 + u);
							let h = .03 * (r - 2 * c + d),
								l = .03 * (n - 2 * i + f),
								x = .006 * (3 * (c - d) - r + o),
								p = .006 * (3 * (i - f) - n + s),
								m = 2 * h + x,
								g = 2 * l + p,
								y = .3 * (c - r) + h + .16666667 * x,
								v = .3 * (i - n) + l + .16666667 * p,
								w = r + y,
								_ = n + v;
							for (let e = u + 18; u < e; u += 2) b[u] = w, b[u + 1] = _, y += m, v += g, m += x, g += p, w += y, _ += v
						}
						getBezierValue(e, t, a, r) {
							let n = this.curves;
							if (n[r] > e) {
								let c = this.frames[t],
									i = this.frames[t + a];
								return i + (e - c) / (n[r] - c) * (n[r + 1] - i)
							}
							let c = r + 18;
							for (r += 2; r < c; r += 2)
								if (n[r] >= e) {
									let t = n[r - 2],
										a = n[r - 1];
									return a + (e - t) / (n[r] - t) * (n[r + 1] - a)
								} t += this.getFrameEntries();
							let i = n[c - 2],
								d = n[c - 1];
							return d + (e - i) / (this.frames[t] - i) * (this.frames[t + a] - d)
						}
					}
					class p extends x {
						constructor(e, t, a) {
							super(e, t, [a])
						}
						getFrameEntries() {
							return 2
						}
						setFrame(e, t, a) {
							e <<= 1, this.frames[e] = t, this.frames[e + 1] = a
						}
						getCurveValue(e) {
							let t = this.frames,
								a = t.length - 2;
							for (let r = 2; r <= a; r += 2)
								if (t[r] > e) {
									a = r - 2;
									break
								} let r = this.curves[a >> 1];
							switch (r) {
								case 0:
									let r = t[a],
										n = t[a + 1];
									return n + (e - r) / (t[a + 2] - r) * (t[a + 2 + 1] - n);
								case 1:
									return t[a + 1]
							}
							return this.getBezierValue(e, a, 1, r - 2)
						}
					}
					class m extends x {
						constructor(e, t, a, r) {
							super(e, t, [a, r])
						}
						getFrameEntries() {
							return 3
						}
						setFrame(e, t, a, r) {
							e *= 3, this.frames[e] = t, this.frames[e + 1] = a, this.frames[e + 2] = r
						}
					}
					class g extends p {
						constructor(e, t, a) {
							super(e, t, "0|" + a), this.boneIndex = 0, this.boneIndex = a
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.bones[this.boneIndex];
							if (!f.active) return;
							if (a < this.frames[0]) {
								switch (i) {
									case r.setup:
										return void(f.rotation = f.data.rotation);
									case r.first:
										f.rotation += (f.data.rotation - f.rotation) * c
								}
								return
							}
							let o = this.getCurveValue(a);
							switch (i) {
								case r.setup:
									f.rotation = f.data.rotation + o * c;
									break;
								case r.first:
								case r.replace:
									o += f.data.rotation - f.rotation;
								case r.add:
									f.rotation += o * c
							}
						}
					}
					class y extends m {
						constructor(e, t, a) {
							super(e, t, "1|" + a, "2|" + a), this.boneIndex = 0, this.boneIndex = a
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.bones[this.boneIndex];
							if (!f.active) return;
							let o = this.frames;
							if (a < o[0]) {
								switch (i) {
									case r.setup:
										return f.x = f.data.x, void(f.y = f.data.y);
									case r.first:
										f.x += (f.data.x - f.x) * c, f.y += (f.data.y - f.y) * c
								}
								return
							}
							let s = 0,
								b = 0,
								u = l.search(o, a, 3),
								h = this.curves[u / 3];
							switch (h) {
								case 0:
									let e = o[u];
									s = o[u + 1], b = o[u + 2];
									let t = (a - e) / (o[u + 3] - e);
									s += (o[u + 3 + 1] - s) * t, b += (o[u + 3 + 2] - b) * t;
									break;
								case 1:
									s = o[u + 1], b = o[u + 2];
									break;
								default:
									s = this.getBezierValue(a, u, 1, h - 2), b = this.getBezierValue(a, u, 2, h + 18 - 2)
							}
							switch (i) {
								case r.setup:
									f.x = f.data.x + s * c, f.y = f.data.y + b * c;
									break;
								case r.first:
								case r.replace:
									f.x += (f.data.x + s - f.x) * c, f.y += (f.data.y + b - f.y) * c;
									break;
								case r.add:
									f.x += s * c, f.y += b * c
							}
						}
					}
					class v extends p {
						constructor(e, t, a) {
							super(e, t, "1|" + a), this.boneIndex = 0, this.boneIndex = a
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.bones[this.boneIndex];
							if (!f.active) return;
							if (a < this.frames[0]) {
								switch (i) {
									case r.setup:
										return void(f.x = f.data.x);
									case r.first:
										f.x += (f.data.x - f.x) * c
								}
								return
							}
							let o = this.getCurveValue(a);
							switch (i) {
								case r.setup:
									f.x = f.data.x + o * c;
									break;
								case r.first:
								case r.replace:
									f.x += (f.data.x + o - f.x) * c;
									break;
								case r.add:
									f.x += o * c
							}
						}
					}
					class w extends p {
						constructor(e, t, a) {
							super(e, t, "2|" + a), this.boneIndex = 0, this.boneIndex = a
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.bones[this.boneIndex];
							if (!f.active) return;
							if (a < this.frames[0]) {
								switch (i) {
									case r.setup:
										return void(f.y = f.data.y);
									case r.first:
										f.y += (f.data.y - f.y) * c
								}
								return
							}
							let o = this.getCurveValue(a);
							switch (i) {
								case r.setup:
									f.y = f.data.y + o * c;
									break;
								case r.first:
								case r.replace:
									f.y += (f.data.y + o - f.y) * c;
									break;
								case r.add:
									f.y += o * c
							}
						}
					}
					class _ extends m {
						constructor(e, t, a) {
							super(e, t, "3|" + a, "4|" + a), this.boneIndex = 0, this.boneIndex = a
						}
						apply(e, t, a, c, i, f, o) {
							let s = e.bones[this.boneIndex];
							if (!s.active) return;
							let b, u, h = this.frames;
							if (a < h[0]) {
								switch (f) {
									case r.setup:
										return s.scaleX = s.data.scaleX, void(s.scaleY = s.data.scaleY);
									case r.first:
										s.scaleX += (s.data.scaleX - s.scaleX) * i, s.scaleY += (s.data.scaleY - s.scaleY) * i
								}
								return
							}
							let x = l.search(h, a, 3),
								p = this.curves[x / 3];
							switch (p) {
								case 0:
									let e = h[x];
									b = h[x + 1], u = h[x + 2];
									let t = (a - e) / (h[x + 3] - e);
									b += (h[x + 3 + 1] - b) * t, u += (h[x + 3 + 2] - u) * t;
									break;
								case 1:
									b = h[x + 1], u = h[x + 2];
									break;
								default:
									b = this.getBezierValue(a, x, 1, p - 2), u = this.getBezierValue(a, x, 2, p + 18 - 2)
							}
							if (b *= s.data.scaleX, u *= s.data.scaleY, 1 == i) f == r.add ? (s.scaleX += b - s.data.scaleX, s.scaleY += u -
								s.data.scaleY) : (s.scaleX = b, s.scaleY = u);
							else {
								let e = 0,
									t = 0;
								if (o == n.mixOut) switch (f) {
									case r.setup:
										e = s.data.scaleX, t = s.data.scaleY, s.scaleX = e + (Math.abs(b) * d.signum(e) - e) * i, s.scaleY = t + (
											Math.abs(u) * d.signum(t) - t) * i;
										break;
									case r.first:
									case r.replace:
										e = s.scaleX, t = s.scaleY, s.scaleX = e + (Math.abs(b) * d.signum(e) - e) * i, s.scaleY = t + (Math.abs(u) *
											d.signum(t) - t) * i;
										break;
									case r.add:
										s.scaleX += (b - s.data.scaleX) * i, s.scaleY += (u - s.data.scaleY) * i
								} else switch (f) {
									case r.setup:
										e = Math.abs(s.data.scaleX) * d.signum(b), t = Math.abs(s.data.scaleY) * d.signum(u), s.scaleX = e + (b -
											e) * i, s.scaleY = t + (u - t) * i;
										break;
									case r.first:
									case r.replace:
										e = Math.abs(s.scaleX) * d.signum(b), t = Math.abs(s.scaleY) * d.signum(u), s.scaleX = e + (b - e) * i, s
											.scaleY = t + (u - t) * i;
										break;
									case r.add:
										s.scaleX += (b - s.data.scaleX) * i, s.scaleY += (u - s.data.scaleY) * i
								}
							}
						}
					}
					class k extends p {
						constructor(e, t, a) {
							super(e, t, "3|" + a), this.boneIndex = 0, this.boneIndex = a
						}
						apply(e, t, a, c, i, f, o) {
							let s = e.bones[this.boneIndex];
							if (!s.active) return;
							if (a < this.frames[0]) {
								switch (f) {
									case r.setup:
										return void(s.scaleX = s.data.scaleX);
									case r.first:
										s.scaleX += (s.data.scaleX - s.scaleX) * i
								}
								return
							}
							let b = this.getCurveValue(a) * s.data.scaleX;
							if (1 == i) f == r.add ? s.scaleX += b - s.data.scaleX : s.scaleX = b;
							else {
								let e = 0;
								if (o == n.mixOut) switch (f) {
									case r.setup:
										e = s.data.scaleX, s.scaleX = e + (Math.abs(b) * d.signum(e) - e) * i;
										break;
									case r.first:
									case r.replace:
										e = s.scaleX, s.scaleX = e + (Math.abs(b) * d.signum(e) - e) * i;
										break;
									case r.add:
										s.scaleX += (b - s.data.scaleX) * i
								} else switch (f) {
									case r.setup:
										e = Math.abs(s.data.scaleX) * d.signum(b), s.scaleX = e + (b - e) * i;
										break;
									case r.first:
									case r.replace:
										e = Math.abs(s.scaleX) * d.signum(b), s.scaleX = e + (b - e) * i;
										break;
									case r.add:
										s.scaleX += (b - s.data.scaleX) * i
								}
							}
						}
					}
					class M extends p {
						constructor(e, t, a) {
							super(e, t, "4|" + a), this.boneIndex = 0, this.boneIndex = a
						}
						apply(e, t, a, c, i, f, o) {
							let s = e.bones[this.boneIndex];
							if (!s.active) return;
							if (a < this.frames[0]) {
								switch (f) {
									case r.setup:
										return void(s.scaleY = s.data.scaleY);
									case r.first:
										s.scaleY += (s.data.scaleY - s.scaleY) * i
								}
								return
							}
							let b = this.getCurveValue(a) * s.data.scaleY;
							if (1 == i) f == r.add ? s.scaleY += b - s.data.scaleY : s.scaleY = b;
							else {
								let e = 0;
								if (o == n.mixOut) switch (f) {
									case r.setup:
										e = s.data.scaleY, s.scaleY = e + (Math.abs(b) * d.signum(e) - e) * i;
										break;
									case r.first:
									case r.replace:
										e = s.scaleY, s.scaleY = e + (Math.abs(b) * d.signum(e) - e) * i;
										break;
									case r.add:
										s.scaleY += (b - s.data.scaleY) * i
								} else switch (f) {
									case r.setup:
										e = Math.abs(s.data.scaleY) * d.signum(b), s.scaleY = e + (b - e) * i;
										break;
									case r.first:
									case r.replace:
										e = Math.abs(s.scaleY) * d.signum(b), s.scaleY = e + (b - e) * i;
										break;
									case r.add:
										s.scaleY += (b - s.data.scaleY) * i
								}
							}
						}
					}
					class S extends m {
						constructor(e, t, a) {
							super(e, t, "5|" + a, "6|" + a), this.boneIndex = 0, this.boneIndex = a
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.bones[this.boneIndex];
							if (!f.active) return;
							let o = this.frames;
							if (a < o[0]) {
								switch (i) {
									case r.setup:
										return f.shearX = f.data.shearX, void(f.shearY = f.data.shearY);
									case r.first:
										f.shearX += (f.data.shearX - f.shearX) * c, f.shearY += (f.data.shearY - f.shearY) * c
								}
								return
							}
							let s = 0,
								b = 0,
								u = l.search(o, a, 3),
								h = this.curves[u / 3];
							switch (h) {
								case 0:
									let e = o[u];
									s = o[u + 1], b = o[u + 2];
									let t = (a - e) / (o[u + 3] - e);
									s += (o[u + 3 + 1] - s) * t, b += (o[u + 3 + 2] - b) * t;
									break;
								case 1:
									s = o[u + 1], b = o[u + 2];
									break;
								default:
									s = this.getBezierValue(a, u, 1, h - 2), b = this.getBezierValue(a, u, 2, h + 18 - 2)
							}
							switch (i) {
								case r.setup:
									f.shearX = f.data.shearX + s * c, f.shearY = f.data.shearY + b * c;
									break;
								case r.first:
								case r.replace:
									f.shearX += (f.data.shearX + s - f.shearX) * c, f.shearY += (f.data.shearY + b - f.shearY) * c;
									break;
								case r.add:
									f.shearX += s * c, f.shearY += b * c
							}
						}
					}
					class E extends p {
						constructor(e, t, a) {
							super(e, t, "5|" + a), this.boneIndex = 0, this.boneIndex = a
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.bones[this.boneIndex];
							if (!f.active) return;
							if (a < this.frames[0]) {
								switch (i) {
									case r.setup:
										return void(f.shearX = f.data.shearX);
									case r.first:
										f.shearX += (f.data.shearX - f.shearX) * c
								}
								return
							}
							let o = this.getCurveValue(a);
							switch (i) {
								case r.setup:
									f.shearX = f.data.shearX + o * c;
									break;
								case r.first:
								case r.replace:
									f.shearX += (f.data.shearX + o - f.shearX) * c;
									break;
								case r.add:
									f.shearX += o * c
							}
						}
					}
					class A extends p {
						constructor(e, t, a) {
							super(e, t, "6|" + a), this.boneIndex = 0, this.boneIndex = a
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.bones[this.boneIndex];
							if (!f.active) return;
							if (a < this.frames[0]) {
								switch (i) {
									case r.setup:
										return void(f.shearY = f.data.shearY);
									case r.first:
										f.shearY += (f.data.shearY - f.shearY) * c
								}
								return
							}
							let o = this.getCurveValue(a);
							switch (i) {
								case r.setup:
									f.shearY = f.data.shearY + o * c;
									break;
								case r.first:
								case r.replace:
									f.shearY += (f.data.shearY + o - f.shearY) * c;
									break;
								case r.add:
									f.shearY += o * c
							}
						}
					}
					class T extends x {
						constructor(e, t, a) {
							super(e, t, ["7|" + a, "8|" + a]), this.slotIndex = 0, this.slotIndex = a
						}
						getFrameEntries() {
							return 5
						}
						setFrame(e, t, a, r, n, c) {
							e *= 5, this.frames[e] = t, this.frames[e + 1] = a, this.frames[e + 2] = r, this.frames[e + 3] = n, this.frames[
								e + 4] = c
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.slots[this.slotIndex];
							if (!f.bone.active) return;
							let o = this.frames,
								s = f.color;
							if (a < o[0]) {
								let e = f.data.color;
								switch (i) {
									case r.setup:
										return void s.setFromColor(e);
									case r.first:
										s.add((e.r - s.r) * c, (e.g - s.g) * c, (e.b - s.b) * c, (e.a - s.a) * c)
								}
								return
							}
							let b = 0,
								u = 0,
								h = 0,
								x = 0,
								p = l.search(o, a, 5),
								m = this.curves[p / 5];
							switch (m) {
								case 0:
									let e = o[p];
									b = o[p + 1], u = o[p + 2], h = o[p + 3], x = o[p + 4];
									let t = (a - e) / (o[p + 5] - e);
									b += (o[p + 5 + 1] - b) * t, u += (o[p + 5 + 2] - u) * t, h += (o[p + 5 + 3] - h) * t, x += (o[p + 5 + 4] -
										x) * t;
									break;
								case 1:
									b = o[p + 1], u = o[p + 2], h = o[p + 3], x = o[p + 4];
									break;
								default:
									b = this.getBezierValue(a, p, 1, m - 2), u = this.getBezierValue(a, p, 2, m + 18 - 2), h = this.getBezierValue(
										a, p, 3, m + 36 - 2), x = this.getBezierValue(a, p, 4, m + 54 - 2)
							}
							1 == c ? s.set(b, u, h, x) : (i == r.setup && s.setFromColor(f.data.color), s.add((b - s.r) * c, (u - s.g) * c,
								(h - s.b) * c, (x - s.a) * c))
						}
					}
					class R extends x {
						constructor(e, t, a) {
							super(e, t, ["7|" + a]), this.slotIndex = 0, this.slotIndex = a
						}
						getFrameEntries() {
							return 4
						}
						setFrame(e, t, a, r, n) {
							e <<= 2, this.frames[e] = t, this.frames[e + 1] = a, this.frames[e + 2] = r, this.frames[e + 3] = n
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.slots[this.slotIndex];
							if (!f.bone.active) return;
							let o = this.frames,
								s = f.color;
							if (a < o[0]) {
								let e = f.data.color;
								switch (i) {
									case r.setup:
										return s.r = e.r, s.g = e.g, void(s.b = e.b);
									case r.first:
										s.r += (e.r - s.r) * c, s.g += (e.g - s.g) * c, s.b += (e.b - s.b) * c
								}
								return
							}
							let b = 0,
								u = 0,
								h = 0,
								x = l.search(o, a, 4),
								p = this.curves[x >> 2];
							switch (p) {
								case 0:
									let e = o[x];
									b = o[x + 1], u = o[x + 2], h = o[x + 3];
									let t = (a - e) / (o[x + 4] - e);
									b += (o[x + 4 + 1] - b) * t, u += (o[x + 4 + 2] - u) * t, h += (o[x + 4 + 3] - h) * t;
									break;
								case 1:
									b = o[x + 1], u = o[x + 2], h = o[x + 3];
									break;
								default:
									b = this.getBezierValue(a, x, 1, p - 2), u = this.getBezierValue(a, x, 2, p + 18 - 2), h = this.getBezierValue(
										a, x, 3, p + 36 - 2)
							}
							if (1 == c) s.r = b, s.g = u, s.b = h;
							else {
								if (i == r.setup) {
									let e = f.data.color;
									s.r = e.r, s.g = e.g, s.b = e.b
								}
								s.r += (b - s.r) * c, s.g += (u - s.g) * c, s.b += (h - s.b) * c
							}
						}
					}
					class I extends p {
						constructor(e, t, a) {
							super(e, t, "8|" + a), this.slotIndex = 0, this.slotIndex = a
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.slots[this.slotIndex];
							if (!f.bone.active) return;
							let o = f.color;
							if (a < this.frames[0]) {
								let e = f.data.color;
								switch (i) {
									case r.setup:
										return void(o.a = e.a);
									case r.first:
										o.a += (e.a - o.a) * c
								}
								return
							}
							let s = this.getCurveValue(a);
							1 == c ? o.a = s : (i == r.setup && (o.a = f.data.color.a), o.a += (s - o.a) * c)
						}
					}
					class P extends x {
						constructor(e, t, a) {
							super(e, t, ["7|" + a, "8|" + a, "9|" + a]), this.slotIndex = 0, this.slotIndex = a
						}
						getFrameEntries() {
							return 8
						}
						setFrame(e, t, a, r, n, c, i, d, f) {
							e <<= 3, this.frames[e] = t, this.frames[e + 1] = a, this.frames[e + 2] = r, this.frames[e + 3] = n, this.frames[
								e + 4] = c, this.frames[e + 5] = i, this.frames[e + 6] = d, this.frames[e + 7] = f
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.slots[this.slotIndex];
							if (!f.bone.active) return;
							let o = this.frames,
								s = f.color,
								b = f.darkColor;
							if (a < o[0]) {
								let e = f.data.color,
									t = f.data.darkColor;
								switch (i) {
									case r.setup:
										return s.setFromColor(e), b.r = t.r, b.g = t.g, void(b.b = t.b);
									case r.first:
										s.add((e.r - s.r) * c, (e.g - s.g) * c, (e.b - s.b) * c, (e.a - s.a) * c), b.r += (t.r - b.r) * c, b.g += (
											t.g - b.g) * c, b.b += (t.b - b.b) * c
								}
								return
							}
							let u = 0,
								h = 0,
								x = 0,
								p = 0,
								m = 0,
								g = 0,
								y = 0,
								v = l.search(o, a, 8),
								w = this.curves[v >> 3];
							switch (w) {
								case 0:
									let e = o[v];
									u = o[v + 1], h = o[v + 2], x = o[v + 3], p = o[v + 4], m = o[v + 5], g = o[v + 6], y = o[v + 7];
									let t = (a - e) / (o[v + 8] - e);
									u += (o[v + 8 + 1] - u) * t, h += (o[v + 8 + 2] - h) * t, x += (o[v + 8 + 3] - x) * t, p += (o[v + 8 + 4] -
										p) * t, m += (o[v + 8 + 5] - m) * t, g += (o[v + 8 + 6] - g) * t, y += (o[v + 8 + 7] - y) * t;
									break;
								case 1:
									u = o[v + 1], h = o[v + 2], x = o[v + 3], p = o[v + 4], m = o[v + 5], g = o[v + 6], y = o[v + 7];
									break;
								default:
									u = this.getBezierValue(a, v, 1, w - 2), h = this.getBezierValue(a, v, 2, w + 18 - 2), x = this.getBezierValue(
										a, v, 3, w + 36 - 2), p = this.getBezierValue(a, v, 4, w + 54 - 2), m = this.getBezierValue(a, v, 5, w +
										72 - 2), g = this.getBezierValue(a, v, 6, w + 90 - 2), y = this.getBezierValue(a, v, 7, w + 108 - 2)
							}
							if (1 == c) s.set(u, h, x, p), b.r = m, b.g = g, b.b = y;
							else {
								if (i == r.setup) {
									s.setFromColor(f.data.color);
									let e = f.data.darkColor;
									b.r = e.r, b.g = e.g, b.b = e.b
								}
								s.add((u - s.r) * c, (h - s.g) * c, (x - s.b) * c, (p - s.a) * c), b.r += (m - b.r) * c, b.g += (g - b.g) * c,
									b.b += (y - b.b) * c
							}
						}
					}
					class C extends x {
						constructor(e, t, a) {
							super(e, t, ["7|" + a, "9|" + a]), this.slotIndex = 0, this.slotIndex = a
						}
						getFrameEntries() {
							return 7
						}
						setFrame(e, t, a, r, n, c, i, d) {
							e *= 7, this.frames[e] = t, this.frames[e + 1] = a, this.frames[e + 2] = r, this.frames[e + 3] = n, this.frames[
								e + 4] = c, this.frames[e + 5] = i, this.frames[e + 6] = d
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.slots[this.slotIndex];
							if (!f.bone.active) return;
							let o = this.frames,
								s = f.color,
								b = f.darkColor;
							if (a < o[0]) {
								let e = f.data.color,
									t = f.data.darkColor;
								switch (i) {
									case r.setup:
										return s.r = e.r, s.g = e.g, s.b = e.b, b.r = t.r, b.g = t.g, void(b.b = t.b);
									case r.first:
										s.r += (e.r - s.r) * c, s.g += (e.g - s.g) * c, s.b += (e.b - s.b) * c, b.r += (t.r - b.r) * c, b.g += (t.g -
											b.g) * c, b.b += (t.b - b.b) * c
								}
								return
							}
							let u = 0,
								h = 0,
								x = 0,
								p = 0,
								m = 0,
								g = 0,
								y = l.search(o, a, 7),
								v = this.curves[y / 7];
							switch (v) {
								case 0:
									let e = o[y];
									u = o[y + 1], h = o[y + 2], x = o[y + 3], p = o[y + 4], m = o[y + 5], g = o[y + 6];
									let t = (a - e) / (o[y + 7] - e);
									u += (o[y + 7 + 1] - u) * t, h += (o[y + 7 + 2] - h) * t, x += (o[y + 7 + 3] - x) * t, p += (o[y + 7 + 4] -
										p) * t, m += (o[y + 7 + 5] - m) * t, g += (o[y + 7 + 6] - g) * t;
									break;
								case 1:
									u = o[y + 1], h = o[y + 2], x = o[y + 3], p = o[y + 4], m = o[y + 5], g = o[y + 6];
									break;
								default:
									u = this.getBezierValue(a, y, 1, v - 2), h = this.getBezierValue(a, y, 2, v + 18 - 2), x = this.getBezierValue(
										a, y, 3, v + 36 - 2), p = this.getBezierValue(a, y, 4, v + 54 - 2), m = this.getBezierValue(a, y, 5, v +
										72 - 2), g = this.getBezierValue(a, y, 6, v + 90 - 2)
							}
							if (1 == c) s.r = u, s.g = h, s.b = x, b.r = p, b.g = m, b.b = g;
							else {
								if (i == r.setup) {
									let e = f.data.color,
										t = f.data.darkColor;
									s.r = e.r, s.g = e.g, s.b = e.b, b.r = t.r, b.g = t.g, b.b = t.b
								}
								s.r += (u - s.r) * c, s.g += (h - s.g) * c, s.b += (x - s.b) * c, b.r += (p - b.r) * c, b.g += (m - b.g) * c,
									b.b += (g - b.b) * c
							}
						}
					}
					class O extends l {
						constructor(e, t) {
							super(e, ["10|" + t]), this.slotIndex = 0, this.slotIndex = t, this.attachmentNames = new Array(e)
						}
						getFrameCount() {
							return this.frames.length
						}
						setFrame(e, t, a) {
							this.frames[e] = t, this.attachmentNames[e] = a
						}
						apply(e, t, a, c, i, d, f) {
							let o = e.slots[this.slotIndex];
							o.bone.active && (f != n.mixOut ? a < this.frames[0] ? d != r.setup && d != r.first || this.setAttachment(e, o,
									o.data.attachmentName) : this.setAttachment(e, o, this.attachmentNames[l.search1(this.frames, a)]) : d == r
								.setup && this.setAttachment(e, o, o.data.attachmentName))
						}
						setAttachment(e, t, a) {
							t.setAttachment(a ? e.getAttachment(this.slotIndex, a) : null)
						}
					}
					class N extends x {
						constructor(e, t, a, r) {
							super(e, t, ["11|" + a + "|" + r.id]), this.slotIndex = 0, this.attachment = null, this.vertices = null, this.slotIndex =
								a, this.attachment = r, this.vertices = new Array(e)
						}
						getFrameCount() {
							return this.frames.length
						}
						setFrame(e, t, a) {
							this.frames[e] = t, this.vertices[e] = a
						}
						setBezier(e, t, a, r, n, c, i, d, f, o, s) {
							let b = this.curves,
								u = this.getFrameCount() + 18 * e;
							0 == a && (b[t] = 2 + u);
							let h = .03 * (r - 2 * c + d),
								l = .03 * f - .06 * i,
								x = .006 * (3 * (c - d) - r + o),
								p = .018 * (i - f + .33333333),
								m = 2 * h + x,
								g = 2 * l + p,
								y = .3 * (c - r) + h + .16666667 * x,
								v = .3 * i + l + .16666667 * p,
								w = r + y,
								_ = v;
							for (let e = u + 18; u < e; u += 2) b[u] = w, b[u + 1] = _, y += m, v += g, m += x, g += p, w += y, _ += v
						}
						getCurvePercent(e, t) {
							let a = this.curves,
								r = a[t];
							switch (r) {
								case 0:
									let a = this.frames[t];
									return (e - a) / (this.frames[t + this.getFrameEntries()] - a);
								case 1:
									return 0
							}
							if (r -= 2, a[r] > e) {
								let n = this.frames[t];
								return a[r + 1] * (e - n) / (a[r] - n)
							}
							let n = r + 18;
							for (r += 2; r < n; r += 2)
								if (a[r] >= e) {
									let t = a[r - 2],
										n = a[r - 1];
									return n + (e - t) / (a[r] - t) * (a[r + 1] - n)
								} let c = a[n - 2],
								i = a[n - 1];
							return i + (1 - i) * (e - c) / (this.frames[t + this.getFrameEntries()] - c)
						}
						apply(e, t, a, n, c, i, d) {
							let o = e.slots[this.slotIndex];
							if (!o.bone.active) return;
							let s = o.getAttachment();
							if (!(s instanceof u) || s.deformAttachment != this.attachment) return;
							let b = o.deform;
							0 == b.length && (i = r.setup);
							let h = this.vertices,
								x = h[0].length,
								p = this.frames;
							if (a < p[0]) {
								let e = s;
								switch (i) {
									case r.setup:
										return void(b.length = 0);
									case r.first:
										if (1 == c) return void(b.length = 0);
										if (b.length = x, e.bones)
											for (c = 1 - c, m = 0; m < x; m++) b[m] *= c;
										else {
											let t = e.vertices;
											for (var m = 0; m < x; m++) b[m] += (t[m] - b[m]) * c
										}
								}
								return
							}
							if (b.length = x, a >= p[p.length - 1]) {
								let e = h[p.length - 1];
								if (1 == c)
									if (i == r.add) {
										let t = s;
										if (t.bones)
											for (let t = 0; t < x; t++) b[t] += e[t];
										else {
											let a = t.vertices;
											for (let t = 0; t < x; t++) b[t] += e[t] - a[t]
										}
									} else f.arrayCopy(e, 0, b, 0, x);
								else switch (i) {
									case r.setup:
										{
											let t = s;
											if (t.bones)
												for (let t = 0; t < x; t++) b[t] = e[t] * c;
											else {
												let a = t.vertices;
												for (let t = 0; t < x; t++) {
													let r = a[t];
													b[t] = r + (e[t] - r) * c
												}
											}
											break
										}
									case r.first:
									case r.replace:
										for (let t = 0; t < x; t++) b[t] += (e[t] - b[t]) * c;
										break;
									case r.add:
										let t = s;
										if (t.bones)
											for (let t = 0; t < x; t++) b[t] += e[t] * c;
										else {
											let a = t.vertices;
											for (let t = 0; t < x; t++) b[t] += (e[t] - a[t]) * c
										}
								}
								return
							}
							let g = l.search1(p, a),
								y = this.getCurvePercent(a, g),
								v = h[g],
								w = h[g + 1];
							if (1 == c)
								if (i == r.add) {
									let e = s;
									if (e.bones)
										for (let e = 0; e < x; e++) {
											let t = v[e];
											b[e] += t + (w[e] - t) * y
										} else {
											let t = e.vertices;
											for (let e = 0; e < x; e++) {
												let a = v[e];
												b[e] += a + (w[e] - a) * y - t[e]
											}
										}
								} else
									for (let e = 0; e < x; e++) {
										let t = v[e];
										b[e] = t + (w[e] - t) * y
									} else switch (i) {
										case r.setup:
											{
												let e = s;
												if (e.bones)
													for (let e = 0; e < x; e++) {
														let t = v[e];
														b[e] = (t + (w[e] - t) * y) * c
													} else {
														let t = e.vertices;
														for (let e = 0; e < x; e++) {
															let a = v[e],
																r = t[e];
															b[e] = r + (a + (w[e] - a) * y - r) * c
														}
													}
												break
											}
										case r.first:
										case r.replace:
											for (let e = 0; e < x; e++) {
												let t = v[e];
												b[e] += (t + (w[e] - t) * y - b[e]) * c
											}
											break;
										case r.add:
											let e = s;
											if (e.bones)
												for (let e = 0; e < x; e++) {
													let t = v[e];
													b[e] += (t + (w[e] - t) * y) * c
												} else {
													let t = e.vertices;
													for (let e = 0; e < x; e++) {
														let a = v[e];
														b[e] += (a + (w[e] - a) * y - t[e]) * c
													}
												}
									}
						}
					}
					class B extends l {
						constructor(e) {
							super(e, B.propertyIds), this.events = null, this.events = new Array(e)
						}
						getFrameCount() {
							return this.frames.length
						}
						setFrame(e, t) {
							this.frames[e] = t.time, this.events[e] = t
						}
						apply(e, t, a, r, n, c, i) {
							if (!r) return;
							let d = this.frames,
								f = this.frames.length;
							if (t > a) this.apply(e, t, Number.MAX_VALUE, r, n, c, i), t = -1;
							else if (t >= d[f - 1]) return;
							if (a < d[0]) return;
							let o = 0;
							if (t < d[0]) o = 0;
							else {
								o = l.search1(d, t) + 1;
								let e = d[o];
								for (; o > 0 && d[o - 1] == e;) o--
							}
							for (; o < f && a >= d[o]; o++) r.push(this.events[o])
						}
					}
					B.propertyIds = ["12"];
					class L extends l {
						constructor(e) {
							super(e, L.propertyIds), this.drawOrders = null, this.drawOrders = new Array(e)
						}
						getFrameCount() {
							return this.frames.length
						}
						setFrame(e, t, a) {
							this.frames[e] = t, this.drawOrders[e] = a
						}
						apply(e, t, a, c, i, d, o) {
							if (o == n.mixOut) return void(d == r.setup && f.arrayCopy(e.slots, 0, e.drawOrder, 0, e.slots.length));
							if (a < this.frames[0]) return void(d != r.setup && d != r.first || f.arrayCopy(e.slots, 0, e.drawOrder, 0, e.slots
								.length));
							let s = this.drawOrders[l.search1(this.frames, a)];
							if (s) {
								let t = e.drawOrder,
									a = e.slots;
								for (let e = 0, r = s.length; e < r; e++) t[e] = a[s[e]]
							} else f.arrayCopy(e.slots, 0, e.drawOrder, 0, e.slots.length)
						}
					}
					L.propertyIds = ["13"];
					class U extends x {
						constructor(e, t, a) {
							super(e, t, ["14|" + a]), this.ikConstraintIndex = 0, this.ikConstraintIndex = a
						}
						getFrameEntries() {
							return 6
						}
						setFrame(e, t, a, r, n, c, i) {
							e *= 6, this.frames[e] = t, this.frames[e + 1] = a, this.frames[e + 2] = r, this.frames[e + 3] = n, this.frames[
								e + 4] = c ? 1 : 0, this.frames[e + 5] = i ? 1 : 0
						}
						apply(e, t, a, c, i, d, f) {
							let o = e.ikConstraints[this.ikConstraintIndex];
							if (!o.active) return;
							let s = this.frames;
							if (a < s[0]) {
								switch (d) {
									case r.setup:
										return o.mix = o.data.mix, o.softness = o.data.softness, o.bendDirection = o.data.bendDirection, o.compress =
											o.data.compress, void(o.stretch = o.data.stretch);
									case r.first:
										o.mix += (o.data.mix - o.mix) * i, o.softness += (o.data.softness - o.softness) * i, o.bendDirection = o.data
											.bendDirection, o.compress = o.data.compress, o.stretch = o.data.stretch
								}
								return
							}
							let b = 0,
								u = 0,
								h = l.search(s, a, 6),
								x = this.curves[h / 6];
							switch (x) {
								case 0:
									let e = s[h];
									b = s[h + 1], u = s[h + 2];
									let t = (a - e) / (s[h + 6] - e);
									b += (s[h + 6 + 1] - b) * t, u += (s[h + 6 + 2] - u) * t;
									break;
								case 1:
									b = s[h + 1], u = s[h + 2];
									break;
								default:
									b = this.getBezierValue(a, h, 1, x - 2), u = this.getBezierValue(a, h, 2, x + 18 - 2)
							}
							d == r.setup ? (o.mix = o.data.mix + (b - o.data.mix) * i, o.softness = o.data.softness + (u - o.data.softness) *
								i, f == n.mixOut ? (o.bendDirection = o.data.bendDirection, o.compress = o.data.compress, o.stretch = o.data
									.stretch) : (o.bendDirection = s[h + 3], o.compress = 0 != s[h + 4], o.stretch = 0 != s[h + 5])) : (o.mix +=
								(b - o.mix) * i, o.softness += (u - o.softness) * i, f == n.mixIn && (o.bendDirection = s[h + 3], o.compress =
									0 != s[h + 4], o.stretch = 0 != s[h + 5]))
						}
					}
					class j extends x {
						constructor(e, t, a) {
							super(e, t, ["15|" + a]), this.transformConstraintIndex = 0, this.transformConstraintIndex = a
						}
						getFrameEntries() {
							return 7
						}
						setFrame(e, t, a, r, n, c, i, d) {
							let f = this.frames;
							f[e *= 7] = t, f[e + 1] = a, f[e + 2] = r, f[e + 3] = n, f[e + 4] = c, f[e + 5] = i, f[e + 6] = d
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.transformConstraints[this.transformConstraintIndex];
							if (!f.active) return;
							let o, s, b, u, h, x, p = this.frames;
							if (a < p[0]) {
								let e = f.data;
								switch (i) {
									case r.setup:
										return f.mixRotate = e.mixRotate, f.mixX = e.mixX, f.mixY = e.mixY, f.mixScaleX = e.mixScaleX, f.mixScaleY =
											e.mixScaleY, void(f.mixShearY = e.mixShearY);
									case r.first:
										f.mixRotate += (e.mixRotate - f.mixRotate) * c, f.mixX += (e.mixX - f.mixX) * c, f.mixY += (e.mixY - f.mixY) *
											c, f.mixScaleX += (e.mixScaleX - f.mixScaleX) * c, f.mixScaleY += (e.mixScaleY - f.mixScaleY) * c, f.mixShearY +=
											(e.mixShearY - f.mixShearY) * c
								}
								return
							}
							let m = l.search(p, a, 7),
								g = this.curves[m / 7];
							switch (g) {
								case 0:
									let e = p[m];
									o = p[m + 1], s = p[m + 2], b = p[m + 3], u = p[m + 4], h = p[m + 5], x = p[m + 6];
									let t = (a - e) / (p[m + 7] - e);
									o += (p[m + 7 + 1] - o) * t, s += (p[m + 7 + 2] - s) * t, b += (p[m + 7 + 3] - b) * t, u += (p[m + 7 + 4] -
										u) * t, h += (p[m + 7 + 5] - h) * t, x += (p[m + 7 + 6] - x) * t;
									break;
								case 1:
									o = p[m + 1], s = p[m + 2], b = p[m + 3], u = p[m + 4], h = p[m + 5], x = p[m + 6];
									break;
								default:
									o = this.getBezierValue(a, m, 1, g - 2), s = this.getBezierValue(a, m, 2, g + 18 - 2), b = this.getBezierValue(
										a, m, 3, g + 36 - 2), u = this.getBezierValue(a, m, 4, g + 54 - 2), h = this.getBezierValue(a, m, 5, g +
										72 - 2), x = this.getBezierValue(a, m, 6, g + 90 - 2)
							}
							if (i == r.setup) {
								let e = f.data;
								f.mixRotate = e.mixRotate + (o - e.mixRotate) * c, f.mixX = e.mixX + (s - e.mixX) * c, f.mixY = e.mixY + (b -
										e.mixY) * c, f.mixScaleX = e.mixScaleX + (u - e.mixScaleX) * c, f.mixScaleY = e.mixScaleY + (h - e.mixScaleY) *
									c, f.mixShearY = e.mixShearY + (x - e.mixShearY) * c
							} else f.mixRotate += (o - f.mixRotate) * c, f.mixX += (s - f.mixX) * c, f.mixY += (b - f.mixY) * c, f.mixScaleX +=
								(u - f.mixScaleX) * c, f.mixScaleY += (h - f.mixScaleY) * c, f.mixShearY += (x - f.mixShearY) * c
						}
					}
					class D extends p {
						constructor(e, t, a) {
							super(e, t, "16|" + a), this.pathConstraintIndex = 0, this.pathConstraintIndex = a
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.pathConstraints[this.pathConstraintIndex];
							if (!f.active) return;
							if (a < this.frames[0]) {
								switch (i) {
									case r.setup:
										return void(f.position = f.data.position);
									case r.first:
										f.position += (f.data.position - f.position) * c
								}
								return
							}
							let o = this.getCurveValue(a);
							i == r.setup ? f.position = f.data.position + (o - f.data.position) * c : f.position += (o - f.position) * c
						}
					}
					class F extends p {
						constructor(e, t, a) {
							super(e, t, "17|" + a), this.pathConstraintIndex = 0, this.pathConstraintIndex = a
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.pathConstraints[this.pathConstraintIndex];
							if (!f.active) return;
							if (a < this.frames[0]) {
								switch (i) {
									case r.setup:
										return void(f.spacing = f.data.spacing);
									case r.first:
										f.spacing += (f.data.spacing - f.spacing) * c
								}
								return
							}
							let o = this.getCurveValue(a);
							i == r.setup ? f.spacing = f.data.spacing + (o - f.data.spacing) * c : f.spacing += (o - f.spacing) * c
						}
					}
					class q extends x {
						constructor(e, t, a) {
							super(e, t, ["18|" + a]), this.pathConstraintIndex = 0, this.pathConstraintIndex = a
						}
						getFrameEntries() {
							return 4
						}
						setFrame(e, t, a, r, n) {
							let c = this.frames;
							c[e <<= 2] = t, c[e + 1] = a, c[e + 2] = r, c[e + 3] = n
						}
						apply(e, t, a, n, c, i, d) {
							let f = e.pathConstraints[this.pathConstraintIndex];
							if (!f.active) return;
							let o, s, b, u = this.frames;
							if (a < u[0]) {
								switch (i) {
									case r.setup:
										return f.mixRotate = f.data.mixRotate, f.mixX = f.data.mixX, void(f.mixY = f.data.mixY);
									case r.first:
										f.mixRotate += (f.data.mixRotate - f.mixRotate) * c, f.mixX += (f.data.mixX - f.mixX) * c, f.mixY += (f.data
											.mixY - f.mixY) * c
								}
								return
							}
							let h = l.search(u, a, 4),
								x = this.curves[h >> 2];
							switch (x) {
								case 0:
									let e = u[h];
									o = u[h + 1], s = u[h + 2], b = u[h + 3];
									let t = (a - e) / (u[h + 4] - e);
									o += (u[h + 4 + 1] - o) * t, s += (u[h + 4 + 2] - s) * t, b += (u[h + 4 + 3] - b) * t;
									break;
								case 1:
									o = u[h + 1], s = u[h + 2], b = u[h + 3];
									break;
								default:
									o = this.getBezierValue(a, h, 1, x - 2), s = this.getBezierValue(a, h, 2, x + 18 - 2), b = this.getBezierValue(
										a, h, 3, x + 36 - 2)
							}
							if (i == r.setup) {
								let e = f.data;
								f.mixRotate = e.mixRotate + (o - e.mixRotate) * c, f.mixX = e.mixX + (s - e.mixX) * c, f.mixY = e.mixY + (b -
									e.mixY) * c
							} else f.mixRotate += (o - f.mixRotate) * c, f.mixX += (s - f.mixX) * c, f.mixY += (b - f.mixY) * c
						}
					}
					class H {
						constructor(e) {
							this.data = null, this.tracks = new Array, this.timeScale = 1, this.unkeyedState = 0, this.events = new Array,
								this.listeners = new Array, this.queue = new V(this), this.propertyIDs = new c, this.animationsChanged = !1,
								this.trackEntryPool = new o((() => new z)), this.data = e
						}
						static emptyAnimation() {
							return Q || (Q = new h("<empty>", [], 0)), Q
						}
						update(e) {
							e *= this.timeScale;
							let t = this.tracks;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (!r) continue;
								r.animationLast = r.nextAnimationLast, r.trackLast = r.nextTrackLast;
								let n = e * r.timeScale;
								if (r.delay > 0) {
									if (r.delay -= n, r.delay > 0) continue;
									n = -r.delay, r.delay = 0
								}
								let c = r.next;
								if (c) {
									let t = r.trackLast - c.delay;
									if (t >= 0) {
										for (c.delay = 0, c.trackTime += 0 == r.timeScale ? 0 : (t / r.timeScale + e) * c.timeScale, r.trackTime +=
											n, this.setCurrent(a, c, !0); c.mixingFrom;) c.mixTime += e, c = c.mixingFrom;
										continue
									}
								} else if (r.trackLast >= r.trackEnd && !r.mixingFrom) {
									t[a] = null, this.queue.end(r), this.clearNext(r);
									continue
								}
								if (r.mixingFrom && this.updateMixingFrom(r, e)) {
									let e = r.mixingFrom;
									for (r.mixingFrom = null, e && (e.mixingTo = null); e;) this.queue.end(e), e = e.mixingFrom
								}
								r.trackTime += n
							}
							this.queue.drain()
						}
						updateMixingFrom(e, t) {
							let a = e.mixingFrom;
							if (!a) return !0;
							let r = this.updateMixingFrom(a, t);
							return a.animationLast = a.nextAnimationLast, a.trackLast = a.nextTrackLast, e.mixTime > 0 && e.mixTime >= e.mixDuration ?
								(0 != a.totalAlpha && 0 != e.mixDuration || (e.mixingFrom = a.mixingFrom, a.mixingFrom && (a.mixingFrom.mixingTo =
									e), e.interruptAlpha = a.interruptAlpha, this.queue.end(a)), r) : (a.trackTime += t * a.timeScale, e.mixTime +=
									t, !1)
						}
						apply(e) {
							if (!e) throw new Error("skeleton cannot be null.");
							this.animationsChanged && this._animationsChanged();
							let t = this.events,
								a = this.tracks,
								c = !1;
							for (let d = 0, o = a.length; d < o; d++) {
								let o = a[d];
								if (!o || o.delay > 0) continue;
								c = !0;
								let s = 0 == d ? r.first : o.mixBlend,
									b = o.alpha;
								o.mixingFrom ? b *= this.applyMixingFrom(o, e, s) : o.trackTime >= o.trackEnd && !o.next && (b = 0);
								let u = o.animationLast,
									h = o.getAnimationTime(),
									l = h,
									x = t;
								o.reverse && (l = o.animation.duration - l, x = null);
								let p = o.animation.timelines,
									m = p.length;
								if (0 == d && 1 == b || s == r.add)
									for (let t = 0; t < m; t++) {
										f.webkit602BugfixHelper(b, s);
										var i = p[t];
										i instanceof O ? this.applyAttachmentTimeline(i, e, l, s, !0) : i.apply(e, u, l, x, b, s, n.mixIn)
									} else {
										let t = o.timelineMode,
											a = o.timelinesRotation.length != m << 1;
										a && (o.timelinesRotation.length = m << 1);
										for (let c = 0; c < m; c++) {
											let i = p[c],
												d = t[c] == G ? s : r.setup;
											i instanceof g ? this.applyRotateTimeline(i, e, l, b, d, o.timelinesRotation, c << 1, a) : i instanceof O ?
												this.applyAttachmentTimeline(i, e, l, s, !0) : (f.webkit602BugfixHelper(b, s), i.apply(e, u, l, x, b, d,
													n.mixIn))
										}
									}
								this.queueEvents(o, h), t.length = 0, o.nextAnimationLast = h, o.nextTrackLast = o.trackTime
							}
							for (var d = this.unkeyedState + J, o = e.slots, s = 0, b = e.slots.length; s < b; s++) {
								var u = o[s];
								if (u.attachmentState == d) {
									var h = u.data.attachmentName;
									u.setAttachment(h ? e.getAttachment(u.data.index, h) : null)
								}
							}
							return this.unkeyedState += 2, this.queue.drain(), c
						}
						applyMixingFrom(e, t, a) {
							let c = e.mixingFrom;
							c.mixingFrom && this.applyMixingFrom(c, t, a);
							let i = 0;
							0 == e.mixDuration ? (i = 1, a == r.first && (a = r.setup)) : (i = e.mixTime / e.mixDuration, i > 1 && (i = 1),
								a != r.first && (a = c.mixBlend));
							let d = i < c.attachmentThreshold,
								o = i < c.drawOrderThreshold,
								s = c.animation.timelines,
								b = s.length,
								u = c.alpha * e.interruptAlpha,
								h = u * (1 - i),
								l = c.animationLast,
								x = c.getAnimationTime(),
								p = x,
								m = null;
							if (c.reverse ? p = c.animation.duration - p : i < c.eventThreshold && (m = this.events), a == r.add)
								for (let e = 0; e < b; e++) s[e].apply(t, l, p, m, h, a, n.mixOut);
							else {
								let e = c.timelineMode,
									i = c.timelineHoldMix,
									x = c.timelinesRotation.length != b << 1;
								x && (c.timelinesRotation.length = b << 1), c.totalAlpha = 0;
								for (let y = 0; y < b; y++) {
									let b, v = s[y],
										w = n.mixOut,
										_ = 0;
									switch (e[y]) {
										case G:
											if (!o && v instanceof L) continue;
											b = a, _ = h;
											break;
										case X:
											b = r.setup, _ = h;
											break;
										case Y:
											b = a, _ = u;
											break;
										case $:
											b = r.setup, _ = u;
											break;
										default:
											b = r.setup;
											let e = i[y];
											_ = u * Math.max(0, 1 - e.mixTime / e.mixDuration)
									}
									c.totalAlpha += _, v instanceof g ? this.applyRotateTimeline(v, t, p, _, b, c.timelinesRotation, y << 1, x) :
										v instanceof O ? this.applyAttachmentTimeline(v, t, p, b, d) : (f.webkit602BugfixHelper(_, a), o && v instanceof L &&
											b == r.setup && (w = n.mixIn), v.apply(t, l, p, m, _, b, w))
								}
							}
							return e.mixDuration > 0 && this.queueEvents(c, x), this.events.length = 0, c.nextAnimationLast = x, c.nextTrackLast =
								c.trackTime, i
						}
						applyAttachmentTimeline(e, t, a, n, c) {
							var i = t.slots[e.slotIndex];
							i.bone.active && (a < e.frames[0] ? n != r.setup && n != r.first || this.setAttachment(t, i, i.data.attachmentName,
									c) : this.setAttachment(t, i, e.attachmentNames[l.search1(e.frames, a)], c), i.attachmentState <= this.unkeyedState &&
								(i.attachmentState = this.unkeyedState + J))
						}
						setAttachment(e, t, a, r) {
							t.setAttachment(a ? e.getAttachment(t.data.index, a) : null), r && (t.attachmentState = this.unkeyedState + Z)
						}
						applyRotateTimeline(e, t, a, c, i, f, o, s) {
							if (s && (f[o] = 0), 1 == c) return void e.apply(t, 0, a, null, 1, i, n.mixIn);
							let b = t.bones[e.boneIndex];
							if (!b.active) return;
							let u = 0,
								h = 0;
							if (a < e.frames[0]) switch (i) {
								case r.setup:
									b.rotation = b.data.rotation;
								default:
									return;
								case r.first:
									u = b.rotation, h = b.data.rotation
							} else u = i == r.setup ? b.data.rotation : b.rotation, h = b.data.rotation + e.getCurveValue(a);
							let l = 0,
								x = h - u;
							if (x -= 360 * (16384 - (16384.499999999996 - x / 360 | 0)), 0 == x) l = f[o];
							else {
								let e = 0,
									t = 0;
								s ? (e = 0, t = x) : (e = f[o], t = f[o + 1]);
								let a = x > 0,
									r = e >= 0;
								d.signum(t) != d.signum(x) && Math.abs(t) <= 90 && (Math.abs(e) > 180 && (e += 360 * d.signum(e)), r = a), l =
									x + e - e % 360, r != a && (l += 360 * d.signum(e)), f[o] = l
							}
							f[o + 1] = x, b.rotation = u + l * c
						}
						queueEvents(e, t) {
							let a = e.animationStart,
								r = e.animationEnd,
								n = r - a,
								c = e.trackLast % n,
								i = this.events,
								d = 0,
								f = i.length;
							for (; d < f; d++) {
								let t = i[d];
								if (t.time < c) break;
								t.time > r || this.queue.event(e, t)
							}
							let o = !1;
							for (o = e.loop ? 0 == n || c > e.trackTime % n : t >= r && e.animationLast < r, o && this.queue.complete(e); d <
								f; d++) {
								let t = i[d];
								t.time < a || this.queue.event(e, t)
							}
						}
						clearTracks() {
							let e = this.queue.drainDisabled;
							this.queue.drainDisabled = !0;
							for (let e = 0, t = this.tracks.length; e < t; e++) this.clearTrack(e);
							this.tracks.length = 0, this.queue.drainDisabled = e, this.queue.drain()
						}
						clearTrack(e) {
							if (e >= this.tracks.length) return;
							let t = this.tracks[e];
							if (!t) return;
							this.queue.end(t), this.clearNext(t);
							let a = t;
							for (;;) {
								let e = a.mixingFrom;
								if (!e) break;
								this.queue.end(e), a.mixingFrom = null, a.mixingTo = null, a = e
							}
							this.tracks[t.trackIndex] = null, this.queue.drain()
						}
						setCurrent(e, t, a) {
							let r = this.expandToIndex(e);
							this.tracks[e] = t, t.previous = null, r && (a && this.queue.interrupt(r), t.mixingFrom = r, r.mixingTo = t, t
								.mixTime = 0, r.mixingFrom && r.mixDuration > 0 && (t.interruptAlpha *= Math.min(1, r.mixTime / r.mixDuration)),
								r.timelinesRotation.length = 0), this.queue.start(t)
						}
						setAnimation(e, t, a = !1) {
							let r = this.data.skeletonData.findAnimation(t);
							if (!r) throw new Error("Animation not found: " + t);
							return this.setAnimationWith(e, r, a)
						}
						setAnimationWith(e, t, a = !1) {
							if (!t) throw new Error("animation cannot be null.");
							let r = !0,
								n = this.expandToIndex(e);
							n && (-1 == n.nextTrackLast ? (this.tracks[e] = n.mixingFrom, this.queue.interrupt(n), this.queue.end(n), this
								.clearNext(n), n = n.mixingFrom, r = !1) : this.clearNext(n));
							let c = this.trackEntry(e, t, a, n);
							return this.setCurrent(e, c, r), this.queue.drain(), c
						}
						addAnimation(e, t, a = !1, r = 0) {
							let n = this.data.skeletonData.findAnimation(t);
							if (!n) throw new Error("Animation not found: " + t);
							return this.addAnimationWith(e, n, a, r)
						}
						addAnimationWith(e, t, a = !1, r = 0) {
							if (!t) throw new Error("animation cannot be null.");
							let n = this.expandToIndex(e);
							if (n)
								for (; n.next;) n = n.next;
							let c = this.trackEntry(e, t, a, n);
							return n ? (n.next = c, c.previous = n, r <= 0 && (r += n.getTrackComplete() - c.mixDuration)) : (this.setCurrent(
								e, c, !0), this.queue.drain()), c.delay = r, c
						}
						setEmptyAnimation(e, t = 0) {
							let a = this.setAnimationWith(e, H.emptyAnimation(), !1);
							return a.mixDuration = t, a.trackEnd = t, a
						}
						addEmptyAnimation(e, t = 0, a = 0) {
							let r = this.addAnimationWith(e, H.emptyAnimation(), !1, a);
							return a <= 0 && (r.delay += r.mixDuration - t), r.mixDuration = t, r.trackEnd = t, r
						}
						setEmptyAnimations(e = 0) {
							let t = this.queue.drainDisabled;
							this.queue.drainDisabled = !0;
							for (let t = 0, a = this.tracks.length; t < a; t++) {
								let a = this.tracks[t];
								a && this.setEmptyAnimation(a.trackIndex, e)
							}
							this.queue.drainDisabled = t, this.queue.drain()
						}
						expandToIndex(e) {
							return e < this.tracks.length ? this.tracks[e] : (f.ensureArrayCapacity(this.tracks, e + 1, null), this.tracks
								.length = e + 1, null)
						}
						trackEntry(e, t, a, n) {
							let c = this.trackEntryPool.obtain();
							return c.reset(), c.trackIndex = e, c.animation = t, c.loop = a, c.holdPrevious = !1, c.eventThreshold = 0, c.attachmentThreshold =
								0, c.drawOrderThreshold = 0, c.animationStart = 0, c.animationEnd = t.duration, c.animationLast = -1, c.nextAnimationLast = -
								1, c.delay = 0, c.trackTime = 0, c.trackLast = -1, c.nextTrackLast = -1, c.trackEnd = Number.MAX_VALUE, c.timeScale =
								1, c.alpha = 1, c.interruptAlpha = 1, c.mixTime = 0, c.mixDuration = n ? this.data.getMix(n.animation, t) : 0,
								c.mixBlend = r.replace, c
						}
						clearNext(e) {
							let t = e.next;
							for (; t;) this.queue.dispose(t), t = t.next;
							e.next = null
						}
						_animationsChanged() {
							this.animationsChanged = !1, this.propertyIDs.clear();
							let e = this.tracks;
							for (let t = 0, a = e.length; t < a; t++) {
								let a = e[t];
								if (a) {
									for (; a.mixingFrom;) a = a.mixingFrom;
									do {
										a.mixingTo && a.mixBlend == r.add || this.computeHold(a), a = a.mixingTo
									} while (a)
								}
							}
						}
						computeHold(e) {
							let t = e.mixingTo,
								a = e.animation.timelines,
								r = e.animation.timelines.length,
								n = e.timelineMode;
							n.length = r;
							let c = e.timelineHoldMix;
							c.length = 0;
							let i = this.propertyIDs;
							if (t && t.holdPrevious)
								for (let e = 0; e < r; e++) n[e] = i.addAll(a[e].getPropertyIds()) ? $ : Y;
							else e: for (let d = 0; d < r; d++) {
								let r = a[d],
									f = r.getPropertyIds();
								if (i.addAll(f))
									if (!t || r instanceof O || r instanceof L || r instanceof B || !t.animation.hasTimeline(f)) n[d] = X;
									else {
										for (let a = t.mixingTo; a; a = a.mixingTo)
											if (!a.animation.hasTimeline(f)) {
												if (e.mixDuration > 0) {
													n[d] = K, c[d] = a;
													continue e
												}
												break
											} n[d] = $
									}
								else n[d] = G
							}
						}
						getCurrent(e) {
							return e >= this.tracks.length ? null : this.tracks[e]
						}
						addListener(e) {
							if (!e) throw new Error("listener cannot be null.");
							this.listeners.push(e)
						}
						removeListener(e) {
							let t = this.listeners.indexOf(e);
							t >= 0 && this.listeners.splice(t, 1)
						}
						clearListeners() {
							this.listeners.length = 0
						}
						clearListenerNotifications() {
							this.queue.clear()
						}
					}
					class z {
						constructor() {
							this.animation = null, this.previous = null, this.next = null, this.mixingFrom = null, this.mixingTo = null,
								this.listener = null, this.trackIndex = 0, this.loop = !1, this.holdPrevious = !1, this.reverse = !1, this.eventThreshold =
								0, this.attachmentThreshold = 0, this.drawOrderThreshold = 0, this.animationStart = 0, this.animationEnd = 0,
								this.animationLast = 0, this.nextAnimationLast = 0, this.delay = 0, this.trackTime = 0, this.trackLast = 0,
								this.nextTrackLast = 0, this.trackEnd = 0, this.timeScale = 0, this.alpha = 0, this.mixTime = 0, this.mixDuration =
								0, this.interruptAlpha = 0, this.totalAlpha = 0, this.mixBlend = r.replace, this.timelineMode = new Array,
								this.timelineHoldMix = new Array, this.timelinesRotation = new Array
						}
						reset() {
							this.next = null, this.previous = null, this.mixingFrom = null, this.mixingTo = null, this.animation = null,
								this.listener = null, this.timelineMode.length = 0, this.timelineHoldMix.length = 0, this.timelinesRotation.length =
								0
						}
						getAnimationTime() {
							if (this.loop) {
								let e = this.animationEnd - this.animationStart;
								return 0 == e ? this.animationStart : this.trackTime % e + this.animationStart
							}
							return Math.min(this.trackTime + this.animationStart, this.animationEnd)
						}
						setAnimationLast(e) {
							this.animationLast = e, this.nextAnimationLast = e
						}
						isComplete() {
							return this.trackTime >= this.animationEnd - this.animationStart
						}
						resetRotationDirections() {
							this.timelinesRotation.length = 0
						}
						getTrackComplete() {
							let e = this.animationEnd - this.animationStart;
							if (0 != e) {
								if (this.loop) return e * (1 + (this.trackTime / e | 0));
								if (this.trackTime < e) return e
							}
							return this.trackTime
						}
					}
					class V {
						constructor(e) {
							this.objects = [], this.drainDisabled = !1, this.animState = null, this.animState = e
						}
						start(e) {
							this.objects.push(W.start), this.objects.push(e), this.animState.animationsChanged = !0
						}
						interrupt(e) {
							this.objects.push(W.interrupt), this.objects.push(e)
						}
						end(e) {
							this.objects.push(W.end), this.objects.push(e), this.animState.animationsChanged = !0
						}
						dispose(e) {
							this.objects.push(W.dispose), this.objects.push(e)
						}
						complete(e) {
							this.objects.push(W.complete), this.objects.push(e)
						}
						event(e, t) {
							this.objects.push(W.event), this.objects.push(e), this.objects.push(t)
						}
						drain() {
							if (this.drainDisabled) return;
							this.drainDisabled = !0;
							let e = this.objects,
								t = this.animState.listeners;
							for (let a = 0; a < e.length; a += 2) {
								let r = e[a],
									n = e[a + 1];
								switch (r) {
									case W.start:
										n.listener && n.listener.start && n.listener.start(n);
										for (let e = 0; e < t.length; e++) t[e].start && t[e].start(n);
										break;
									case W.interrupt:
										n.listener && n.listener.interrupt && n.listener.interrupt(n);
										for (let e = 0; e < t.length; e++) t[e].interrupt && t[e].interrupt(n);
										break;
									case W.end:
										n.listener && n.listener.end && n.listener.end(n);
										for (let e = 0; e < t.length; e++) t[e].end && t[e].end(n);
									case W.dispose:
										n.listener && n.listener.dispose && n.listener.dispose(n);
										for (let e = 0; e < t.length; e++) t[e].dispose && t[e].dispose(n);
										this.animState.trackEntryPool.free(n);
										break;
									case W.complete:
										n.listener && n.listener.complete && n.listener.complete(n);
										for (let e = 0; e < t.length; e++) t[e].complete && t[e].complete(n);
										break;
									case W.event:
										let r = e[2 + a++];
										n.listener && n.listener.event && n.listener.event(n, r);
										for (let e = 0; e < t.length; e++) t[e].event && t[e].event(n, r)
								}
							}
							this.clear(), this.drainDisabled = !1
						}
						clear() {
							this.objects.length = 0
						}
					}
					var W;
					! function(e) {
						e[e.start = 0] = "start", e[e.interrupt = 1] = "interrupt", e[e.end = 2] = "end", e[e.dispose = 3] = "dispose",
							e[e.complete = 4] = "complete", e[e.event = 5] = "event"
					}(W || (W = {}));
					const G = 0,
						X = 1,
						Y = 2,
						$ = 3,
						K = 4,
						J = 1,
						Z = 2;
					let Q = null;
					class ee {
						constructor(e) {
							if (this.skeletonData = null, this.animationToMixTime = {}, this.defaultMix = 0, !e) throw new Error(
								"skeletonData cannot be null.");
							this.skeletonData = e
						}
						setMix(e, t, a) {
							let r = this.skeletonData.findAnimation(e);
							if (!r) throw new Error("Animation not found: " + e);
							let n = this.skeletonData.findAnimation(t);
							if (!n) throw new Error("Animation not found: " + t);
							this.setMixWith(r, n, a)
						}
						setMixWith(e, t, a) {
							if (!e) throw new Error("from cannot be null.");
							if (!t) throw new Error("to cannot be null.");
							let r = e.name + "." + t.name;
							this.animationToMixTime[r] = a
						}
						getMix(e, t) {
							let a = e.name + "." + t.name,
								r = this.animationToMixTime[a];
							return void 0 === r ? this.defaultMix : r
						}
					}
					class te extends u {
						constructor(e) {
							super(e), this.color = new i(1, 1, 1, 1)
						}
						copy() {
							let e = new te(this.name);
							return this.copyTo(e), e.color.setFromColor(this.color), e
						}
					}
					class ae extends u {
						constructor(e) {
							super(e), this.endSlot = null, this.color = new i(.2275, .2275, .8078, 1)
						}
						copy() {
							let e = new ae(this.name);
							return this.copyTo(e), e.endSlot = this.endSlot, e.color.setFromColor(this.color), e
						}
					}
					class re {
						constructor(e) {
							this._image = e
						}
						getImage() {
							return this._image
						}
					}
					var ne, ce, ie, de, fe, oe, se, be, ue, he, le;
					! function(e) {
						e[e.Nearest = 9728] = "Nearest", e[e.Linear = 9729] = "Linear", e[e.MipMap = 9987] = "MipMap", e[e.MipMapNearestNearest =
							9984] = "MipMapNearestNearest", e[e.MipMapLinearNearest = 9985] = "MipMapLinearNearest", e[e.MipMapNearestLinear =
							9986] = "MipMapNearestLinear", e[e.MipMapLinearLinear = 9987] = "MipMapLinearLinear"
					}(ne || (ne = {})),
					function(e) {
						e[e.MirroredRepeat = 33648] = "MirroredRepeat", e[e.ClampToEdge = 33071] = "ClampToEdge", e[e.Repeat = 10497] =
							"Repeat"
					}(ce || (ce = {}));
					class xe {
						constructor(e) {
							this.pages = new Array, this.regions = new Array;
							let t = new pe(e),
								a = new Array(4),
								r = null,
								n = null,
								c = {
									size: () => {
										r.width = parseInt(a[1]), r.height = parseInt(a[2])
									},
									format: () => {},
									filter: () => {
										r.minFilter = f.enumValue(ne, a[1]), r.magFilter = f.enumValue(ne, a[2])
									},
									repeat: () => {
										-1 != a[1].indexOf("x") && (r.uWrap = ce.Repeat), -1 != a[1].indexOf("y") && (r.vWrap = ce.Repeat)
									},
									pma: () => {
										r.pma = "true" == a[1]
									}
								};
							var i = {
								xy: () => {
									n.x = parseInt(a[1]), n.y = parseInt(a[2])
								},
								size: () => {
									n.width = parseInt(a[1]), n.height = parseInt(a[2])
								},
								bounds: () => {
									n.x = parseInt(a[1]), n.y = parseInt(a[2]), n.width = parseInt(a[3]), n.height = parseInt(a[4])
								},
								offset: () => {
									n.offsetX = parseInt(a[1]), n.offsetY = parseInt(a[2])
								},
								orig: () => {
									n.originalWidth = parseInt(a[1]), n.originalHeight = parseInt(a[2])
								},
								offsets: () => {
									n.offsetX = parseInt(a[1]), n.offsetY = parseInt(a[2]), n.originalWidth = parseInt(a[3]), n.originalHeight =
										parseInt(a[4])
								},
								rotate: () => {
									let e = a[1];
									"true" == e ? n.degrees = 90 : "false" != e && (n.degrees = parseInt(e))
								},
								index: () => {
									n.index = parseInt(a[1])
								}
							};
							let d = t.readLine();
							for (; d && 0 == d.trim().length;) d = t.readLine();
							for (; d && 0 != d.trim().length && 0 != t.readEntry(a, d);) d = t.readLine();
							let o = null,
								s = null;
							for (; null !== d;)
								if (0 == d.trim().length) r = null, d = t.readLine();
								else if (r) {
								for (n = new ge, n.page = r, n.name = d;;) {
									let e = t.readEntry(a, d = t.readLine());
									if (0 == e) break;
									let r = i[a[0]];
									if (r) r();
									else {
										o || (o = [], s = []), o.push(a[0]);
										let t = [];
										for (let r = 0; r < e; r++) t.push(parseInt(a[r + 1]));
										s.push(t)
									}
								}
								0 == n.originalWidth && 0 == n.originalHeight && (n.originalWidth = n.width, n.originalHeight = n.height), o &&
									o.length > 0 && (n.names = o, n.values = s, o = null, s = null), n.u = n.x / r.width, n.v = n.y / r.height,
									90 == n.degrees ? (n.u2 = (n.x + n.height) / r.width, n.v2 = (n.y + n.width) / r.height) : (n.u2 = (n.x + n.width) /
										r.width, n.v2 = (n.y + n.height) / r.height), this.regions.push(n)
							} else {
								for (r = new me, r.name = d.trim(); 0 != t.readEntry(a, d = t.readLine());) {
									let e = c[a[0]];
									e && e()
								}
								this.pages.push(r)
							}
						}
						findRegion(e) {
							for (let t = 0; t < this.regions.length; t++)
								if (this.regions[t].name == e) return this.regions[t];
							return null
						}
						setTextures(e, t = "") {
							for (let a of this.pages) a.setTexture(e.get(t + a.name))
						}
						dispose() {
							for (let e = 0; e < this.pages.length; e++) this.pages[e].texture.dispose()
						}
					}
					class pe {
						constructor(e) {
							this.lines = null, this.index = 0, this.lines = e.split(/\r\n|\r|\n/)
						}
						readLine() {
							return this.index >= this.lines.length ? null : this.lines[this.index++]
						}
						readEntry(e, t) {
							if (!t) return 0;
							if (0 == (t = t.trim()).length) return 0;
							let a = t.indexOf(":");
							if (-1 == a) return 0;
							e[0] = t.substr(0, a).trim();
							for (let r = 1, n = a + 1;; r++) {
								let a = t.indexOf(",", n);
								if (-1 == a) return e[r] = t.substr(n).trim(), r;
								if (e[r] = t.substr(n, a - n).trim(), n = a + 1, 4 == r) return 4
							}
						}
					}
					class me {
						constructor() {
							this.name = null, this.minFilter = ne.Nearest, this.magFilter = ne.Nearest, this.uWrap = ce.ClampToEdge, this.vWrap =
								ce.ClampToEdge, this.texture = null, this.width = 0, this.height = 0, this.pma = !1
						}
						setTexture(e) {
							this.texture = e, e.setFilters(this.minFilter, this.magFilter), e.setWraps(this.uWrap, this.vWrap)
						}
					}
					class ge extends class {
						constructor() {
							this.u = 0, this.v = 0, this.u2 = 0, this.v2 = 0, this.width = 0, this.height = 0, this.degrees = 0, this.offsetX =
								0, this.offsetY = 0, this.originalWidth = 0, this.originalHeight = 0
						}
					} {
						constructor() {
							super(...arguments), this.page = null, this.name = null, this.x = 0, this.y = 0, this.offsetX = 0, this.offsetY =
								0, this.originalWidth = 0, this.originalHeight = 0, this.index = 0, this.degrees = 0, this.names = null, this
								.values = null
						}
					}
					class ye extends u {
						constructor(e) {
							super(e), this.region = null, this.path = null, this.regionUVs = null, this.uvs = null, this.triangles = null,
								this.color = new i(1, 1, 1, 1), this.width = 0, this.height = 0, this.hullLength = 0, this.edges = null, this
								.parentMesh = null, this.tempColor = new i(0, 0, 0, 0)
						}
						updateUVs() {
							let e = this.regionUVs;
							this.uvs && this.uvs.length == e.length || (this.uvs = f.newFloatArray(e.length));
							let t = this.uvs,
								a = this.uvs.length,
								r = this.region.u,
								n = this.region.v,
								c = 0,
								i = 0;
							if (this.region instanceof ge) {
								let d = this.region,
									f = d.page.texture.getImage(),
									o = f.width,
									s = f.height;
								switch (d.degrees) {
									case 90:
										r -= (d.originalHeight - d.offsetY - d.height) / o, n -= (d.originalWidth - d.offsetX - d.width) / s, c = d
											.originalHeight / o, i = d.originalWidth / s;
										for (let d = 0; d < a; d += 2) t[d] = r + e[d + 1] * c, t[d + 1] = n + (1 - e[d]) * i;
										return;
									case 180:
										r -= (d.originalWidth - d.offsetX - d.width) / o, n -= d.offsetY / s, c = d.originalWidth / o, i = d.originalHeight /
											s;
										for (let d = 0; d < a; d += 2) t[d] = r + (1 - e[d]) * c, t[d + 1] = n + (1 - e[d + 1]) * i;
										return;
									case 270:
										r -= d.offsetY / o, n -= d.offsetX / s, c = d.originalHeight / o, i = d.originalWidth / s;
										for (let d = 0; d < a; d += 2) t[d] = r + (1 - e[d + 1]) * c, t[d + 1] = n + e[d] * i;
										return
								}
								r -= d.offsetX / o, n -= (d.originalHeight - d.offsetY - d.height) / s, c = d.originalWidth / o, i = d.originalHeight /
									s
							} else this.region ? (c = this.region.u2 - r, i = this.region.v2 - n) : (r = n = 0, c = i = 1);
							for (let d = 0; d < a; d += 2) t[d] = r + e[d] * c, t[d + 1] = n + e[d + 1] * i
						}
						getParentMesh() {
							return this.parentMesh
						}
						setParentMesh(e) {
							this.parentMesh = e, e && (this.bones = e.bones, this.vertices = e.vertices, this.worldVerticesLength = e.worldVerticesLength,
								this.regionUVs = e.regionUVs, this.triangles = e.triangles, this.hullLength = e.hullLength, this.worldVerticesLength =
								e.worldVerticesLength)
						}
						copy() {
							if (this.parentMesh) return this.newLinkedMesh();
							let e = new ye(this.name);
							return e.region = this.region, e.path = this.path, e.color.setFromColor(this.color), this.copyTo(e), e.regionUVs =
								new Array(this.regionUVs.length), f.arrayCopy(this.regionUVs, 0, e.regionUVs, 0, this.regionUVs.length), e.uvs =
								new Array(this.uvs.length), f.arrayCopy(this.uvs, 0, e.uvs, 0, this.uvs.length), e.triangles = new Array(this
									.triangles.length), f.arrayCopy(this.triangles, 0, e.triangles, 0, this.triangles.length), e.hullLength =
								this.hullLength, this.edges && (e.edges = new Array(this.edges.length), f.arrayCopy(this.edges, 0, e.edges, 0,
									this.edges.length)), e.width = this.width, e.height = this.height, e
						}
						newLinkedMesh() {
							let e = new ye(this.name);
							return e.region = this.region, e.path = this.path, e.color.setFromColor(this.color), e.deformAttachment = this
								.deformAttachment, e.setParentMesh(this.parentMesh ? this.parentMesh : this), e.updateUVs(), e
						}
					}
					class ve extends u {
						constructor(e) {
							super(e), this.lengths = null, this.closed = !1, this.constantSpeed = !1, this.color = new i(1, 1, 1, 1)
						}
						copy() {
							let e = new ve(this.name);
							return this.copyTo(e), e.lengths = new Array(this.lengths.length), f.arrayCopy(this.lengths, 0, e.lengths, 0,
									this.lengths.length), e.closed = closed, e.constantSpeed = this.constantSpeed, e.color.setFromColor(this.color),
								e
						}
					}
					class we extends u {
						constructor(e) {
							super(e), this.x = 0, this.y = 0, this.rotation = 0, this.color = new i(.38, .94, 0, 1)
						}
						computeWorldPosition(e, t) {
							return t.x = this.x * e.a + this.y * e.b + e.worldX, t.y = this.x * e.c + this.y * e.d + e.worldY, t
						}
						computeWorldRotation(e) {
							let t = d.cosDeg(this.rotation),
								a = d.sinDeg(this.rotation),
								r = t * e.a + a * e.b,
								n = t * e.c + a * e.d;
							return Math.atan2(n, r) * d.radDeg
						}
						copy() {
							let e = new we(this.name);
							return e.x = this.x, e.y = this.y, e.rotation = this.rotation, e.color.setFromColor(this.color), e
						}
					}
					class _e extends b {
						constructor(e) {
							super(e), this.x = 0, this.y = 0, this.scaleX = 1, this.scaleY = 1, this.rotation = 0, this.width = 0, this.height =
								0, this.color = new i(1, 1, 1, 1), this.path = null, this.rendererObject = null, this.region = null, this.offset =
								f.newFloatArray(8), this.uvs = f.newFloatArray(8), this.tempColor = new i(1, 1, 1, 1)
						}
						updateOffset() {
							this.region;
							let e = this.width / this.region.originalWidth * this.scaleX,
								t = this.height / this.region.originalHeight * this.scaleY,
								a = -this.width / 2 * this.scaleX + this.region.offsetX * e,
								r = -this.height / 2 * this.scaleY + this.region.offsetY * t,
								n = a + this.region.width * e,
								c = r + this.region.height * t,
								i = this.rotation * Math.PI / 180,
								d = Math.cos(i),
								f = Math.sin(i),
								o = this.x,
								s = this.y,
								b = a * d + o,
								u = a * f,
								h = r * d + s,
								l = r * f,
								x = n * d + o,
								p = n * f,
								m = c * d + s,
								g = c * f,
								y = this.offset;
							y[0] = b - l, y[1] = h + u, y[2] = b - g, y[3] = m + u, y[4] = x - g, y[5] = m + p, y[6] = x - l, y[7] = h + p
						}
						setRegion(e) {
							this.region = e;
							let t = this.uvs;
							90 == e.degrees ? (t[2] = e.u, t[3] = e.v2, t[4] = e.u, t[5] = e.v, t[6] = e.u2, t[7] = e.v, t[0] = e.u2, t[1] =
								e.v2) : (t[0] = e.u, t[1] = e.v2, t[2] = e.u, t[3] = e.v, t[4] = e.u2, t[5] = e.v, t[6] = e.u2, t[7] = e.v2)
						}
						computeWorldVertices(e, t, a, r) {
							let n = this.offset,
								c = e.worldX,
								i = e.worldY,
								d = e.a,
								f = e.b,
								o = e.c,
								s = e.d,
								b = 0,
								u = 0;
							b = n[0], u = n[1], t[a] = b * d + u * f + c, t[a + 1] = b * o + u * s + i, a += r, b = n[2], u = n[3], t[a] =
								b * d + u * f + c, t[a + 1] = b * o + u * s + i, a += r, b = n[4], u = n[5], t[a] = b * d + u * f + c, t[a +
									1] = b * o + u * s + i, a += r, b = n[6], u = n[7], t[a] = b * d + u * f + c, t[a + 1] = b * o + u * s + i
						}
						copy() {
							let e = new _e(this.name);
							return e.region = this.region, e.rendererObject = this.rendererObject, e.path = this.path, e.x = this.x, e.y =
								this.y, e.scaleX = this.scaleX, e.scaleY = this.scaleY, e.rotation = this.rotation, e.width = this.width, e.height =
								this.height, f.arrayCopy(this.uvs, 0, e.uvs, 0, 8), f.arrayCopy(this.offset, 0, e.offset, 0, 8), e.color.setFromColor(
									this.color), e
						}
					}
					_e.X1 = 0, _e.Y1 = 1, _e.C1R = 2, _e.C1G = 3, _e.C1B = 4, _e.C1A = 5, _e.U1 = 6, _e.V1 = 7, _e.X2 = 8, _e.Y2 = 9,
						_e.C2R = 10, _e.C2G = 11, _e.C2B = 12, _e.C2A = 13, _e.U2 = 14, _e.V2 = 15, _e.X3 = 16, _e.Y3 = 17, _e.C3R = 18,
						_e.C3G = 19, _e.C3B = 20, _e.C3A = 21, _e.U3 = 22, _e.V3 = 23, _e.X4 = 24, _e.Y4 = 25, _e.C4R = 26, _e.C4G = 27,
						_e.C4B = 28, _e.C4A = 29, _e.U4 = 30, _e.V4 = 31;
					class ke {
						constructor(e) {
							this.atlas = null, this.atlas = e
						}
						newRegionAttachment(e, t, a) {
							let r = this.atlas.findRegion(a);
							if (!r) throw new Error("Region not found in atlas: " + a + " (region attachment: " + t + ")");
							r.renderObject = r;
							let n = new _e(t);
							return n.setRegion(r), n
						}
						newMeshAttachment(e, t, a) {
							let r = this.atlas.findRegion(a);
							if (!r) throw new Error("Region not found in atlas: " + a + " (mesh attachment: " + t + ")");
							r.renderObject = r;
							let n = new ye(t);
							return n.region = r, n
						}
						newBoundingBoxAttachment(e, t) {
							return new te(t)
						}
						newPathAttachment(e, t) {
							return new ve(t)
						}
						newPointAttachment(e, t) {
							return new we(t)
						}
						newClippingAttachment(e, t) {
							return new ae(t)
						}
					}
					class Me {
						constructor(e, t, a) {
							if (this.index = 0, this.name = null, this.parent = null, this.length = 0, this.x = 0, this.y = 0, this.rotation =
								0, this.scaleX = 1, this.scaleY = 1, this.shearX = 0, this.shearY = 0, this.transformMode = ie.Normal, this.skinRequired = !
								1, this.color = new i, e < 0) throw new Error("index must be >= 0.");
							if (!t) throw new Error("name cannot be null.");
							this.index = e, this.name = t, this.parent = a
						}
					}! function(e) {
						e[e.Normal = 0] = "Normal", e[e.OnlyTranslation = 1] = "OnlyTranslation", e[e.NoRotationOrReflection = 2] =
							"NoRotationOrReflection", e[e.NoScale = 3] = "NoScale", e[e.NoScaleOrReflection = 4] = "NoScaleOrReflection"
					}(ie || (ie = {}));
					class Se {
						constructor(e, t, a) {
							if (this.data = null, this.skeleton = null, this.parent = null, this.children = new Array, this.x = 0, this.y =
								0, this.rotation = 0, this.scaleX = 0, this.scaleY = 0, this.shearX = 0, this.shearY = 0, this.ax = 0, this.ay =
								0, this.arotation = 0, this.ascaleX = 0, this.ascaleY = 0, this.ashearX = 0, this.ashearY = 0, this.a = 0,
								this.b = 0, this.c = 0, this.d = 0, this.worldY = 0, this.worldX = 0, this.sorted = !1, this.active = !1, !e)
								throw new Error("data cannot be null.");
							if (!t) throw new Error("skeleton cannot be null.");
							this.data = e, this.skeleton = t, this.parent = a, this.setToSetupPose()
						}
						isActive() {
							return this.active
						}
						update() {
							this.updateWorldTransformWith(this.ax, this.ay, this.arotation, this.ascaleX, this.ascaleY, this.ashearX, this
								.ashearY)
						}
						updateWorldTransform() {
							this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
						}
						updateWorldTransformWith(e, t, a, r, n, c, i) {
							this.ax = e, this.ay = t, this.arotation = a, this.ascaleX = r, this.ascaleY = n, this.ashearX = c, this.ashearY =
								i;
							let f = this.parent;
							if (!f) {
								let f = this.skeleton,
									o = a + 90 + i,
									s = f.scaleX,
									b = f.scaleY;
								return this.a = d.cosDeg(a + c) * r * s, this.b = d.cosDeg(o) * n * s, this.c = d.sinDeg(a + c) * r * b, this
									.d = d.sinDeg(o) * n * b, this.worldX = e * s + f.x, void(this.worldY = t * b + f.y)
							}
							let o = f.a,
								s = f.b,
								b = f.c,
								u = f.d;
							switch (this.worldX = o * e + s * t + f.worldX, this.worldY = b * e + u * t + f.worldY, this.data.transformMode) {
								case ie.Normal:
									{
										let e = a + 90 + i,
											t = d.cosDeg(a + c) * r,
											f = d.cosDeg(e) * n,
											h = d.sinDeg(a + c) * r,
											l = d.sinDeg(e) * n;
										return this.a = o * t + s * h,
										this.b = o * f + s * l,
										this.c = b * t + u * h,
										void(this.d = b * f + u * l)
									}
								case ie.OnlyTranslation:
									{
										let e = a + 90 + i;this.a = d.cosDeg(a + c) * r,
										this.b = d.cosDeg(e) * n,
										this.c = d.sinDeg(a + c) * r,
										this.d = d.sinDeg(e) * n;
										break
									}
								case ie.NoRotationOrReflection:
									{
										let e = o * o + b * b,
											t = 0;e > 1e-4 ? (e = Math.abs(o * u - s * b) / e, o /= this.skeleton.scaleX, b /= this.skeleton.scaleY, s =
											b * e, u = o * e, t = Math.atan2(b, o) * d.radDeg) : (o = 0, b = 0, t = 90 - Math.atan2(u, s) * d.radDeg);
										let f = a + c - t,
											h = a + i - t + 90,
											l = d.cosDeg(f) * r,
											x = d.cosDeg(h) * n,
											p = d.sinDeg(f) * r,
											m = d.sinDeg(h) * n;this.a = o * l - s * p,
										this.b = o * x - s * m,
										this.c = b * l + u * p,
										this.d = b * x + u * m;
										break
									}
								case ie.NoScale:
								case ie.NoScaleOrReflection:
									{
										let e = d.cosDeg(a),
											t = d.sinDeg(a),
											f = (o * e + s * t) / this.skeleton.scaleX,
											h = (b * e + u * t) / this.skeleton.scaleY,
											l = Math.sqrt(f * f + h * h);l > 1e-5 && (l = 1 / l),
										f *= l,
										h *= l,
										l = Math.sqrt(f * f + h * h),
										this.data.transformMode == ie.NoScale && o * u - s * b < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY <
											0) && (l = -l);
										let x = Math.PI / 2 + Math.atan2(h, f),
											p = Math.cos(x) * l,
											m = Math.sin(x) * l,
											g = d.cosDeg(c) * r,
											y = d.cosDeg(90 + i) * n,
											v = d.sinDeg(c) * r,
											w = d.sinDeg(90 + i) * n;this.a = f * g + p * v,
										this.b = f * y + p * w,
										this.c = h * g + m * v,
										this.d = h * y + m * w;
										break
									}
							}
							this.a *= this.skeleton.scaleX, this.b *= this.skeleton.scaleX, this.c *= this.skeleton.scaleY, this.d *= this
								.skeleton.scaleY
						}
						setToSetupPose() {
							let e = this.data;
							this.x = e.x, this.y = e.y, this.rotation = e.rotation, this.scaleX = e.scaleX, this.scaleY = e.scaleY, this.shearX =
								e.shearX, this.shearY = e.shearY
						}
						getWorldRotationX() {
							return Math.atan2(this.c, this.a) * d.radDeg
						}
						getWorldRotationY() {
							return Math.atan2(this.d, this.b) * d.radDeg
						}
						getWorldScaleX() {
							return Math.sqrt(this.a * this.a + this.c * this.c)
						}
						getWorldScaleY() {
							return Math.sqrt(this.b * this.b + this.d * this.d)
						}
						updateAppliedTransform() {
							let e = this.parent;
							if (!e) return this.ax = this.worldX - this.skeleton.x, this.ay = this.worldY - this.skeleton.y, this.arotation =
								Math.atan2(this.c, this.a) * d.radDeg, this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c), this.ascaleY =
								Math.sqrt(this.b * this.b + this.d * this.d), this.ashearX = 0, void(this.ashearY = Math.atan2(this.a * this
									.b + this.c * this.d, this.a * this.d - this.b * this.c) * d.radDeg);
							let t = e.a,
								a = e.b,
								r = e.c,
								n = e.d,
								c = 1 / (t * n - a * r),
								i = this.worldX - e.worldX,
								f = this.worldY - e.worldY;
							this.ax = i * n * c - f * a * c, this.ay = f * t * c - i * r * c;
							let o = c * n,
								s = c * t,
								b = c * a,
								u = c * r,
								h = o * this.a - b * this.c,
								l = o * this.b - b * this.d,
								x = s * this.c - u * this.a,
								p = s * this.d - u * this.b;
							if (this.ashearX = 0, this.ascaleX = Math.sqrt(h * h + x * x), this.ascaleX > 1e-4) {
								let e = h * p - l * x;
								this.ascaleY = e / this.ascaleX, this.ashearY = Math.atan2(h * l + x * p, e) * d.radDeg, this.arotation =
									Math.atan2(x, h) * d.radDeg
							} else this.ascaleX = 0, this.ascaleY = Math.sqrt(l * l + p * p), this.ashearY = 0, this.arotation = 90 - Math
								.atan2(p, l) * d.radDeg
						}
						worldToLocal(e) {
							let t = 1 / (this.a * this.d - this.b * this.c),
								a = e.x - this.worldX,
								r = e.y - this.worldY;
							return e.x = a * this.d * t - r * this.b * t, e.y = r * this.a * t - a * this.c * t, e
						}
						localToWorld(e) {
							let t = e.x,
								a = e.y;
							return e.x = t * this.a + a * this.b + this.worldX, e.y = t * this.c + a * this.d + this.worldY, e
						}
						worldToLocalRotation(e) {
							let t = d.sinDeg(e),
								a = d.cosDeg(e);
							return Math.atan2(this.a * t - this.c * a, this.d * a - this.b * t) * d.radDeg + this.rotation - this.shearX
						}
						localToWorldRotation(e) {
							e -= this.rotation - this.shearX;
							let t = d.sinDeg(e),
								a = d.cosDeg(e);
							return Math.atan2(a * this.c + t * this.d, a * this.a + t * this.b) * d.radDeg
						}
						rotateWorld(e) {
							let t = this.a,
								a = this.b,
								r = this.c,
								n = this.d,
								c = d.cosDeg(e),
								i = d.sinDeg(e);
							this.a = c * t - i * r, this.b = c * a - i * n, this.c = i * t + c * r, this.d = i * a + c * n
						}
					}
					class Ee {
						constructor(e, t = "", a = null) {
							this.pathPrefix = null, this.assets = {}, this.errors = {}, this.toLoad = 0, this.loaded = 0, this.textureLoader =
								e, this.pathPrefix = t, this.downloader = a || new Ae
						}
						start(e) {
							return this.toLoad++, this.pathPrefix + e
						}
						success(e, t, a) {
							this.toLoad--, this.loaded++, this.assets[t] = a, e && e(t, a)
						}
						error(e, t, a) {
							this.toLoad--, this.loaded++, this.errors[t] = a, e && e(t, a)
						}
						loadAll() {
							return new Promise(((e, t) => {
								let a = () => {
									this.isLoadingComplete() ? this.hasErrors() ? t(this.errors) : e(this) : requestAnimationFrame(a)
								};
								requestAnimationFrame(a)
							}))
						}
						setRawDataURI(e, t) {
							this.downloader.rawDataUris[this.pathPrefix + e] = t
						}
						loadBinary(e, t = null, a = null) {
							e = this.start(e), this.downloader.downloadBinary(e, (a => {
								this.success(t, e, a)
							}), ((t, r) => {
								this.error(a, e, `Couldn't load binary ${e}: status ${t}, ${r}`)
							}))
						}
						loadText(e, t = null, a = null) {
							e = this.start(e), this.downloader.downloadText(e, (a => {
								this.success(t, e, a)
							}), ((t, r) => {
								this.error(a, e, `Couldn't load text ${e}: status ${t}, ${r}`)
							}))
						}
						loadJson(e, t = null, a = null) {
							e = this.start(e), this.downloader.downloadJson(e, (a => {
								this.success(t, e, a)
							}), ((t, r) => {
								this.error(a, e, `Couldn't load JSON ${e}: status ${t}, ${r}`)
							}))
						}
						loadTexture(e, t = null, a = null) {
							if (e = this.start(e), "undefined" != typeof window && "undefined" != typeof navigator && window.document) {
								let r = new Image;
								r.crossOrigin = "anonymous", r.onload = () => {
									this.success(t, e, this.textureLoader(r))
								}, r.onerror = () => {
									this.error(a, e, `Couldn't load image: ${e}`)
								}, this.downloader.rawDataUris[e] && (e = this.downloader.rawDataUris[e]), r.src = e
							} else fetch(e, {
								mode: "cors"
							}).then((t => t.ok ? t.blob() : (this.error(a, e, `Couldn't load image: ${e}`), null))).then((e => e ?
								createImageBitmap(e, {
									premultiplyAlpha: "none",
									colorSpaceConversion: "none"
								}) : null)).then((a => {
								a && this.success(t, e, this.textureLoader(a))
							}))
						}
						loadTextureAtlas(e, t = null, a = null, r = null) {
							let n = e.lastIndexOf("/"),
								c = n >= 0 ? e.substring(0, n + 1) : "";
							e = this.start(e), this.downloader.downloadText(e, (n => {
								try {
									let i = new xe(n),
										d = i.pages.length,
										f = !1;
									for (let n of i.pages) this.loadTexture(null == r ? c + n.name : r[n.name], ((a, r) => {
										f || (n.setTexture(r), 0 == --d && this.success(t, e, i))
									}), ((t, r) => {
										f || this.error(a, e, `Couldn't load texture atlas ${e} page image: ${t}`), f = !0
									}))
								} catch (t) {
									this.error(a, e, `Couldn't parse texture atlas ${e}: ${t.message}`)
								}
							}), ((t, r) => {
								this.error(a, e, `Couldn't load texture atlas ${e}: status ${t}, ${r}`)
							}))
						}
						get(e) {
							return this.assets[this.pathPrefix + e]
						}
						require(e) {
							e = this.pathPrefix + e;
							let t = this.assets[e];
							if (t) return t;
							let a = this.errors[e];
							throw Error("Asset not found: " + e + (a ? "\n" + a : ""))
						}
						remove(e) {
							e = this.pathPrefix + e;
							let t = this.assets[e];
							return t.dispose && t.dispose(), delete this.assets[e], t
						}
						removeAll() {
							for (let e in this.assets) {
								let t = this.assets[e];
								t.dispose && t.dispose()
							}
							this.assets = {}
						}
						isLoadingComplete() {
							return 0 == this.toLoad
						}
						getToLoad() {
							return this.toLoad
						}
						getLoaded() {
							return this.loaded
						}
						dispose() {
							this.removeAll()
						}
						hasErrors() {
							return Object.keys(this.errors).length > 0
						}
						getErrors() {
							return this.errors
						}
					}
					class Ae {
						constructor() {
							this.callbacks = {}, this.rawDataUris = {}
						}
						dataUriToString(e) {
							if (!e.startsWith("data:")) throw new Error("Not a data URI.");
							let t = e.indexOf("base64,");
							return -1 != t ? (t += "base64,".length, atob(e.substr(t))) : e.substr(e.indexOf(",") + 1)
						}
						base64ToUint8Array(e) {
							for (var t = window.atob(e), a = t.length, r = new Uint8Array(a), n = 0; n < a; n++) r[n] = t.charCodeAt(n);
							return r
						}
						dataUriToUint8Array(e) {
							if (!e.startsWith("data:")) throw new Error("Not a data URI.");
							let t = e.indexOf("base64,");
							if (-1 == t) throw new Error("Not a binary data URI.");
							return t += "base64,".length, this.base64ToUint8Array(e.substr(t))
						}
						downloadText(e, t, a) {
							if (this.start(e, t, a)) return;
							if (this.rawDataUris[e]) {
								try {
									let t = this.rawDataUris[e];
									this.finish(e, 200, this.dataUriToString(t))
								} catch (t) {
									this.finish(e, 400, JSON.stringify(t))
								}
								return
							}
							let r = new XMLHttpRequest;
							r.overrideMimeType("text/html"), r.open("GET", e, !0);
							let n = () => {
								this.finish(e, r.status, r.responseText)
							};
							r.onload = n, r.onerror = n, r.send()
						}
						downloadJson(e, t, a) {
							this.downloadText(e, (e => {
								t(JSON.parse(e))
							}), a)
						}
						downloadBinary(e, t, a) {
							if (this.start(e, t, a)) return;
							if (this.rawDataUris[e]) {
								try {
									let t = this.rawDataUris[e];
									this.finish(e, 200, this.dataUriToUint8Array(t))
								} catch (t) {
									this.finish(e, 400, JSON.stringify(t))
								}
								return
							}
							let r = new XMLHttpRequest;
							r.open("GET", e, !0), r.responseType = "arraybuffer";
							let n = () => {
								this.finish(e, r.status, r.response)
							};
							r.onload = () => {
								200 == r.status || 0 == r.status ? this.finish(e, 200, new Uint8Array(r.response)) : n()
							}, r.onerror = n, r.send()
						}
						start(e, t, a) {
							let r = this.callbacks[e];
							try {
								if (r) return !0;
								this.callbacks[e] = r = []
							} finally {
								r.push(t, a)
							}
						}
						finish(e, t, a) {
							let r = this.callbacks[e];
							delete this.callbacks[e];
							let n = 200 == t || 0 == t ? [a] : [t, a];
							for (let e = n.length - 1, t = r.length; e < t; e += 2) r[e].apply(null, n)
						}
					}
					class Te {
						constructor(e, t) {
							if (this.data = null, this.bones = null, this.target = null, this.bendDirection = 0, this.compress = !1, this.stretch = !
								1, this.mix = 1, this.softness = 0, this.active = !1, !e) throw new Error("data cannot be null.");
							if (!t) throw new Error("skeleton cannot be null.");
							this.data = e, this.mix = e.mix, this.softness = e.softness, this.bendDirection = e.bendDirection, this.compress =
								e.compress, this.stretch = e.stretch, this.bones = new Array;
							for (let a = 0; a < e.bones.length; a++) this.bones.push(t.findBone(e.bones[a].name));
							this.target = t.findBone(e.target.name)
						}
						isActive() {
							return this.active
						}
						update() {
							if (0 == this.mix) return;
							let e = this.target,
								t = this.bones;
							switch (t.length) {
								case 1:
									this.apply1(t[0], e.worldX, e.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
									break;
								case 2:
									this.apply2(t[0], t[1], e.worldX, e.worldY, this.bendDirection, this.stretch, this.data.uniform, this.softness,
										this.mix)
							}
						}
						apply1(e, t, a, r, n, c, i) {
							let f = e.parent,
								o = f.a,
								s = f.b,
								b = f.c,
								u = f.d,
								h = -e.ashearX - e.arotation,
								l = 0,
								x = 0;
							switch (e.data.transformMode) {
								case ie.OnlyTranslation:
									l = t - e.worldX, x = a - e.worldY;
									break;
								case ie.NoRotationOrReflection:
									let r = Math.abs(o * u - s * b) / (o * o + b * b),
										n = o / e.skeleton.scaleX,
										c = b / e.skeleton.scaleY;
									s = -c * r * e.skeleton.scaleX, u = n * r * e.skeleton.scaleY, h += Math.atan2(c, n) * d.radDeg;
								default:
									let i = t - f.worldX,
										p = a - f.worldY,
										m = o * u - s * b;
									l = (i * u - p * s) / m - e.ax, x = (p * o - i * b) / m - e.ay
							}
							h += Math.atan2(x, l) * d.radDeg, e.ascaleX < 0 && (h += 180), h > 180 ? h -= 360 : h < -180 && (h += 360);
							let p = e.ascaleX,
								m = e.ascaleY;
							if (r || n) {
								switch (e.data.transformMode) {
									case ie.NoScale:
									case ie.NoScaleOrReflection:
										l = t - e.worldX, x = a - e.worldY
								}
								let d = e.data.length * p,
									f = Math.sqrt(l * l + x * x);
								if (r && f < d || n && f > d && d > 1e-4) {
									let e = (f / d - 1) * i + 1;
									p *= e, c && (m *= e)
								}
							}
							e.updateWorldTransformWith(e.ax, e.ay, e.arotation + h * i, p, m, e.ashearX, e.ashearY)
						}
						apply2(e, t, a, r, n, c, i, f, o) {
							let s = e.ax,
								b = e.ay,
								u = e.ascaleX,
								h = e.ascaleY,
								l = u,
								x = h,
								p = t.ascaleX,
								m = 0,
								g = 0,
								y = 0;
							u < 0 ? (u = -u, m = 180, y = -1) : (m = 0, y = 1), h < 0 && (h = -h, y = -y), p < 0 ? (p = -p, g = 180) : g =
								0;
							let v = t.ax,
								w = 0,
								_ = 0,
								k = 0,
								M = e.a,
								S = e.b,
								E = e.c,
								A = e.d,
								T = Math.abs(u - h) <= 1e-4;
							!T || c ? (w = 0, _ = M * v + e.worldX, k = E * v + e.worldY) : (w = t.ay, _ = M * v + S * w + e.worldX, k = E *
								v + A * w + e.worldY);
							let R = e.parent;
							M = R.a, S = R.b, E = R.c, A = R.d;
							let I, P, C = 1 / (M * A - S * E),
								O = _ - R.worldX,
								N = k - R.worldY,
								B = (O * A - N * S) * C - s,
								L = (N * M - O * E) * C - b,
								U = Math.sqrt(B * B + L * L),
								j = t.data.length * p;
							if (U < 1e-4) return this.apply1(e, a, r, !1, c, !1, o), void t.updateWorldTransformWith(v, w, 0, t.ascaleX, t
								.ascaleY, t.ashearX, t.ashearY);
							O = a - R.worldX, N = r - R.worldY;
							let D = (O * A - N * S) * C - s,
								F = (N * M - O * E) * C - b,
								q = D * D + F * F;
							if (0 != f) {
								f *= u * (p + 1) * .5;
								let e = Math.sqrt(q),
									t = e - U - j * u + f;
								if (t > 0) {
									let a = Math.min(1, t / (2 * f)) - 1;
									a = (t - f * (1 - a * a)) / e, D -= a * D, F -= a * F, q = D * D + F * F
								}
							}
							e: if (T) {
								j *= u;
								let e = (q - U * U - j * j) / (2 * U * j);
								e < -1 ? (e = -1, P = Math.PI * n) : e > 1 ? (e = 1, P = 0, c && (M = (Math.sqrt(q) / (U + j) - 1) * o + 1,
									l *= M, i && (x *= M))) : P = Math.acos(e) * n, M = U + j * e, S = j * Math.sin(P), I = Math.atan2(F * M -
									D * S, D * M + F * S)
							} else {
								M = u * j, S = h * j;
								let e = M * M,
									t = S * S,
									a = Math.atan2(F, D);
								E = t * U * U + e * q - e * t;
								let r = -2 * t * U,
									c = t - e;
								if (A = r * r - 4 * c * E, A >= 0) {
									let e = Math.sqrt(A);
									r < 0 && (e = -e), e = .5 * -(r + e);
									let t = e / c,
										i = E / e,
										d = Math.abs(t) < Math.abs(i) ? t : i;
									if (d * d <= q) {
										N = Math.sqrt(q - d * d) * n, I = a - Math.atan2(N, d), P = Math.atan2(N / h, (d - U) / u);
										break e
									}
								}
								let i = d.PI,
									f = U - M,
									o = f * f,
									s = 0,
									b = 0,
									l = U + M,
									x = l * l,
									p = 0;
								E = -M * U / (e - t), E >= -1 && E <= 1 && (E = Math.acos(E), O = M * Math.cos(E) + U, N = S * Math.sin(E),
										A = O * O + N * N, A < o && (i = E, o = A, f = O, s = N), A > x && (b = E, x = A, l = O, p = N)), q <= .5 *
									(o + x) ? (I = a - Math.atan2(s * n, f), P = i * n) : (I = a - Math.atan2(p * n, l), P = b * n)
							}
							let H = Math.atan2(w, v) * y,
								z = e.arotation;
							I = (I - H) * d.radDeg + m - z, I > 180 ? I -= 360 : I < -180 && (I += 360), e.updateWorldTransformWith(s, b,
									z + I * o, l, x, 0, 0), z = t.arotation, P = ((P + H) * d.radDeg - t.ashearX) * y + g - z, P > 180 ? P -=
								360 : P < -180 && (P += 360), t.updateWorldTransformWith(v, w, z + P * o, t.ascaleX, t.ascaleY, t.ashearX, t.ashearY)
						}
					}
					class Re {
						constructor(e, t, a) {
							this.name = e, this.order = t, this.skinRequired = a
						}
					}
					class Ie extends Re {
						constructor(e) {
							super(e, 0, !1), this.bones = new Array, this.target = null, this.positionMode = null, this.spacingMode = null,
								this.rotateMode = null, this.offsetRotation = 0, this.position = 0, this.spacing = 0, this.mixRotate = 0,
								this.mixX = 0, this.mixY = 0
						}
					}(he = de || (de = {}))[he.Fixed = 0] = "Fixed", he[he.Percent = 1] = "Percent", (ue = fe || (fe = {}))[ue.Length =
							0] = "Length", ue[ue.Fixed = 1] = "Fixed", ue[ue.Percent = 2] = "Percent", ue[ue.Proportional = 3] =
						"Proportional",
						function(e) {
							e[e.Tangent = 0] = "Tangent", e[e.Chain = 1] = "Chain", e[e.ChainScale = 2] = "ChainScale"
						}(oe || (oe = {}));
					class Pe {
						constructor(e, t) {
							if (this.data = null, this.bones = null, this.target = null, this.position = 0, this.spacing = 0, this.mixRotate =
								0, this.mixX = 0, this.mixY = 0, this.spaces = new Array, this.positions = new Array, this.world = new Array,
								this.curves = new Array, this.lengths = new Array, this.segments = new Array, this.active = !1, !e) throw new Error(
								"data cannot be null.");
							if (!t) throw new Error("skeleton cannot be null.");
							this.data = e, this.bones = new Array;
							for (let a = 0, r = e.bones.length; a < r; a++) this.bones.push(t.findBone(e.bones[a].name));
							this.target = t.findSlot(e.target.name), this.position = e.position, this.spacing = e.spacing, this.mixRotate =
								e.mixRotate, this.mixX = e.mixX, this.mixY = e.mixY
						}
						isActive() {
							return this.active
						}
						update() {
							let e = this.target.getAttachment();
							if (!(e instanceof ve)) return;
							let t = this.mixRotate,
								a = this.mixX,
								r = this.mixY;
							if (0 == t && 0 == a && 0 == r) return;
							let n = this.data,
								c = n.rotateMode == oe.Tangent,
								i = n.rotateMode == oe.ChainScale,
								o = this.bones,
								s = o.length,
								b = c ? s : s + 1,
								u = f.setArraySize(this.spaces, b),
								h = i ? this.lengths = f.setArraySize(this.lengths, s) : null,
								l = this.spacing;
							switch (n.spacingMode) {
								case fe.Percent:
									if (i)
										for (let e = 0, t = b - 1; e < t; e++) {
											let t = o[e],
												a = t.data.length;
											if (a < Pe.epsilon) h[e] = 0;
											else {
												let r = a * t.a,
													n = a * t.c;
												h[e] = Math.sqrt(r * r + n * n)
											}
										}
									f.arrayFill(u, 1, b, l);
									break;
								case fe.Proportional:
									let e = 0;
									for (let t = 0, a = b - 1; t < a;) {
										let a = o[t],
											r = a.data.length;
										if (r < Pe.epsilon) i && (h[t] = 0), u[++t] = l;
										else {
											let n = r * a.a,
												c = r * a.c,
												d = Math.sqrt(n * n + c * c);
											i && (h[t] = d), u[++t] = d, e += d
										}
									}
									if (e > 0) {
										e = b / e * l;
										for (let t = 1; t < b; t++) u[t] *= e
									}
									break;
								default:
									let t = n.spacingMode == fe.Length;
									for (let e = 0, a = b - 1; e < a;) {
										let a = o[e],
											r = a.data.length;
										if (r < Pe.epsilon) i && (h[e] = 0), u[++e] = l;
										else {
											let n = r * a.a,
												c = r * a.c,
												d = Math.sqrt(n * n + c * c);
											i && (h[e] = d), u[++e] = (t ? r + l : l) * d / r
										}
									}
							}
							let x = this.computeWorldPositions(e, b, c),
								p = x[0],
								m = x[1],
								g = n.offsetRotation,
								y = !1;
							if (0 == g) y = n.rotateMode == oe.Chain;
							else {
								y = !1;
								let e = this.target.bone;
								g *= e.a * e.d - e.b * e.c > 0 ? d.degRad : -d.degRad
							}
							for (let e = 0, n = 3; e < s; e++, n += 3) {
								let f = o[e];
								f.worldX += (p - f.worldX) * a, f.worldY += (m - f.worldY) * r;
								let s = x[n],
									b = x[n + 1],
									l = s - p,
									v = b - m;
								if (i) {
									let a = h[e];
									if (0 != a) {
										let e = (Math.sqrt(l * l + v * v) / a - 1) * t + 1;
										f.a *= e, f.c *= e
									}
								}
								if (p = s, m = b, t > 0) {
									let a = f.a,
										r = f.b,
										i = f.c,
										o = f.d,
										s = 0,
										b = 0,
										h = 0;
									if (s = c ? x[n - 1] : 0 == u[e + 1] ? x[n + 2] : Math.atan2(v, l), s -= Math.atan2(i, a), y) {
										b = Math.cos(s), h = Math.sin(s);
										let e = f.data.length;
										p += (e * (b * a - h * i) - l) * t, m += (e * (h * a + b * i) - v) * t
									} else s += g;
									s > d.PI ? s -= d.PI2 : s < -d.PI && (s += d.PI2), s *= t, b = Math.cos(s), h = Math.sin(s), f.a = b * a - h *
										i, f.b = b * r - h * o, f.c = h * a + b * i, f.d = h * r + b * o
								}
								f.updateAppliedTransform()
							}
						}
						computeWorldPositions(e, t, a) {
							let r = this.target,
								n = this.position,
								c = this.spaces,
								i = f.setArraySize(this.positions, 3 * t + 2),
								d = null,
								o = e.closed,
								s = e.worldVerticesLength,
								b = s / 6,
								u = Pe.NONE;
							if (!e.constantSpeed) {
								let h = e.lengths;
								b -= o ? 1 : 2;
								let l, x = h[b];
								switch (this.data.positionMode == de.Percent && (n *= x), this.data.spacingMode) {
									case fe.Percent:
										l = x;
										break;
									case fe.Proportional:
										l = x / t;
										break;
									default:
										l = 1
								}
								d = f.setArraySize(this.world, 8);
								for (let f = 0, p = 0, m = 0; f < t; f++, p += 3) {
									let t = c[f] * l;
									n += t;
									let g = n;
									if (o) g %= x, g < 0 && (g += x), m = 0;
									else {
										if (g < 0) {
											u != Pe.BEFORE && (u = Pe.BEFORE, e.computeWorldVertices(r, 2, 4, d, 0, 2)), this.addBeforePosition(g, d,
												0, i, p);
											continue
										}
										if (g > x) {
											u != Pe.AFTER && (u = Pe.AFTER, e.computeWorldVertices(r, s - 6, 4, d, 0, 2)), this.addAfterPosition(g - x,
												d, 0, i, p);
											continue
										}
									}
									for (;; m++) {
										let e = h[m];
										if (!(g > e)) {
											if (0 == m) g /= e;
											else {
												let t = h[m - 1];
												g = (g - t) / (e - t)
											}
											break
										}
									}
									m != u && (u = m, o && m == b ? (e.computeWorldVertices(r, s - 4, 4, d, 0, 2), e.computeWorldVertices(r, 0,
										4, d, 4, 2)) : e.computeWorldVertices(r, 6 * m + 2, 8, d, 0, 2)), this.addCurvePosition(g, d[0], d[1], d[2],
										d[3], d[4], d[5], d[6], d[7], i, p, a || f > 0 && 0 == t)
								}
								return i
							}
							o ? (s += 2, d = f.setArraySize(this.world, s), e.computeWorldVertices(r, 2, s - 4, d, 0, 2), e.computeWorldVertices(
								r, 0, 2, d, s - 4, 2), d[s - 2] = d[0], d[s - 1] = d[1]) : (b--, s -= 4, d = f.setArraySize(this.world, s),
								e.computeWorldVertices(r, 2, s, d, 0, 2));
							let h, l = f.setArraySize(this.curves, b),
								x = 0,
								p = d[0],
								m = d[1],
								g = 0,
								y = 0,
								v = 0,
								w = 0,
								_ = 0,
								k = 0,
								M = 0,
								S = 0,
								E = 0,
								A = 0,
								T = 0,
								R = 0,
								I = 0,
								P = 0;
							for (let e = 0, t = 2; e < b; e++, t += 6) g = d[t], y = d[t + 1], v = d[t + 2], w = d[t + 3], _ = d[t + 4], k =
								d[t + 5], M = .1875 * (p - 2 * g + v), S = .1875 * (m - 2 * y + w), E = .09375 * (3 * (g - v) - p + _), A =
								.09375 * (3 * (y - w) - m + k), T = 2 * M + E, R = 2 * S + A, I = .75 * (g - p) + M + .16666667 * E, P = .75 *
								(y - m) + S + .16666667 * A, x += Math.sqrt(I * I + P * P), I += T, P += R, T += E, R += A, x += Math.sqrt(I *
									I + P * P), I += T, P += R, x += Math.sqrt(I * I + P * P), I += T + E, P += R + A, x += Math.sqrt(I * I + P *
									P), l[e] = x, p = _, m = k;
							switch (this.data.positionMode == de.Percent && (n *= x), this.data.spacingMode) {
								case fe.Percent:
									h = x;
									break;
								case fe.Proportional:
									h = x / t;
									break;
								default:
									h = 1
							}
							let C = this.segments,
								O = 0;
							for (let e = 0, r = 0, f = 0, b = 0; e < t; e++, r += 3) {
								let t = c[e] * h;
								n += t;
								let N = n;
								if (o) N %= x, N < 0 && (N += x), f = 0;
								else {
									if (N < 0) {
										this.addBeforePosition(N, d, 0, i, r);
										continue
									}
									if (N > x) {
										this.addAfterPosition(N - x, d, s - 4, i, r);
										continue
									}
								}
								for (;; f++) {
									let e = l[f];
									if (!(N > e)) {
										if (0 == f) N /= e;
										else {
											let t = l[f - 1];
											N = (N - t) / (e - t)
										}
										break
									}
								}
								if (f != u) {
									u = f;
									let e = 6 * f;
									for (p = d[e], m = d[e + 1], g = d[e + 2], y = d[e + 3], v = d[e + 4], w = d[e + 5], _ = d[e + 6], k = d[e +
											7], M = .03 * (p - 2 * g + v), S = .03 * (m - 2 * y + w), E = .006 * (3 * (g - v) - p + _), A = .006 * (3 *
											(y - w) - m + k), T = 2 * M + E, R = 2 * S + A, I = .3 * (g - p) + M + .16666667 * E, P = .3 * (y - m) + S +
										.16666667 * A, O = Math.sqrt(I * I + P * P), C[0] = O, e = 1; e < 8; e++) I += T, P += R, T += E, R += A, O +=
										Math.sqrt(I * I + P * P), C[e] = O;
									I += T, P += R, O += Math.sqrt(I * I + P * P), C[8] = O, I += T + E, P += R + A, O += Math.sqrt(I * I + P *
										P), C[9] = O, b = 0
								}
								for (N *= O;; b++) {
									let e = C[b];
									if (!(N > e)) {
										if (0 == b) N /= e;
										else {
											let t = C[b - 1];
											N = b + (N - t) / (e - t)
										}
										break
									}
								}
								this.addCurvePosition(.1 * N, p, m, g, y, v, w, _, k, i, r, a || e > 0 && 0 == t)
							}
							return i
						}
						addBeforePosition(e, t, a, r, n) {
							let c = t[a],
								i = t[a + 1],
								d = t[a + 2] - c,
								f = t[a + 3] - i,
								o = Math.atan2(f, d);
							r[n] = c + e * Math.cos(o), r[n + 1] = i + e * Math.sin(o), r[n + 2] = o
						}
						addAfterPosition(e, t, a, r, n) {
							let c = t[a + 2],
								i = t[a + 3],
								d = c - t[a],
								f = i - t[a + 1],
								o = Math.atan2(f, d);
							r[n] = c + e * Math.cos(o), r[n + 1] = i + e * Math.sin(o), r[n + 2] = o
						}
						addCurvePosition(e, t, a, r, n, c, i, d, f, o, s, b) {
							if (0 == e || isNaN(e)) return o[s] = t, o[s + 1] = a, void(o[s + 2] = Math.atan2(n - a, r - t));
							let u = e * e,
								h = u * e,
								l = 1 - e,
								x = l * l,
								p = x * l,
								m = l * e,
								g = 3 * m,
								y = l * g,
								v = g * e,
								w = t * p + r * y + c * v + d * h,
								_ = a * p + n * y + i * v + f * h;
							o[s] = w, o[s + 1] = _, b && (o[s + 2] = e < .001 ? Math.atan2(n - a, r - t) : Math.atan2(_ - (a * x + n * m *
								2 + i * u), w - (t * x + r * m * 2 + c * u)))
						}
					}
					Pe.NONE = -1, Pe.BEFORE = -2, Pe.AFTER = -3, Pe.epsilon = 1e-5;
					class Ce {
						constructor(e, t) {
							if (this.data = null, this.bone = null, this.color = null, this.darkColor = null, this.attachment = null, this
								.attachmentTime = 0, this.attachmentState = 0, this.deform = new Array, !e) throw new Error(
								"data cannot be null.");
							if (!t) throw new Error("bone cannot be null.");
							this.data = e, this.bone = t, this.color = new i, this.darkColor = e.darkColor ? new i : null, this.setToSetupPose()
						}
						getSkeleton() {
							return this.bone.skeleton
						}
						getAttachment() {
							return this.attachment
						}
						setAttachment(e) {
							this.attachment != e && (e instanceof u && this.attachment instanceof u && e.deformAttachment == this.attachment
								.deformAttachment || (this.deform.length = 0), this.attachment = e, this.attachmentTime = this.bone.skeleton
								.time)
						}
						setAttachmentTime(e) {
							this.attachmentTime = this.bone.skeleton.time - e
						}
						getAttachmentTime() {
							return this.bone.skeleton.time - this.attachmentTime
						}
						setToSetupPose() {
							this.color.setFromColor(this.data.color), this.darkColor && this.darkColor.setFromColor(this.data.darkColor),
								this.data.attachmentName ? (this.attachment = null, this.setAttachment(this.bone.skeleton.getAttachment(this.data
									.index, this.data.attachmentName))) : this.attachment = null
						}
					}
					class Oe {
						constructor(e, t) {
							if (this.data = null, this.bones = null, this.target = null, this.mixRotate = 0, this.mixX = 0, this.mixY = 0,
								this.mixScaleX = 0, this.mixScaleY = 0, this.mixShearY = 0, this.temp = new s, this.active = !1, !e) throw new Error(
								"data cannot be null.");
							if (!t) throw new Error("skeleton cannot be null.");
							this.data = e, this.mixRotate = e.mixRotate, this.mixX = e.mixX, this.mixY = e.mixY, this.mixScaleX = e.mixScaleX,
								this.mixScaleY = e.mixScaleY, this.mixShearY = e.mixShearY, this.bones = new Array;
							for (let a = 0; a < e.bones.length; a++) this.bones.push(t.findBone(e.bones[a].name));
							this.target = t.findBone(e.target.name)
						}
						isActive() {
							return this.active
						}
						update() {
							0 == this.mixRotate && 0 == this.mixX && 0 == this.mixY && 0 == this.mixScaleX && 0 == this.mixScaleX && 0 ==
								this.mixShearY || (this.data.local ? this.data.relative ? this.applyRelativeLocal() : this.applyAbsoluteLocal() :
									this.data.relative ? this.applyRelativeWorld() : this.applyAbsoluteWorld())
						}
						applyAbsoluteWorld() {
							let e = this.mixRotate,
								t = this.mixX,
								a = this.mixY,
								r = this.mixScaleX,
								n = this.mixScaleY,
								c = this.mixShearY,
								i = 0 != t || 0 != a,
								f = this.target,
								o = f.a,
								s = f.b,
								b = f.c,
								u = f.d,
								h = o * u - s * b > 0 ? d.degRad : -d.degRad,
								l = this.data.offsetRotation * h,
								x = this.data.offsetShearY * h,
								p = this.bones;
							for (let h = 0, m = p.length; h < m; h++) {
								let m = p[h];
								if (0 != e) {
									let t = m.a,
										a = m.b,
										r = m.c,
										n = m.d,
										c = Math.atan2(b, o) - Math.atan2(r, t) + l;
									c > d.PI ? c -= d.PI2 : c < -d.PI && (c += d.PI2), c *= e;
									let i = Math.cos(c),
										f = Math.sin(c);
									m.a = i * t - f * r, m.b = i * a - f * n, m.c = f * t + i * r, m.d = f * a + i * n
								}
								if (i) {
									let e = this.temp;
									f.localToWorld(e.set(this.data.offsetX, this.data.offsetY)), m.worldX += (e.x - m.worldX) * t, m.worldY += (
										e.y - m.worldY) * a
								}
								if (0 != r) {
									let e = Math.sqrt(m.a * m.a + m.c * m.c);
									0 != e && (e = (e + (Math.sqrt(o * o + b * b) - e + this.data.offsetScaleX) * r) / e), m.a *= e, m.c *= e
								}
								if (0 != n) {
									let e = Math.sqrt(m.b * m.b + m.d * m.d);
									0 != e && (e = (e + (Math.sqrt(s * s + u * u) - e + this.data.offsetScaleY) * n) / e), m.b *= e, m.d *= e
								}
								if (c > 0) {
									let e = m.b,
										t = m.d,
										a = Math.atan2(t, e),
										r = Math.atan2(u, s) - Math.atan2(b, o) - (a - Math.atan2(m.c, m.a));
									r > d.PI ? r -= d.PI2 : r < -d.PI && (r += d.PI2), r = a + (r + x) * c;
									let n = Math.sqrt(e * e + t * t);
									m.b = Math.cos(r) * n, m.d = Math.sin(r) * n
								}
								m.updateAppliedTransform()
							}
						}
						applyRelativeWorld() {
							let e = this.mixRotate,
								t = this.mixX,
								a = this.mixY,
								r = this.mixScaleX,
								n = this.mixScaleY,
								c = this.mixShearY,
								i = 0 != t || 0 != a,
								f = this.target,
								o = f.a,
								s = f.b,
								b = f.c,
								u = f.d,
								h = o * u - s * b > 0 ? d.degRad : -d.degRad,
								l = this.data.offsetRotation * h,
								x = this.data.offsetShearY * h,
								p = this.bones;
							for (let h = 0, m = p.length; h < m; h++) {
								let m = p[h];
								if (0 != e) {
									let t = m.a,
										a = m.b,
										r = m.c,
										n = m.d,
										c = Math.atan2(b, o) + l;
									c > d.PI ? c -= d.PI2 : c < -d.PI && (c += d.PI2), c *= e;
									let i = Math.cos(c),
										f = Math.sin(c);
									m.a = i * t - f * r, m.b = i * a - f * n, m.c = f * t + i * r, m.d = f * a + i * n
								}
								if (i) {
									let e = this.temp;
									f.localToWorld(e.set(this.data.offsetX, this.data.offsetY)), m.worldX += e.x * t, m.worldY += e.y * a
								}
								if (0 != r) {
									let e = (Math.sqrt(o * o + b * b) - 1 + this.data.offsetScaleX) * r + 1;
									m.a *= e, m.c *= e
								}
								if (0 != n) {
									let e = (Math.sqrt(s * s + u * u) - 1 + this.data.offsetScaleY) * n + 1;
									m.b *= e, m.d *= e
								}
								if (c > 0) {
									let e = Math.atan2(u, s) - Math.atan2(b, o);
									e > d.PI ? e -= d.PI2 : e < -d.PI && (e += d.PI2);
									let t = m.b,
										a = m.d;
									e = Math.atan2(a, t) + (e - d.PI / 2 + x) * c;
									let r = Math.sqrt(t * t + a * a);
									m.b = Math.cos(e) * r, m.d = Math.sin(e) * r
								}
								m.updateAppliedTransform()
							}
						}
						applyAbsoluteLocal() {
							let e = this.mixRotate,
								t = this.mixX,
								a = this.mixY,
								r = this.mixScaleX,
								n = this.mixScaleY,
								c = this.mixShearY,
								i = this.target,
								d = this.bones;
							for (let f = 0, o = d.length; f < o; f++) {
								let o = d[f],
									s = o.arotation;
								if (0 != e) {
									let t = i.arotation - s + this.data.offsetRotation;
									t -= 360 * (16384 - (16384.499999999996 - t / 360 | 0)), s += t * e
								}
								let b = o.ax,
									u = o.ay;
								b += (i.ax - b + this.data.offsetX) * t, u += (i.ay - u + this.data.offsetY) * a;
								let h = o.ascaleX,
									l = o.ascaleY;
								0 != r && 0 != h && (h = (h + (i.ascaleX - h + this.data.offsetScaleX) * r) / h), 0 != n && 0 != l && (l = (l +
									(i.ascaleY - l + this.data.offsetScaleY) * n) / l);
								let x = o.ashearY;
								if (0 != c) {
									let e = i.ashearY - x + this.data.offsetShearY;
									e -= 360 * (16384 - (16384.499999999996 - e / 360 | 0)), x += e * c
								}
								o.updateWorldTransformWith(b, u, s, h, l, o.ashearX, x)
							}
						}
						applyRelativeLocal() {
							let e = this.mixRotate,
								t = this.mixX,
								a = this.mixY,
								r = this.mixScaleX,
								n = this.mixScaleY,
								c = this.mixShearY,
								i = this.target,
								d = this.bones;
							for (let f = 0, o = d.length; f < o; f++) {
								let o = d[f],
									s = o.arotation + (i.arotation + this.data.offsetRotation) * e,
									b = o.ax + (i.ax + this.data.offsetX) * t,
									u = o.ay + (i.ay + this.data.offsetY) * a,
									h = o.ascaleX * ((i.ascaleX - 1 + this.data.offsetScaleX) * r + 1),
									l = o.ascaleY * ((i.ascaleY - 1 + this.data.offsetScaleY) * n + 1),
									x = o.ashearY + (i.ashearY + this.data.offsetShearY) * c;
								o.updateWorldTransformWith(b, u, s, h, l, o.ashearX, x)
							}
						}
					}
					class Ne {
						constructor(e) {
							if (this.data = null, this.bones = null, this.slots = null, this.drawOrder = null, this.ikConstraints = null,
								this.transformConstraints = null, this.pathConstraints = null, this._updateCache = new Array, this.skin =
								null, this.color = null, this.time = 0, this.scaleX = 1, this.scaleY = 1, this.x = 0, this.y = 0, !e) throw new Error(
								"data cannot be null.");
							this.data = e, this.bones = new Array;
							for (let t = 0; t < e.bones.length; t++) {
								let a, r = e.bones[t];
								if (r.parent) {
									let e = this.bones[r.parent.index];
									a = new Se(r, this, e), e.children.push(a)
								} else a = new Se(r, this, null);
								this.bones.push(a)
							}
							this.slots = new Array, this.drawOrder = new Array;
							for (let t = 0; t < e.slots.length; t++) {
								let a = e.slots[t],
									r = this.bones[a.boneData.index],
									n = new Ce(a, r);
								this.slots.push(n), this.drawOrder.push(n)
							}
							this.ikConstraints = new Array;
							for (let t = 0; t < e.ikConstraints.length; t++) {
								let a = e.ikConstraints[t];
								this.ikConstraints.push(new Te(a, this))
							}
							this.transformConstraints = new Array;
							for (let t = 0; t < e.transformConstraints.length; t++) {
								let a = e.transformConstraints[t];
								this.transformConstraints.push(new Oe(a, this))
							}
							this.pathConstraints = new Array;
							for (let t = 0; t < e.pathConstraints.length; t++) {
								let a = e.pathConstraints[t];
								this.pathConstraints.push(new Pe(a, this))
							}
							this.color = new i(1, 1, 1, 1), this.updateCache()
						}
						updateCache() {
							this._updateCache.length = 0;
							let e = this.bones;
							for (let t = 0, a = e.length; t < a; t++) {
								let a = e[t];
								a.sorted = a.data.skinRequired, a.active = !a.sorted
							}
							if (this.skin) {
								let e = this.skin.bones;
								for (let t = 0, a = this.skin.bones.length; t < a; t++) {
									let a = this.bones[e[t].index];
									do {
										a.sorted = !1, a.active = !0, a = a.parent
									} while (a)
								}
							}
							let t = this.ikConstraints,
								a = this.transformConstraints,
								r = this.pathConstraints,
								n = t.length,
								c = a.length,
								i = r.length,
								d = n + c + i;
							e: for (let e = 0; e < d; e++) {
								for (let a = 0; a < n; a++) {
									let r = t[a];
									if (r.data.order == e) {
										this.sortIkConstraint(r);
										continue e
									}
								}
								for (let t = 0; t < c; t++) {
									let r = a[t];
									if (r.data.order == e) {
										this.sortTransformConstraint(r);
										continue e
									}
								}
								for (let t = 0; t < i; t++) {
									let a = r[t];
									if (a.data.order == e) {
										this.sortPathConstraint(a);
										continue e
									}
								}
							}
							for (let t = 0, a = e.length; t < a; t++) this.sortBone(e[t])
						}
						sortIkConstraint(e) {
							if (e.active = e.target.isActive() && (!e.data.skinRequired || this.skin && f.contains(this.skin.constraints,
									e.data, !0)), !e.active) return;
							let t = e.target;
							this.sortBone(t);
							let a = e.bones,
								r = a[0];
							if (this.sortBone(r), 1 == a.length) this._updateCache.push(e), this.sortReset(r.children);
							else {
								let t = a[a.length - 1];
								this.sortBone(t), this._updateCache.push(e), this.sortReset(r.children), t.sorted = !0
							}
						}
						sortPathConstraint(e) {
							if (e.active = e.target.bone.isActive() && (!e.data.skinRequired || this.skin && f.contains(this.skin.constraints,
									e.data, !0)), !e.active) return;
							let t = e.target,
								a = t.data.index,
								r = t.bone;
							this.skin && this.sortPathConstraintAttachment(this.skin, a, r), this.data.defaultSkin && this.data.defaultSkin !=
								this.skin && this.sortPathConstraintAttachment(this.data.defaultSkin, a, r);
							for (let e = 0, t = this.data.skins.length; e < t; e++) this.sortPathConstraintAttachment(this.data.skins[e],
								a, r);
							let n = t.getAttachment();
							n instanceof ve && this.sortPathConstraintAttachmentWith(n, r);
							let c = e.bones,
								i = c.length;
							for (let e = 0; e < i; e++) this.sortBone(c[e]);
							this._updateCache.push(e);
							for (let e = 0; e < i; e++) this.sortReset(c[e].children);
							for (let e = 0; e < i; e++) c[e].sorted = !0
						}
						sortTransformConstraint(e) {
							if (e.active = e.target.isActive() && (!e.data.skinRequired || this.skin && f.contains(this.skin.constraints,
									e.data, !0)), !e.active) return;
							this.sortBone(e.target);
							let t = e.bones,
								a = t.length;
							if (e.data.local)
								for (let e = 0; e < a; e++) {
									let a = t[e];
									this.sortBone(a.parent), this.sortBone(a)
								} else
									for (let e = 0; e < a; e++) this.sortBone(t[e]);
							this._updateCache.push(e);
							for (let e = 0; e < a; e++) this.sortReset(t[e].children);
							for (let e = 0; e < a; e++) t[e].sorted = !0
						}
						sortPathConstraintAttachment(e, t, a) {
							let r = e.attachments[t];
							if (r)
								for (let e in r) this.sortPathConstraintAttachmentWith(r[e], a)
						}
						sortPathConstraintAttachmentWith(e, t) {
							if (!(e instanceof ve)) return;
							let a = e.bones;
							if (a) {
								let e = this.bones;
								for (let t = 0, r = a.length; t < r;) {
									let r = a[t++];
									for (r += t; t < r;) this.sortBone(e[a[t++]])
								}
							} else this.sortBone(t)
						}
						sortBone(e) {
							if (e.sorted) return;
							let t = e.parent;
							t && this.sortBone(t), e.sorted = !0, this._updateCache.push(e)
						}
						sortReset(e) {
							for (let t = 0, a = e.length; t < a; t++) {
								let a = e[t];
								a.active && (a.sorted && this.sortReset(a.children), a.sorted = !1)
							}
						}
						updateWorldTransform() {
							let e = this.bones;
							for (let t = 0, a = e.length; t < a; t++) {
								let a = e[t];
								a.ax = a.x, a.ay = a.y, a.arotation = a.rotation, a.ascaleX = a.scaleX, a.ascaleY = a.scaleY, a.ashearX = a.shearX,
									a.ashearY = a.shearY
							}
							let t = this._updateCache;
							for (let e = 0, a = t.length; e < a; e++) t[e].update()
						}
						updateWorldTransformWith(e) {
							let t = this.getRootBone(),
								a = e.a,
								r = e.b,
								n = e.c,
								c = e.d;
							t.worldX = a * this.x + r * this.y + e.worldX, t.worldY = n * this.x + c * this.y + e.worldY;
							let i = t.rotation + 90 + t.shearY,
								f = d.cosDeg(t.rotation + t.shearX) * t.scaleX,
								o = d.cosDeg(i) * t.scaleY,
								s = d.sinDeg(t.rotation + t.shearX) * t.scaleX,
								b = d.sinDeg(i) * t.scaleY;
							t.a = (a * f + r * s) * this.scaleX, t.b = (a * o + r * b) * this.scaleX, t.c = (n * f + c * s) * this.scaleY,
								t.d = (n * o + c * b) * this.scaleY;
							let u = this._updateCache;
							for (let e = 0, a = u.length; e < a; e++) {
								let a = u[e];
								a != t && a.update()
							}
						}
						setToSetupPose() {
							this.setBonesToSetupPose(), this.setSlotsToSetupPose()
						}
						setBonesToSetupPose() {
							let e = this.bones;
							for (let t = 0, a = e.length; t < a; t++) e[t].setToSetupPose();
							let t = this.ikConstraints;
							for (let e = 0, a = t.length; e < a; e++) {
								let a = t[e];
								a.mix = a.data.mix, a.softness = a.data.softness, a.bendDirection = a.data.bendDirection, a.compress = a.data
									.compress, a.stretch = a.data.stretch
							}
							let a = this.transformConstraints;
							for (let e = 0, t = a.length; e < t; e++) {
								let t = a[e],
									r = t.data;
								t.mixRotate = r.mixRotate, t.mixX = r.mixX, t.mixY = r.mixY, t.mixScaleX = r.mixScaleX, t.mixScaleY = r.mixScaleY,
									t.mixShearY = r.mixShearY
							}
							let r = this.pathConstraints;
							for (let e = 0, t = r.length; e < t; e++) {
								let t = r[e],
									a = t.data;
								t.position = a.position, t.spacing = a.spacing, t.mixRotate = a.mixRotate, t.mixX = a.mixX, t.mixY = a.mixY
							}
						}
						setSlotsToSetupPose() {
							let e = this.slots;
							f.arrayCopy(e, 0, this.drawOrder, 0, e.length);
							for (let t = 0, a = e.length; t < a; t++) e[t].setToSetupPose()
						}
						getRootBone() {
							return 0 == this.bones.length ? null : this.bones[0]
						}
						findBone(e) {
							if (!e) throw new Error("boneName cannot be null.");
							let t = this.bones;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.data.name == e) return r
							}
							return null
						}
						findSlot(e) {
							if (!e) throw new Error("slotName cannot be null.");
							let t = this.slots;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.data.name == e) return r
							}
							return null
						}
						setSkinByName(e) {
							let t = this.data.findSkin(e);
							if (!t) throw new Error("Skin not found: " + e);
							this.setSkin(t)
						}
						setSkin(e) {
							if (e != this.skin) {
								if (e)
									if (this.skin) e.attachAll(this, this.skin);
									else {
										let t = this.slots;
										for (let a = 0, r = t.length; a < r; a++) {
											let r = t[a],
												n = r.data.attachmentName;
											if (n) {
												let t = e.getAttachment(a, n);
												t && r.setAttachment(t)
											}
										}
									} this.skin = e, this.updateCache()
							}
						}
						getAttachmentByName(e, t) {
							return this.getAttachment(this.data.findSlot(e).index, t)
						}
						getAttachment(e, t) {
							if (!t) throw new Error("attachmentName cannot be null.");
							if (this.skin) {
								let a = this.skin.getAttachment(e, t);
								if (a) return a
							}
							return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(e, t) : null
						}
						setAttachment(e, t) {
							if (!e) throw new Error("slotName cannot be null.");
							let a = this.slots;
							for (let r = 0, n = a.length; r < n; r++) {
								let n = a[r];
								if (n.data.name == e) {
									let a = null;
									if (t && (a = this.getAttachment(r, t), !a)) throw new Error("Attachment not found: " + t + ", for slot: " +
										e);
									return void n.setAttachment(a)
								}
							}
							throw new Error("Slot not found: " + e)
						}
						findIkConstraint(e) {
							if (!e) throw new Error("constraintName cannot be null.");
							let t = this.ikConstraints;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.data.name == e) return r
							}
							return null
						}
						findTransformConstraint(e) {
							if (!e) throw new Error("constraintName cannot be null.");
							let t = this.transformConstraints;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.data.name == e) return r
							}
							return null
						}
						findPathConstraint(e) {
							if (!e) throw new Error("constraintName cannot be null.");
							let t = this.pathConstraints;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.data.name == e) return r
							}
							return null
						}
						getBoundsRect() {
							let e = new s,
								t = new s;
							return this.getBounds(e, t), {
								x: e.x,
								y: e.y,
								width: t.x,
								height: t.y
							}
						}
						getBounds(e, t, a = new Array(2)) {
							if (!e) throw new Error("offset cannot be null.");
							if (!t) throw new Error("size cannot be null.");
							let r = this.drawOrder,
								n = Number.POSITIVE_INFINITY,
								c = Number.POSITIVE_INFINITY,
								i = Number.NEGATIVE_INFINITY,
								d = Number.NEGATIVE_INFINITY;
							for (let e = 0, t = r.length; e < t; e++) {
								let t = r[e];
								if (!t.bone.active) continue;
								let o = 0,
									s = null,
									b = t.getAttachment();
								if (b instanceof _e) o = 8, s = f.setArraySize(a, o, 0), b.computeWorldVertices(t.bone, s, 0, 2);
								else if (b instanceof ye) {
									let e = b;
									o = e.worldVerticesLength, s = f.setArraySize(a, o, 0), e.computeWorldVertices(t, 0, o, s, 0, 2)
								}
								if (s)
									for (let e = 0, t = s.length; e < t; e += 2) {
										let t = s[e],
											a = s[e + 1];
										n = Math.min(n, t), c = Math.min(c, a), i = Math.max(i, t), d = Math.max(d, a)
									}
							}
							e.set(n, c), t.set(i - n, d - c)
						}
						update(e) {
							this.time += e
						}
					}
					class Be {
						constructor(e = 0, t = null, a = null) {
							this.slotIndex = e, this.name = t, this.attachment = a
						}
					}
					class Le {
						constructor(e) {
							if (this.name = null, this.attachments = new Array, this.bones = Array(), this.constraints = new Array, !e)
								throw new Error("name cannot be null.");
							this.name = e
						}
						setAttachment(e, t, a) {
							if (!a) throw new Error("attachment cannot be null.");
							let r = this.attachments;
							e >= r.length && (r.length = e + 1), r[e] || (r[e] = {}), r[e][t] = a
						}
						addSkin(e) {
							for (let t = 0; t < e.bones.length; t++) {
								let a = e.bones[t],
									r = !1;
								for (let e = 0; e < this.bones.length; e++)
									if (this.bones[e] == a) {
										r = !0;
										break
									} r || this.bones.push(a)
							}
							for (let t = 0; t < e.constraints.length; t++) {
								let a = e.constraints[t],
									r = !1;
								for (let e = 0; e < this.constraints.length; e++)
									if (this.constraints[e] == a) {
										r = !0;
										break
									} r || this.constraints.push(a)
							}
							let t = e.getAttachments();
							for (let e = 0; e < t.length; e++) {
								var a = t[e];
								this.setAttachment(a.slotIndex, a.name, a.attachment)
							}
						}
						copySkin(e) {
							for (let t = 0; t < e.bones.length; t++) {
								let a = e.bones[t],
									r = !1;
								for (let e = 0; e < this.bones.length; e++)
									if (this.bones[e] == a) {
										r = !0;
										break
									} r || this.bones.push(a)
							}
							for (let t = 0; t < e.constraints.length; t++) {
								let a = e.constraints[t],
									r = !1;
								for (let e = 0; e < this.constraints.length; e++)
									if (this.constraints[e] == a) {
										r = !0;
										break
									} r || this.constraints.push(a)
							}
							let t = e.getAttachments();
							for (let e = 0; e < t.length; e++) {
								var a = t[e];
								a.attachment && (a.attachment instanceof ye ? (a.attachment = a.attachment.newLinkedMesh(), this.setAttachment(
									a.slotIndex, a.name, a.attachment)) : (a.attachment = a.attachment.copy(), this.setAttachment(a.slotIndex,
									a.name, a.attachment)))
							}
						}
						getAttachment(e, t) {
							let a = this.attachments[e];
							return a ? a[t] : null
						}
						removeAttachment(e, t) {
							let a = this.attachments[e];
							a && (a[t] = null)
						}
						getAttachments() {
							let e = new Array;
							for (var t = 0; t < this.attachments.length; t++) {
								let a = this.attachments[t];
								if (a)
									for (let r in a) {
										let n = a[r];
										n && e.push(new Be(t, r, n))
									}
							}
							return e
						}
						getAttachmentsForSlot(e, t) {
							let a = this.attachments[e];
							if (a)
								for (let r in a) {
									let n = a[r];
									n && t.push(new Be(e, r, n))
								}
						}
						clear() {
							this.attachments.length = 0, this.bones.length = 0, this.constraints.length = 0
						}
						attachAll(e, t) {
							let a = 0;
							for (let r = 0; r < e.slots.length; r++) {
								let n = e.slots[r],
									c = n.getAttachment();
								if (c && a < t.attachments.length) {
									let e = t.attachments[a];
									for (let t in e)
										if (c == e[t]) {
											let e = this.getAttachment(a, t);
											e && n.setAttachment(e);
											break
										}
								}
								a++
							}
						}
					}
					class Ue {
						constructor(e, t, a) {
							if (this.index = 0, this.name = null, this.boneData = null, this.color = new i(1, 1, 1, 1), this.darkColor =
								null, this.attachmentName = null, this.blendMode = null, e < 0) throw new Error("index must be >= 0.");
							if (!t) throw new Error("name cannot be null.");
							if (!a) throw new Error("boneData cannot be null.");
							this.index = e, this.name = t, this.boneData = a
						}
					}! function(e) {
						e[e.Normal = 0] = "Normal", e[e.Additive = 1] = "Additive", e[e.Multiply = 2] = "Multiply", e[e.Screen = 3] =
							"Screen"
					}(se || (se = {})),
					function(e) {
						e[e.Region = 0] = "Region", e[e.BoundingBox = 1] = "BoundingBox", e[e.Mesh = 2] = "Mesh", e[e.LinkedMesh = 3] =
							"LinkedMesh", e[e.Path = 4] = "Path", e[e.Point = 5] = "Point", e[e.Clipping = 6] = "Clipping"
					}(be || (be = {}));
					class je {
						constructor() {
							this.minX = 0, this.minY = 0, this.maxX = 0, this.maxY = 0, this.boundingBoxes = new Array, this.polygons =
								new Array, this.polygonPool = new o((() => f.newFloatArray(16)))
						}
						update(e, t) {
							if (!e) throw new Error("skeleton cannot be null.");
							let a = this.boundingBoxes,
								r = this.polygons,
								n = this.polygonPool,
								c = e.slots,
								i = c.length;
							a.length = 0, n.freeAll(r), r.length = 0;
							for (let e = 0; e < i; e++) {
								let t = c[e];
								if (!t.bone.active) continue;
								let i = t.getAttachment();
								if (i instanceof te) {
									let e = i;
									a.push(e);
									let c = n.obtain();
									c.length != e.worldVerticesLength && (c = f.newFloatArray(e.worldVerticesLength)), r.push(c), e.computeWorldVertices(
										t, 0, e.worldVerticesLength, c, 0, 2)
								}
							}
							t ? this.aabbCompute() : (this.minX = Number.POSITIVE_INFINITY, this.minY = Number.POSITIVE_INFINITY, this.maxX =
								Number.NEGATIVE_INFINITY, this.maxY = Number.NEGATIVE_INFINITY)
						}
						aabbCompute() {
							let e = Number.POSITIVE_INFINITY,
								t = Number.POSITIVE_INFINITY,
								a = Number.NEGATIVE_INFINITY,
								r = Number.NEGATIVE_INFINITY,
								n = this.polygons;
							for (let c = 0, i = n.length; c < i; c++) {
								let i = n[c],
									d = i;
								for (let n = 0, c = i.length; n < c; n += 2) {
									let c = d[n],
										i = d[n + 1];
									e = Math.min(e, c), t = Math.min(t, i), a = Math.max(a, c), r = Math.max(r, i)
								}
							}
							this.minX = e, this.minY = t, this.maxX = a, this.maxY = r
						}
						aabbContainsPoint(e, t) {
							return e >= this.minX && e <= this.maxX && t >= this.minY && t <= this.maxY
						}
						aabbIntersectsSegment(e, t, a, r) {
							let n = this.minX,
								c = this.minY,
								i = this.maxX,
								d = this.maxY;
							if (e <= n && a <= n || t <= c && r <= c || e >= i && a >= i || t >= d && r >= d) return !1;
							let f = (r - t) / (a - e),
								o = f * (n - e) + t;
							if (o > c && o < d) return !0;
							if (o = f * (i - e) + t, o > c && o < d) return !0;
							let s = (c - t) / f + e;
							return s > n && s < i || (s = (d - t) / f + e, s > n && s < i)
						}
						aabbIntersectsSkeleton(e) {
							return this.minX < e.maxX && this.maxX > e.minX && this.minY < e.maxY && this.maxY > e.minY
						}
						containsPoint(e, t) {
							let a = this.polygons;
							for (let r = 0, n = a.length; r < n; r++)
								if (this.containsPointPolygon(a[r], e, t)) return this.boundingBoxes[r];
							return null
						}
						containsPointPolygon(e, t, a) {
							let r = e,
								n = e.length,
								c = n - 2,
								i = !1;
							for (let e = 0; e < n; e += 2) {
								let n = r[e + 1],
									d = r[c + 1];
								if (n < a && d >= a || d < a && n >= a) {
									let f = r[e];
									f + (a - n) / (d - n) * (r[c] - f) < t && (i = !i)
								}
								c = e
							}
							return i
						}
						intersectsSegment(e, t, a, r) {
							let n = this.polygons;
							for (let c = 0, i = n.length; c < i; c++)
								if (this.intersectsSegmentPolygon(n[c], e, t, a, r)) return this.boundingBoxes[c];
							return null
						}
						intersectsSegmentPolygon(e, t, a, r, n) {
							let c = e,
								i = e.length,
								d = t - r,
								f = a - n,
								o = t * n - a * r,
								s = c[i - 2],
								b = c[i - 1];
							for (let e = 0; e < i; e += 2) {
								let i = c[e],
									u = c[e + 1],
									h = s * u - b * i,
									l = s - i,
									x = b - u,
									p = d * x - f * l,
									m = (o * l - d * h) / p;
								if ((m >= s && m <= i || m >= i && m <= s) && (m >= t && m <= r || m >= r && m <= t)) {
									let e = (o * x - f * h) / p;
									if ((e >= b && e <= u || e >= u && e <= b) && (e >= a && e <= n || e >= n && e <= a)) return !0
								}
								s = i, b = u
							}
							return !1
						}
						getPolygon(e) {
							if (!e) throw new Error("boundingBox cannot be null.");
							let t = this.boundingBoxes.indexOf(e);
							return -1 == t ? null : this.polygons[t]
						}
						getWidth() {
							return this.maxX - this.minX
						}
						getHeight() {
							return this.maxY - this.minY
						}
					}
					class De {
						constructor() {
							this.convexPolygons = new Array, this.convexPolygonsIndices = new Array, this.indicesArray = new Array, this.isConcaveArray =
								new Array, this.triangles = new Array, this.polygonPool = new o((() => new Array)), this.polygonIndicesPool =
								new o((() => new Array))
						}
						triangulate(e) {
							let t = e,
								a = e.length >> 1,
								r = this.indicesArray;
							r.length = 0;
							for (let e = 0; e < a; e++) r[e] = e;
							let n = this.isConcaveArray;
							n.length = 0;
							for (let e = 0, c = a; e < c; ++e) n[e] = De.isConcave(e, a, t, r);
							let c = this.triangles;
							for (c.length = 0; a > 3;) {
								let e = a - 1,
									i = 0,
									d = 1;
								for (;;) {
									e: if (!n[i]) {
										let c = r[e] << 1,
											f = r[i] << 1,
											o = r[d] << 1,
											s = t[c],
											b = t[c + 1],
											u = t[f],
											h = t[f + 1],
											l = t[o],
											x = t[o + 1];
										for (let c = (d + 1) % a; c != e; c = (c + 1) % a) {
											if (!n[c]) continue;
											let e = r[c] << 1,
												a = t[e],
												i = t[e + 1];
											if (De.positiveArea(l, x, s, b, a, i) && De.positiveArea(s, b, u, h, a, i) && De.positiveArea(u, h, l, x,
													a, i)) break e
										}
										break
									}if (0 == d) {
										do {
											if (!n[i]) break;
											i--
										} while (i > 0);
										break
									}
									e = i,
									i = d,
									d = (d + 1) % a
								}
								c.push(r[(a + i - 1) % a]), c.push(r[i]), c.push(r[(i + 1) % a]), r.splice(i, 1), n.splice(i, 1), a--;
								let f = (a + i - 1) % a,
									o = i == a ? 0 : i;
								n[f] = De.isConcave(f, a, t, r), n[o] = De.isConcave(o, a, t, r)
							}
							return 3 == a && (c.push(r[2]), c.push(r[0]), c.push(r[1])), c
						}
						decompose(e, t) {
							let a = e,
								r = this.convexPolygons;
							this.polygonPool.freeAll(r), r.length = 0;
							let n = this.convexPolygonsIndices;
							this.polygonIndicesPool.freeAll(n), n.length = 0;
							let c = this.polygonIndicesPool.obtain();
							c.length = 0;
							let i = this.polygonPool.obtain();
							i.length = 0;
							let d = -1,
								f = 0;
							for (let e = 0, o = t.length; e < o; e += 3) {
								let o = t[e] << 1,
									s = t[e + 1] << 1,
									b = t[e + 2] << 1,
									u = a[o],
									h = a[o + 1],
									l = a[s],
									x = a[s + 1],
									p = a[b],
									m = a[b + 1],
									g = !1;
								if (d == o) {
									let e = i.length - 4,
										t = De.winding(i[e], i[e + 1], i[e + 2], i[e + 3], p, m),
										a = De.winding(p, m, i[0], i[1], i[2], i[3]);
									t == f && a == f && (i.push(p), i.push(m), c.push(b), g = !0)
								}
								g || (i.length > 0 ? (r.push(i), n.push(c)) : (this.polygonPool.free(i), this.polygonIndicesPool.free(c)), i =
									this.polygonPool.obtain(), i.length = 0, i.push(u), i.push(h), i.push(l), i.push(x), i.push(p), i.push(m),
									c = this.polygonIndicesPool.obtain(), c.length = 0, c.push(o), c.push(s), c.push(b), f = De.winding(u, h, l,
										x, p, m), d = o)
							}
							i.length > 0 && (r.push(i), n.push(c));
							for (let e = 0, t = r.length; e < t; e++) {
								if (c = n[e], 0 == c.length) continue;
								let a = c[0],
									d = c[c.length - 1];
								i = r[e];
								let f = i.length - 4,
									o = i[f],
									s = i[f + 1],
									b = i[f + 2],
									u = i[f + 3],
									h = i[0],
									l = i[1],
									x = i[2],
									p = i[3],
									m = De.winding(o, s, b, u, h, l);
								for (let f = 0; f < t; f++) {
									if (f == e) continue;
									let t = n[f];
									if (3 != t.length) continue;
									let g = t[0],
										y = t[1],
										v = t[2],
										w = r[f],
										_ = w[w.length - 2],
										k = w[w.length - 1];
									if (g != a || y != d) continue;
									let M = De.winding(o, s, b, u, _, k),
										S = De.winding(_, k, h, l, x, p);
									M == m && S == m && (w.length = 0, t.length = 0, i.push(_), i.push(k), c.push(v), o = b, s = u, b = _, u = k,
										f = 0)
								}
							}
							for (let e = r.length - 1; e >= 0; e--) i = r[e], 0 == i.length && (r.splice(e, 1), this.polygonPool.free(i),
								c = n[e], n.splice(e, 1), this.polygonIndicesPool.free(c));
							return r
						}
						static isConcave(e, t, a, r) {
							let n = r[(t + e - 1) % t] << 1,
								c = r[e] << 1,
								i = r[(e + 1) % t] << 1;
							return !this.positiveArea(a[n], a[n + 1], a[c], a[c + 1], a[i], a[i + 1])
						}
						static positiveArea(e, t, a, r, n, c) {
							return e * (c - r) + a * (t - c) + n * (r - t) >= 0
						}
						static winding(e, t, a, r, n, c) {
							let i = a - e,
								d = r - t;
							return n * d - c * i + i * t - e * d >= 0 ? 1 : -1
						}
					}
					class Fe {
						constructor() {
							this.triangulator = new De, this.clippingPolygon = new Array, this.clipOutput = new Array, this.clippedVertices =
								new Array, this.clippedTriangles = new Array, this.scratch = new Array
						}
						clipStart(e, t) {
							if (this.clipAttachment) return 0;
							this.clipAttachment = t;
							let a = t.worldVerticesLength,
								r = f.setArraySize(this.clippingPolygon, a);
							t.computeWorldVertices(e, 0, a, r, 0, 2);
							let n = this.clippingPolygon;
							Fe.makeClockwise(n);
							let c = this.clippingPolygons = this.triangulator.decompose(n, this.triangulator.triangulate(n));
							for (let e = 0, t = c.length; e < t; e++) {
								let t = c[e];
								Fe.makeClockwise(t), t.push(t[0]), t.push(t[1])
							}
							return c.length
						}
						clipEndWithSlot(e) {
							this.clipAttachment && this.clipAttachment.endSlot == e.data && this.clipEnd()
						}
						clipEnd() {
							this.clipAttachment && (this.clipAttachment = null, this.clippingPolygons = null, this.clippedVertices.length =
								0, this.clippedTriangles.length = 0, this.clippingPolygon.length = 0)
						}
						isClipping() {
							return null != this.clipAttachment
						}
						clipTriangles(e, t, a, r, n, c, i, d) {
							let o = this.clipOutput,
								s = this.clippedVertices,
								b = this.clippedTriangles,
								u = this.clippingPolygons,
								h = this.clippingPolygons.length,
								l = d ? 12 : 8,
								x = 0;
							s.length = 0, b.length = 0;
							e: for (let t = 0; t < r; t += 3) {
								let r = a[t] << 1,
									p = e[r],
									m = e[r + 1],
									g = n[r],
									y = n[r + 1];
								r = a[t + 1] << 1;
								let v = e[r],
									w = e[r + 1],
									_ = n[r],
									k = n[r + 1];
								r = a[t + 2] << 1;
								let M = e[r],
									S = e[r + 1],
									E = n[r],
									A = n[r + 1];
								for (let e = 0; e < h; e++) {
									let t = s.length;
									if (!this.clip(p, m, v, w, M, S, u[e], o)) {
										let e = f.setArraySize(s, t + 3 * l);
										e[t] = p, e[t + 1] = m, e[t + 2] = c.r, e[t + 3] = c.g, e[t + 4] = c.b, e[t + 5] = c.a, d ? (e[t + 6] = g,
											e[t + 7] = y, e[t + 8] = i.r, e[t + 9] = i.g, e[t + 10] = i.b, e[t + 11] = i.a, e[t + 12] = v, e[t + 13] =
											w, e[t + 14] = c.r, e[t + 15] = c.g, e[t + 16] = c.b, e[t + 17] = c.a, e[t + 18] = _, e[t + 19] = k, e[t +
												20] = i.r, e[t + 21] = i.g, e[t + 22] = i.b, e[t + 23] = i.a, e[t + 24] = M, e[t + 25] = S, e[t + 26] =
											c.r, e[t + 27] = c.g, e[t + 28] = c.b, e[t + 29] = c.a, e[t + 30] = E, e[t + 31] = A, e[t + 32] = i.r, e[
												t + 33] = i.g, e[t + 34] = i.b, e[t + 35] = i.a) : (e[t + 6] = g, e[t + 7] = y, e[t + 8] = v, e[t + 9] =
											w, e[t + 10] = c.r, e[t + 11] = c.g, e[t + 12] = c.b, e[t + 13] = c.a, e[t + 14] = _, e[t + 15] = k, e[t +
												16] = M, e[t + 17] = S, e[t + 18] = c.r, e[t + 19] = c.g, e[t + 20] = c.b, e[t + 21] = c.a, e[t + 22] =
											E, e[t + 23] = A), t = b.length;
										let a = f.setArraySize(b, t + 3);
										a[t] = x, a[t + 1] = x + 1, a[t + 2] = x + 2, x += 3;
										continue e
									} {
										let e = o.length;
										if (0 == e) continue;
										let a = w - S,
											r = M - v,
											n = p - M,
											u = S - m,
											h = 1 / (a * n + r * (m - S)),
											T = e >> 1,
											R = this.clipOutput,
											I = f.setArraySize(s, t + T * l);
										for (let f = 0; f < e; f += 2) {
											let e = R[f],
												o = R[f + 1];
											I[t] = e, I[t + 1] = o, I[t + 2] = c.r, I[t + 3] = c.g, I[t + 4] = c.b, I[t + 5] = c.a;
											let s = e - M,
												b = o - S,
												x = (a * s + r * b) * h,
												p = (u * s + n * b) * h,
												m = 1 - x - p;
											I[t + 6] = g * x + _ * p + E * m, I[t + 7] = y * x + k * p + A * m, d && (I[t + 8] = i.r, I[t + 9] = i.g,
												I[t + 10] = i.b, I[t + 11] = i.a), t += l
										}
										t = b.length;
										let P = f.setArraySize(b, t + 3 * (T - 2));
										T--;
										for (let e = 1; e < T; e++) P[t] = x, P[t + 1] = x + e, P[t + 2] = x + e + 1, t += 3;
										x += T + 1
									}
								}
							}
						}
						clip(e, t, a, r, n, c, i, d) {
							let f = d,
								o = !1,
								s = null;
							i.length % 4 >= 2 ? (s = d, d = this.scratch) : s = this.scratch, s.length = 0, s.push(e), s.push(t), s.push(a),
								s.push(r), s.push(n), s.push(c), s.push(e), s.push(t), d.length = 0;
							let b = i,
								u = i.length - 4;
							for (let e = 0;; e += 2) {
								let t = b[e],
									a = b[e + 1],
									r = b[e + 2],
									n = b[e + 3],
									c = t - r,
									i = a - n,
									h = s,
									l = s.length - 2,
									x = d.length;
								for (let e = 0; e < l; e += 2) {
									let f = h[e],
										s = h[e + 1],
										b = h[e + 2],
										u = h[e + 3],
										l = c * (u - n) - i * (b - r) > 0;
									if (c * (s - n) - i * (f - r) > 0) {
										if (l) {
											d.push(b), d.push(u);
											continue
										}
										let e = u - s,
											c = b - f,
											i = e * (r - t) - c * (n - a);
										if (Math.abs(i) > 1e-6) {
											let o = (c * (a - s) - e * (t - f)) / i;
											d.push(t + (r - t) * o), d.push(a + (n - a) * o)
										} else d.push(t), d.push(a)
									} else if (l) {
										let e = u - s,
											c = b - f,
											i = e * (r - t) - c * (n - a);
										if (Math.abs(i) > 1e-6) {
											let o = (c * (a - s) - e * (t - f)) / i;
											d.push(t + (r - t) * o), d.push(a + (n - a) * o)
										} else d.push(t), d.push(a);
										d.push(b), d.push(u)
									}
									o = !0
								}
								if (x == d.length) return f.length = 0, !0;
								if (d.push(d[0]), d.push(d[1]), e == u) break;
								let p = d;
								(d = s).length = 0, s = p
							}
							if (f != d) {
								f.length = 0;
								for (let e = 0, t = d.length - 2; e < t; e++) f[e] = d[e]
							} else f.length = f.length - 2;
							return o
						}
						static makeClockwise(e) {
							let t = e,
								a = e.length,
								r = t[a - 2] * t[1] - t[0] * t[a - 1],
								n = 0,
								c = 0,
								i = 0,
								d = 0;
							for (let e = 0, f = a - 3; e < f; e += 2) n = t[e], c = t[e + 1], i = t[e + 2], d = t[e + 3], r += n * d - i *
								c;
							if (!(r < 0))
								for (let e = 0, r = a - 2, n = a >> 1; e < n; e += 2) {
									let a = t[e],
										n = t[e + 1],
										c = r - e;
									t[e] = t[c], t[e + 1] = t[c + 1], t[c] = a, t[c + 1] = n
								}
						}
					}
					class qe {
						constructor(e) {
							this.name = null, this.intValue = 0, this.floatValue = 0, this.stringValue = null, this.audioPath = null, this
								.volume = 0, this.balance = 0, this.name = e
						}
					}
					class He {
						constructor(e, t) {
							if (this.data = null, this.intValue = 0, this.floatValue = 0, this.stringValue = null, this.time = 0, this.volume =
								0, this.balance = 0, !t) throw new Error("data cannot be null.");
							this.time = e, this.data = t
						}
					}
					class ze extends Re {
						constructor(e) {
							super(e, 0, !1), this.bones = new Array, this.target = null, this.bendDirection = 1, this.compress = !1, this.stretch = !
								1, this.uniform = !1, this.mix = 1, this.softness = 0
						}
					}
					class Ve {
						constructor() {
							this.name = null, this.bones = new Array, this.slots = new Array, this.skins = new Array, this.defaultSkin =
								null, this.events = new Array, this.animations = new Array, this.ikConstraints = new Array, this.transformConstraints =
								new Array, this.pathConstraints = new Array, this.x = 0, this.y = 0, this.width = 0, this.height = 0, this.version =
								null, this.hash = null, this.fps = 0, this.imagesPath = null, this.audioPath = null
						}
						findBone(e) {
							if (!e) throw new Error("boneName cannot be null.");
							let t = this.bones;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.name == e) return r
							}
							return null
						}
						findSlot(e) {
							if (!e) throw new Error("slotName cannot be null.");
							let t = this.slots;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.name == e) return r
							}
							return null
						}
						findSkin(e) {
							if (!e) throw new Error("skinName cannot be null.");
							let t = this.skins;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.name == e) return r
							}
							return null
						}
						findEvent(e) {
							if (!e) throw new Error("eventDataName cannot be null.");
							let t = this.events;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.name == e) return r
							}
							return null
						}
						findAnimation(e) {
							if (!e) throw new Error("animationName cannot be null.");
							let t = this.animations;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.name == e) return r
							}
							return null
						}
						findIkConstraint(e) {
							if (!e) throw new Error("constraintName cannot be null.");
							let t = this.ikConstraints;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.name == e) return r
							}
							return null
						}
						findTransformConstraint(e) {
							if (!e) throw new Error("constraintName cannot be null.");
							let t = this.transformConstraints;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.name == e) return r
							}
							return null
						}
						findPathConstraint(e) {
							if (!e) throw new Error("constraintName cannot be null.");
							let t = this.pathConstraints;
							for (let a = 0, r = t.length; a < r; a++) {
								let r = t[a];
								if (r.name == e) return r
							}
							return null
						}
					}
					class We extends Re {
						constructor(e) {
							super(e, 0, !1), this.bones = new Array, this.target = null, this.mixRotate = 0, this.mixX = 0, this.mixY = 0,
								this.mixScaleX = 0, this.mixScaleY = 0, this.mixShearY = 0, this.offsetRotation = 0, this.offsetX = 0, this.offsetY =
								0, this.offsetScaleX = 0, this.offsetScaleY = 0, this.offsetShearY = 0, this.relative = !1, this.local = !1
						}
					}
					class Ge {
						constructor(e) {
							this.attachmentLoader = null, this.scale = 1, this.linkedMeshes = new Array, this.attachmentLoader = e
						}
						readSkeletonData(e) {
							let t = this.scale,
								a = new Ve,
								r = "string" == typeof e ? JSON.parse(e) : e,
								n = r.skeleton;
							if (n && (a.hash = n.hash, a.version = n.spine, a.x = n.x, a.y = n.y, a.width = n.width, a.height = n.height,
									a.fps = n.fps, a.imagesPath = n.images), r.bones)
								for (let e = 0; e < r.bones.length; e++) {
									let n = r.bones[e],
										c = null,
										i = Je(n, "parent", null);
									i && (c = a.findBone(i));
									let d = new Me(a.bones.length, n.name, c);
									d.length = Je(n, "length", 0) * t, d.x = Je(n, "x", 0) * t, d.y = Je(n, "y", 0) * t, d.rotation = Je(n,
											"rotation", 0), d.scaleX = Je(n, "scaleX", 1), d.scaleY = Je(n, "scaleY", 1), d.shearX = Je(n, "shearX", 0),
										d.shearY = Je(n, "shearY", 0), d.transformMode = f.enumValue(ie, Je(n, "transform", "Normal")), d.skinRequired =
										Je(n, "skin", !1);
									let o = Je(n, "color", null);
									o && d.color.setFromString(o), a.bones.push(d)
								}
							if (r.slots)
								for (let e = 0; e < r.slots.length; e++) {
									let t = r.slots[e],
										n = a.findBone(t.bone),
										c = new Ue(a.slots.length, t.name, n),
										d = Je(t, "color", null);
									d && c.color.setFromString(d);
									let o = Je(t, "dark", null);
									o && (c.darkColor = i.fromString(o)), c.attachmentName = Je(t, "attachment", null), c.blendMode = f.enumValue(
										se, Je(t, "blend", "normal")), a.slots.push(c)
								}
							if (r.ik)
								for (let e = 0; e < r.ik.length; e++) {
									let n = r.ik[e],
										c = new ze(n.name);
									c.order = Je(n, "order", 0), c.skinRequired = Je(n, "skin", !1);
									for (let e = 0; e < n.bones.length; e++) c.bones.push(a.findBone(n.bones[e]));
									c.target = a.findBone(n.target), c.mix = Je(n, "mix", 1), c.softness = Je(n, "softness", 0) * t, c.bendDirection =
										Je(n, "bendPositive", !0) ? 1 : -1, c.compress = Je(n, "compress", !1), c.stretch = Je(n, "stretch", !1), c
										.uniform = Je(n, "uniform", !1), a.ikConstraints.push(c)
								}
							if (r.transform)
								for (let e = 0; e < r.transform.length; e++) {
									let n = r.transform[e],
										c = new We(n.name);
									c.order = Je(n, "order", 0), c.skinRequired = Je(n, "skin", !1);
									for (let e = 0; e < n.bones.length; e++) c.bones.push(a.findBone(n.bones[e]));
									let i = n.target;
									c.target = a.findBone(i), c.local = Je(n, "local", !1), c.relative = Je(n, "relative", !1), c.offsetRotation =
										Je(n, "rotation", 0), c.offsetX = Je(n, "x", 0) * t, c.offsetY = Je(n, "y", 0) * t, c.offsetScaleX = Je(n,
											"scaleX", 0), c.offsetScaleY = Je(n, "scaleY", 0), c.offsetShearY = Je(n, "shearY", 0), c.mixRotate = Je(n,
											"mixRotate", 1), c.mixX = Je(n, "mixX", 1), c.mixY = Je(n, "mixY", c.mixX), c.mixScaleX = Je(n,
											"mixScaleX", 1), c.mixScaleY = Je(n, "mixScaleY", c.mixScaleX), c.mixShearY = Je(n, "mixShearY", 1), a.transformConstraints
										.push(c)
								}
							if (r.path)
								for (let e = 0; e < r.path.length; e++) {
									let n = r.path[e],
										c = new Ie(n.name);
									c.order = Je(n, "order", 0), c.skinRequired = Je(n, "skin", !1);
									for (let e = 0; e < n.bones.length; e++) c.bones.push(a.findBone(n.bones[e]));
									let i = n.target;
									c.target = a.findSlot(i), c.positionMode = f.enumValue(de, Je(n, "positionMode", "Percent")), c.spacingMode =
										f.enumValue(fe, Je(n, "spacingMode", "Length")), c.rotateMode = f.enumValue(oe, Je(n, "rotateMode",
											"Tangent")), c.offsetRotation = Je(n, "rotation", 0), c.position = Je(n, "position", 0), c.positionMode ==
										de.Fixed && (c.position *= t), c.spacing = Je(n, "spacing", 0), c.spacingMode != fe.Length && c.spacingMode !=
										fe.Fixed || (c.spacing *= t), c.mixRotate = Je(n, "mixRotate", 1), c.mixX = Je(n, "mixX", 1), c.mixY = Je(n,
											"mixY", c.mixX), a.pathConstraints.push(c)
								}
							if (r.skins)
								for (let e = 0; e < r.skins.length; e++) {
									let t = r.skins[e],
										n = new Le(t.name);
									if (t.bones)
										for (let e = 0; e < t.bones.length; e++) n.bones.push(a.findBone(t.bones[e]));
									if (t.ik)
										for (let e = 0; e < t.ik.length; e++) n.constraints.push(a.findIkConstraint(t.ik[e]));
									if (t.transform)
										for (let e = 0; e < t.transform.length; e++) n.constraints.push(a.findTransformConstraint(t.transform[e]));
									if (t.path)
										for (let e = 0; e < t.path.length; e++) n.constraints.push(a.findPathConstraint(t.path[e]));
									for (let e in t.attachments) {
										let r = a.findSlot(e),
											c = t.attachments[e];
										for (let e in c) {
											let t = this.readAttachment(c[e], n, r.index, e, a);
											t && n.setAttachment(r.index, e, t)
										}
									}
									a.skins.push(n), "default" == n.name && (a.defaultSkin = n)
								}
							for (let e = 0, t = this.linkedMeshes.length; e < t; e++) {
								let t = this.linkedMeshes[e],
									r = (t.skin ? a.findSkin(t.skin) : a.defaultSkin).getAttachment(t.slotIndex, t.parent);
								t.mesh.deformAttachment = t.inheritDeform ? r : t.mesh, t.mesh.setParentMesh(r), t.mesh.updateUVs()
							}
							if (this.linkedMeshes.length = 0, r.events)
								for (let e in r.events) {
									let t = r.events[e],
										n = new qe(e);
									n.intValue = Je(t, "int", 0), n.floatValue = Je(t, "float", 0), n.stringValue = Je(t, "string", ""), n.audioPath =
										Je(t, "audio", null), n.audioPath && (n.volume = Je(t, "volume", 1), n.balance = Je(t, "balance", 0)), a.events
										.push(n)
								}
							if (r.animations)
								for (let e in r.animations) {
									let t = r.animations[e];
									this.readAnimation(t, e, a)
								}
							return a
						}
						readAttachment(e, t, a, r, n) {
							let c = this.scale;
							switch (r = Je(e, "name", r), Je(e, "type", "region")) {
								case "region":
									{
										let a = Je(e, "path", r),
											n = this.attachmentLoader.newRegionAttachment(t, r, a);
										if (!n) return null;n.path = a,
										n.x = Je(e, "x", 0) * c,
										n.y = Je(e, "y", 0) * c,
										n.scaleX = Je(e, "scaleX", 1),
										n.scaleY = Je(e, "scaleY", 1),
										n.rotation = Je(e, "rotation", 0),
										n.width = e.width * c,
										n.height = e.height * c;
										let i = Je(e, "color", null);
										return i && n.color.setFromString(i),
										n.updateOffset(),
										n
									}
								case "boundingbox":
									{
										let a = this.attachmentLoader.newBoundingBoxAttachment(t, r);
										if (!a) return null;this.readVertices(e, a, e.vertexCount << 1);
										let n = Je(e, "color", null);
										return n && a.color.setFromString(n),
										a
									}
								case "mesh":
								case "linkedmesh":
									{
										let n = Je(e, "path", r),
											i = this.attachmentLoader.newMeshAttachment(t, r, n);
										if (!i) return null;i.path = n;
										let d = Je(e, "color", null);d && i.color.setFromString(d),
										i.width = Je(e, "width", 0) * c,
										i.height = Je(e, "height", 0) * c;
										let f = Je(e, "parent", null);
										if (f) return this.linkedMeshes.push(new Xe(i, Je(e, "skin", null), a, f, Je(e, "deform", !0))),
										i;
										let o = e.uvs;
										return this.readVertices(e, i, o.length),
										i.triangles = e.triangles,
										i.regionUVs = o,
										i.updateUVs(),
										i.edges = Je(e, "edges", null),
										i.hullLength = 2 * Je(e, "hull", 0),
										i
									}
								case "path":
									{
										let a = this.attachmentLoader.newPathAttachment(t, r);
										if (!a) return null;a.closed = Je(e, "closed", !1),
										a.constantSpeed = Je(e, "constantSpeed", !0);
										let n = e.vertexCount;this.readVertices(e, a, n << 1);
										let i = f.newArray(n / 3, 0);
										for (let t = 0; t < e.lengths.length; t++) i[t] = e.lengths[t] * c;a.lengths = i;
										let d = Je(e, "color", null);
										return d && a.color.setFromString(d),
										a
									}
								case "point":
									{
										let a = this.attachmentLoader.newPointAttachment(t, r);
										if (!a) return null;a.x = Je(e, "x", 0) * c,
										a.y = Je(e, "y", 0) * c,
										a.rotation = Je(e, "rotation", 0);
										let n = Je(e, "color", null);
										return n && a.color.setFromString(n),
										a
									}
								case "clipping":
									{
										let a = this.attachmentLoader.newClippingAttachment(t, r);
										if (!a) return null;
										let c = Je(e, "end", null);c && (a.endSlot = n.findSlot(c));
										let i = e.vertexCount;this.readVertices(e, a, i << 1);
										let d = Je(e, "color", null);
										return d && a.color.setFromString(d),
										a
									}
							}
							return null
						}
						readVertices(e, t, a) {
							let r = this.scale;
							t.worldVerticesLength = a;
							let n = e.vertices;
							if (a == n.length) {
								let e = f.toFloatArray(n);
								if (1 != r)
									for (let t = 0, a = n.length; t < a; t++) e[t] *= r;
								return void(t.vertices = e)
							}
							let c = new Array,
								i = new Array;
							for (let e = 0, t = n.length; e < t;) {
								let t = n[e++];
								i.push(t);
								for (let a = e + 4 * t; e < a; e += 4) i.push(n[e]), c.push(n[e + 1] * r), c.push(n[e + 2] * r), c.push(n[e +
									3])
							}
							t.bones = i, t.vertices = f.toFloatArray(c)
						}
						readAnimation(e, t, a) {
							let r = this.scale,
								n = new Array;
							if (e.slots)
								for (let t in e.slots) {
									let r = e.slots[t],
										c = a.findSlot(t).index;
									for (let e in r) {
										let t = r[e];
										if (!t) continue;
										let a = t.length;
										if ("attachment" == e) {
											let e = new O(a, c);
											for (let r = 0; r < a; r++) {
												let a = t[r];
												e.setFrame(r, Je(a, "time", 0), a.name)
											}
											n.push(e)
										} else if ("rgba" == e) {
											let e = new T(a, a << 2, c),
												r = t[0],
												d = Je(r, "time", 0),
												f = i.fromString(r.color);
											for (let a = 0, n = 0;; a++) {
												e.setFrame(a, d, f.r, f.g, f.b, f.a);
												let c = t[a + 1];
												if (!c) {
													e.shrink(n);
													break
												}
												let o = Je(c, "time", 0),
													s = i.fromString(c.color),
													b = r.curve;
												b && (n = Ke(b, e, n, a, 0, d, o, f.r, s.r, 1), n = Ke(b, e, n, a, 1, d, o, f.g, s.g, 1), n = Ke(b, e, n,
													a, 2, d, o, f.b, s.b, 1), n = Ke(b, e, n, a, 3, d, o, f.a, s.a, 1)), d = o, f = s, r = c
											}
											n.push(e)
										} else if ("rgb" == e) {
											let e = new R(a, 3 * a, c),
												r = t[0],
												d = Je(r, "time", 0),
												f = i.fromString(r.color);
											for (let a = 0, n = 0;; a++) {
												e.setFrame(a, d, f.r, f.g, f.b);
												let c = t[a + 1];
												if (!c) {
													e.shrink(n);
													break
												}
												let o = Je(c, "time", 0),
													s = i.fromString(c.color),
													b = r.curve;
												b && (n = Ke(b, e, n, a, 0, d, o, f.r, s.r, 1), n = Ke(b, e, n, a, 1, d, o, f.g, s.g, 1), n = Ke(b, e, n,
													a, 2, d, o, f.b, s.b, 1)), d = o, f = s, r = c
											}
											n.push(e)
										} else if ("alpha" == e) n.push(Ye(t, new I(a, a, c), 0, 1));
										else if ("rgba2" == e) {
											let e = new P(a, 7 * a, c),
												r = t[0],
												d = Je(r, "time", 0),
												f = i.fromString(r.light),
												o = i.fromString(r.dark);
											for (let a = 0, n = 0;; a++) {
												e.setFrame(a, d, f.r, f.g, f.b, f.a, o.r, o.g, o.b);
												let c = t[a + 1];
												if (!c) {
													e.shrink(n);
													break
												}
												let s = Je(c, "time", 0),
													b = i.fromString(c.light),
													u = i.fromString(c.dark),
													h = r.curve;
												h && (n = Ke(h, e, n, a, 0, d, s, f.r, b.r, 1), n = Ke(h, e, n, a, 1, d, s, f.g, b.g, 1), n = Ke(h, e, n,
														a, 2, d, s, f.b, b.b, 1), n = Ke(h, e, n, a, 3, d, s, f.a, b.a, 1), n = Ke(h, e, n, a, 4, d, s, o.r, u
														.r, 1), n = Ke(h, e, n, a, 5, d, s, o.g, u.g, 1), n = Ke(h, e, n, a, 6, d, s, o.b, u.b, 1)), d = s, f =
													b, o = u, r = c
											}
											n.push(e)
										} else if ("rgb2" == e) {
											let e = new C(a, 6 * a, c),
												r = t[0],
												d = Je(r, "time", 0),
												f = i.fromString(r.light),
												o = i.fromString(r.dark);
											for (let a = 0, n = 0;; a++) {
												e.setFrame(a, d, f.r, f.g, f.b, o.r, o.g, o.b);
												let c = t[a + 1];
												if (!c) {
													e.shrink(n);
													break
												}
												let s = Je(c, "time", 0),
													b = i.fromString(c.light),
													u = i.fromString(c.dark),
													h = r.curve;
												h && (n = Ke(h, e, n, a, 0, d, s, f.r, b.r, 1), n = Ke(h, e, n, a, 1, d, s, f.g, b.g, 1), n = Ke(h, e, n,
													a, 2, d, s, f.b, b.b, 1), n = Ke(h, e, n, a, 3, d, s, o.r, u.r, 1), n = Ke(h, e, n, a, 4, d, s, o.g, u
													.g, 1), n = Ke(h, e, n, a, 5, d, s, o.b, u.b, 1)), d = s, f = b, o = u, r = c
											}
											n.push(e)
										}
									}
								}
							if (e.bones)
								for (let t in e.bones) {
									let c = e.bones[t],
										i = a.findBone(t).index;
									for (let e in c) {
										let t = c[e],
											a = t.length;
										if (0 != a)
											if ("rotate" === e) n.push(Ye(t, new g(a, a, i), 0, 1));
											else if ("translate" === e) {
											let e = new y(a, a << 1, i);
											n.push($e(t, e, "x", "y", 0, r))
										} else if ("translatex" === e) {
											let e = new v(a, a, i);
											n.push(Ye(t, e, 0, r))
										} else if ("translatey" === e) {
											let e = new w(a, a, i);
											n.push(Ye(t, e, 0, r))
										} else if ("scale" === e) {
											let e = new _(a, a << 1, i);
											n.push($e(t, e, "x", "y", 1, 1))
										} else if ("scalex" === e) {
											let e = new k(a, a, i);
											n.push(Ye(t, e, 1, 1))
										} else if ("scaley" === e) {
											let e = new M(a, a, i);
											n.push(Ye(t, e, 1, 1))
										} else if ("shear" === e) {
											let e = new S(a, a << 1, i);
											n.push($e(t, e, "x", "y", 0, 1))
										} else if ("shearx" === e) {
											let e = new E(a, a, i);
											n.push(Ye(t, e, 0, 1))
										} else if ("sheary" === e) {
											let e = new A(a, a, i);
											n.push(Ye(t, e, 0, 1))
										}
									}
								}
							if (e.ik)
								for (let t in e.ik) {
									let c = e.ik[t],
										i = c[0];
									if (!i) continue;
									let d = a.findIkConstraint(t),
										f = a.ikConstraints.indexOf(d),
										o = new U(c.length, c.length << 1, f),
										s = Je(i, "time", 0),
										b = Je(i, "mix", 1),
										u = Je(i, "softness", 0) * r;
									for (let e = 0, t = 0;; e++) {
										o.setFrame(e, s, b, u, Je(i, "bendPositive", !0) ? 1 : -1, Je(i, "compress", !1), Je(i, "stretch", !1));
										let a = c[e + 1];
										if (!a) {
											o.shrink(t);
											break
										}
										let n = Je(a, "time", 0),
											d = Je(a, "mix", 1),
											f = Je(a, "softness", 0) * r,
											h = i.curve;
										h && (t = Ke(h, o, t, e, 0, s, n, b, d, 1), t = Ke(h, o, t, e, 1, s, n, u, f, r)), s = n, b = d, u = f, i =
											a
									}
									n.push(o)
								}
							if (e.transform)
								for (let t in e.transform) {
									let r = e.transform[t],
										c = r[0];
									if (!c) continue;
									let i = a.findTransformConstraint(t),
										d = a.transformConstraints.indexOf(i),
										f = new j(r.length, 6 * r.length, d),
										o = Je(c, "time", 0),
										s = Je(c, "mixRotate", 1),
										b = Je(c, "mixX", 1),
										u = Je(c, "mixY", b),
										h = Je(c, "mixScaleX", 1),
										l = Je(c, "mixScaleY", h),
										x = Je(c, "mixShearY", 1);
									for (let e = 0, t = 0;; e++) {
										f.setFrame(e, o, s, b, u, h, l, x);
										let a = r[e + 1];
										if (!a) {
											f.shrink(t);
											break
										}
										let n = Je(a, "time", 0),
											i = Je(a, "mixRotate", 1),
											d = Je(a, "mixX", 1),
											p = Je(a, "mixY", d),
											m = Je(a, "mixScaleX", 1),
											g = Je(a, "mixScaleY", m),
											y = Je(a, "mixShearY", 1),
											v = c.curve;
										v && (t = Ke(v, f, t, e, 0, o, n, s, i, 1), t = Ke(v, f, t, e, 1, o, n, b, d, 1), t = Ke(v, f, t, e, 2, o,
											n, u, p, 1), t = Ke(v, f, t, e, 3, o, n, h, m, 1), t = Ke(v, f, t, e, 4, o, n, l, g, 1), t = Ke(v, f, t,
											e, 5, o, n, x, y, 1)), o = n, s = i, b = d, u = p, h = m, l = g, h = m, c = a
									}
									n.push(f)
								}
							if (e.path)
								for (let t in e.path) {
									let c = e.path[t],
										i = a.findPathConstraint(t),
										d = a.pathConstraints.indexOf(i);
									for (let e in c) {
										let t = c[e],
											a = t[0];
										if (!a) continue;
										let f = t.length;
										if ("position" === e) {
											let e = new D(f, f, d);
											n.push(Ye(t, e, 0, i.positionMode == de.Fixed ? r : 1))
										} else if ("spacing" === e) {
											let e = new F(f, f, d);
											n.push(Ye(t, e, 0, i.spacingMode == fe.Length || i.spacingMode == fe.Fixed ? r : 1))
										} else if ("mix" === e) {
											let e = new q(f, 3 * f, d),
												r = Je(a, "time", 0),
												c = Je(a, "mixRotate", 1),
												i = Je(a, "mixX", 1),
												o = Je(a, "mixY", i);
											for (let n = 0, d = 0;; n++) {
												e.setFrame(n, r, c, i, o);
												let f = t[n + 1];
												if (!f) {
													e.shrink(d);
													break
												}
												let s = Je(f, "time", 0),
													b = Je(f, "mixRotate", 1),
													u = Je(f, "mixX", 1),
													h = Je(f, "mixY", u),
													l = a.curve;
												l && (d = Ke(l, e, d, n, 0, r, s, c, b, 1), d = Ke(l, e, d, n, 1, r, s, i, u, 1), d = Ke(l, e, d, n, 2, r,
													s, o, h, 1)), r = s, c = b, i = u, o = h, a = f
											}
											n.push(e)
										}
									}
								}
							if (e.deform)
								for (let t in e.deform) {
									let c = e.deform[t],
										i = a.findSkin(t);
									for (let e in c) {
										let t = c[e],
											d = a.findSlot(e).index;
										for (let e in t) {
											let a = t[e],
												c = a[0];
											if (!c) continue;
											let o = i.getAttachment(d, e),
												s = o.bones,
												b = o.vertices,
												u = s ? b.length / 3 * 2 : b.length,
												h = new N(a.length, a.length, d, o),
												l = Je(c, "time", 0);
											for (let e = 0, t = 0;; e++) {
												let n, i = Je(c, "vertices", null);
												if (i) {
													n = f.newFloatArray(u);
													let e = Je(c, "offset", 0);
													if (f.arrayCopy(i, 0, n, e, i.length), 1 != r)
														for (let t = e, a = t + i.length; t < a; t++) n[t] *= r;
													if (!s)
														for (let e = 0; e < u; e++) n[e] += b[e]
												} else n = s ? f.newFloatArray(u) : b;
												h.setFrame(e, l, n);
												let d = a[e + 1];
												if (!d) {
													h.shrink(t);
													break
												}
												let o = Je(d, "time", 0),
													x = c.curve;
												x && (t = Ke(x, h, t, e, 0, l, o, 0, 1, 1)), l = o, c = d
											}
											n.push(h)
										}
									}
								}
							if (e.drawOrder) {
								let t = new L(e.drawOrder.length),
									r = a.slots.length,
									c = 0;
								for (let n = 0; n < e.drawOrder.length; n++, c++) {
									let i = e.drawOrder[n],
										d = null,
										o = Je(i, "offsets", null);
									if (o) {
										d = f.newArray(r, -1);
										let e = f.newArray(r - o.length, 0),
											t = 0,
											n = 0;
										for (let r = 0; r < o.length; r++) {
											let c = o[r],
												i = a.findSlot(c.slot).index;
											for (; t != i;) e[n++] = t++;
											d[t + c.offset] = t++
										}
										for (; t < r;) e[n++] = t++;
										for (let t = r - 1; t >= 0; t--) - 1 == d[t] && (d[t] = e[--n])
									}
									t.setFrame(c, Je(i, "time", 0), d)
								}
								n.push(t)
							}
							if (e.events) {
								let t = new B(e.events.length),
									r = 0;
								for (let n = 0; n < e.events.length; n++, r++) {
									let c = e.events[n],
										i = a.findEvent(c.name),
										d = new He(f.toSinglePrecision(Je(c, "time", 0)), i);
									d.intValue = Je(c, "int", i.intValue), d.floatValue = Je(c, "float", i.floatValue), d.stringValue = Je(c,
										"string", i.stringValue), d.data.audioPath && (d.volume = Je(c, "volume", 1), d.balance = Je(c, "balance",
										0)), t.setFrame(r, d)
								}
								n.push(t)
							}
							let c = 0;
							for (let e = 0, t = n.length; e < t; e++) c = Math.max(c, n[e].getDuration());
							a.animations.push(new h(t, n, c))
						}
					}
					class Xe {
						constructor(e, t, a, r, n) {
							this.mesh = e, this.skin = t, this.slotIndex = a, this.parent = r, this.inheritDeform = n
						}
					}

					function Ye(e, t, a, r) {
						let n = e[0],
							c = Je(n, "time", 0),
							i = Je(n, "value", a) * r,
							d = 0;
						for (let f = 0;; f++) {
							t.setFrame(f, c, i);
							let o = e[f + 1];
							if (!o) return t.shrink(d), t;
							let s = Je(o, "time", 0),
								b = Je(o, "value", a) * r;
							n.curve && (d = Ke(n.curve, t, d, f, 0, c, s, i, b, r)), c = s, i = b, n = o
						}
					}

					function $e(e, t, a, r, n, c) {
						let i = e[0],
							d = Je(i, "time", 0),
							f = Je(i, a, n) * c,
							o = Je(i, r, n) * c,
							s = 0;
						for (let b = 0;; b++) {
							t.setFrame(b, d, f, o);
							let u = e[b + 1];
							if (!u) return t.shrink(s), t;
							let h = Je(u, "time", 0),
								l = Je(u, a, n) * c,
								x = Je(u, r, n) * c,
								p = i.curve;
							p && (s = Ke(p, t, s, b, 0, d, h, f, l, c), s = Ke(p, t, s, b, 1, d, h, o, x, c)), d = h, f = l, o = x, i = u
						}
					}

					function Ke(e, t, a, r, n, c, i, d, f, o) {
						if ("stepped" == e) return t.setStepped(r), a;
						let s = n << 2,
							b = e[s],
							u = e[s + 1] * o,
							h = e[s + 2],
							l = e[s + 3] * o;
						return t.setBezier(a, r, n, c, d, b, u, h, l, i, f), a + 1
					}

					function Je(e, t, a) {
						return void 0 !== e[t] ? e[t] : a
					}
					void 0 === Math.fround && (Math.fround = (le = new Float32Array(1), function(e) {
						return le[0] = e, le[0]
					}));
					class Ze {
						constructor(e) {
							this.centerX = 0, this.centerY = 0, this.radius = 0, this.angle = 0, this.worldX = 0, this.worldY = 0, this.radius =
								e
						}
						begin(e) {
							this.worldX = e.x + this.centerX, this.worldY = e.y + this.centerY
						}
						transform(e, t, a, r) {
							let n = this.angle * d.degreesToRadians,
								c = e.x - this.worldX,
								i = e.y - this.worldY,
								f = Math.sqrt(c * c + i * i);
							if (f < this.radius) {
								let t = Ze.interpolation.apply(0, n, (this.radius - f) / this.radius),
									a = Math.cos(t),
									r = Math.sin(t);
								e.x = a * c - r * i + this.worldX, e.y = r * c + a * i + this.worldY
							}
						}
						end() {}
					}
					Ze.interpolation = new class extends class extends class {
						apply(e, t, a) {
							return e + (t - e) * this.applyInternal(a)
						}
					} {
						constructor(e) {
							super(), this.power = 2, this.power = e
						}
						applyInternal(e) {
							return e <= .5 ? Math.pow(2 * e, this.power) / 2 : Math.pow(2 * (e - 1), this.power) / (this.power % 2 == 0 ?
								-2 : 2) + 1
						}
					} {
						constructor(e) {
							super(e)
						}
						applyInternal(e) {
							return Math.pow(e - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1
						}
					}(2)
				},
				92321: (e, t, a) => {
					"use strict";
					a.d(t, {
						me: () => d,
						x3: () => n,
						yG: () => S,
						OR: () => U,
						ex: () => E,
						UL: () => F
					});
					var r = a(63646);
					class n {
						constructor(e, t = {
							alpha: "true"
						}) {
							this.restorables = new Array, e instanceof WebGLRenderingContext || "undefined" != typeof WebGL2RenderingContext &&
								e instanceof WebGL2RenderingContext ? (this.gl = e, this.canvas = this.gl.canvas) : this.setupCanvas(e, t)
						}
						setupCanvas(e, t) {
							this.gl = e.getContext("webgl2", t) || e.getContext("webgl", t), this.canvas = e, e.addEventListener(
								"webglcontextlost", (e => {
									e && e.preventDefault()
								})), e.addEventListener("webglcontextrestored", (e => {
								for (let e = 0, t = this.restorables.length; e < t; e++) this.restorables[e].restore()
							}))
						}
						addRestorable(e) {
							this.restorables.push(e)
						}
						removeRestorable(e) {
							let t = this.restorables.indexOf(e);
							t > -1 && this.restorables.splice(t, 1)
						}
					}
					class c {
						static getDestGLBlendMode(e) {
							switch (e) {
								case r.bt.Normal:
									return 771;
								case r.bt.Additive:
									return 1;
								case r.bt.Multiply:
								case r.bt.Screen:
									return 771;
								default:
									throw new Error("Unknown blend mode: " + e)
							}
						}
						static getSourceColorGLBlendMode(e, t = !1) {
							switch (e) {
								case r.bt.Normal:
								case r.bt.Additive:
									return t ? 1 : 770;
								case r.bt.Multiply:
									return 774;
								case r.bt.Screen:
									return 1;
								default:
									throw new Error("Unknown blend mode: " + e)
							}
						}
						static getSourceAlphaGLBlendMode(e) {
							switch (e) {
								case r.bt.Normal:
								case r.bt.Additive:
									return 1;
								case r.bt.Multiply:
									return 771;
								case r.bt.Screen:
									return 769;
								default:
									throw new Error("Unknown blend mode: " + e)
							}
						}
					}
					class i extends r.xE {
						constructor(e, t, a = !1) {
							super(t), this.texture = null, this.boundUnit = 0, this.useMipMaps = !1, this.context = e instanceof n ? e :
								new n(e), this.useMipMaps = a, this.restore(), this.context.addRestorable(this)
						}
						setFilters(e, t) {
							let a = this.context.gl;
							this.bind(), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, e), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER,
								i.validateMagFilter(t))
						}
						static validateMagFilter(e) {
							switch (e) {
								case r.Qb.MipMap:
								case r.Qb.MipMapLinearLinear:
								case r.Qb.MipMapLinearNearest:
								case r.Qb.MipMapNearestLinear:
								case r.Qb.MipMapNearestNearest:
									return r.Qb.Linear;
								default:
									return e
							}
						}
						setWraps(e, t) {
							let a = this.context.gl;
							this.bind(), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, e), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T,
								t)
						}
						update(e) {
							let t = this.context.gl;
							this.texture || (this.texture = this.context.gl.createTexture()), this.bind(), i.DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL &&
								t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE,
									this._image), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D,
									t.TEXTURE_MIN_FILTER, e ? t.LINEAR_MIPMAP_LINEAR : t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S,
									t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), e && t.generateMipmap(t
									.TEXTURE_2D)
						}
						restore() {
							this.texture = null, this.update(this.useMipMaps)
						}
						bind(e = 0) {
							let t = this.context.gl;
							this.boundUnit = e, t.activeTexture(t.TEXTURE0 + e), t.bindTexture(t.TEXTURE_2D, this.texture)
						}
						unbind() {
							let e = this.context.gl;
							e.activeTexture(e.TEXTURE0 + this.boundUnit), e.bindTexture(e.TEXTURE_2D, null)
						}
						dispose() {
							this.context.removeRestorable(this), this.context.gl.deleteTexture(this.texture)
						}
					}
					i.DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL = !1;
					class d extends r.m8 {
						constructor(e, t = "", a = null) {
							super((t => new i(e, t)), t, a)
						}
					}
					class f {
						constructor(e = 0, t = 0, a = 0) {
							this.x = 0, this.y = 0, this.z = 0, this.x = e, this.y = t, this.z = a
						}
						setFrom(e) {
							return this.x = e.x, this.y = e.y, this.z = e.z, this
						}
						set(e, t, a) {
							return this.x = e, this.y = t, this.z = a, this
						}
						add(e) {
							return this.x += e.x, this.y += e.y, this.z += e.z, this
						}
						sub(e) {
							return this.x -= e.x, this.y -= e.y, this.z -= e.z, this
						}
						scale(e) {
							return this.x *= e, this.y *= e, this.z *= e, this
						}
						normalize() {
							let e = this.length();
							return 0 == e || (e = 1 / e, this.x *= e, this.y *= e, this.z *= e), this
						}
						cross(e) {
							return this.set(this.y * e.z - this.z * e.y, this.z * e.x - this.x * e.z, this.x * e.y - this.y * e.x)
						}
						multiply(e) {
							let t = e.values;
							return this.set(this.x * t[o] + this.y * t[s] + this.z * t[b] + t[u], this.x * t[h] + this.y * t[l] + this.z *
								t[x] + t[p], this.x * t[m] + this.y * t[g] + this.z * t[y] + t[v])
						}
						project(e) {
							let t = e.values,
								a = 1 / (this.x * t[w] + this.y * t[_] + this.z * t[k] + t[M]);
							return this.set((this.x * t[o] + this.y * t[s] + this.z * t[b] + t[u]) * a, (this.x * t[h] + this.y * t[l] +
								this.z * t[x] + t[p]) * a, (this.x * t[m] + this.y * t[g] + this.z * t[y] + t[v]) * a)
						}
						dot(e) {
							return this.x * e.x + this.y * e.y + this.z * e.z
						}
						length() {
							return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
						}
						distance(e) {
							let t = e.x - this.x,
								a = e.y - this.y,
								r = e.z - this.z;
							return Math.sqrt(t * t + a * a + r * r)
						}
					}
					const o = 0,
						s = 4,
						b = 8,
						u = 12,
						h = 1,
						l = 5,
						x = 9,
						p = 13,
						m = 2,
						g = 6,
						y = 10,
						v = 14,
						w = 3,
						_ = 7,
						k = 11,
						M = 15;
					class S {
						constructor() {
							this.temp = new Float32Array(16), this.values = new Float32Array(16);
							let e = this.values;
							e[o] = 1, e[l] = 1, e[y] = 1, e[M] = 1
						}
						set(e) {
							return this.values.set(e), this
						}
						transpose() {
							let e = this.temp,
								t = this.values;
							return e[o] = t[o], e[s] = t[h], e[b] = t[m], e[u] = t[w], e[h] = t[s], e[l] = t[l], e[x] = t[g], e[p] = t[_],
								e[m] = t[b], e[g] = t[x], e[y] = t[y], e[v] = t[k], e[w] = t[u], e[_] = t[p], e[k] = t[v], e[M] = t[M], this.set(
									e)
						}
						identity() {
							let e = this.values;
							return e[o] = 1, e[s] = 0, e[b] = 0, e[u] = 0, e[h] = 0, e[l] = 1, e[x] = 0, e[p] = 0, e[m] = 0, e[g] = 0, e[y] =
								1, e[v] = 0, e[w] = 0, e[_] = 0, e[k] = 0, e[M] = 1, this
						}
						invert() {
							let e = this.values,
								t = this.temp,
								a = e[w] * e[g] * e[x] * e[u] - e[m] * e[_] * e[x] * e[u] - e[w] * e[l] * e[y] * e[u] + e[h] * e[_] * e[y] *
								e[u] + e[m] * e[l] * e[k] * e[u] - e[h] * e[g] * e[k] * e[u] - e[w] * e[g] * e[b] * e[p] + e[m] * e[_] * e[b] *
								e[p] + e[w] * e[s] * e[y] * e[p] - e[o] * e[_] * e[y] * e[p] - e[m] * e[s] * e[k] * e[p] + e[o] * e[g] * e[k] *
								e[p] + e[w] * e[l] * e[b] * e[v] - e[h] * e[_] * e[b] * e[v] - e[w] * e[s] * e[x] * e[v] + e[o] * e[_] * e[x] *
								e[v] + e[h] * e[s] * e[k] * e[v] - e[o] * e[l] * e[k] * e[v] - e[m] * e[l] * e[b] * e[M] + e[h] * e[g] * e[b] *
								e[M] + e[m] * e[s] * e[x] * e[M] - e[o] * e[g] * e[x] * e[M] - e[h] * e[s] * e[y] * e[M] + e[o] * e[l] * e[y] *
								e[M];
							if (0 == a) throw new Error("non-invertible matrix");
							let r = 1 / a;
							return t[o] = e[x] * e[v] * e[_] - e[p] * e[y] * e[_] + e[p] * e[g] * e[k] - e[l] * e[v] * e[k] - e[x] * e[g] *
								e[M] + e[l] * e[y] * e[M], t[s] = e[u] * e[y] * e[_] - e[b] * e[v] * e[_] - e[u] * e[g] * e[k] + e[s] * e[v] *
								e[k] + e[b] * e[g] * e[M] - e[s] * e[y] * e[M], t[b] = e[b] * e[p] * e[_] - e[u] * e[x] * e[_] + e[u] * e[l] *
								e[k] - e[s] * e[p] * e[k] - e[b] * e[l] * e[M] + e[s] * e[x] * e[M], t[u] = e[u] * e[x] * e[g] - e[b] * e[p] *
								e[g] - e[u] * e[l] * e[y] + e[s] * e[p] * e[y] + e[b] * e[l] * e[v] - e[s] * e[x] * e[v], t[h] = e[p] * e[y] *
								e[w] - e[x] * e[v] * e[w] - e[p] * e[m] * e[k] + e[h] * e[v] * e[k] + e[x] * e[m] * e[M] - e[h] * e[y] * e[M],
								t[l] = e[b] * e[v] * e[w] - e[u] * e[y] * e[w] + e[u] * e[m] * e[k] - e[o] * e[v] * e[k] - e[b] * e[m] * e[M] +
								e[o] * e[y] * e[M], t[x] = e[u] * e[x] * e[w] - e[b] * e[p] * e[w] - e[u] * e[h] * e[k] + e[o] * e[p] * e[k] +
								e[b] * e[h] * e[M] - e[o] * e[x] * e[M], t[p] = e[b] * e[p] * e[m] - e[u] * e[x] * e[m] + e[u] * e[h] * e[y] -
								e[o] * e[p] * e[y] - e[b] * e[h] * e[v] + e[o] * e[x] * e[v], t[m] = e[l] * e[v] * e[w] - e[p] * e[g] * e[w] +
								e[p] * e[m] * e[_] - e[h] * e[v] * e[_] - e[l] * e[m] * e[M] + e[h] * e[g] * e[M], t[g] = e[u] * e[g] * e[w] -
								e[s] * e[v] * e[w] - e[u] * e[m] * e[_] + e[o] * e[v] * e[_] + e[s] * e[m] * e[M] - e[o] * e[g] * e[M], t[y] =
								e[s] * e[p] * e[w] - e[u] * e[l] * e[w] + e[u] * e[h] * e[_] - e[o] * e[p] * e[_] - e[s] * e[h] * e[M] + e[o] *
								e[l] * e[M], t[v] = e[u] * e[l] * e[m] - e[s] * e[p] * e[m] - e[u] * e[h] * e[g] + e[o] * e[p] * e[g] + e[s] *
								e[h] * e[v] - e[o] * e[l] * e[v], t[w] = e[x] * e[g] * e[w] - e[l] * e[y] * e[w] - e[x] * e[m] * e[_] + e[h] *
								e[y] * e[_] + e[l] * e[m] * e[k] - e[h] * e[g] * e[k], t[_] = e[s] * e[y] * e[w] - e[b] * e[g] * e[w] + e[b] *
								e[m] * e[_] - e[o] * e[y] * e[_] - e[s] * e[m] * e[k] + e[o] * e[g] * e[k], t[k] = e[b] * e[l] * e[w] - e[s] *
								e[x] * e[w] - e[b] * e[h] * e[_] + e[o] * e[x] * e[_] + e[s] * e[h] * e[k] - e[o] * e[l] * e[k], t[M] = e[s] *
								e[x] * e[m] - e[b] * e[l] * e[m] + e[b] * e[h] * e[g] - e[o] * e[x] * e[g] - e[s] * e[h] * e[y] + e[o] * e[l] *
								e[y], e[o] = t[o] * r, e[s] = t[s] * r, e[b] = t[b] * r, e[u] = t[u] * r, e[h] = t[h] * r, e[l] = t[l] * r, e[
									x] = t[x] * r, e[p] = t[p] * r, e[m] = t[m] * r, e[g] = t[g] * r, e[y] = t[y] * r, e[v] = t[v] * r, e[w] = t[
									w] * r, e[_] = t[_] * r, e[k] = t[k] * r, e[M] = t[M] * r, this
						}
						determinant() {
							let e = this.values;
							return e[w] * e[g] * e[x] * e[u] - e[m] * e[_] * e[x] * e[u] - e[w] * e[l] * e[y] * e[u] + e[h] * e[_] * e[y] *
								e[u] + e[m] * e[l] * e[k] * e[u] - e[h] * e[g] * e[k] * e[u] - e[w] * e[g] * e[b] * e[p] + e[m] * e[_] * e[b] *
								e[p] + e[w] * e[s] * e[y] * e[p] - e[o] * e[_] * e[y] * e[p] - e[m] * e[s] * e[k] * e[p] + e[o] * e[g] * e[k] *
								e[p] + e[w] * e[l] * e[b] * e[v] - e[h] * e[_] * e[b] * e[v] - e[w] * e[s] * e[x] * e[v] + e[o] * e[_] * e[x] *
								e[v] + e[h] * e[s] * e[k] * e[v] - e[o] * e[l] * e[k] * e[v] - e[m] * e[l] * e[b] * e[M] + e[h] * e[g] * e[b] *
								e[M] + e[m] * e[s] * e[x] * e[M] - e[o] * e[g] * e[x] * e[M] - e[h] * e[s] * e[y] * e[M] + e[o] * e[l] * e[y] *
								e[M]
						}
						translate(e, t, a) {
							let r = this.values;
							return r[u] += e, r[p] += t, r[v] += a, this
						}
						copy() {
							return (new S).set(this.values)
						}
						projection(e, t, a, r) {
							this.identity();
							let n = 1 / Math.tan(a * (Math.PI / 180) / 2),
								c = (t + e) / (e - t),
								i = 2 * t * e / (e - t),
								d = this.values;
							return d[o] = n / r, d[h] = 0, d[m] = 0, d[w] = 0, d[s] = 0, d[l] = n, d[g] = 0, d[_] = 0, d[b] = 0, d[x] = 0,
								d[y] = c, d[k] = -1, d[u] = 0, d[p] = 0, d[v] = i, d[M] = 0, this
						}
						ortho2d(e, t, a, r) {
							return this.ortho(e, e + a, t, t + r, 0, 1)
						}
						ortho(e, t, a, r, n, c) {
							this.identity();
							let i = 2 / (t - e),
								d = 2 / (r - a),
								f = -2 / (c - n),
								S = -(t + e) / (t - e),
								E = -(r + a) / (r - a),
								A = -(c + n) / (c - n),
								T = this.values;
							return T[o] = i, T[h] = 0, T[m] = 0, T[w] = 0, T[s] = 0, T[l] = d, T[g] = 0, T[_] = 0, T[b] = 0, T[x] = 0, T[y] =
								f, T[k] = 0, T[u] = S, T[p] = E, T[v] = A, T[M] = 1, this
						}
						multiply(e) {
							let t = this.temp,
								a = this.values,
								r = e.values;
							return t[o] = a[o] * r[o] + a[s] * r[h] + a[b] * r[m] + a[u] * r[w], t[s] = a[o] * r[s] + a[s] * r[l] + a[b] *
								r[g] + a[u] * r[_], t[b] = a[o] * r[b] + a[s] * r[x] + a[b] * r[y] + a[u] * r[k], t[u] = a[o] * r[u] + a[s] *
								r[p] + a[b] * r[v] + a[u] * r[M], t[h] = a[h] * r[o] + a[l] * r[h] + a[x] * r[m] + a[p] * r[w], t[l] = a[h] *
								r[s] + a[l] * r[l] + a[x] * r[g] + a[p] * r[_], t[x] = a[h] * r[b] + a[l] * r[x] + a[x] * r[y] + a[p] * r[k],
								t[p] = a[h] * r[u] + a[l] * r[p] + a[x] * r[v] + a[p] * r[M], t[m] = a[m] * r[o] + a[g] * r[h] + a[y] * r[m] +
								a[v] * r[w], t[g] = a[m] * r[s] + a[g] * r[l] + a[y] * r[g] + a[v] * r[_], t[y] = a[m] * r[b] + a[g] * r[x] +
								a[y] * r[y] + a[v] * r[k], t[v] = a[m] * r[u] + a[g] * r[p] + a[y] * r[v] + a[v] * r[M], t[w] = a[w] * r[o] +
								a[_] * r[h] + a[k] * r[m] + a[M] * r[w], t[_] = a[w] * r[s] + a[_] * r[l] + a[k] * r[g] + a[M] * r[_], t[k] =
								a[w] * r[b] + a[_] * r[x] + a[k] * r[y] + a[M] * r[k], t[M] = a[w] * r[u] + a[_] * r[p] + a[k] * r[v] + a[M] *
								r[M], this.set(this.temp)
						}
						multiplyLeft(e) {
							let t = this.temp,
								a = this.values,
								r = e.values;
							return t[o] = r[o] * a[o] + r[s] * a[h] + r[b] * a[m] + r[u] * a[w], t[s] = r[o] * a[s] + r[s] * a[l] + r[b] *
								a[g] + r[u] * a[_], t[b] = r[o] * a[b] + r[s] * a[x] + r[b] * a[y] + r[u] * a[k], t[u] = r[o] * a[u] + r[s] *
								a[p] + r[b] * a[v] + r[u] * a[M], t[h] = r[h] * a[o] + r[l] * a[h] + r[x] * a[m] + r[p] * a[w], t[l] = r[h] *
								a[s] + r[l] * a[l] + r[x] * a[g] + r[p] * a[_], t[x] = r[h] * a[b] + r[l] * a[x] + r[x] * a[y] + r[p] * a[k],
								t[p] = r[h] * a[u] + r[l] * a[p] + r[x] * a[v] + r[p] * a[M], t[m] = r[m] * a[o] + r[g] * a[h] + r[y] * a[m] +
								r[v] * a[w], t[g] = r[m] * a[s] + r[g] * a[l] + r[y] * a[g] + r[v] * a[_], t[y] = r[m] * a[b] + r[g] * a[x] +
								r[y] * a[y] + r[v] * a[k], t[v] = r[m] * a[u] + r[g] * a[p] + r[y] * a[v] + r[v] * a[M], t[w] = r[w] * a[o] +
								r[_] * a[h] + r[k] * a[m] + r[M] * a[w], t[_] = r[w] * a[s] + r[_] * a[l] + r[k] * a[g] + r[M] * a[_], t[k] =
								r[w] * a[b] + r[_] * a[x] + r[k] * a[y] + r[M] * a[k], t[M] = r[w] * a[u] + r[_] * a[p] + r[k] * a[v] + r[M] *
								a[M], this.set(this.temp)
						}
						lookAt(e, t, a) {
							S.initTemps();
							let r = S.xAxis,
								n = S.yAxis,
								c = S.zAxis;
							c.setFrom(t).normalize(), r.setFrom(t).normalize(), r.cross(a).normalize(), n.setFrom(r).cross(c).normalize(),
								this.identity();
							let i = this.values;
							return i[o] = r.x, i[s] = r.y, i[b] = r.z, i[h] = n.x, i[l] = n.y, i[x] = n.z, i[m] = -c.x, i[g] = -c.y, i[y] = -
								c.z, S.tmpMatrix.identity(), S.tmpMatrix.values[u] = -e.x, S.tmpMatrix.values[p] = -e.y, S.tmpMatrix.values[v] = -
								e.z, this.multiply(S.tmpMatrix), this
						}
						static initTemps() {
							null === S.xAxis && (S.xAxis = new f), null === S.yAxis && (S.yAxis = new f), null === S.zAxis && (S.zAxis =
								new f)
						}
					}
					S.xAxis = null, S.yAxis = null, S.zAxis = null, S.tmpMatrix = new S;
					class E {
						constructor(e, t, a) {
							this.vertexShader = t, this.fragmentShader = a, this.vs = null, this.fs = null, this.program = null, this.tmp2x2 =
								new Float32Array(4), this.tmp3x3 = new Float32Array(9), this.tmp4x4 = new Float32Array(16), this.vsSource = t,
								this.fsSource = a, this.context = e instanceof n ? e : new n(e), this.context.addRestorable(this), this.compile()
						}
						getProgram() {
							return this.program
						}
						getVertexShader() {
							return this.vertexShader
						}
						getFragmentShader() {
							return this.fragmentShader
						}
						getVertexShaderSource() {
							return this.vsSource
						}
						getFragmentSource() {
							return this.fsSource
						}
						compile() {
							let e = this.context.gl;
							try {
								this.vs = this.compileShader(e.VERTEX_SHADER, this.vertexShader), this.fs = this.compileShader(e.FRAGMENT_SHADER,
									this.fragmentShader), this.program = this.compileProgram(this.vs, this.fs)
							} catch (e) {
								throw this.dispose(), e
							}
						}
						compileShader(e, t) {
							let a = this.context.gl,
								r = a.createShader(e);
							if (a.shaderSource(r, t), a.compileShader(r), !a.getShaderParameter(r, a.COMPILE_STATUS)) {
								let e = "Couldn't compile shader: " + a.getShaderInfoLog(r);
								if (a.deleteShader(r), !a.isContextLost()) throw new Error(e)
							}
							return r
						}
						compileProgram(e, t) {
							let a = this.context.gl,
								r = a.createProgram();
							if (a.attachShader(r, e), a.attachShader(r, t), a.linkProgram(r), !a.getProgramParameter(r, a.LINK_STATUS)) {
								let e = "Couldn't compile shader program: " + a.getProgramInfoLog(r);
								if (a.deleteProgram(r), !a.isContextLost()) throw new Error(e)
							}
							return r
						}
						restore() {
							this.compile()
						}
						bind() {
							this.context.gl.useProgram(this.program)
						}
						unbind() {
							this.context.gl.useProgram(null)
						}
						setUniformi(e, t) {
							this.context.gl.uniform1i(this.getUniformLocation(e), t)
						}
						setUniformf(e, t) {
							this.context.gl.uniform1f(this.getUniformLocation(e), t)
						}
						setUniform2f(e, t, a) {
							this.context.gl.uniform2f(this.getUniformLocation(e), t, a)
						}
						setUniform3f(e, t, a, r) {
							this.context.gl.uniform3f(this.getUniformLocation(e), t, a, r)
						}
						setUniform4f(e, t, a, r, n) {
							this.context.gl.uniform4f(this.getUniformLocation(e), t, a, r, n)
						}
						setUniform2x2f(e, t) {
							let a = this.context.gl;
							this.tmp2x2.set(t), a.uniformMatrix2fv(this.getUniformLocation(e), !1, this.tmp2x2)
						}
						setUniform3x3f(e, t) {
							let a = this.context.gl;
							this.tmp3x3.set(t), a.uniformMatrix3fv(this.getUniformLocation(e), !1, this.tmp3x3)
						}
						setUniform4x4f(e, t) {
							let a = this.context.gl;
							this.tmp4x4.set(t), a.uniformMatrix4fv(this.getUniformLocation(e), !1, this.tmp4x4)
						}
						getUniformLocation(e) {
							let t = this.context.gl,
								a = t.getUniformLocation(this.program, e);
							if (!a && !t.isContextLost()) throw new Error(`Couldn't find location for uniform ${e}`);
							return a
						}
						getAttributeLocation(e) {
							let t = this.context.gl,
								a = t.getAttribLocation(this.program, e);
							if (-1 == a && !t.isContextLost()) throw new Error(`Couldn't find location for attribute ${e}`);
							return a
						}
						dispose() {
							this.context.removeRestorable(this);
							let e = this.context.gl;
							this.vs && (e.deleteShader(this.vs), this.vs = null), this.fs && (e.deleteShader(this.fs), this.fs = null),
								this.program && (e.deleteProgram(this.program), this.program = null)
						}
						static newColoredTextured(e) {
							let t =
								`\n\t\t\t\tattribute vec4 ${E.POSITION};\n\t\t\t\tattribute vec4 ${E.COLOR};\n\t\t\t\tattribute vec2 ${E.TEXCOORDS};\n\t\t\t\tuniform mat4 ${E.MVP_MATRIX};\n\t\t\t\tvarying vec4 v_color;\n\t\t\t\tvarying vec2 v_texCoords;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_color = ${E.COLOR};\n\t\t\t\t\tv_texCoords = ${E.TEXCOORDS};\n\t\t\t\t\tgl_Position = ${E.MVP_MATRIX} * ${E.POSITION};\n\t\t\t\t}\n\t\t\t`;
							return new E(e, t,
								"\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_color;\n\t\t\t\tvarying vec2 v_texCoords;\n\t\t\t\tuniform sampler2D u_texture;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tgl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n\t\t\t\t}\n\t\t\t"
							)
						}
						static newTwoColoredTextured(e) {
							let t =
								`\n\t\t\t\tattribute vec4 ${E.POSITION};\n\t\t\t\tattribute vec4 ${E.COLOR};\n\t\t\t\tattribute vec4 ${E.COLOR2};\n\t\t\t\tattribute vec2 ${E.TEXCOORDS};\n\t\t\t\tuniform mat4 ${E.MVP_MATRIX};\n\t\t\t\tvarying vec4 v_light;\n\t\t\t\tvarying vec4 v_dark;\n\t\t\t\tvarying vec2 v_texCoords;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_light = ${E.COLOR};\n\t\t\t\t\tv_dark = ${E.COLOR2};\n\t\t\t\t\tv_texCoords = ${E.TEXCOORDS};\n\t\t\t\t\tgl_Position = ${E.MVP_MATRIX} * ${E.POSITION};\n\t\t\t\t}\n\t\t\t`;
							return new E(e, t,
								"\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_light;\n\t\t\t\tvarying LOWP vec4 v_dark;\n\t\t\t\tvarying vec2 v_texCoords;\n\t\t\t\tuniform sampler2D u_texture;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tvec4 texColor = texture2D(u_texture, v_texCoords);\n\t\t\t\t\tgl_FragColor.a = texColor.a * v_light.a;\n\t\t\t\t\tgl_FragColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n\t\t\t\t}\n\t\t\t"
							)
						}
						static newColored(e) {
							let t =
								`\n\t\t\t\tattribute vec4 ${E.POSITION};\n\t\t\t\tattribute vec4 ${E.COLOR};\n\t\t\t\tuniform mat4 ${E.MVP_MATRIX};\n\t\t\t\tvarying vec4 v_color;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_color = ${E.COLOR};\n\t\t\t\t\tgl_Position = ${E.MVP_MATRIX} * ${E.POSITION};\n\t\t\t\t}\n\t\t\t`;
							return new E(e, t,
								"\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_color;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tgl_FragColor = v_color;\n\t\t\t\t}\n\t\t\t"
							)
						}
					}
					E.MVP_MATRIX = "u_projTrans", E.POSITION = "a_position", E.COLOR = "a_color", E.COLOR2 = "a_color2", E.TEXCOORDS =
						"a_texCoords", E.SAMPLER = "u_texture";
					class A {
						constructor(e, t, a, r) {
							this.attributes = t, this.verticesLength = 0, this.dirtyVertices = !1, this.indicesLength = 0, this.dirtyIndices = !
								1, this.elementsPerVertex = 0, this.context = e instanceof n ? e : new n(e), this.elementsPerVertex = 0;
							for (let e = 0; e < t.length; e++) this.elementsPerVertex += t[e].numElements;
							this.vertices = new Float32Array(a * this.elementsPerVertex), this.indices = new Uint16Array(r), this.context.addRestorable(
								this)
						}
						getAttributes() {
							return this.attributes
						}
						maxVertices() {
							return this.vertices.length / this.elementsPerVertex
						}
						numVertices() {
							return this.verticesLength / this.elementsPerVertex
						}
						setVerticesLength(e) {
							this.dirtyVertices = !0, this.verticesLength = e
						}
						getVertices() {
							return this.vertices
						}
						maxIndices() {
							return this.indices.length
						}
						numIndices() {
							return this.indicesLength
						}
						setIndicesLength(e) {
							this.dirtyIndices = !0, this.indicesLength = e
						}
						getIndices() {
							return this.indices
						}
						getVertexSizeInFloats() {
							let e = 0;
							for (var t = 0; t < this.attributes.length; t++) e += this.attributes[t].numElements;
							return e
						}
						setVertices(e) {
							if (this.dirtyVertices = !0, e.length > this.vertices.length) throw Error("Mesh can't store more than " + this
								.maxVertices() + " vertices");
							this.vertices.set(e, 0), this.verticesLength = e.length
						}
						setIndices(e) {
							if (this.dirtyIndices = !0, e.length > this.indices.length) throw Error("Mesh can't store more than " + this.maxIndices() +
								" indices");
							this.indices.set(e, 0), this.indicesLength = e.length
						}
						draw(e, t) {
							this.drawWithOffset(e, t, 0, this.indicesLength > 0 ? this.indicesLength : this.verticesLength / this.elementsPerVertex)
						}
						drawWithOffset(e, t, a, r) {
							let n = this.context.gl;
							(this.dirtyVertices || this.dirtyIndices) && this.update(), this.bind(e), this.indicesLength > 0 ? n.drawElements(
								t, r, n.UNSIGNED_SHORT, 2 * a) : n.drawArrays(t, a, r), this.unbind(e)
						}
						bind(e) {
							let t = this.context.gl;
							t.bindBuffer(t.ARRAY_BUFFER, this.verticesBuffer);
							let a = 0;
							for (let r = 0; r < this.attributes.length; r++) {
								let n = this.attributes[r],
									c = e.getAttributeLocation(n.name);
								t.enableVertexAttribArray(c), t.vertexAttribPointer(c, n.numElements, t.FLOAT, !1, 4 * this.elementsPerVertex,
									4 * a), a += n.numElements
							}
							this.indicesLength > 0 && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indicesBuffer)
						}
						unbind(e) {
							let t = this.context.gl;
							for (let a = 0; a < this.attributes.length; a++) {
								let r = this.attributes[a],
									n = e.getAttributeLocation(r.name);
								t.disableVertexAttribArray(n)
							}
							t.bindBuffer(t.ARRAY_BUFFER, null), this.indicesLength > 0 && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
						}
						update() {
							let e = this.context.gl;
							this.dirtyVertices && (this.verticesBuffer || (this.verticesBuffer = e.createBuffer()), e.bindBuffer(e.ARRAY_BUFFER,
									this.verticesBuffer), e.bufferData(e.ARRAY_BUFFER, this.vertices.subarray(0, this.verticesLength), e.DYNAMIC_DRAW),
								this.dirtyVertices = !1), this.dirtyIndices && (this.indicesBuffer || (this.indicesBuffer = e.createBuffer()),
								e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indicesBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices.subarray(
									0, this.indicesLength), e.DYNAMIC_DRAW), this.dirtyIndices = !1)
						}
						restore() {
							this.verticesBuffer = null, this.indicesBuffer = null, this.update()
						}
						dispose() {
							this.context.removeRestorable(this);
							let e = this.context.gl;
							e.deleteBuffer(this.verticesBuffer), e.deleteBuffer(this.indicesBuffer)
						}
					}
					class T {
						constructor(e, t, a) {
							this.name = e, this.type = t, this.numElements = a
						}
					}
					class R extends T {
						constructor() {
							super(E.POSITION, O.Float, 2)
						}
					}
					class I extends T {
						constructor(e = 0) {
							super(E.TEXCOORDS + (0 == e ? "" : e), O.Float, 2)
						}
					}
					class P extends T {
						constructor() {
							super(E.COLOR, O.Float, 4)
						}
					}
					class C extends T {
						constructor() {
							super(E.COLOR2, O.Float, 4)
						}
					}
					var O, N, B, L;
					! function(e) {
						e[e.Float = 0] = "Float"
					}(O || (O = {}));
					class U {
						constructor(e, t = !0, a = 10920) {
							if (this.isDrawing = !1, this.shader = null, this.lastTexture = null, this.verticesLength = 0, this.indicesLength =
								0, a > 10920) throw new Error("Can't have more than 10920 triangles per batch: " + a);
							this.context = e instanceof n ? e : new n(e);
							let r = t ? [new R, new P, new I, new C] : [new R, new P, new I];
							this.mesh = new A(e, r, a, 3 * a);
							let c = this.context.gl;
							this.srcColorBlend = c.SRC_ALPHA, this.srcAlphaBlend = c.ONE, this.dstBlend = c.ONE_MINUS_SRC_ALPHA
						}
						begin(e) {
							if (this.isDrawing) throw new Error(
								"PolygonBatch is already drawing. Call PolygonBatch.end() before calling PolygonBatch.begin()");
							this.drawCalls = 0, this.shader = e, this.lastTexture = null, this.isDrawing = !0;
							let t = this.context.gl;
							t.enable(t.BLEND), t.blendFuncSeparate(this.srcColorBlend, this.dstBlend, this.srcAlphaBlend, this.dstBlend)
						}
						setBlendMode(e, t, a) {
							this.srcColorBlend == e && this.srcAlphaBlend == t && this.dstBlend == a || (this.srcColorBlend = e, this.srcAlphaBlend =
								t, this.dstBlend = a, !this.isDrawing) || (this.flush(), this.context.gl.blendFuncSeparate(e, a, t, a))
						}
						draw(e, t, a) {
							e != this.lastTexture ? (this.flush(), this.lastTexture = e) : (this.verticesLength + t.length > this.mesh.getVertices()
								.length || this.indicesLength + a.length > this.mesh.getIndices().length) && this.flush();
							let r = this.mesh.numVertices();
							this.mesh.getVertices().set(t, this.verticesLength), this.verticesLength += t.length, this.mesh.setVerticesLength(
								this.verticesLength);
							let n = this.mesh.getIndices();
							for (let e = this.indicesLength, t = 0; t < a.length; e++, t++) n[e] = a[t] + r;
							this.indicesLength += a.length, this.mesh.setIndicesLength(this.indicesLength)
						}
						flush() {
							0 != this.verticesLength && (this.lastTexture.bind(), this.mesh.draw(this.shader, this.context.gl.TRIANGLES),
								this.verticesLength = 0, this.indicesLength = 0, this.mesh.setVerticesLength(0), this.mesh.setIndicesLength(
									0), this.drawCalls++)
						}
						end() {
							if (!this.isDrawing) throw new Error(
								"PolygonBatch is not drawing. Call PolygonBatch.begin() before calling PolygonBatch.end()");
							(this.verticesLength > 0 || this.indicesLength > 0) && this.flush(), this.shader = null, this.lastTexture =
								null, this.isDrawing = !1;
							let e = this.context.gl;
							e.disable(e.BLEND)
						}
						getDrawCalls() {
							return this.drawCalls
						}
						dispose() {
							this.mesh.dispose()
						}
					}! function(e) {
						e[e.Point = 0] = "Point", e[e.Line = 1] = "Line", e[e.Filled = 4] = "Filled"
					}(N || (N = {}));
					class j {
						constructor(e) {
							this.boneLineColor = new r.Il(1, 0, 0, 1), this.boneOriginColor = new r.Il(0, 1, 0, 1), this.attachmentLineColor =
								new r.Il(0, 0, 1, .5), this.triangleLineColor = new r.Il(1, .64, 0, .5), this.pathColor = (new r.Il).setFromString(
									"FF7F00"), this.clipColor = new r.Il(.8, 0, 0, 2), this.aabbColor = new r.Il(0, 1, 0, .5), this.drawBones = !
								0, this.drawRegionAttachments = !0, this.drawBoundingBoxes = !0, this.drawMeshHull = !0, this.drawMeshTriangles = !
								0, this.drawPaths = !0, this.drawSkeletonXY = !1, this.drawClipping = !0, this.premultipliedAlpha = !1, this.scale =
								1, this.boneWidth = 2, this.bounds = new r.Cf, this.temp = new Array, this.vertices = r.cQ.newFloatArray(2048),
								this.context = e instanceof n ? e : new n(e)
						}
						draw(e, t, a = null) {
							let n = t.x,
								c = t.y,
								i = this.context.gl,
								d = this.premultipliedAlpha ? i.ONE : i.SRC_ALPHA;
							e.setBlendMode(d, i.ONE, i.ONE_MINUS_SRC_ALPHA);
							let f = t.bones;
							if (this.drawBones) {
								e.setColor(this.boneLineColor);
								for (let t = 0, r = f.length; t < r; t++) {
									let r = f[t];
									if (a && a.indexOf(r.data.name) > -1) continue;
									if (!r.parent) continue;
									let i = n + r.data.length * r.a + r.worldX,
										d = c + r.data.length * r.c + r.worldY;
									e.rectLine(!0, n + r.worldX, c + r.worldY, i, d, this.boneWidth * this.scale)
								}
								this.drawSkeletonXY && e.x(n, c, 4 * this.scale)
							}
							if (this.drawRegionAttachments) {
								e.setColor(this.attachmentLineColor);
								let a = t.slots;
								for (let t = 0, n = a.length; t < n; t++) {
									let n = a[t],
										c = n.getAttachment();
									if (c instanceof r.MM) {
										let t = c,
											a = this.vertices;
										t.computeWorldVertices(n.bone, a, 0, 2), e.line(a[0], a[1], a[2], a[3]), e.line(a[2], a[3], a[4], a[5]), e.line(
											a[4], a[5], a[6], a[7]), e.line(a[6], a[7], a[0], a[1])
									}
								}
							}
							if (this.drawMeshHull || this.drawMeshTriangles) {
								let a = t.slots;
								for (let t = 0, n = a.length; t < n; t++) {
									let n = a[t];
									if (!n.bone.active) continue;
									let c = n.getAttachment();
									if (!(c instanceof r._g)) continue;
									let i = c,
										d = this.vertices;
									i.computeWorldVertices(n, 0, i.worldVerticesLength, d, 0, 2);
									let f = i.triangles,
										o = i.hullLength;
									if (this.drawMeshTriangles) {
										e.setColor(this.triangleLineColor);
										for (let t = 0, a = f.length; t < a; t += 3) {
											let a = 2 * f[t],
												r = 2 * f[t + 1],
												n = 2 * f[t + 2];
											e.triangle(!1, d[a], d[a + 1], d[r], d[r + 1], d[n], d[n + 1])
										}
									}
									if (this.drawMeshHull && o > 0) {
										e.setColor(this.attachmentLineColor), o = 2 * (o >> 1);
										let t = d[o - 2],
											a = d[o - 1];
										for (let r = 0, n = o; r < n; r += 2) {
											let n = d[r],
												c = d[r + 1];
											e.line(n, c, t, a), t = n, a = c
										}
									}
								}
							}
							if (this.drawBoundingBoxes) {
								let a = this.bounds;
								a.update(t, !0), e.setColor(this.aabbColor), e.rect(!1, a.minX, a.minY, a.getWidth(), a.getHeight());
								let r = a.polygons,
									n = a.boundingBoxes;
								for (let t = 0, a = r.length; t < a; t++) {
									let a = r[t];
									e.setColor(n[t].color), e.polygon(a, 0, a.length)
								}
							}
							if (this.drawPaths) {
								let a = t.slots;
								for (let t = 0, n = a.length; t < n; t++) {
									let n = a[t];
									if (!n.bone.active) continue;
									let c = n.getAttachment();
									if (!(c instanceof r.vu)) continue;
									let i = c,
										d = i.worldVerticesLength,
										f = this.temp = r.cQ.setArraySize(this.temp, d, 0);
									i.computeWorldVertices(n, 0, d, f, 0, 2);
									let o = this.pathColor,
										s = f[2],
										b = f[3],
										u = 0,
										h = 0;
									if (i.closed) {
										e.setColor(o);
										let t = f[0],
											a = f[1],
											r = f[d - 2],
											n = f[d - 1];
										u = f[d - 4], h = f[d - 3], e.curve(s, b, t, a, r, n, u, h, 32), e.setColor(j.LIGHT_GRAY), e.line(s, b, t,
											a), e.line(u, h, r, n)
									}
									d -= 4;
									for (let t = 4; t < d; t += 6) {
										let a = f[t],
											r = f[t + 1],
											n = f[t + 2],
											c = f[t + 3];
										u = f[t + 4], h = f[t + 5], e.setColor(o), e.curve(s, b, a, r, n, c, u, h, 32), e.setColor(j.LIGHT_GRAY), e
											.line(s, b, a, r), e.line(u, h, n, c), s = u, b = h
									}
								}
							}
							if (this.drawBones) {
								e.setColor(this.boneOriginColor);
								for (let t = 0, r = f.length; t < r; t++) {
									let r = f[t];
									a && a.indexOf(r.data.name) > -1 || e.circle(!0, n + r.worldX, c + r.worldY, 3 * this.scale, j.GREEN, 8)
								}
							}
							if (this.drawClipping) {
								let a = t.slots;
								e.setColor(this.clipColor);
								for (let t = 0, n = a.length; t < n; t++) {
									let n = a[t];
									if (!n.bone.active) continue;
									let c = n.getAttachment();
									if (!(c instanceof r.Ad)) continue;
									let i = c,
										d = i.worldVerticesLength,
										f = this.temp = r.cQ.setArraySize(this.temp, d, 0);
									i.computeWorldVertices(n, 0, d, f, 0, 2);
									for (let t = 0, a = f.length; t < a; t += 2) {
										let a = f[t],
											r = f[t + 1],
											n = f[(t + 2) % f.length],
											c = f[(t + 3) % f.length];
										e.line(a, r, n, c)
									}
								}
							}
						}
						dispose() {}
					}
					j.LIGHT_GRAY = new r.Il(192 / 255, 192 / 255, 192 / 255, 1), j.GREEN = new r.Il(0, 1, 0, 1);
					class D {
						constructor(e, t, a) {
							this.vertices = e, this.numVertices = t, this.numFloats = a
						}
					}
					class F {
						constructor(e, t = !0) {
							this.premultipliedAlpha = !1, this.vertexEffect = null, this.tempColor = new r.Il, this.tempColor2 = new r.Il,
								this.vertexSize = 8, this.twoColorTint = !1, this.renderable = new D(null, 0, 0), this.clipper = new r.$c,
								this.temp = new r.FM, this.temp2 = new r.FM, this.temp3 = new r.Il, this.temp4 = new r.Il, this.twoColorTint =
								t, t && (this.vertexSize += 4), this.vertices = r.cQ.newFloatArray(1024 * this.vertexSize)
						}
						draw(e, t, a = -1, n = -1) {
							let i = this.clipper,
								d = this.premultipliedAlpha,
								f = this.twoColorTint,
								o = null,
								s = this.temp,
								b = this.temp2,
								u = this.temp3,
								h = this.temp4,
								l = this.renderable,
								x = null,
								p = null,
								m = t.drawOrder,
								g = null,
								y = t.color,
								v = f ? 12 : 8,
								w = !1; - 1 == a && (w = !0);
							for (let t = 0, _ = m.length; t < _; t++) {
								let _ = i.isClipping() ? 2 : v,
									k = m[t];
								if (!k.bone.active) {
									i.clipEndWithSlot(k);
									continue
								}
								if (a >= 0 && a == k.data.index && (w = !0), !w) {
									i.clipEndWithSlot(k);
									continue
								}
								n >= 0 && n == k.data.index && (w = !1);
								let M = k.getAttachment(),
									S = null;
								if (M instanceof r.MM) {
									let e = M;
									l.vertices = this.vertices, l.numVertices = 4, l.numFloats = _ << 2, e.computeWorldVertices(k.bone, l.vertices,
										0, _), p = F.QUAD_TRIANGLES, x = e.uvs, S = e.region.renderObject.page.texture, g = e.color
								} else {
									if (!(M instanceof r._g)) {
										if (M instanceof r.Ad) {
											let e = M;
											i.clipStart(k, e);
											continue
										}
										i.clipEndWithSlot(k);
										continue
									} {
										let e = M;
										l.vertices = this.vertices, l.numVertices = e.worldVerticesLength >> 1, l.numFloats = l.numVertices * _, l.numFloats >
											l.vertices.length && (l.vertices = this.vertices = r.cQ.newFloatArray(l.numFloats)), e.computeWorldVertices(
												k, 0, e.worldVerticesLength, l.vertices, 0, _), p = e.triangles, S = e.region.renderObject.page.texture,
											x = e.uvs, g = e.color
									}
								}
								if (S) {
									let t = k.color,
										a = this.tempColor;
									a.r = y.r * t.r * g.r, a.g = y.g * t.g * g.g, a.b = y.b * t.b * g.b, a.a = y.a * t.a * g.a, d && (a.r *= a.a,
										a.g *= a.a, a.b *= a.a);
									let r = this.tempColor2;
									k.darkColor ? (d ? (r.r = k.darkColor.r * a.a, r.g = k.darkColor.g * a.a, r.b = k.darkColor.b * a.a) : r.setFromColor(
										k.darkColor), r.a = d ? 1 : 0) : r.set(0, 0, 0, 1);
									let n = k.data.blendMode;
									if (n != o && (o = n, e.setBlendMode(c.getSourceColorGLBlendMode(o, d), c.getSourceAlphaGLBlendMode(o), c.getDestGLBlendMode(
											o))), i.isClipping()) {
										i.clipTriangles(l.vertices, l.numFloats, p, p.length, x, a, r, f);
										let t = new Float32Array(i.clippedVertices),
											n = i.clippedTriangles;
										if (this.vertexEffect) {
											let e = this.vertexEffect,
												a = t;
											if (f)
												for (let r = 0, n = t.length; r < n; r += v) s.x = a[r], s.y = a[r + 1], u.set(a[r + 2], a[r + 3], a[r +
														4], a[r + 5]), b.x = a[r + 6], b.y = a[r + 7], h.set(a[r + 8], a[r + 9], a[r + 10], a[r + 11]), e.transform(
														s, b, u, h), a[r] = s.x, a[r + 1] = s.y, a[r + 2] = u.r, a[r + 3] = u.g, a[r + 4] = u.b, a[r + 5] = u.a,
													a[r + 6] = b.x, a[r + 7] = b.y, a[r + 8] = h.r, a[r + 9] = h.g, a[r + 10] = h.b, a[r + 11] = h.a;
											else
												for (let r = 0, n = t.length; r < n; r += v) s.x = a[r], s.y = a[r + 1], u.set(a[r + 2], a[r + 3], a[r +
														4], a[r + 5]), b.x = a[r + 6], b.y = a[r + 7], h.set(0, 0, 0, 0), e.transform(s, b, u, h), a[r] = s.x,
													a[r + 1] = s.y, a[r + 2] = u.r, a[r + 3] = u.g, a[r + 4] = u.b, a[r + 5] = u.a, a[r + 6] = b.x, a[r + 7] =
													b.y
										}
										e.draw(S, t, n)
									} else {
										let t = l.vertices;
										if (this.vertexEffect) {
											let e = this.vertexEffect;
											if (f)
												for (let n = 0, c = 0, i = l.numFloats; n < i; n += v, c += 2) s.x = t[n], s.y = t[n + 1], b.x = x[c], b.y =
													x[c + 1], u.setFromColor(a), h.setFromColor(r), e.transform(s, b, u, h), t[n] = s.x, t[n + 1] = s.y, t[n +
														2] = u.r, t[n + 3] = u.g, t[n + 4] = u.b, t[n + 5] = u.a, t[n + 6] = b.x, t[n + 7] = b.y, t[n + 8] = h.r,
													t[n + 9] = h.g, t[n + 10] = h.b, t[n + 11] = h.a;
											else
												for (let r = 0, n = 0, c = l.numFloats; r < c; r += v, n += 2) s.x = t[r], s.y = t[r + 1], b.x = x[n], b.y =
													x[n + 1], u.setFromColor(a), h.set(0, 0, 0, 0), e.transform(s, b, u, h), t[r] = s.x, t[r + 1] = s.y, t[r +
														2] = u.r, t[r + 3] = u.g, t[r + 4] = u.b, t[r + 5] = u.a, t[r + 6] = b.x, t[r + 7] = b.y
										} else if (f)
											for (let e = 2, n = 0, c = l.numFloats; e < c; e += v, n += 2) t[e] = a.r, t[e + 1] = a.g, t[e + 2] = a.b,
												t[e + 3] = a.a, t[e + 4] = x[n], t[e + 5] = x[n + 1], t[e + 6] = r.r, t[e + 7] = r.g, t[e + 8] = r.b, t[e +
													9] = r.a;
										else
											for (let e = 2, r = 0, n = l.numFloats; e < n; e += v, r += 2) t[e] = a.r, t[e + 1] = a.g, t[e + 2] = a.b,
												t[e + 3] = a.a, t[e + 4] = x[r], t[e + 5] = x[r + 1];
										let n = l.vertices.subarray(0, l.numFloats);
										e.draw(S, n, p)
									}
								}
								i.clipEndWithSlot(k)
							}
							i.clipEnd()
						}
					}
					F.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0], new r.Il(1, 1, 1, 1), (L = B || (B = {}))[L.Stretch = 0] = "Stretch", L[L.Expand =
						1] = "Expand", L[L.Fit = 2] = "Fit"
				},
				74083: function(e, t, a) {
					"use strict";
					var r = this && this.__values || function(e) {
							var t = "function" == typeof Symbol && Symbol.iterator,
								a = t && e[t],
								r = 0;
							if (a) return a.call(e);
							if (e && "number" == typeof e.length) return {
								next: function() {
									return e && r >= e.length && (e = void 0), {
										value: e && e[r++],
										done: !e
									}
								}
							};
							throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
						},
						n = this && this.__importDefault || function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						};
					Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.chains = t._getInitializedChains = void 0;
					var c = n(a(87295)),
						i = n(a(31227)),
						d = n(a(40439)),
						f = n(a(37098)),
						o = n(a(17687)),
						s = n(a(49422));

					function b(e) {
						var t, a, n = {
								1: "mainnet",
								3: "ropsten",
								4: "rinkeby",
								42: "kovan",
								5: "goerli",
								11155111: "sepolia"
							},
							b = {
								mainnet: c.default,
								ropsten: i.default,
								rinkeby: d.default,
								kovan: f.default,
								goerli: o.default,
								sepolia: s.default
							};
						if (e) try {
							for (var u = r(e), h = u.next(); !h.done; h = u.next()) {
								var l = h.value,
									x = l.name;
								n[l.chainId.toString()] = x, b[x] = l
							}
						} catch (e) {
							t = {
								error: e
							}
						} finally {
							try {
								h && !h.done && (a = u.return) && a.call(u)
							} finally {
								if (t) throw t.error
							}
						}
						return b.names = n, b
					}
					t._getInitializedChains = b, t.chains = b()
				},
				97616: (e, t, a) => {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.EIPs = void 0, t.EIPs = {
						1559: a(77523),
						2315: a(83339),
						2537: a(26769),
						2565: a(17897),
						2718: a(62170),
						2929: a(88436),
						2930: a(96213),
						3198: a(25491),
						3529: a(20070),
						3540: a(52256),
						3541: a(21871),
						3554: a(47225),
						3607: a(3968),
						3670: a(74290),
						3675: a(98571),
						3855: a(64551),
						3860: a(94300),
						4345: a(74818),
						4399: a(68372)
					}
				},
				37459: (e, t, a) => {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.hardforks = void 0, t.hardforks = [
						["chainstart", a(60114)],
						["homestead", a(62800)],
						["dao", a(7197)],
						["tangerineWhistle", a(22302)],
						["spuriousDragon", a(90716)],
						["byzantium", a(26985)],
						["constantinople", a(35993)],
						["petersburg", a(4064)],
						["istanbul", a(83166)],
						["muirGlacier", a(42946)],
						["berlin", a(20015)],
						["london", a(61250)],
						["shanghai", a(5553)],
						["arrowGlacier", a(51971)],
						["preMerge", a(93470)],
						["merge", a(88648)]
					]
				},
				2832: function(e, t, a) {
					"use strict";
					var r, n = a(23085).Buffer,
						c = this && this.__extends || (r = function(e, t) {
							return r = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
							}, r(e, t)
						}, function(e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) +
								" is not a constructor or null");

							function a() {
								this.constructor = e
							}
							r(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
						}),
						i = this && this.__assign || function() {
							return i = Object.assign || function(e) {
								for (var t, a = 1, r = arguments.length; a < r; a++)
									for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
								return e
							}, i.apply(this, arguments)
						},
						d = this && this.__values || function(e) {
							var t = "function" == typeof Symbol && Symbol.iterator,
								a = t && e[t],
								r = 0;
							if (a) return a.call(e);
							if (e && "number" == typeof e.length) return {
								next: function() {
									return e && r >= e.length && (e = void 0), {
										value: e && e[r++],
										done: !e
									}
								}
							};
							throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
						};
					Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.ConsensusAlgorithm = t.ConsensusType = t.Hardfork = t.Chain = t.CustomChain = void 0;
					var f, o, s, b, u, h = a(17187),
						l = a(34606),
						x = a(22751),
						p = a(74083),
						m = a(37459),
						g = a(97616);
					! function(e) {
						e.PolygonMainnet = "polygon-mainnet", e.PolygonMumbai = "polygon-mumbai", e.ArbitrumRinkebyTestnet =
							"arbitrum-rinkeby-testnet", e.xDaiChain = "x-dai-chain", e.OptimisticKovan = "optimistic-kovan", e.OptimisticEthereum =
							"optimistic-ethereum"
					}(f = t.CustomChain || (t.CustomChain = {})), (u = t.Chain || (t.Chain = {}))[u.Mainnet = 1] = "Mainnet", u[u.Ropsten =
							3] = "Ropsten", u[u.Rinkeby = 4] = "Rinkeby", u[u.Kovan = 42] = "Kovan", u[u.Goerli = 5] = "Goerli", u[u.Sepolia =
							11155111] = "Sepolia",
						function(e) {
							e.Chainstart = "chainstart", e.Homestead = "homestead", e.Dao = "dao", e.TangerineWhistle = "tangerineWhistle",
								e.SpuriousDragon = "spuriousDragon", e.Byzantium = "byzantium", e.Constantinople = "constantinople", e.Petersburg =
								"petersburg", e.Istanbul = "istanbul", e.MuirGlacier = "muirGlacier", e.Berlin = "berlin", e.London = "london",
								e.ArrowGlacier = "arrowGlacier", e.Shanghai = "shanghai", e.PreMerge = "preMerge", e.Merge = "merge"
						}(o = t.Hardfork || (t.Hardfork = {})), (b = t.ConsensusType || (t.ConsensusType = {})).ProofOfStake = "pos", b.ProofOfWork =
						"pow", b.ProofOfAuthority = "poa", (s = t.ConsensusAlgorithm || (t.ConsensusAlgorithm = {})).Ethash = "ethash",
						s.Clique = "clique", s.Casper = "casper";
					var y = function(e) {
						function t(t) {
							var a, r, n, c, i = this;
							(i = e.call(this) || this)._supportedHardforks = [], i._eips = [], i._customChains = null !== (n = t.customChains) &&
								void 0 !== n ? n : [], i._chainParams = i.setChain(t.chain), i.DEFAULT_HARDFORK = null !== (c = i._chainParams
									.defaultHardfork) && void 0 !== c ? c : o.Istanbul;
							try {
								for (var f = d(i._chainParams.hardforks), s = f.next(); !s.done; s = f.next()) {
									var b = s.value;
									b.forkHash || (b.forkHash = i._calcForkHash(b.name))
								}
							} catch (e) {
								a = {
									error: e
								}
							} finally {
								try {
									s && !s.done && (r = f.return) && r.call(f)
								} finally {
									if (a) throw a.error
								}
							}
							return i._hardfork = i.DEFAULT_HARDFORK, t.supportedHardforks && (i._supportedHardforks = t.supportedHardforks),
								t.hardfork && i.setHardfork(t.hardfork), t.eips && i.setEIPs(t.eips), i
						}
						return c(t, e), t.custom = function(e, a) {
							var r;
							void 0 === a && (a = {});
							var n = null !== (r = a.baseChain) && void 0 !== r ? r : "mainnet",
								c = i({}, t._getChainParams(n));
							if (c.name = "custom-chain", "string" != typeof e) return new t(i({
								chain: i(i({}, c), e)
							}, a));
							if (e === f.PolygonMainnet) return t.custom({
								name: f.PolygonMainnet,
								chainId: 137,
								networkId: 137
							});
							if (e === f.PolygonMumbai) return t.custom({
								name: f.PolygonMumbai,
								chainId: 80001,
								networkId: 80001
							});
							if (e === f.ArbitrumRinkebyTestnet) return t.custom({
								name: f.ArbitrumRinkebyTestnet,
								chainId: 421611,
								networkId: 421611
							});
							if (e === f.xDaiChain) return t.custom({
								name: f.xDaiChain,
								chainId: 100,
								networkId: 100
							});
							if (e === f.OptimisticKovan) return t.custom({
								name: f.OptimisticKovan,
								chainId: 69,
								networkId: 69
							}, {
								hardfork: o.Berlin
							});
							if (e === f.OptimisticEthereum) return t.custom({
								name: f.OptimisticEthereum,
								chainId: 10,
								networkId: 10
							}, {
								hardfork: o.Berlin
							});
							throw new Error("Custom chain ".concat(e, " not supported"))
						}, t.forCustomChain = function(e, a, r, n) {
							var c = t._getChainParams(e);
							return new t({
								chain: i(i({}, c), a),
								hardfork: r,
								supportedHardforks: n
							})
						}, t.isSupportedChainId = function(e) {
							var t = (0, p._getInitializedChains)();
							return Boolean(t.names[e.toString()])
						}, t._getChainParams = function(e, t) {
							var a = (0, p._getInitializedChains)(t);
							if ("number" == typeof e || x.BN.isBN(e)) {
								if (e = e.toString(), a.names[e]) return a[a.names[e]];
								throw new Error("Chain with ID ".concat(e, " not supported"))
							}
							if (a[e]) return a[e];
							throw new Error("Chain with name ".concat(e, " not supported"))
						}, t.prototype.setChain = function(e) {
							var a, r;
							if ("number" == typeof e || "string" == typeof e || x.BN.isBN(e)) {
								var n;
								n = this._customChains && this._customChains.length > 0 && Array.isArray(this._customChains[0]) ? this._customChains
									.map((function(e) {
										return e[0]
									})) : this._customChains, this._chainParams = t._getChainParams(e, n)
							} else {
								if ("object" != typeof e) throw new Error("Wrong input format");
								if (this._customChains.length > 0) throw new Error(
									"Chain must be a string, number, or BN when initialized with customChains passed in");
								try {
									for (var c = d(["networkId", "genesis", "hardforks", "bootstrapNodes"]), i = c.next(); !i.done; i = c.next()) {
										var f = i.value;
										if (void 0 === e[f]) throw new Error("Missing required chain parameter: ".concat(f))
									}
								} catch (e) {
									a = {
										error: e
									}
								} finally {
									try {
										i && !i.done && (r = c.return) && r.call(c)
									} finally {
										if (a) throw a.error
									}
								}
								this._chainParams = e
							}
							return this._chainParams
						}, t.prototype.setHardfork = function(e) {
							var t, a;
							if (!this._isSupportedHardfork(e)) throw new Error("Hardfork ".concat(e,
								" not set as supported in supportedHardforks"));
							var r = !1;
							try {
								for (var n = d(m.hardforks), c = n.next(); !c.done; c = n.next()) c.value[0] === e && (this._hardfork !== e &&
									(this._hardfork = e, this.emit("hardforkChanged", e)), r = !0)
							} catch (e) {
								t = {
									error: e
								}
							} finally {
								try {
									c && !c.done && (a = n.return) && a.call(n)
								} finally {
									if (t) throw t.error
								}
							}
							if (!r) throw new Error("Hardfork with name ".concat(e, " not supported"))
						}, t.prototype.getHardforkByBlockNumber = function(e, t) {
							var a, r;
							e = (0, x.toType)(e, x.TypeOutput.BN), t = (0, x.toType)(t, x.TypeOutput.BN);
							var n, c, i, f = o.Chainstart;
							try {
								for (var s = d(this.hardforks()), b = s.next(); !b.done; b = s.next()) {
									var u = b.value;
									if (null !== u.block) e.gte(new x.BN(u.block)) && (f = u.name), t && u.td && (t.gte(new x.BN(u.td)) ? n = u
										.name : c = i), i = u.name;
									else if (null != t && void 0 !== u.td && null !== u.td && t.gte(new x.BN(u.td))) return u.name
								}
							} catch (e) {
								a = {
									error: e
								}
							} finally {
								try {
									b && !b.done && (r = s.return) && r.call(s)
								} finally {
									if (a) throw a.error
								}
							}
							if (t) {
								var h = "block number: ".concat(e, " (-> ").concat(f, "), ");
								if (n && !this.hardforkGteHardfork(f, n)) {
									var l = "HF determined by block number is lower than the minimum total difficulty HF";
									throw h += "total difficulty: ".concat(t, " (-> ").concat(n, ")"), new Error("".concat(l, ": ").concat(h))
								}
								if (c && !this.hardforkGteHardfork(c, f)) throw l =
									"Maximum HF determined by total difficulty is lower than the block number HF", h += "total difficulty: ".concat(
										t, " (-> ").concat(c, ")"), new Error("".concat(l, ": ").concat(h))
							}
							return f
						}, t.prototype.setHardforkByBlockNumber = function(e, t) {
							var a = this.getHardforkByBlockNumber(e, t);
							return this.setHardfork(a), a
						}, t.prototype._chooseHardfork = function(e, t) {
							if (void 0 === t && (t = !0), e) {
								if (t && !this._isSupportedHardfork(e)) throw new Error("Hardfork ".concat(e,
									" not set as supported in supportedHardforks"))
							} else e = this._hardfork;
							return e
						}, t.prototype._getHardfork = function(e) {
							var t, a, r = this.hardforks();
							try {
								for (var n = d(r), c = n.next(); !c.done; c = n.next()) {
									var i = c.value;
									if (i.name === e) return i
								}
							} catch (e) {
								t = {
									error: e
								}
							} finally {
								try {
									c && !c.done && (a = n.return) && a.call(n)
								} finally {
									if (t) throw t.error
								}
							}
							throw new Error("Hardfork ".concat(e, " not defined for chain ").concat(this.chainName()))
						}, t.prototype._isSupportedHardfork = function(e) {
							var t, a;
							if (!(this._supportedHardforks.length > 0)) return !0;
							try {
								for (var r = d(this._supportedHardforks), n = r.next(); !n.done; n = r.next())
									if (e === n.value) return !0
							} catch (e) {
								t = {
									error: e
								}
							} finally {
								try {
									n && !n.done && (a = r.return) && a.call(r)
								} finally {
									if (t) throw t.error
								}
							}
							return !1
						}, t.prototype.setEIPs = function(e) {
							var t, a, r = this;
							void 0 === e && (e = []);
							var n = function(t) {
									if (!(t in g.EIPs)) throw new Error("".concat(t, " not supported"));
									var a = c.gteHardfork(g.EIPs[t].minimumHardfork);
									if (!a) throw new Error("".concat(t, " cannot be activated on hardfork ").concat(c.hardfork(),
										", minimumHardfork: ").concat(a));
									g.EIPs[t].requiredEIPs && g.EIPs[t].requiredEIPs.forEach((function(a) {
										if (!e.includes(a) && !r.isActivatedEIP(a)) throw new Error("".concat(t, " requires EIP ").concat(a,
											", but is not included in the EIP list"))
									}))
								},
								c = this;
							try {
								for (var i = d(e), f = i.next(); !f.done; f = i.next()) n(f.value)
							} catch (e) {
								t = {
									error: e
								}
							} finally {
								try {
									f && !f.done && (a = i.return) && a.call(i)
								} finally {
									if (t) throw t.error
								}
							}
							this._eips = e
						}, t.prototype.param = function(e, t) {
							var a, r, n = null;
							try {
								for (var c = d(this._eips), i = c.next(); !i.done; i = c.next()) {
									var f = i.value;
									if (null !== (n = this.paramByEIP(e, t, f))) return n
								}
							} catch (e) {
								a = {
									error: e
								}
							} finally {
								try {
									i && !i.done && (r = c.return) && r.call(c)
								} finally {
									if (a) throw a.error
								}
							}
							return this.paramByHardfork(e, t, this._hardfork)
						}, t.prototype.paramByHardfork = function(e, t, a) {
							var r, n, c, i;
							a = this._chooseHardfork(a);
							var f = null;
							try {
								for (var o = d(m.hardforks), s = o.next(); !s.done; s = o.next()) {
									var b = s.value;
									if ("eips" in b[1]) {
										var u = b[1].eips;
										try {
											for (var h = (c = void 0, d(u)), l = h.next(); !l.done; l = h.next()) {
												var x = l.value,
													p = this.paramByEIP(e, t, x);
												f = null !== p ? p : f
											}
										} catch (e) {
											c = {
												error: e
											}
										} finally {
											try {
												l && !l.done && (i = h.return) && i.call(h)
											} finally {
												if (c) throw c.error
											}
										}
									} else {
										if (!b[1][e]) throw new Error("Topic ".concat(e, " not defined"));
										void 0 !== b[1][e][t] && (f = b[1][e][t].v)
									}
									if (b[0] === a) break
								}
							} catch (e) {
								r = {
									error: e
								}
							} finally {
								try {
									s && !s.done && (n = o.return) && n.call(o)
								} finally {
									if (r) throw r.error
								}
							}
							return f
						}, t.prototype.paramByEIP = function(e, t, a) {
							if (!(a in g.EIPs)) throw new Error("".concat(a, " not supported"));
							var r = g.EIPs[a];
							if (!(e in r)) throw new Error("Topic ".concat(e, " not defined"));
							return void 0 === r[e][t] ? null : r[e][t].v
						}, t.prototype.paramByBlock = function(e, t, a) {
							var r = this.activeHardforks(a),
								n = r[r.length - 1].name;
							return this.paramByHardfork(e, t, n)
						}, t.prototype.isActivatedEIP = function(e) {
							var t, a;
							if (this.eips().includes(e)) return !0;
							try {
								for (var r = d(m.hardforks), n = r.next(); !n.done; n = r.next()) {
									var c = n.value[1];
									if (this.gteHardfork(c.name) && "eips" in c && c.eips.includes(e)) return !0
								}
							} catch (e) {
								t = {
									error: e
								}
							} finally {
								try {
									n && !n.done && (a = r.return) && a.call(r)
								} finally {
									if (t) throw t.error
								}
							}
							return !1
						}, t.prototype.hardforkIsActiveOnBlock = function(e, t, a) {
							var r;
							void 0 === a && (a = {}), t = (0, x.toType)(t, x.TypeOutput.BN);
							var n = null !== (r = a.onlySupported) && void 0 !== r && r;
							e = this._chooseHardfork(e, n);
							var c = this.hardforkBlockBN(e);
							return !(!c || !t.gte(c))
						}, t.prototype.activeOnBlock = function(e, t) {
							return this.hardforkIsActiveOnBlock(null, e, t)
						}, t.prototype.hardforkGteHardfork = function(e, t, a) {
							var r, n;
							void 0 === a && (a = {});
							var c, i = void 0 !== a.onlyActive && a.onlyActive;
							e = this._chooseHardfork(e, a.onlySupported), c = i ? this.activeHardforks(null, a) : this.hardforks();
							var f = -1,
								o = -1,
								s = 0;
							try {
								for (var b = d(c), u = b.next(); !u.done; u = b.next()) {
									var h = u.value;
									h.name === e && (f = s), h.name === t && (o = s), s += 1
								}
							} catch (e) {
								r = {
									error: e
								}
							} finally {
								try {
									u && !u.done && (n = b.return) && n.call(b)
								} finally {
									if (r) throw r.error
								}
							}
							return f >= o && -1 !== o
						}, t.prototype.gteHardfork = function(e, t) {
							return this.hardforkGteHardfork(null, e, t)
						}, t.prototype.hardforkIsActiveOnChain = function(e, t) {
							var a, r, n;
							void 0 === t && (t = {});
							var c = null !== (n = t.onlySupported) && void 0 !== n && n;
							e = this._chooseHardfork(e, c);
							try {
								for (var i = d(this.hardforks()), f = i.next(); !f.done; f = i.next()) {
									var o = f.value;
									if (o.name === e && null !== o.block) return !0
								}
							} catch (e) {
								a = {
									error: e
								}
							} finally {
								try {
									f && !f.done && (r = i.return) && r.call(i)
								} finally {
									if (a) throw a.error
								}
							}
							return !1
						}, t.prototype.activeHardforks = function(e, t) {
							var a, r;
							void 0 === t && (t = {});
							var n = [],
								c = this.hardforks();
							try {
								for (var i = d(c), f = i.next(); !f.done; f = i.next()) {
									var o = f.value;
									if (null !== o.block) {
										if (null != e && e < o.block) break;
										t.onlySupported && !this._isSupportedHardfork(o.name) || n.push(o)
									}
								}
							} catch (e) {
								a = {
									error: e
								}
							} finally {
								try {
									f && !f.done && (r = i.return) && r.call(i)
								} finally {
									if (a) throw a.error
								}
							}
							return n
						}, t.prototype.activeHardfork = function(e, t) {
							void 0 === t && (t = {});
							var a = this.activeHardforks(e, t);
							if (a.length > 0) return a[a.length - 1].name;
							throw new Error("No (supported) active hardfork found")
						}, t.prototype.hardforkBlock = function(e) {
							var t = this.hardforkBlockBN(e);
							return (0, x.toType)(t, x.TypeOutput.Number)
						}, t.prototype.hardforkBlockBN = function(e) {
							e = this._chooseHardfork(e, !1);
							var t = this._getHardfork(e).block;
							return null == t ? null : new x.BN(t)
						}, t.prototype.hardforkTD = function(e) {
							e = this._chooseHardfork(e, !1);
							var t = this._getHardfork(e).td;
							return null == t ? null : new x.BN(t)
						}, t.prototype.isHardforkBlock = function(e, t) {
							e = (0, x.toType)(e, x.TypeOutput.BN), t = this._chooseHardfork(t, !1);
							var a = this.hardforkBlockBN(t);
							return !!a && a.eq(e)
						}, t.prototype.nextHardforkBlock = function(e) {
							var t = this.nextHardforkBlockBN(e);
							return (0, x.toType)(t, x.TypeOutput.Number)
						}, t.prototype.nextHardforkBlockBN = function(e) {
							e = this._chooseHardfork(e, !1);
							var t = this.hardforkBlockBN(e);
							return null === t ? null : this.hardforks().reduce((function(e, a) {
								var r = new x.BN(a.block);
								return r.gt(t) && null === e ? r : e
							}), null)
						}, t.prototype.isNextHardforkBlock = function(e, t) {
							e = (0, x.toType)(e, x.TypeOutput.BN), t = this._chooseHardfork(t, !1);
							var a = this.nextHardforkBlockBN(t);
							return null !== a && a.eq(e)
						}, t.prototype._calcForkHash = function(e) {
							var t, a, r = n.from(this.genesis().hash.substr(2), "hex"),
								c = n.alloc(0),
								i = 0;
							try {
								for (var f = d(this.hardforks()), o = f.next(); !o.done; o = f.next()) {
									var s = o.value,
										b = s.block;
									if (0 !== b && null !== b && b !== i) {
										var u = n.from(b.toString(16).padStart(16, "0"), "hex");
										c = n.concat([c, u])
									}
									if (s.name === e) break;
									null !== b && (i = b)
								}
							} catch (e) {
								t = {
									error: e
								}
							} finally {
								try {
									o && !o.done && (a = f.return) && a.call(f)
								} finally {
									if (t) throw t.error
								}
							}
							var h = n.concat([r, c]),
								p = (0, x.intToBuffer)((0, l.buf)(h) >>> 0).toString("hex");
							return "0x".concat(p)
						}, t.prototype.forkHash = function(e) {
							e = this._chooseHardfork(e, !1);
							var t = this._getHardfork(e);
							if (null === t.block && void 0 === t.td) throw new Error(
								"No fork hash calculation possible for future hardfork");
							return void 0 !== t.forkHash ? t.forkHash : this._calcForkHash(e)
						}, t.prototype.hardforkForForkHash = function(e) {
							var t = this.hardforks().filter((function(t) {
								return t.forkHash === e
							}));
							return t.length >= 1 ? t[t.length - 1] : null
						}, t.prototype.genesis = function() {
							return this._chainParams.genesis
						}, t.prototype.genesisState = function() {
							var e, t;
							switch (this.chainName()) {
								case "mainnet":
									return a(31617);
								case "ropsten":
									return a(53712);
								case "rinkeby":
									return a(3023);
								case "kovan":
									return a(28777);
								case "goerli":
									return a(15382);
								case "sepolia":
									return a(81847)
							}
							if (this._customChains && this._customChains.length > 0 && Array.isArray(this._customChains[0])) try {
								for (var r = d(this._customChains), n = r.next(); !n.done; n = r.next()) {
									var c = n.value;
									if (c[0].name === this.chainName()) return c[1]
								}
							} catch (t) {
								e = {
									error: t
								}
							} finally {
								try {
									n && !n.done && (t = r.return) && t.call(r)
								} finally {
									if (e) throw e.error
								}
							}
							return {}
						}, t.prototype.hardforks = function() {
							return this._chainParams.hardforks
						}, t.prototype.bootstrapNodes = function() {
							return this._chainParams.bootstrapNodes
						}, t.prototype.dnsNetworks = function() {
							return this._chainParams.dnsNetworks
						}, t.prototype.hardfork = function() {
							return this._hardfork
						}, t.prototype.chainId = function() {
							return (0, x.toType)(this.chainIdBN(), x.TypeOutput.Number)
						}, t.prototype.chainIdBN = function() {
							return new x.BN(this._chainParams.chainId)
						}, t.prototype.chainName = function() {
							return this._chainParams.name
						}, t.prototype.networkId = function() {
							return (0, x.toType)(this.networkIdBN(), x.TypeOutput.Number)
						}, t.prototype.networkIdBN = function() {
							return new x.BN(this._chainParams.networkId)
						}, t.prototype.eips = function() {
							return this._eips
						}, t.prototype.consensusType = function() {
							var e, t, a, r = this.hardfork();
							try {
								for (var n = d(m.hardforks), c = n.next(); !c.done; c = n.next()) {
									var i = c.value;
									if ("consensus" in i[1] && (a = i[1].consensus.type), i[0] === r) break
								}
							} catch (t) {
								e = {
									error: t
								}
							} finally {
								try {
									c && !c.done && (t = n.return) && t.call(n)
								} finally {
									if (e) throw e.error
								}
							}
							return a || this._chainParams.consensus.type
						}, t.prototype.consensusAlgorithm = function() {
							var e, t, a, r = this.hardfork();
							try {
								for (var n = d(m.hardforks), c = n.next(); !c.done; c = n.next()) {
									var i = c.value;
									if ("consensus" in i[1] && (a = i[1].consensus.algorithm), i[0] === r) break
								}
							} catch (t) {
								e = {
									error: t
								}
							} finally {
								try {
									c && !c.done && (t = n.return) && t.call(n)
								} finally {
									if (e) throw e.error
								}
							}
							return a || this._chainParams.consensus.algorithm
						}, t.prototype.consensusConfig = function() {
							var e, t, a, r = this.hardfork();
							try {
								for (var n = d(m.hardforks), c = n.next(); !c.done; c = n.next()) {
									var i = c.value;
									if ("consensus" in i[1] && (a = i[1].consensus[i[1].consensus.algorithm]), i[0] === r) break
								}
							} catch (t) {
								e = {
									error: t
								}
							} finally {
								try {
									c && !c.done && (t = n.return) && t.call(n)
								} finally {
									if (e) throw e.error
								}
							}
							if (a) return a;
							var f = this.consensusAlgorithm();
							return this._chainParams.consensus[f]
						}, t.prototype.copy = function() {
							var e = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
							return e.removeAllListeners(), e
						}, t
					}(h.EventEmitter);
					t.default = y
				},
				36225: function(e, t, a) {
					"use strict";
					var r = this && this.__createBinding || (Object.create ? function(e, t, a, r) {
							void 0 === r && (r = a);
							var n = Object.getOwnPropertyDescriptor(t, a);
							n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
								enumerable: !0,
								get: function() {
									return t[a]
								}
							}), Object.defineProperty(e, r, n)
						} : function(e, t, a, r) {
							void 0 === r && (r = a), e[r] = t[a]
						}),
						n = this && this.__setModuleDefault || (Object.create ? function(e, t) {
							Object.defineProperty(e, "default", {
								enumerable: !0,
								value: t
							})
						} : function(e, t) {
							e.default = t
						}),
						c = this && this.__importStar || function(e) {
							if (e && e.__esModule) return e;
							var t = {};
							if (null != e)
								for (var a in e) "default" !== a && Object.prototype.hasOwnProperty.call(e, a) && r(t, e, a);
							return n(t, e), t
						},
						i = this && this.__values || function(e) {
							var t = "function" == typeof Symbol && Symbol.iterator,
								a = t && e[t],
								r = 0;
							if (a) return a.call(e);
							if (e && "number" == typeof e.length) return {
								next: function() {
									return e && r >= e.length && (e = void 0), {
										value: e && e[r++],
										done: !e
									}
								}
							};
							throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
						},
						d = this && this.__read || function(e, t) {
							var a = "function" == typeof Symbol && e[Symbol.iterator];
							if (!a) return e;
							var r, n, c = a.call(e),
								i = [];
							try {
								for (;
									(void 0 === t || t-- > 0) && !(r = c.next()).done;) i.push(r.value)
							} catch (e) {
								n = {
									error: e
								}
							} finally {
								try {
									r && !r.done && (a = c.return) && a.call(c)
								} finally {
									if (n) throw n.error
								}
							}
							return i
						};
					Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.BaseTransaction = void 0;
					var f = c(a(2832)),
						o = a(22751),
						s = a(63458),
						b = function() {
							function e(e) {
								this.cache = {
									hash: void 0,
									dataFee: void 0
								}, this.activeCapabilities = [], this.DEFAULT_CHAIN = f.Chain.Mainnet, this.DEFAULT_HARDFORK = f.Hardfork.Istanbul;
								var t = e.nonce,
									a = e.gasLimit,
									r = e.to,
									n = e.value,
									c = e.data,
									i = e.v,
									d = e.r,
									s = e.s,
									b = e.type;
								this._type = new o.BN((0, o.toBuffer)(b)).toNumber();
								var u = (0, o.toBuffer)("" === r ? "0x" : r),
									h = (0, o.toBuffer)("" === i ? "0x" : i),
									l = (0, o.toBuffer)("" === d ? "0x" : d),
									x = (0, o.toBuffer)("" === s ? "0x" : s);
								this.nonce = new o.BN((0, o.toBuffer)("" === t ? "0x" : t)), this.gasLimit = new o.BN((0, o.toBuffer)("" ===
										a ? "0x" : a)), this.to = u.length > 0 ? new o.Address(u) : void 0, this.value = new o.BN((0, o.toBuffer)("" ===
										n ? "0x" : n)), this.data = (0, o.toBuffer)("" === c ? "0x" : c), this.v = h.length > 0 ? new o.BN(h) : void 0,
									this.r = l.length > 0 ? new o.BN(l) : void 0, this.s = x.length > 0 ? new o.BN(x) : void 0, this._validateCannotExceedMaxInteger({
										value: this.value,
										r: this.r,
										s: this.s
									}), this._validateCannotExceedMaxInteger({
										gasLimit: this.gasLimit
									}, 64), this._validateCannotExceedMaxInteger({
										nonce: this.nonce
									}, 64, !0)
							}
							return Object.defineProperty(e.prototype, "transactionType", {
								get: function() {
									return this.type
								},
								enumerable: !1,
								configurable: !0
							}), Object.defineProperty(e.prototype, "type", {
								get: function() {
									return this._type
								},
								enumerable: !1,
								configurable: !0
							}), e.prototype.supports = function(e) {
								return this.activeCapabilities.includes(e)
							}, e.prototype.validate = function(e) {
								void 0 === e && (e = !1);
								var t = [];
								return this.getBaseFee().gt(this.gasLimit) && t.push("gasLimit is too low. given ".concat(this.gasLimit,
									", need at least ").concat(this.getBaseFee())), this.isSigned() && !this.verifySignature() && t.push(
									"Invalid Signature"), e ? t : 0 === t.length
							}, e.prototype.getBaseFee = function() {
								var e = this.getDataFee().addn(this.common.param("gasPrices", "tx"));
								return this.common.gteHardfork("homestead") && this.toCreationAddress() && e.iaddn(this.common.param(
									"gasPrices", "txCreation")), e
							}, e.prototype.getDataFee = function() {
								for (var e = this.common.param("gasPrices", "txDataZero"), t = this.common.param("gasPrices", "txDataNonZero"),
										a = 0, r = 0; r < this.data.length; r++) 0 === this.data[r] ? a += e : a += t;
								if (a = new o.BN(a), (void 0 === this.to || null === this.to) && this.common.isActivatedEIP(3860)) {
									var n = Math.ceil(this.data.length / 32),
										c = new o.BN(this.common.param("gasPrices", "initCodeWordCost")).imuln(n);
									a.iadd(c)
								}
								return a
							}, e.prototype.toCreationAddress = function() {
								return void 0 === this.to || 0 === this.to.buf.length
							}, e.prototype.isSigned = function() {
								var e = this,
									t = e.v,
									a = e.r,
									r = e.s;
								return 0 === this.type ? !!(t && a && r) : !(void 0 === t || !a || !r)
							}, e.prototype.verifySignature = function() {
								try {
									var e = this.getSenderPublicKey();
									return 0 !== (0, o.unpadBuffer)(e).length
								} catch (e) {
									return !1
								}
							}, e.prototype.getSenderAddress = function() {
								return new o.Address((0, o.publicToAddress)(this.getSenderPublicKey()))
							}, e.prototype.sign = function(e) {
								if (32 !== e.length) {
									var t = this._errorMsg("Private key must be 32 bytes in length.");
									throw new Error(t)
								}
								var a = !1;
								0 === this.type && this.common.gteHardfork("spuriousDragon") && !this.supports(s.Capability.EIP155ReplayProtection) &&
									(this.activeCapabilities.push(s.Capability.EIP155ReplayProtection), a = !0);
								var r = this.getMessageToSign(!0),
									n = (0, o.ecsign)(r, e),
									c = n.v,
									i = n.r,
									d = n.s,
									f = this._processSignature(c, i, d);
								if (a) {
									var b = this.activeCapabilities.indexOf(s.Capability.EIP155ReplayProtection);
									b > -1 && this.activeCapabilities.splice(b, 1)
								}
								return f
							}, e.prototype._getCommon = function(e, t) {
								var a;
								if (t) {
									var r = new o.BN((0, o.toBuffer)(t));
									if (e) {
										if (!e.chainIdBN().eq(r)) {
											var n = this._errorMsg("The chain ID does not match the chain ID of Common");
											throw new Error(n)
										}
										return e.copy()
									}
									return f.default.isSupportedChainId(r) ? new f.default({
										chain: r,
										hardfork: this.DEFAULT_HARDFORK
									}) : f.default.forCustomChain(this.DEFAULT_CHAIN, {
										name: "custom-chain",
										networkId: r,
										chainId: r
									}, this.DEFAULT_HARDFORK)
								}
								return null !== (a = null == e ? void 0 : e.copy()) && void 0 !== a ? a : new f.default({
									chain: this.DEFAULT_CHAIN,
									hardfork: this.DEFAULT_HARDFORK
								})
							}, e.prototype._validateCannotExceedMaxInteger = function(e, t, a) {
								var r, n;
								void 0 === t && (t = 256), void 0 === a && (a = !1);
								try {
									for (var c = i(Object.entries(e)), f = c.next(); !f.done; f = c.next()) {
										var s = d(f.value, 2),
											b = s[0],
											u = s[1];
										switch (t) {
											case 64:
												if (a) {
													if (null == u ? void 0 : u.gte(o.MAX_UINT64)) {
														var h = this._errorMsg("".concat(b, " cannot equal or exceed MAX_UINT64 (2^64-1), given ").concat(u));
														throw new Error(h)
													}
												} else if (null == u ? void 0 : u.gt(o.MAX_UINT64)) throw h = this._errorMsg("".concat(b,
													" cannot exceed MAX_UINT64 (2^64-1), given ").concat(u)), new Error(h);
												break;
											case 256:
												if (a) {
													if (null == u ? void 0 : u.gte(o.MAX_INTEGER)) throw h = this._errorMsg("".concat(b,
														" cannot equal or exceed MAX_INTEGER (2^256-1), given ").concat(u)), new Error(h)
												} else if (null == u ? void 0 : u.gt(o.MAX_INTEGER)) throw h = this._errorMsg("".concat(b,
													" cannot exceed MAX_INTEGER (2^256-1), given ").concat(u)), new Error(h);
												break;
											default:
												throw h = this._errorMsg("unimplemented bits value"), new Error(h)
										}
									}
								} catch (e) {
									r = {
										error: e
									}
								} finally {
									try {
										f && !f.done && (n = c.return) && n.call(c)
									} finally {
										if (r) throw r.error
									}
								}
							}, e.prototype._getSharedErrorPostfix = function() {
								var e = "";
								try {
									e = this.isSigned() ? (0, o.bufferToHex)(this.hash()) : "not available (unsigned)"
								} catch (t) {
									e = "error"
								}
								var t = "";
								try {
									t = this.isSigned().toString()
								} catch (t) {
									e = "error"
								}
								var a = "";
								try {
									a = this.common.hardfork()
								} catch (e) {
									a = "error"
								}
								return "tx type=".concat(this.type, " hash=").concat(e, " nonce=").concat(this.nonce, " value=").concat(this.value,
									" ") + "signed=".concat(t, " hf=").concat(a)
							}, e
						}();
					t.BaseTransaction = b
				},
				47669: function(e, t, a) {
					"use strict";
					var r, n = a(23085).Buffer,
						c = this && this.__extends || (r = function(e, t) {
							return r = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
							}, r(e, t)
						}, function(e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) +
								" is not a constructor or null");

							function a() {
								this.constructor = e
							}
							r(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
						}),
						i = this && this.__assign || function() {
							return i = Object.assign || function(e) {
								for (var t, a = 1, r = arguments.length; a < r; a++)
									for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
								return e
							}, i.apply(this, arguments)
						},
						d = this && this.__read || function(e, t) {
							var a = "function" == typeof Symbol && e[Symbol.iterator];
							if (!a) return e;
							var r, n, c = a.call(e),
								i = [];
							try {
								for (;
									(void 0 === t || t-- > 0) && !(r = c.next()).done;) i.push(r.value)
							} catch (e) {
								n = {
									error: e
								}
							} finally {
								try {
									r && !r.done && (a = c.return) && a.call(c)
								} finally {
									if (n) throw n.error
								}
							}
							return i
						};
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var f = a(22751),
						o = a(36225),
						s = a(63458),
						b = a(82942),
						u = n.from(2..toString(16).padStart(2, "0"), "hex"),
						h = function(e) {
							function t(t, a) {
								void 0 === a && (a = {});
								var r, n, c = this;
								(c = e.call(this, i(i({}, t), {
									type: 2
								})) || this).DEFAULT_HARDFORK = "london";
								var d = t.chainId,
									o = t.accessList,
									u = t.maxFeePerGas,
									h = t.maxPriorityFeePerGas;
								if (c.common = c._getCommon(a.common, d), c.chainId = c.common.chainIdBN(), !c.common.isActivatedEIP(1559))
									throw new Error("EIP-1559 not enabled on Common");
								c.activeCapabilities = c.activeCapabilities.concat([1559, 2718, 2930]);
								var l = b.AccessLists.getAccessListData(null != o ? o : []);
								if (c.accessList = l.accessList, c.AccessListJSON = l.AccessListJSON, b.AccessLists.verifyAccessList(c.accessList),
									c.maxFeePerGas = new f.BN((0, f.toBuffer)("" === u ? "0x" : u)), c.maxPriorityFeePerGas = new f.BN((0, f.toBuffer)
										("" === h ? "0x" : h)), c._validateCannotExceedMaxInteger({
										maxFeePerGas: c.maxFeePerGas,
										maxPriorityFeePerGas: c.maxPriorityFeePerGas
									}), c.gasLimit.mul(c.maxFeePerGas).gt(f.MAX_INTEGER)) {
									var x = c._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
									throw new Error(x)
								}
								if (c.maxFeePerGas.lt(c.maxPriorityFeePerGas)) throw x = c._errorMsg(
									"maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)"), new Error(
									x);
								if (c.v && !c.v.eqn(0) && !c.v.eqn(1)) throw x = c._errorMsg(
									"The y-parity of the transaction should either be 0 or 1"), new Error(x);
								if (c.common.gteHardfork("homestead") && (null === (r = c.s) || void 0 === r ? void 0 : r.gt(s.N_DIV_2))) throw x =
									c._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid"), new Error(x);
								return c.common.isActivatedEIP(3860) && (0, b.checkMaxInitCodeSize)(c.common, c.data.length), (null === (n =
									null == a ? void 0 : a.freeze) || void 0 === n || n) && Object.freeze(c), c
							}
							return c(t, e), Object.defineProperty(t.prototype, "senderR", {
								get: function() {
									return this.r
								},
								enumerable: !1,
								configurable: !0
							}), Object.defineProperty(t.prototype, "senderS", {
								get: function() {
									return this.s
								},
								enumerable: !1,
								configurable: !0
							}), Object.defineProperty(t.prototype, "yParity", {
								get: function() {
									return this.v
								},
								enumerable: !1,
								configurable: !0
							}), t.fromTxData = function(e, a) {
								return void 0 === a && (a = {}), new t(e, a)
							}, t.fromSerializedTx = function(e, a) {
								if (void 0 === a && (a = {}), !e.slice(0, 1).equals(u)) throw new Error(
									"Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ".concat(2,
										", received: ").concat(e.slice(0, 1).toString("hex")));
								var r = f.rlp.decode(e.slice(1));
								if (!Array.isArray(r)) throw new Error("Invalid serialized tx input: must be array");
								return t.fromValuesArray(r, a)
							}, t.fromRlpSerializedTx = function(e, a) {
								return void 0 === a && (a = {}), t.fromSerializedTx(e, a)
							}, t.fromValuesArray = function(e, a) {
								if (void 0 === a && (a = {}), 9 !== e.length && 12 !== e.length) throw new Error(
									"Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");
								var r = d(e, 12),
									n = r[0],
									c = r[1],
									i = r[2],
									o = r[3],
									s = r[4],
									b = r[5],
									u = r[6],
									h = r[7],
									l = r[8],
									x = r[9],
									p = r[10],
									m = r[11];
								return (0, f.validateNoLeadingZeroes)({
									nonce: c,
									maxPriorityFeePerGas: i,
									maxFeePerGas: o,
									gasLimit: s,
									value: u,
									v: x,
									r: p,
									s: m
								}), new t({
									chainId: new f.BN(n),
									nonce: c,
									maxPriorityFeePerGas: i,
									maxFeePerGas: o,
									gasLimit: s,
									to: b,
									value: u,
									data: h,
									accessList: null != l ? l : [],
									v: void 0 !== x ? new f.BN(x) : void 0,
									r: p,
									s: m
								}, a)
							}, t.prototype.getDataFee = function() {
								if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
								var t = e.prototype.getDataFee.call(this);
								return t.iaddn(b.AccessLists.getDataFeeEIP2930(this.accessList, this.common)), Object.isFrozen(this) && (this
									.cache.dataFee = {
										value: t,
										hardfork: this.common.hardfork()
									}), t
							}, t.prototype.getUpfrontCost = function(e) {
								void 0 === e && (e = new f.BN(0));
								var t = f.BN.min(this.maxPriorityFeePerGas, this.maxFeePerGas.sub(e)).add(e);
								return this.gasLimit.mul(t).add(this.value)
							}, t.prototype.raw = function() {
								return [(0, f.bnToUnpaddedBuffer)(this.chainId), (0, f.bnToUnpaddedBuffer)(this.nonce), (0, f.bnToUnpaddedBuffer)
									(this.maxPriorityFeePerGas), (0, f.bnToUnpaddedBuffer)(this.maxFeePerGas), (0, f.bnToUnpaddedBuffer)(this.gasLimit),
									void 0 !== this.to ? this.to.buf : n.from([]), (0, f.bnToUnpaddedBuffer)(this.value), this.data, this.accessList,
									void 0 !== this.v ? (0, f.bnToUnpaddedBuffer)(this.v) : n.from([]), void 0 !== this.r ? (0, f.bnToUnpaddedBuffer)
									(this.r) : n.from([]), void 0 !== this.s ? (0, f.bnToUnpaddedBuffer)(this.s) : n.from([])
								]
							}, t.prototype.serialize = function() {
								var e = this.raw();
								return n.concat([u, f.rlp.encode(e)])
							}, t.prototype.getMessageToSign = function(e) {
								void 0 === e && (e = !0);
								var t = this.raw().slice(0, 9),
									a = n.concat([u, f.rlp.encode(t)]);
								return e ? (0, f.keccak256)(a) : a
							}, t.prototype.hash = function() {
								if (!this.isSigned()) {
									var e = this._errorMsg("Cannot call hash method if transaction is not signed");
									throw new Error(e)
								}
								return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = (0, f.keccak256)(this.serialize())),
									this.cache.hash) : (0, f.keccak256)(this.serialize())
							}, t.prototype.getMessageToVerifySignature = function() {
								return this.getMessageToSign()
							}, t.prototype.getSenderPublicKey = function() {
								var e;
								if (!this.isSigned()) {
									var t = this._errorMsg("Cannot call this method if transaction is not signed");
									throw new Error(t)
								}
								var a = this.getMessageToVerifySignature();
								if (this.common.gteHardfork("homestead") && (null === (e = this.s) || void 0 === e ? void 0 : e.gt(s.N_DIV_2)))
									throw t = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid"),
										new Error(t);
								var r = this,
									n = r.v,
									c = r.r,
									i = r.s;
								try {
									return (0, f.ecrecover)(a, n.addn(27), (0, f.bnToUnpaddedBuffer)(c), (0, f.bnToUnpaddedBuffer)(i))
								} catch (e) {
									throw t = this._errorMsg("Invalid Signature"), new Error(t)
								}
							}, t.prototype._processSignature = function(e, a, r) {
								var n = {
									common: this.common
								};
								return t.fromTxData({
									chainId: this.chainId,
									nonce: this.nonce,
									maxPriorityFeePerGas: this.maxPriorityFeePerGas,
									maxFeePerGas: this.maxFeePerGas,
									gasLimit: this.gasLimit,
									to: this.to,
									value: this.value,
									data: this.data,
									accessList: this.accessList,
									v: new f.BN(e - 27),
									r: new f.BN(a),
									s: new f.BN(r)
								}, n)
							}, t.prototype.toJSON = function() {
								var e = b.AccessLists.getAccessListJSON(this.accessList);
								return {
									chainId: (0, f.bnToHex)(this.chainId),
									nonce: (0, f.bnToHex)(this.nonce),
									maxPriorityFeePerGas: (0, f.bnToHex)(this.maxPriorityFeePerGas),
									maxFeePerGas: (0, f.bnToHex)(this.maxFeePerGas),
									gasLimit: (0, f.bnToHex)(this.gasLimit),
									to: void 0 !== this.to ? this.to.toString() : void 0,
									value: (0, f.bnToHex)(this.value),
									data: "0x" + this.data.toString("hex"),
									accessList: e,
									v: void 0 !== this.v ? (0, f.bnToHex)(this.v) : void 0,
									r: void 0 !== this.r ? (0, f.bnToHex)(this.r) : void 0,
									s: void 0 !== this.s ? (0, f.bnToHex)(this.s) : void 0
								}
							}, t.prototype.errorStr = function() {
								return this._getSharedErrorPostfix() + " maxFeePerGas=".concat(this.maxFeePerGas, " maxPriorityFeePerGas=").concat(
									this.maxPriorityFeePerGas)
							}, t.prototype._errorMsg = function(e) {
								return "".concat(e, " (").concat(this.errorStr(), ")")
							}, t
						}(o.BaseTransaction);
					t.default = h
				},
				29325: function(e, t, a) {
					"use strict";
					var r, n = a(23085).Buffer,
						c = this && this.__extends || (r = function(e, t) {
							return r = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
							}, r(e, t)
						}, function(e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) +
								" is not a constructor or null");

							function a() {
								this.constructor = e
							}
							r(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
						}),
						i = this && this.__assign || function() {
							return i = Object.assign || function(e) {
								for (var t, a = 1, r = arguments.length; a < r; a++)
									for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
								return e
							}, i.apply(this, arguments)
						},
						d = this && this.__read || function(e, t) {
							var a = "function" == typeof Symbol && e[Symbol.iterator];
							if (!a) return e;
							var r, n, c = a.call(e),
								i = [];
							try {
								for (;
									(void 0 === t || t-- > 0) && !(r = c.next()).done;) i.push(r.value)
							} catch (e) {
								n = {
									error: e
								}
							} finally {
								try {
									r && !r.done && (a = c.return) && a.call(c)
								} finally {
									if (n) throw n.error
								}
							}
							return i
						};
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var f = a(22751),
						o = a(36225),
						s = a(63458),
						b = a(82942),
						u = n.from(1..toString(16).padStart(2, "0"), "hex"),
						h = function(e) {
							function t(t, a) {
								void 0 === a && (a = {});
								var r, n, c = this;
								(c = e.call(this, i(i({}, t), {
									type: 1
								})) || this).DEFAULT_HARDFORK = "berlin";
								var d = t.chainId,
									o = t.accessList,
									u = t.gasPrice;
								if (c.common = c._getCommon(a.common, d), c.chainId = c.common.chainIdBN(), !c.common.isActivatedEIP(2930))
									throw new Error("EIP-2930 not enabled on Common");
								c.activeCapabilities = c.activeCapabilities.concat([2718, 2930]);
								var h = b.AccessLists.getAccessListData(null != o ? o : []);
								if (c.accessList = h.accessList, c.AccessListJSON = h.AccessListJSON, b.AccessLists.verifyAccessList(c.accessList),
									c.gasPrice = new f.BN((0, f.toBuffer)("" === u ? "0x" : u)), c._validateCannotExceedMaxInteger({
										gasPrice: c.gasPrice
									}), c.gasPrice.mul(c.gasLimit).gt(f.MAX_INTEGER)) {
									var l = c._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");
									throw new Error(l)
								}
								if (c.v && !c.v.eqn(0) && !c.v.eqn(1)) throw l = c._errorMsg(
									"The y-parity of the transaction should either be 0 or 1"), new Error(l);
								if (c.common.gteHardfork("homestead") && (null === (r = c.s) || void 0 === r ? void 0 : r.gt(s.N_DIV_2))) throw l =
									c._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid"), new Error(l);
								return c.common.isActivatedEIP(3860) && (0, b.checkMaxInitCodeSize)(c.common, c.data.length), (null === (n =
									null == a ? void 0 : a.freeze) || void 0 === n || n) && Object.freeze(c), c
							}
							return c(t, e), Object.defineProperty(t.prototype, "senderR", {
								get: function() {
									return this.r
								},
								enumerable: !1,
								configurable: !0
							}), Object.defineProperty(t.prototype, "senderS", {
								get: function() {
									return this.s
								},
								enumerable: !1,
								configurable: !0
							}), Object.defineProperty(t.prototype, "yParity", {
								get: function() {
									return this.v
								},
								enumerable: !1,
								configurable: !0
							}), t.fromTxData = function(e, a) {
								return void 0 === a && (a = {}), new t(e, a)
							}, t.fromSerializedTx = function(e, a) {
								if (void 0 === a && (a = {}), !e.slice(0, 1).equals(u)) throw new Error(
									"Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ".concat(1,
										", received: ").concat(e.slice(0, 1).toString("hex")));
								var r = f.rlp.decode(e.slice(1));
								if (!Array.isArray(r)) throw new Error("Invalid serialized tx input: must be array");
								return t.fromValuesArray(r, a)
							}, t.fromRlpSerializedTx = function(e, a) {
								return void 0 === a && (a = {}), t.fromSerializedTx(e, a)
							}, t.fromValuesArray = function(e, a) {
								if (void 0 === a && (a = {}), 8 !== e.length && 11 !== e.length) throw new Error(
									"Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");
								var r = d(e, 11),
									n = r[0],
									c = r[1],
									i = r[2],
									o = r[3],
									s = r[4],
									b = r[5],
									u = r[6],
									h = r[7],
									l = r[8],
									x = r[9],
									p = r[10];
								return (0, f.validateNoLeadingZeroes)({
									nonce: c,
									gasPrice: i,
									gasLimit: o,
									value: b,
									v: l,
									r: x,
									s: p
								}), new t({
									chainId: new f.BN(n),
									nonce: c,
									gasPrice: i,
									gasLimit: o,
									to: s,
									value: b,
									data: u,
									accessList: null != h ? h : [],
									v: void 0 !== l ? new f.BN(l) : void 0,
									r: x,
									s: p
								}, a)
							}, t.prototype.getDataFee = function() {
								if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
								var t = e.prototype.getDataFee.call(this);
								return t.iaddn(b.AccessLists.getDataFeeEIP2930(this.accessList, this.common)), Object.isFrozen(this) && (this
									.cache.dataFee = {
										value: t,
										hardfork: this.common.hardfork()
									}), t
							}, t.prototype.getUpfrontCost = function() {
								return this.gasLimit.mul(this.gasPrice).add(this.value)
							}, t.prototype.raw = function() {
								return [(0, f.bnToUnpaddedBuffer)(this.chainId), (0, f.bnToUnpaddedBuffer)(this.nonce), (0, f.bnToUnpaddedBuffer)
									(this.gasPrice), (0, f.bnToUnpaddedBuffer)(this.gasLimit), void 0 !== this.to ? this.to.buf : n.from([]), (
										0, f.bnToUnpaddedBuffer)(this.value), this.data, this.accessList, void 0 !== this.v ? (0, f.bnToUnpaddedBuffer)
									(this.v) : n.from([]), void 0 !== this.r ? (0, f.bnToUnpaddedBuffer)(this.r) : n.from([]), void 0 !== this.s ?
									(0, f.bnToUnpaddedBuffer)(this.s) : n.from([])
								]
							}, t.prototype.serialize = function() {
								var e = this.raw();
								return n.concat([u, f.rlp.encode(e)])
							}, t.prototype.getMessageToSign = function(e) {
								void 0 === e && (e = !0);
								var t = this.raw().slice(0, 8),
									a = n.concat([u, f.rlp.encode(t)]);
								return e ? (0, f.keccak256)(a) : a
							}, t.prototype.hash = function() {
								if (!this.isSigned()) {
									var e = this._errorMsg("Cannot call hash method if transaction is not signed");
									throw new Error(e)
								}
								return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = (0, f.keccak256)(this.serialize())),
									this.cache.hash) : (0, f.keccak256)(this.serialize())
							}, t.prototype.getMessageToVerifySignature = function() {
								return this.getMessageToSign()
							}, t.prototype.getSenderPublicKey = function() {
								var e;
								if (!this.isSigned()) {
									var t = this._errorMsg("Cannot call this method if transaction is not signed");
									throw new Error(t)
								}
								var a = this.getMessageToVerifySignature();
								if (this.common.gteHardfork("homestead") && (null === (e = this.s) || void 0 === e ? void 0 : e.gt(s.N_DIV_2)))
									throw t = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid"),
										new Error(t);
								var r = this,
									n = r.yParity,
									c = r.r,
									i = r.s;
								try {
									return (0, f.ecrecover)(a, n.addn(27), (0, f.bnToUnpaddedBuffer)(c), (0, f.bnToUnpaddedBuffer)(i))
								} catch (e) {
									throw t = this._errorMsg("Invalid Signature"), new Error(t)
								}
							}, t.prototype._processSignature = function(e, a, r) {
								var n = {
									common: this.common
								};
								return t.fromTxData({
									chainId: this.chainId,
									nonce: this.nonce,
									gasPrice: this.gasPrice,
									gasLimit: this.gasLimit,
									to: this.to,
									value: this.value,
									data: this.data,
									accessList: this.accessList,
									v: new f.BN(e - 27),
									r: new f.BN(a),
									s: new f.BN(r)
								}, n)
							}, t.prototype.toJSON = function() {
								var e = b.AccessLists.getAccessListJSON(this.accessList);
								return {
									chainId: (0, f.bnToHex)(this.chainId),
									nonce: (0, f.bnToHex)(this.nonce),
									gasPrice: (0, f.bnToHex)(this.gasPrice),
									gasLimit: (0, f.bnToHex)(this.gasLimit),
									to: void 0 !== this.to ? this.to.toString() : void 0,
									value: (0, f.bnToHex)(this.value),
									data: "0x" + this.data.toString("hex"),
									accessList: e,
									v: void 0 !== this.v ? (0, f.bnToHex)(this.v) : void 0,
									r: void 0 !== this.r ? (0, f.bnToHex)(this.r) : void 0,
									s: void 0 !== this.s ? (0, f.bnToHex)(this.s) : void 0
								}
							}, t.prototype.errorStr = function() {
								var e, t;
								return this._getSharedErrorPostfix() + " gasPrice=".concat(this.gasPrice, " accessListCount=").concat(null !==
									(t = null === (e = this.accessList) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0)
							}, t.prototype._errorMsg = function(e) {
								return "".concat(e, " (").concat(this.errorStr(), ")")
							}, t
						}(o.BaseTransaction);
					t.default = h
				},
				66052: function(e, t, a) {
					"use strict";
					var r = this && this.__createBinding || (Object.create ? function(e, t, a, r) {
							void 0 === r && (r = a);
							var n = Object.getOwnPropertyDescriptor(t, a);
							n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
								enumerable: !0,
								get: function() {
									return t[a]
								}
							}), Object.defineProperty(e, r, n)
						} : function(e, t, a, r) {
							void 0 === r && (r = a), e[r] = t[a]
						}),
						n = this && this.__exportStar || function(e, t) {
							for (var a in e) "default" === a || Object.prototype.hasOwnProperty.call(t, a) || r(t, e, a)
						},
						c = this && this.__importDefault || function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						};
					Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.FeeMarketEIP1559Transaction = t.TransactionFactory = t.AccessListEIP2930Transaction = t.Transaction = void 0;
					var i = a(35534);
					Object.defineProperty(t, "Transaction", {
						enumerable: !0,
						get: function() {
							return c(i).default
						}
					});
					var d = a(29325);
					Object.defineProperty(t, "AccessListEIP2930Transaction", {
						enumerable: !0,
						get: function() {
							return c(d).default
						}
					});
					var f = a(31932);
					Object.defineProperty(t, "TransactionFactory", {
						enumerable: !0,
						get: function() {
							return c(f).default
						}
					});
					var o = a(47669);
					Object.defineProperty(t, "FeeMarketEIP1559Transaction", {
						enumerable: !0,
						get: function() {
							return c(o).default
						}
					}), n(a(63458), t)
				},
				35534: function(e, t, a) {
					"use strict";
					var r, n = a(23085).Buffer,
						c = this && this.__extends || (r = function(e, t) {
							return r = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
							}, r(e, t)
						}, function(e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) +
								" is not a constructor or null");

							function a() {
								this.constructor = e
							}
							r(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
						}),
						i = this && this.__assign || function() {
							return i = Object.assign || function(e) {
								for (var t, a = 1, r = arguments.length; a < r; a++)
									for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
								return e
							}, i.apply(this, arguments)
						},
						d = this && this.__read || function(e, t) {
							var a = "function" == typeof Symbol && e[Symbol.iterator];
							if (!a) return e;
							var r, n, c = a.call(e),
								i = [];
							try {
								for (;
									(void 0 === t || t-- > 0) && !(r = c.next()).done;) i.push(r.value)
							} catch (e) {
								n = {
									error: e
								}
							} finally {
								try {
									r && !r.done && (a = c.return) && a.call(c)
								} finally {
									if (n) throw n.error
								}
							}
							return i
						};
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var f = a(22751),
						o = a(63458),
						s = a(36225),
						b = a(82942),
						u = function(e) {
							function t(t, a) {
								void 0 === a && (a = {});
								var r, n = this;
								if ((n = e.call(this, i(i({}, t), {
										type: 0
									})) || this).common = n._validateTxV(n.v, a.common), n.gasPrice = new f.BN((0, f.toBuffer)("" === t.gasPrice ?
										"0x" : t.gasPrice)), n.gasPrice.mul(n.gasLimit).gt(f.MAX_INTEGER)) {
									var c = n._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
									throw new Error(c)
								}
								if (n._validateCannotExceedMaxInteger({
										gasPrice: n.gasPrice
									}), n.common.gteHardfork("spuriousDragon"))
									if (n.isSigned()) {
										var d = n.v,
											s = n.common.chainIdBN().muln(2);
										(d.eq(s.addn(35)) || d.eq(s.addn(36))) && n.activeCapabilities.push(o.Capability.EIP155ReplayProtection)
									} else n.activeCapabilities.push(o.Capability.EIP155ReplayProtection);
								return n.common.isActivatedEIP(3860) && (0, b.checkMaxInitCodeSize)(n.common, n.data.length), (null === (r =
									null == a ? void 0 : a.freeze) || void 0 === r || r) && Object.freeze(n), n
							}
							return c(t, e), t.fromTxData = function(e, a) {
								return void 0 === a && (a = {}), new t(e, a)
							}, t.fromSerializedTx = function(e, t) {
								void 0 === t && (t = {});
								var a = f.rlp.decode(e);
								if (!Array.isArray(a)) throw new Error("Invalid serialized tx input. Must be array");
								return this.fromValuesArray(a, t)
							}, t.fromRlpSerializedTx = function(e, a) {
								return void 0 === a && (a = {}), t.fromSerializedTx(e, a)
							}, t.fromValuesArray = function(e, a) {
								if (void 0 === a && (a = {}), 6 !== e.length && 9 !== e.length) throw new Error(
									"Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
								var r = d(e, 9),
									n = r[0],
									c = r[1],
									i = r[2],
									o = r[3],
									s = r[4],
									b = r[5],
									u = r[6],
									h = r[7],
									l = r[8];
								return (0, f.validateNoLeadingZeroes)({
									nonce: n,
									gasPrice: c,
									gasLimit: i,
									value: s,
									v: u,
									r: h,
									s: l
								}), new t({
									nonce: n,
									gasPrice: c,
									gasLimit: i,
									to: o,
									value: s,
									data: b,
									v: u,
									r: h,
									s: l
								}, a)
							}, t.prototype.raw = function() {
								return [(0, f.bnToUnpaddedBuffer)(this.nonce), (0, f.bnToUnpaddedBuffer)(this.gasPrice), (0, f.bnToUnpaddedBuffer)
									(this.gasLimit), void 0 !== this.to ? this.to.buf : n.from([]), (0, f.bnToUnpaddedBuffer)(this.value), this
									.data, void 0 !== this.v ? (0, f.bnToUnpaddedBuffer)(this.v) : n.from([]), void 0 !== this.r ? (0, f.bnToUnpaddedBuffer)
									(this.r) : n.from([]), void 0 !== this.s ? (0, f.bnToUnpaddedBuffer)(this.s) : n.from([])
								]
							}, t.prototype.serialize = function() {
								return f.rlp.encode(this.raw())
							}, t.prototype._getMessageToSign = function() {
								var e = [(0, f.bnToUnpaddedBuffer)(this.nonce), (0, f.bnToUnpaddedBuffer)(this.gasPrice), (0, f.bnToUnpaddedBuffer)
									(this.gasLimit), void 0 !== this.to ? this.to.buf : n.from([]), (0, f.bnToUnpaddedBuffer)(this.value), this
									.data
								];
								return this.supports(o.Capability.EIP155ReplayProtection) && (e.push((0, f.toBuffer)(this.common.chainIdBN())),
									e.push((0, f.unpadBuffer)((0, f.toBuffer)(0))), e.push((0, f.unpadBuffer)((0, f.toBuffer)(0)))), e
							}, t.prototype.getMessageToSign = function(e) {
								void 0 === e && (e = !0);
								var t = this._getMessageToSign();
								return e ? (0, f.rlphash)(t) : t
							}, t.prototype.getDataFee = function() {
								return this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork() ? this.cache.dataFee.value :
									(Object.isFrozen(this) && (this.cache.dataFee = {
										value: e.prototype.getDataFee.call(this),
										hardfork: this.common.hardfork()
									}), e.prototype.getDataFee.call(this))
							}, t.prototype.getUpfrontCost = function() {
								return this.gasLimit.mul(this.gasPrice).add(this.value)
							}, t.prototype.hash = function() {
								return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = (0, f.rlphash)(this.raw())), this.cache
									.hash) : (0, f.rlphash)(this.raw())
							}, t.prototype.getMessageToVerifySignature = function() {
								if (!this.isSigned()) {
									var e = this._errorMsg("This transaction is not signed");
									throw new Error(e)
								}
								var t = this._getMessageToSign();
								return (0, f.rlphash)(t)
							}, t.prototype.getSenderPublicKey = function() {
								var e, t = this.getMessageToVerifySignature();
								if (this.common.gteHardfork("homestead") && (null === (e = this.s) || void 0 === e ? void 0 : e.gt(o.N_DIV_2))) {
									var a = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
									throw new Error(a)
								}
								var r = this,
									n = r.v,
									c = r.r,
									i = r.s;
								try {
									return (0, f.ecrecover)(t, n, (0, f.bnToUnpaddedBuffer)(c), (0, f.bnToUnpaddedBuffer)(i), this.supports(o.Capability
										.EIP155ReplayProtection) ? this.common.chainIdBN() : void 0)
								} catch (e) {
									throw a = this._errorMsg("Invalid Signature"), new Error(a)
								}
							}, t.prototype._processSignature = function(e, a, r) {
								var n = new f.BN(e);
								this.supports(o.Capability.EIP155ReplayProtection) && n.iadd(this.common.chainIdBN().muln(2).addn(8));
								var c = {
									common: this.common
								};
								return t.fromTxData({
									nonce: this.nonce,
									gasPrice: this.gasPrice,
									gasLimit: this.gasLimit,
									to: this.to,
									value: this.value,
									data: this.data,
									v: n,
									r: new f.BN(a),
									s: new f.BN(r)
								}, c)
							}, t.prototype.toJSON = function() {
								return {
									nonce: (0, f.bnToHex)(this.nonce),
									gasPrice: (0, f.bnToHex)(this.gasPrice),
									gasLimit: (0, f.bnToHex)(this.gasLimit),
									to: void 0 !== this.to ? this.to.toString() : void 0,
									value: (0, f.bnToHex)(this.value),
									data: "0x" + this.data.toString("hex"),
									v: void 0 !== this.v ? (0, f.bnToHex)(this.v) : void 0,
									r: void 0 !== this.r ? (0, f.bnToHex)(this.r) : void 0,
									s: void 0 !== this.s ? (0, f.bnToHex)(this.s) : void 0
								}
							}, t.prototype._validateTxV = function(e, t) {
								var a;
								if (void 0 !== e && !e.eqn(0) && (!t || t.gteHardfork("spuriousDragon")) && !e.eqn(27) && !e.eqn(28))
									if (t) {
										var r = t.chainIdBN().muln(2);
										if (!e.eq(r.addn(35)) && !e.eq(r.addn(36))) throw new Error("Incompatible EIP155-based V ".concat(e,
											" and chain id ").concat(t.chainIdBN(),
											". See the Common parameter of the Transaction constructor to set the chain id."))
									} else {
										var n;
										n = e.subn(35).isEven() ? 35 : 36, a = e.subn(n).divn(2)
									} return this._getCommon(t, a)
							}, t.prototype._unsignedTxImplementsEIP155 = function() {
								return this.common.gteHardfork("spuriousDragon")
							}, t.prototype._signedTxImplementsEIP155 = function() {
								if (!this.isSigned()) {
									var e = this._errorMsg("This transaction is not signed");
									throw new Error(e)
								}
								var t = this.common.gteHardfork("spuriousDragon"),
									a = this.v,
									r = this.common.chainIdBN().muln(2);
								return (a.eq(r.addn(35)) || a.eq(r.addn(36))) && t
							}, t.prototype.errorStr = function() {
								return this._getSharedErrorPostfix() + " gasPrice=".concat(this.gasPrice)
							}, t.prototype._errorMsg = function(e) {
								return "".concat(e, " (").concat(this.errorStr(), ")")
							}, t
						}(s.BaseTransaction);
					t.default = u
				},
				31932: (e, t, a) => {
					"use strict";
					var r = a(23085).Buffer;
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var n = a(22751),
						c = a(66052),
						i = function() {
							function e() {}
							return e.fromTxData = function(e, t) {
								if (void 0 === t && (t = {}), "type" in e && void 0 !== e.type) {
									var a = new n.BN((0, n.toBuffer)(e.type)).toNumber();
									if (0 === a) return c.Transaction.fromTxData(e, t);
									if (1 === a) return c.AccessListEIP2930Transaction.fromTxData(e, t);
									if (2 === a) return c.FeeMarketEIP1559Transaction.fromTxData(e, t);
									throw new Error("Tx instantiation with type ".concat(a, " not supported"))
								}
								return c.Transaction.fromTxData(e, t)
							}, e.fromSerializedData = function(e, t) {
								if (void 0 === t && (t = {}), e[0] <= 127) {
									var a = void 0;
									switch (e[0]) {
										case 1:
											a = 2930;
											break;
										case 2:
											a = 1559;
											break;
										default:
											throw new Error("TypedTransaction with ID ".concat(e[0], " unknown"))
									}
									return 1559 === a ? c.FeeMarketEIP1559Transaction.fromSerializedTx(e, t) : c.AccessListEIP2930Transaction.fromSerializedTx(
										e, t)
								}
								return c.Transaction.fromSerializedTx(e, t)
							}, e.fromBlockBodyData = function(e, t) {
								if (void 0 === t && (t = {}), r.isBuffer(e)) return this.fromSerializedData(e, t);
								if (Array.isArray(e)) return c.Transaction.fromValuesArray(e, t);
								throw new Error("Cannot decode transaction: unknown type input")
							}, e.getTransactionClass = function(e, t) {
								if (void 0 === e && (e = 0), 0 == e || e >= 128 && e <= 255) return c.Transaction;
								switch (e) {
									case 1:
										return c.AccessListEIP2930Transaction;
									case 2:
										return c.FeeMarketEIP1559Transaction;
									default:
										throw new Error("TypedTransaction with ID ".concat(e, " unknown"))
								}
							}, e
						}();
					t.default = i
				},
				63458: (e, t, a) => {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.N_DIV_2 = t.isAccessList = t.isAccessListBuffer = t.Capability = void 0;
					var r, n = a(22751);

					function c(e) {
						if (0 === e.length) return !0;
						var t = e[0];
						return !!Array.isArray(t)
					}(r = t.Capability || (t.Capability = {}))[r.EIP155ReplayProtection = 155] = "EIP155ReplayProtection", r[r.EIP1559FeeMarket =
						1559] = "EIP1559FeeMarket", r[r.EIP2718TypedTransaction = 2718] = "EIP2718TypedTransaction", r[r.EIP2930AccessLists =
						2930] = "EIP2930AccessLists", t.isAccessListBuffer = c, t.isAccessList = function(e) {
						return !c(e)
					}, t.N_DIV_2 = new n.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16)
				},
				82942: (e, t, a) => {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.AccessLists = t.checkMaxInitCodeSize = void 0;
					var r = a(22751),
						n = a(63458);
					t.checkMaxInitCodeSize = function(e, t) {
						if (t > e.param("vm", "maxInitCodeSize")) throw new Error(
							"the initcode size of this transaction is too large: it is ".concat(t, " while the max is ").concat(e.param(
								"vm", "maxInitCodeSize")))
					};
					var c = function() {
						function e() {}
						return e.getAccessListData = function(e) {
							var t, a;
							if (e && (0, n.isAccessList)(e)) {
								t = e;
								for (var c = [], i = 0; i < e.length; i++) {
									for (var d = e[i], f = (0, r.toBuffer)(d.address), o = [], s = 0; s < d.storageKeys.length; s++) o.push((0,
										r.toBuffer)(d.storageKeys[s]));
									c.push([f, o])
								}
								a = c
							} else {
								a = null != e ? e : [];
								var b = [];
								for (i = 0; i < a.length; i++) {
									var u = a[i],
										h = (0, r.bufferToHex)(u[0]),
										l = [];
									for (d = 0; d < u[1].length; d++) l.push((0, r.bufferToHex)(u[1][d]));
									var x = {
										address: h,
										storageKeys: l
									};
									b.push(x)
								}
								t = b
							}
							return {
								AccessListJSON: t,
								accessList: a
							}
						}, e.verifyAccessList = function(e) {
							for (var t = 0; t < e.length; t++) {
								var a = e[t],
									r = a[0],
									n = a[1];
								if (void 0 !== a[2]) throw new Error(
									"Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");
								if (20 != r.length) throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
								for (var c = 0; c < n.length; c++)
									if (32 != n[c].length) throw new Error(
										"Invalid EIP-2930 transaction: storage slot length should be 32 bytes")
							}
						}, e.getAccessListJSON = function(e) {
							for (var t = [], a = 0; a < e.length; a++) {
								for (var n = e[a], c = {
										address: "0x" + (0, r.setLengthLeft)(n[0], 20).toString("hex"),
										storageKeys: []
									}, i = n[1], d = 0; d < i.length; d++) {
									var f = i[d];
									c.storageKeys.push("0x" + (0, r.setLengthLeft)(f, 32).toString("hex"))
								}
								t.push(c)
							}
							return t
						}, e.getDataFeeEIP2930 = function(e, t) {
							for (var a = t.param("gasPrices", "accessListStorageKeyCost"), r = t.param("gasPrices",
									"accessListAddressCost"), n = 0, c = 0; c < e.length; c++) n += e[c][1].length;
							return e.length * r + n * a
						}, e
					}();
					t.AccessLists = c
				},
				82415: (e, t, a) => {
					"use strict";
					a.d(t, {
						RQ: () => X,
						_R: () => l
					});
					var r = a(53587),
						n = a(80711);
					const c = "abi/5.0.7";
					a(25108);
					const i = new n.Yd(c),
						d = {};
					let f = {
							calldata: !0,
							memory: !0,
							storage: !0
						},
						o = {
							calldata: !0,
							memory: !0
						};

					function s(e, t) {
						if ("bytes" === e || "string" === e) {
							if (f[t]) return !0
						} else if ("address" === e) {
							if ("payable" === t) return !0
						} else if ((e.indexOf("[") >= 0 || "tuple" === e) && o[t]) return !0;
						return (f[t] || "payable" === t) && i.throwArgumentError("invalid modifier", "name", t), !1
					}

					function b(e, t) {
						for (let a in t)(0, r.zG)(e, a, t[a])
					}
					const u = Object.freeze({
							sighash: "sighash",
							minimal: "minimal",
							full: "full",
							json: "json"
						}),
						h = new RegExp(/^(.*)\[([0-9]*)\]$/);
					class l {
						constructor(e, t) {
							e !== d && i.throwError("use fromString", n.Yd.errors.UNSUPPORTED_OPERATION, {
								operation: "new ParamType()"
							}), b(this, t);
							let a = this.type.match(h);
							b(this, a ? {
								arrayLength: parseInt(a[2] || "-1"),
								arrayChildren: l.fromObject({
									type: a[1],
									components: this.components
								}),
								baseType: "array"
							} : {
								arrayLength: null,
								arrayChildren: null,
								baseType: null != this.components ? "tuple" : this.type
							}), this._isParamType = !0, Object.freeze(this)
						}
						format(e) {
							if (e || (e = u.sighash), u[e] || i.throwArgumentError("invalid format type", "format", e), e === u.json) {
								let t = {
									type: "tuple" === this.baseType ? "tuple" : this.type,
									name: this.name || void 0
								};
								return "boolean" == typeof this.indexed && (t.indexed = this.indexed), this.components && (t.components =
									this.components.map((t => JSON.parse(t.format(e))))), JSON.stringify(t)
							}
							let t = "";
							return "array" === this.baseType ? (t += this.arrayChildren.format(e), t += "[" + (this.arrayLength < 0 ? "" :
									String(this.arrayLength)) + "]") : "tuple" === this.baseType ? (e !== u.sighash && (t += this.type), t +=
									"(" + this.components.map((t => t.format(e))).join(e === u.full ? ", " : ",") + ")") : t += this.type, e !==
								u.sighash && (!0 === this.indexed && (t += " indexed"), e === u.full && this.name && (t += " " + this.name)),
								t
						}
						static from(e, t) {
							return "string" == typeof e ? l.fromString(e, t) : l.fromObject(e)
						}
						static fromObject(e) {
							return l.isParamType(e) ? e : new l(d, {
								name: e.name || null,
								type: x(e.type),
								indexed: null == e.indexed ? null : !!e.indexed,
								components: e.components ? e.components.map(l.fromObject) : null
							})
						}
						static fromString(e, t) {
							return a = function(e, t) {
								let a = e;

								function r(t) {
									i.throwArgumentError(`unexpected character at position ${t}`, "param", e)
								}

								function n(e) {
									let a = {
										type: "",
										name: "",
										parent: e,
										state: {
											allowType: !0
										}
									};
									return t && (a.indexed = !1), a
								}
								e = e.replace(/\s/g, " ");
								let c = {
										type: "",
										name: "",
										state: {
											allowType: !0
										}
									},
									d = c;
								for (let a = 0; a < e.length; a++) {
									let c = e[a];
									switch (c) {
										case "(":
											d.state.allowType && "" === d.type ? d.type = "tuple" : d.state.allowParams || r(a), d.state.allowType = !
												1, d.type = x(d.type), d.components = [n(d)], d = d.components[0];
											break;
										case ")":
											delete d.state, "indexed" === d.name && (t || r(a), d.indexed = !0, d.name = ""), s(d.type, d.name) && (d
												.name = ""), d.type = x(d.type);
											let e = d;
											d = d.parent, d || r(a), delete e.parent, d.state.allowParams = !1, d.state.allowName = !0, d.state.allowArray = !
												0;
											break;
										case ",":
											delete d.state, "indexed" === d.name && (t || r(a), d.indexed = !0, d.name = ""), s(d.type, d.name) && (d
												.name = ""), d.type = x(d.type);
											let i = n(d.parent);
											d.parent.components.push(i), delete d.parent, d = i;
											break;
										case " ":
											d.state.allowType && "" !== d.type && (d.type = x(d.type), delete d.state.allowType, d.state.allowName = !
												0, d.state.allowParams = !0), d.state.allowName && "" !== d.name && ("indexed" === d.name ? (t || r(a),
													d.indexed && r(a), d.indexed = !0, d.name = "") : s(d.type, d.name) ? d.name = "" : d.state.allowName = !
												1);
											break;
										case "[":
											d.state.allowArray || r(a), d.type += c, d.state.allowArray = !1, d.state.allowName = !1, d.state.readArray = !
												0;
											break;
										case "]":
											d.state.readArray || r(a), d.type += c, d.state.readArray = !1, d.state.allowArray = !0, d.state.allowName = !
												0;
											break;
										default:
											d.state.allowType ? (d.type += c, d.state.allowParams = !0, d.state.allowArray = !0) : d.state.allowName ?
												(d.name += c, delete d.state.allowArray) : d.state.readArray ? d.type += c : r(a)
									}
								}
								return d.parent && i.throwArgumentError("unexpected eof", "param", e), delete c.state, "indexed" === d.name ?
									(t || r(a.length - 7), d.indexed && r(a.length - 7), d.indexed = !0, d.name = "") : s(d.type, d.name) && (d
										.name = ""), c.type = x(c.type), c
							}(e, !!t), l.fromObject({
								name: a.name,
								type: a.type,
								indexed: a.indexed,
								components: a.components
							});
							var a
						}
						static isParamType(e) {
							return !(null == e || !e._isParamType)
						}
					}

					function x(e) {
						return e.match(/^uint($|[^1-9])/) ? e = "uint256" + e.substring(4) : e.match(/^int($|[^1-9])/) && (e = "int256" +
							e.substring(3)), e
					}
					var p = a(93286),
						m = a(15154);
					const g = new n.Yd(c);
					class y {
						constructor(e, t, a, r) {
							this.name = e, this.type = t, this.localName = a, this.dynamic = r
						}
						_throwError(e, t) {
							g.throwArgumentError(e, this.localName, t)
						}
					}
					class v {
						constructor(e) {
							(0, r.zG)(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e)
						}
						get data() {
							return (0, p.xs)(this._data)
						}
						get length() {
							return this._dataLength
						}
						_writeData(e) {
							return this._data.push(e), this._dataLength += e.length, e.length
						}
						appendWriter(e) {
							return this._writeData((0, p.zo)(e._data))
						}
						writeBytes(e) {
							let t = (0, p.lE)(e);
							const a = t.length % this.wordSize;
							return a && (t = (0, p.zo)([t, this._padding.slice(a)])), this._writeData(t)
						}
						_getValue(e) {
							let t = (0, p.lE)(m.O$.from(e));
							return t.length > this.wordSize && g.throwError("value out-of-bounds", n.Yd.errors.BUFFER_OVERRUN, {
								length: this.wordSize,
								offset: t.length
							}), t.length % this.wordSize && (t = (0, p.zo)([this._padding.slice(t.length % this.wordSize), t])), t
						}
						writeValue(e) {
							return this._writeData(this._getValue(e))
						}
						writeUpdatableValue() {
							const e = this._data.length;
							return this._data.push(this._padding), this._dataLength += this.wordSize, t => {
								this._data[e] = this._getValue(t)
							}
						}
					}
					class w {
						constructor(e, t, a, n) {
							(0, r.zG)(this, "_data", (0, p.lE)(e)), (0, r.zG)(this, "wordSize", t || 32), (0, r.zG)(this, "_coerceFunc", a),
							(0, r.zG)(this, "allowLoose", n), this._offset = 0
						}
						get data() {
							return (0, p.Dv)(this._data)
						}
						get consumed() {
							return this._offset
						}
						static coerce(e, t) {
							let a = e.match("^u?int([0-9]+)$");
							return a && parseInt(a[1]) <= 48 && (t = t.toNumber()), t
						}
						coerce(e, t) {
							return this._coerceFunc ? this._coerceFunc(e, t) : w.coerce(e, t)
						}
						_peekBytes(e, t, a) {
							let r = Math.ceil(t / this.wordSize) * this.wordSize;
							return this._offset + r > this._data.length && (this.allowLoose && a && this._offset + t <= this._data.length ?
								r = t : g.throwError("data out-of-bounds", n.Yd.errors.BUFFER_OVERRUN, {
									length: this._data.length,
									offset: this._offset + r
								})), this._data.slice(this._offset, this._offset + r)
						}
						subReader(e) {
							return new w(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose)
						}
						readBytes(e, t) {
							let a = this._peekBytes(0, e, !!t);
							return this._offset += a.length, a.slice(0, e)
						}
						readValue() {
							return m.O$.from(this.readBytes(this.wordSize))
						}
					}
					var _ = a(64594);
					class k extends y {
						constructor(e) {
							super("address", "address", e, !1)
						}
						encode(e, t) {
							try {
								(0, _.Kn)(t)
							} catch (e) {
								this._throwError(e.message, t)
							}
							return e.writeValue(t)
						}
						decode(e) {
							return (0, _.Kn)((0, p.$m)(e.readValue().toHexString(), 20))
						}
					}
					class M extends y {
						constructor(e) {
							super(e.name, e.type, void 0, e.dynamic), this.coder = e
						}
						encode(e, t) {
							return this.coder.encode(e, t)
						}
						decode(e) {
							return this.coder.decode(e)
						}
					}
					const S = new n.Yd(c);

					function E(e, t, a) {
						let r = null;
						if (Array.isArray(a)) r = a;
						else if (a && "object" == typeof a) {
							let e = {};
							r = t.map((t => {
								const r = t.localName;
								return r || S.throwError("cannot encode object for signature with missing names", n.Yd.errors.INVALID_ARGUMENT, {
									argument: "values",
									coder: t,
									value: a
								}), e[r] && S.throwError("cannot encode object for signature with duplicate names", n.Yd.errors.INVALID_ARGUMENT, {
									argument: "values",
									coder: t,
									value: a
								}), e[r] = !0, a[r]
							}))
						} else S.throwArgumentError("invalid tuple value", "tuple", a);
						t.length !== r.length && S.throwArgumentError("types/value length mismatch", "tuple", a);
						let c = new v(e.wordSize),
							i = new v(e.wordSize),
							d = [];
						t.forEach(((e, t) => {
							let a = r[t];
							if (e.dynamic) {
								let t = i.length;
								e.encode(i, a);
								let r = c.writeUpdatableValue();
								d.push((e => {
									r(e + t)
								}))
							} else e.encode(c, a)
						})), d.forEach((e => {
							e(c.length)
						}));
						let f = e.appendWriter(c);
						return f += e.appendWriter(i), f
					}

					function A(e, t) {
						let a = [],
							r = e.subReader(0);
						t.forEach((t => {
							let c = null;
							if (t.dynamic) {
								let a = e.readValue(),
									i = r.subReader(a.toNumber());
								try {
									c = t.decode(i)
								} catch (e) {
									if (e.code === n.Yd.errors.BUFFER_OVERRUN) throw e;
									c = e, c.baseType = t.name, c.name = t.localName, c.type = t.type
								}
							} else try {
								c = t.decode(e)
							} catch (e) {
								if (e.code === n.Yd.errors.BUFFER_OVERRUN) throw e;
								c = e, c.baseType = t.name, c.name = t.localName, c.type = t.type
							}
							null != c && a.push(c)
						}));
						const c = t.reduce(((e, t) => {
							const a = t.localName;
							return a && (e[a] || (e[a] = 0), e[a]++), e
						}), {});
						t.forEach(((e, t) => {
							let r = e.localName;
							if (!r || 1 !== c[r]) return;
							if ("length" === r && (r = "_length"), null != a[r]) return;
							const n = a[t];
							n instanceof Error ? Object.defineProperty(a, r, {
								get: () => {
									throw n
								}
							}) : a[r] = n
						}));
						for (let e = 0; e < a.length; e++) {
							const t = a[e];
							t instanceof Error && Object.defineProperty(a, e, {
								get: () => {
									throw t
								}
							})
						}
						return Object.freeze(a)
					}
					class T extends y {
						constructor(e, t, a) {
							super("array", e.type + "[" + (t >= 0 ? t : "") + "]", a, -1 === t || e.dynamic), this.coder = e, this.length =
								t
						}
						encode(e, t) {
							Array.isArray(t) || this._throwError("expected array value", t);
							let a = this.length; - 1 === a && (a = t.length, e.writeValue(t.length)), S.checkArgumentCount(t.length, a,
								"coder array" + (this.localName ? " " + this.localName : ""));
							let r = [];
							for (let e = 0; e < t.length; e++) r.push(this.coder);
							return E(e, r, t)
						}
						decode(e) {
							let t = this.length; - 1 === t && (t = e.readValue().toNumber());
							let a = [];
							for (let e = 0; e < t; e++) a.push(new M(this.coder));
							return e.coerce(this.name, A(e, a))
						}
					}
					class R extends y {
						constructor(e) {
							super("bool", "bool", e, !1)
						}
						encode(e, t) {
							return e.writeValue(t ? 1 : 0)
						}
						decode(e) {
							return e.coerce(this.type, !e.readValue().isZero())
						}
					}
					class I extends y {
						constructor(e, t) {
							super(e, e, t, !0)
						}
						encode(e, t) {
							t = (0, p.lE)(t);
							let a = e.writeValue(t.length);
							return a += e.writeBytes(t), a
						}
						decode(e) {
							return e.readBytes(e.readValue().toNumber(), !0)
						}
					}
					class P extends I {
						constructor(e) {
							super("bytes", e)
						}
						decode(e) {
							return e.coerce(this.name, (0, p.Dv)(super.decode(e)))
						}
					}
					class C extends y {
						constructor(e, t) {
							let a = "bytes" + String(e);
							super(a, a, t, !1), this.size = e
						}
						encode(e, t) {
							let a = (0, p.lE)(t);
							return a.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(a)
						}
						decode(e) {
							return e.coerce(this.name, (0, p.Dv)(e.readBytes(this.size)))
						}
					}
					class O extends y {
						constructor(e) {
							super("null", "", e, !1)
						}
						encode(e, t) {
							return null != t && this._throwError("not null", t), e.writeBytes([])
						}
						decode(e) {
							return e.readBytes(0), e.coerce(this.name, null)
						}
					}
					var N = a(21046);
					class B extends y {
						constructor(e, t, a) {
							const r = (t ? "int" : "uint") + 8 * e;
							super(r, r, a, !1), this.size = e, this.signed = t
						}
						encode(e, t) {
							let a = m.O$.from(t),
								r = N.Bz.mask(8 * e.wordSize);
							if (this.signed) {
								let e = r.mask(8 * this.size - 1);
								(a.gt(e) || a.lt(e.add(N.fh).mul(N.tL))) && this._throwError("value out-of-bounds", t)
							} else(a.lt(N._Y) || a.gt(r.mask(8 * this.size))) && this._throwError("value out-of-bounds", t);
							return a = a.toTwos(8 * this.size).mask(8 * this.size), this.signed && (a = a.fromTwos(8 * this.size).toTwos(8 *
								e.wordSize)), e.writeValue(a)
						}
						decode(e) {
							let t = e.readValue().mask(8 * this.size);
							return this.signed && (t = t.fromTwos(8 * this.size)), e.coerce(this.name, t)
						}
					}
					const L = new n.Yd("strings/5.6.0");
					var U, j;

					function D(e, t, a, r, n) {
						if (e === j.BAD_PREFIX || e === j.UNEXPECTED_CONTINUE) {
							let e = 0;
							for (let r = t + 1; r < a.length && a[r] >> 6 == 2; r++) e++;
							return e
						}
						return e === j.OVERRUN ? a.length - t - 1 : 0
					}! function(e) {
						e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD"
					}(U || (U = {})),
					function(e) {
						e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN =
							"string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE =
							"UTF-16 surrogate", e.OVERLONG = "overlong representation"
					}(j || (j = {}));
					const F = Object.freeze({
						error: function(e, t, a, r, n) {
							return L.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", a)
						},
						ignore: D,
						replace: function(e, t, a, r, n) {
							return e === j.OVERLONG ? (r.push(n), 0) : (r.push(65533), D(e, t, a))
						}
					});

					function q(e, t) {
						return function(e, t) {
							null == t && (t = F.error), e = (0, p.lE)(e);
							const a = [];
							let r = 0;
							for (; r < e.length;) {
								const n = e[r++];
								if (n >> 7 == 0) {
									a.push(n);
									continue
								}
								let c = null,
									i = null;
								if (192 == (224 & n)) c = 1, i = 127;
								else if (224 == (240 & n)) c = 2, i = 2047;
								else {
									if (240 != (248 & n)) {
										r += t(128 == (192 & n) ? j.UNEXPECTED_CONTINUE : j.BAD_PREFIX, r - 1, e, a);
										continue
									}
									c = 3, i = 65535
								}
								if (r - 1 + c >= e.length) {
									r += t(j.OVERRUN, r - 1, e, a);
									continue
								}
								let d = n & (1 << 8 - c - 1) - 1;
								for (let n = 0; n < c; n++) {
									let n = e[r];
									if (128 != (192 & n)) {
										r += t(j.MISSING_CONTINUE, r, e, a), d = null;
										break
									}
									d = d << 6 | 63 & n, r++
								}
								null !== d && (d > 1114111 ? r += t(j.OUT_OF_RANGE, r - 1 - c, e, a, d) : d >= 55296 && d <= 57343 ? r += t(j
									.UTF16_SURROGATE, r - 1 - c, e, a, d) : d <= i ? r += t(j.OVERLONG, r - 1 - c, e, a, d) : a.push(d))
							}
							return a
						}(e, t).map((e => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10 &
							1023), 56320 + (1023 & e))))).join("")
					}
					class H extends I {
						constructor(e) {
							super("string", e)
						}
						encode(e, t) {
							return super.encode(e, function(e, t = U.current) {
								t != U.current && (L.checkNormalize(), e = e.normalize(t));
								let a = [];
								for (let t = 0; t < e.length; t++) {
									const r = e.charCodeAt(t);
									if (r < 128) a.push(r);
									else if (r < 2048) a.push(r >> 6 | 192), a.push(63 & r | 128);
									else if (55296 == (64512 & r)) {
										t++;
										const n = e.charCodeAt(t);
										if (t >= e.length || 56320 != (64512 & n)) throw new Error("invalid utf-8 string");
										const c = 65536 + ((1023 & r) << 10) + (1023 & n);
										a.push(c >> 18 | 240), a.push(c >> 12 & 63 | 128), a.push(c >> 6 & 63 | 128), a.push(63 & c | 128)
									} else a.push(r >> 12 | 224), a.push(r >> 6 & 63 | 128), a.push(63 & r | 128)
								}
								return (0, p.lE)(a)
							}(t))
						}
						decode(e) {
							return q(super.decode(e))
						}
					}
					class z extends y {
						constructor(e, t) {
							let a = !1;
							const r = [];
							e.forEach((e => {
								e.dynamic && (a = !0), r.push(e.type)
							})), super("tuple", "tuple(" + r.join(",") + ")", t, a), this.coders = e
						}
						encode(e, t) {
							return E(e, this.coders, t)
						}
						decode(e) {
							return e.coerce(this.name, A(e, this.coders))
						}
					}
					const V = new n.Yd(c),
						W = new RegExp(/^bytes([0-9]*)$/),
						G = new RegExp(/^(u?int)([0-9]*)$/);
					class X {
						constructor(e) {
							V.checkNew(new.target, X), (0, r.zG)(this, "coerceFunc", e || null)
						}
						_getCoder(e) {
							switch (e.baseType) {
								case "address":
									return new k(e.name);
								case "bool":
									return new R(e.name);
								case "string":
									return new H(e.name);
								case "bytes":
									return new P(e.name);
								case "array":
									return new T(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
								case "tuple":
									return new z((e.components || []).map((e => this._getCoder(e))), e.name);
								case "":
									return new O(e.name)
							}
							let t = e.type.match(G);
							if (t) {
								let a = parseInt(t[2] || "256");
								return (0 === a || a > 256 || a % 8 != 0) && V.throwArgumentError("invalid " + t[1] + " bit length", "param",
									e), new B(a / 8, "int" === t[1], e.name)
							}
							if (t = e.type.match(W), t) {
								let a = parseInt(t[1]);
								return (0 === a || a > 32) && V.throwArgumentError("invalid bytes length", "param", e), new C(a, e.name)
							}
							return V.throwArgumentError("invalid type", "type", e.type)
						}
						_getWordSize() {
							return 32
						}
						_getReader(e, t) {
							return new w(e, this._getWordSize(), this.coerceFunc, t)
						}
						_getWriter() {
							return new v(this._getWordSize())
						}
						encode(e, t) {
							e.length !== t.length && V.throwError("types/values length mismatch", n.Yd.errors.INVALID_ARGUMENT, {
								count: {
									types: e.length,
									values: t.length
								},
								value: {
									types: e,
									values: t
								}
							});
							const a = e.map((e => this._getCoder(l.from(e)))),
								r = new z(a, "_"),
								c = this._getWriter();
							return r.encode(c, t), c.data
						}
						decode(e, t, a) {
							const r = e.map((e => this._getCoder(l.from(e))));
							return new z(r, "_").decode(this._getReader((0, p.lE)(t), a))
						}
					}
					new X, new n.Yd(c)
				},
				64594: (e, t, a) => {
					"use strict";
					a.d(t, {
						Kn: () => b
					});
					var r = a(93286),
						n = a(15154),
						c = a(38197);
					const i = new(a(80711).Yd)("address/5.6.0");

					function d(e) {
						(0, r.A7)(e, 20) || i.throwArgumentError("invalid address", "address", e);
						const t = (e = e.toLowerCase()).substring(2).split(""),
							a = new Uint8Array(40);
						for (let e = 0; e < 40; e++) a[e] = t[e].charCodeAt(0);
						const n = (0, r.lE)((0, c.w)(a));
						for (let e = 0; e < 40; e += 2) n[e >> 1] >> 4 >= 8 && (t[e] = t[e].toUpperCase()), (15 & n[e >> 1]) >= 8 && (t[
							e + 1] = t[e + 1].toUpperCase());
						return "0x" + t.join("")
					}
					const f = {};
					for (let e = 0; e < 10; e++) f[String(e)] = String(e);
					for (let e = 0; e < 26; e++) f[String.fromCharCode(65 + e)] = String(10 + e);
					const o = Math.floor((s = 9007199254740991, Math.log10 ? Math.log10(s) : Math.log(s) / Math.LN10));
					var s;

					function b(e) {
						let t = null;
						if ("string" != typeof e && i.throwArgumentError("invalid address", "address", e), e.match(
								/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = d(e), e.match(
							/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && i.throwArgumentError("bad address checksum", "address", e);
						else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
							for (e.substring(2, 4) !== function(e) {
									let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map((e => f[e])).join(
										"");
									for (; t.length >= o;) {
										let e = t.substring(0, o);
										t = parseInt(e, 10) % 97 + t.substring(e.length)
									}
									let a = String(98 - parseInt(t, 10) % 97);
									for (; a.length < 2;) a = "0" + a;
									return a
								}(e) && i.throwArgumentError("bad icap checksum", "address", e), t = (0, n.g$)(e.substring(4)); t.length < 40;)
								t = "0" + t;
							t = d("0x" + t)
						} else i.throwArgumentError("invalid address", "address", e);
						return t
					}
				},
				15154: (e, t, a) => {
					"use strict";
					a.d(t, {
						O$: () => u,
						g$: () => m
					});
					var r = a(13550),
						n = a.n(r),
						c = a(93286),
						i = a(80711),
						d = n().BN;
					const f = new i.Yd("bignumber/5.6.0"),
						o = {},
						s = 9007199254740991;
					let b = !1;
					class u {
						constructor(e, t) {
							f.checkNew(new.target, u), e !== o && f.throwError("cannot call constructor directly; use BigNumber.from", i.Yd
								.errors.UNSUPPORTED_OPERATION, {
									operation: "new (BigNumber)"
								}), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
						}
						fromTwos(e) {
							return l(x(this).fromTwos(e))
						}
						toTwos(e) {
							return l(x(this).toTwos(e))
						}
						abs() {
							return "-" === this._hex[0] ? u.from(this._hex.substring(1)) : this
						}
						add(e) {
							return l(x(this).add(x(e)))
						}
						sub(e) {
							return l(x(this).sub(x(e)))
						}
						div(e) {
							return u.from(e).isZero() && p("division-by-zero", "div"), l(x(this).div(x(e)))
						}
						mul(e) {
							return l(x(this).mul(x(e)))
						}
						mod(e) {
							const t = x(e);
							return t.isNeg() && p("division-by-zero", "mod"), l(x(this).umod(t))
						}
						pow(e) {
							const t = x(e);
							return t.isNeg() && p("negative-power", "pow"), l(x(this).pow(t))
						}
						and(e) {
							const t = x(e);
							return (this.isNegative() || t.isNeg()) && p("unbound-bitwise-result", "and"), l(x(this).and(t))
						}
						or(e) {
							const t = x(e);
							return (this.isNegative() || t.isNeg()) && p("unbound-bitwise-result", "or"), l(x(this).or(t))
						}
						xor(e) {
							const t = x(e);
							return (this.isNegative() || t.isNeg()) && p("unbound-bitwise-result", "xor"), l(x(this).xor(t))
						}
						mask(e) {
							return (this.isNegative() || e < 0) && p("negative-width", "mask"), l(x(this).maskn(e))
						}
						shl(e) {
							return (this.isNegative() || e < 0) && p("negative-width", "shl"), l(x(this).shln(e))
						}
						shr(e) {
							return (this.isNegative() || e < 0) && p("negative-width", "shr"), l(x(this).shrn(e))
						}
						eq(e) {
							return x(this).eq(x(e))
						}
						lt(e) {
							return x(this).lt(x(e))
						}
						lte(e) {
							return x(this).lte(x(e))
						}
						gt(e) {
							return x(this).gt(x(e))
						}
						gte(e) {
							return x(this).gte(x(e))
						}
						isNegative() {
							return "-" === this._hex[0]
						}
						isZero() {
							return x(this).isZero()
						}
						toNumber() {
							try {
								return x(this).toNumber()
							} catch (e) {
								p("overflow", "toNumber", this.toString())
							}
							return null
						}
						toBigInt() {
							try {
								return BigInt(this.toString())
							} catch (e) {}
							return f.throwError("this platform does not support BigInt", i.Yd.errors.UNSUPPORTED_OPERATION, {
								value: this.toString()
							})
						}
						toString() {
							return arguments.length > 0 && (10 === arguments[0] ? b || (b = !0, f.warn(
								"BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? f.throwError(
								"BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", i.Yd.errors.UNEXPECTED_ARGUMENT, {}
							) : f.throwError("BigNumber.toString does not accept parameters", i.Yd.errors.UNEXPECTED_ARGUMENT, {})), x(
								this).toString(10)
						}
						toHexString() {
							return this._hex
						}
						toJSON(e) {
							return {
								type: "BigNumber",
								hex: this.toHexString()
							}
						}
						static from(e) {
							if (e instanceof u) return e;
							if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new u(o, h(e)) : e.match(/^-?[0-9]+$/) ? new u(
								o, h(new d(e))) : f.throwArgumentError("invalid BigNumber string", "value", e);
							if ("number" == typeof e) return e % 1 && p("underflow", "BigNumber.from", e), (e >= s || e <= -s) && p(
								"overflow", "BigNumber.from", e), u.from(String(e));
							const t = e;
							if ("bigint" == typeof t) return u.from(t.toString());
							if ((0, c._t)(t)) return u.from((0, c.Dv)(t));
							if (t)
								if (t.toHexString) {
									const e = t.toHexString();
									if ("string" == typeof e) return u.from(e)
								} else {
									let e = t._hex;
									if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && ((0, c.A7)(e) || "-" === e[0] &&
											(0, c.A7)(e.substring(1)))) return u.from(e)
								} return f.throwArgumentError("invalid BigNumber value", "value", e)
						}
						static isBigNumber(e) {
							return !(!e || !e._isBigNumber)
						}
					}

					function h(e) {
						if ("string" != typeof e) return h(e.toString(16));
						if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && f.throwArgumentError("invalid hex", "value", e),
							"0x00" === (e = h(e)) ? e : "-" + e;
						if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
						for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(
							4);
						return e
					}

					function l(e) {
						return u.from(h(e))
					}

					function x(e) {
						const t = u.from(e).toHexString();
						return "-" === t[0] ? new d("-" + t.substring(3), 16) : new d(t.substring(2), 16)
					}

					function p(e, t, a) {
						const r = {
							fault: e,
							operation: t
						};
						return null != a && (r.value = a), f.throwError(e, i.Yd.errors.NUMERIC_FAULT, r)
					}

					function m(e) {
						return new d(e, 36).toString(16)
					}
				},
				93286: (e, t, a) => {
					"use strict";
					a.d(t, {
						lE: () => o,
						zo: () => s,
						xs: () => m,
						E1: () => x,
						p3: () => p,
						$m: () => g,
						Dv: () => l,
						_t: () => f,
						Zq: () => i,
						A7: () => u,
						N: () => y,
						G1: () => b
					});
					const r = new(a(80711).Yd)("bytes/5.6.1");

					function n(e) {
						return !!e.toHexString
					}

					function c(e) {
						return e.slice || (e.slice = function() {
							const t = Array.prototype.slice.call(arguments);
							return c(new Uint8Array(Array.prototype.slice.apply(e, t)))
						}), e
					}

					function i(e) {
						return u(e) && !(e.length % 2) || f(e)
					}

					function d(e) {
						return "number" == typeof e && e == e && e % 1 == 0
					}

					function f(e) {
						if (null == e) return !1;
						if (e.constructor === Uint8Array) return !0;
						if ("string" == typeof e) return !1;
						if (!d(e.length) || e.length < 0) return !1;
						for (let t = 0; t < e.length; t++) {
							const a = e[t];
							if (!d(a) || a < 0 || a >= 256) return !1
						}
						return !0
					}

					function o(e, t) {
						if (t || (t = {}), "number" == typeof e) {
							r.checkSafeUint53(e, "invalid arrayify value");
							const t = [];
							for (; e;) t.unshift(255 & e), e = parseInt(String(e / 256));
							return 0 === t.length && t.push(0), c(new Uint8Array(t))
						}
						if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), n(e) && (e = e
								.toHexString()), u(e)) {
							let a = e.substring(2);
							a.length % 2 && ("left" === t.hexPad ? a = "0" + a : "right" === t.hexPad ? a += "0" : r.throwArgumentError(
								"hex data is odd-length", "value", e));
							const n = [];
							for (let e = 0; e < a.length; e += 2) n.push(parseInt(a.substring(e, e + 2), 16));
							return c(new Uint8Array(n))
						}
						return f(e) ? c(new Uint8Array(e)) : r.throwArgumentError("invalid arrayify value", "value", e)
					}

					function s(e) {
						const t = e.map((e => o(e))),
							a = t.reduce(((e, t) => e + t.length), 0),
							r = new Uint8Array(a);
						return t.reduce(((e, t) => (r.set(t, e), e + t.length)), 0), c(r)
					}

					function b(e) {
						let t = o(e);
						if (0 === t.length) return t;
						let a = 0;
						for (; a < t.length && 0 === t[a];) a++;
						return a && (t = t.slice(a)), t
					}

					function u(e, t) {
						return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/) || t && e.length !== 2 + 2 * t)
					}
					const h = "0123456789abcdef";

					function l(e, t) {
						if (t || (t = {}), "number" == typeof e) {
							r.checkSafeUint53(e, "invalid hexlify value");
							let t = "";
							for (; e;) t = h[15 & e] + t, e = Math.floor(e / 16);
							return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
						}
						if ("bigint" == typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
						if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), n(e)) return e
							.toHexString();
						if (u(e)) return e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e +=
							"0" : r.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
						if (f(e)) {
							let t = "0x";
							for (let a = 0; a < e.length; a++) {
								let r = e[a];
								t += h[(240 & r) >> 4] + h[15 & r]
							}
							return t
						}
						return r.throwArgumentError("invalid hexlify value", "value", e)
					}

					function x(e) {
						if ("string" != typeof e) e = l(e);
						else if (!u(e) || e.length % 2) return null;
						return (e.length - 2) / 2
					}

					function p(e, t, a) {
						return "string" != typeof e ? e = l(e) : (!u(e) || e.length % 2) && r.throwArgumentError("invalid hexData",
							"value", e), t = 2 + 2 * t, null != a ? "0x" + e.substring(t, 2 + 2 * a) : "0x" + e.substring(t)
					}

					function m(e) {
						let t = "0x";
						return e.forEach((e => {
							t += l(e).substring(2)
						})), t
					}

					function g(e, t) {
						for ("string" != typeof e ? e = l(e) : u(e) || r.throwArgumentError("invalid hex string", "value", e), e.length >
							2 * t + 2 && r.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;) e =
							"0x0" + e.substring(2);
						return e
					}

					function y(e) {
						const t = {
							r: "0x",
							s: "0x",
							_vs: "0x",
							recoveryParam: 0,
							v: 0,
							yParityAndS: "0x",
							compact: "0x"
						};
						if (i(e)) {
							let a = o(e);
							64 === a.length ? (t.v = 27 + (a[32] >> 7), a[32] &= 127, t.r = l(a.slice(0, 32)), t.s = l(a.slice(32, 64))) :
								65 === a.length ? (t.r = l(a.slice(0, 32)), t.s = l(a.slice(32, 64)), t.v = a[64]) : r.throwArgumentError(
									"invalid signature string", "signature", e), t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : r.throwArgumentError(
									"signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (a[32] |= 128),
								t._vs = l(a.slice(32, 64))
						} else {
							if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
								const a = function(e, t) {
									(e = o(e)).length > t && r.throwArgumentError("value out of range", "value", arguments[0]);
									const a = new Uint8Array(t);
									return a.set(e, t - e.length), c(a)
								}(o(t._vs), 32);
								t._vs = l(a);
								const n = a[0] >= 128 ? 1 : 0;
								null == t.recoveryParam ? t.recoveryParam = n : t.recoveryParam !== n && r.throwArgumentError(
									"signature recoveryParam mismatch _vs", "signature", e), a[0] &= 127;
								const i = l(a);
								null == t.s ? t.s = i : t.s !== i && r.throwArgumentError("signature v mismatch _vs", "signature", e)
							}
							if (null == t.recoveryParam) null == t.v ? r.throwArgumentError("signature missing v and recoveryParam",
								"signature", e) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
							else if (null == t.v) t.v = 27 + t.recoveryParam;
							else {
								const a = 0 === t.v || 1 === t.v ? t.v : 1 - t.v % 2;
								t.recoveryParam !== a && r.throwArgumentError("signature recoveryParam mismatch v", "signature", e)
							}
							null != t.r && u(t.r) ? t.r = g(t.r, 32) : r.throwArgumentError("signature missing or invalid r", "signature",
								e), null != t.s && u(t.s) ? t.s = g(t.s, 32) : r.throwArgumentError("signature missing or invalid s",
								"signature", e);
							const a = o(t.s);
							a[0] >= 128 && r.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (a[0] |=
								128);
							const n = l(a);
							t._vs && (u(t._vs) || r.throwArgumentError("signature invalid _vs", "signature", e), t._vs = g(t._vs, 32)),
								null == t._vs ? t._vs = n : t._vs !== n && r.throwArgumentError("signature _vs mismatch v and s", "signature",
									e)
						}
						return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t
					}
				},
				21046: (e, t, a) => {
					"use strict";
					a.d(t, {
						Bz: () => d,
						_Y: () => c,
						fh: () => i,
						tL: () => n
					});
					var r = a(15154);
					const n = r.O$.from(-1),
						c = r.O$.from(0),
						i = r.O$.from(1),
						d = r.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
				},
				38197: (e, t, a) => {
					"use strict";
					a.d(t, {
						w: () => i
					});
					var r = a(91094),
						n = a.n(r),
						c = a(93286);

					function i(e) {
						return "0x" + n().keccak_256((0, c.lE)(e))
					}
				},
				80711: (e, t, a) => {
					"use strict";
					a.d(t, {
						Yd: () => h
					});
					var r = a(25108);
					let n = !1,
						c = !1;
					const i = {
						debug: 1,
						default: 2,
						info: 2,
						warning: 3,
						error: 4,
						off: 5
					};
					let d = i.default,
						f = null;
					const o = function() {
						try {
							const e = [];
							if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t => {
									try {
										if ("test" !== "test".normalize(t)) throw new Error("bad normalize")
									} catch (a) {
										e.push(t)
									}
								})), e.length) throw new Error("missing " + e.join(", "));
							if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error(
								"broken implementation")
						} catch (e) {
							return e.message
						}
						return null
					}();
					var s, b;
					! function(e) {
						e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
					}(s || (s = {})),
					function(e) {
						e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION =
							"UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT =
							"TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW =
							"MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT =
							"UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED =
							"NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT =
							"UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
					}(b || (b = {}));
					const u = "0123456789abcdef";
					class h {
						constructor(e) {
							Object.defineProperty(this, "version", {
								enumerable: !0,
								value: e,
								writable: !1
							})
						}
						_log(e, t) {
							const a = e.toLowerCase();
							null == i[a] && this.throwArgumentError("invalid log level name", "logLevel", e), d > i[a] || r.log.apply(r, t)
						}
						debug(...e) {
							this._log(h.levels.DEBUG, e)
						}
						info(...e) {
							this._log(h.levels.INFO, e)
						}
						warn(...e) {
							this._log(h.levels.WARNING, e)
						}
						makeError(e, t, a) {
							if (c) return this.makeError("censored error", t, {});
							t || (t = h.errors.UNKNOWN_ERROR), a || (a = {});
							const r = [];
							Object.keys(a).forEach((e => {
								const t = a[e];
								try {
									if (t instanceof Uint8Array) {
										let a = "";
										for (let e = 0; e < t.length; e++) a += u[t[e] >> 4], a += u[15 & t[e]];
										r.push(e + "=Uint8Array(0x" + a + ")")
									} else r.push(e + "=" + JSON.stringify(t))
								} catch (t) {
									r.push(e + "=" + JSON.stringify(a[e].toString()))
								}
							})), r.push(`code=${t}`), r.push(`version=${this.version}`);
							const n = e;
							let i = "";
							switch (t) {
								case b.NUMERIC_FAULT:
									{
										i = "NUMERIC_FAULT";
										const t = e;
										switch (t) {
											case "overflow":
											case "underflow":
											case "division-by-zero":
												i += "-" + t;
												break;
											case "negative-power":
											case "negative-width":
												i += "-unsupported";
												break;
											case "unbound-bitwise-result":
												i += "-unbound-result"
										}
										break
									}
								case b.CALL_EXCEPTION:
								case b.INSUFFICIENT_FUNDS:
								case b.MISSING_NEW:
								case b.NONCE_EXPIRED:
								case b.REPLACEMENT_UNDERPRICED:
								case b.TRANSACTION_REPLACED:
								case b.UNPREDICTABLE_GAS_LIMIT:
									i = t
							}
							i && (e += " [ See: https://links.ethers.org/v5-errors-" + i + " ]"), r.length && (e += " (" + r.join(", ") +
								")");
							const d = new Error(e);
							return d.reason = n, d.code = t, Object.keys(a).forEach((function(e) {
								d[e] = a[e]
							})), d
						}
						throwError(e, t, a) {
							throw this.makeError(e, t, a)
						}
						throwArgumentError(e, t, a) {
							return this.throwError(e, h.errors.INVALID_ARGUMENT, {
								argument: t,
								value: a
							})
						}
						assert(e, t, a, r) {
							e || this.throwError(t, a, r)
						}
						assertArgument(e, t, a, r) {
							e || this.throwArgumentError(t, a, r)
						}
						checkNormalize(e) {
							null == e && (e = "platform missing String.prototype.normalize"), o && this.throwError(
								"platform missing String.prototype.normalize", h.errors.UNSUPPORTED_OPERATION, {
									operation: "String.prototype.normalize",
									form: o
								})
						}
						checkSafeUint53(e, t) {
							"number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(
								t, h.errors.NUMERIC_FAULT, {
									operation: "checkSafeInteger",
									fault: "out-of-safe-range",
									value: e
								}), e % 1 && this.throwError(t, h.errors.NUMERIC_FAULT, {
								operation: "checkSafeInteger",
								fault: "non-integer",
								value: e
							}))
						}
						checkArgumentCount(e, t, a) {
							a = a ? ": " + a : "", e < t && this.throwError("missing argument" + a, h.errors.MISSING_ARGUMENT, {
								count: e,
								expectedCount: t
							}), e > t && this.throwError("too many arguments" + a, h.errors.UNEXPECTED_ARGUMENT, {
								count: e,
								expectedCount: t
							})
						}
						checkNew(e, t) {
							e !== Object && null != e || this.throwError("missing new", h.errors.MISSING_NEW, {
								name: t.name
							})
						}
						checkAbstract(e, t) {
							e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) +
								" directly; use a sub-class", h.errors.UNSUPPORTED_OPERATION, {
									name: e.name,
									operation: "new"
								}) : e !== Object && null != e || this.throwError("missing new", h.errors.MISSING_NEW, {
								name: t.name
							})
						}
						static globalLogger() {
							return f || (f = new h("logger/5.6.0")), f
						}
						static setCensorship(e, t) {
							if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", h.errors.UNSUPPORTED_OPERATION, {
									operation: "setCensorship"
								}), n) {
								if (!e) return;
								this.globalLogger().throwError("error censorship permanent", h.errors.UNSUPPORTED_OPERATION, {
									operation: "setCensorship"
								})
							}
							c = !!e, n = !!t
						}
						static setLogLevel(e) {
							const t = i[e.toLowerCase()];
							null != t ? d = t : h.globalLogger().warn("invalid log level - " + e)
						}
						static from(e) {
							return new h(e)
						}
					}
					h.errors = b, h.levels = s
				},
				53587: (e, t, a) => {
					"use strict";
					a.d(t, {
						uj: () => c,
						zG: () => n
					});
					const r = new(a(80711).Yd)("properties/5.6.0");

					function n(e, t, a) {
						Object.defineProperty(e, t, {
							enumerable: !0,
							value: a,
							writable: !1
						})
					}

					function c(e, t) {
						e && "object" == typeof e || r.throwArgumentError("invalid object", "object", e), Object.keys(e).forEach((a => {
							t[a] || r.throwArgumentError("invalid object key - " + a, "transaction:" + a, e)
						}))
					}
				},
				75504: (e, t, a) => {
					"use strict";
					a.r(t), a.d(t, {
						TransactionTypes: () => be,
						accessListify: () => ve,
						computeAddress: () => pe,
						parse: () => Ee,
						recoverAddress: () => me,
						serialize: () => Me
					});
					var r = a(64594),
						n = a(15154),
						c = a(93286),
						i = a(21046),
						d = a(38197),
						f = a(53587),
						o = a(80711);
					const s = new o.Yd("rlp/5.6.0");

					function b(e) {
						const t = [];
						for (; e;) t.unshift(255 & e), e >>= 8;
						return t
					}

					function u(e, t, a) {
						let r = 0;
						for (let n = 0; n < a; n++) r = 256 * r + e[t + n];
						return r
					}

					function h(e) {
						if (Array.isArray(e)) {
							let t = [];
							if (e.forEach((function(e) {
									t = t.concat(h(e))
								})), t.length <= 55) return t.unshift(192 + t.length), t;
							const a = b(t.length);
							return a.unshift(247 + a.length), a.concat(t)
						}(0, c.Zq)(e) || s.throwArgumentError("RLP object must be BytesLike", "object", e);
						const t = Array.prototype.slice.call((0, c.lE)(e));
						if (1 === t.length && t[0] <= 127) return t;
						if (t.length <= 55) return t.unshift(128 + t.length), t;
						const a = b(t.length);
						return a.unshift(183 + a.length), a.concat(t)
					}

					function l(e) {
						return (0, c.Dv)(h(e))
					}

					function x(e, t, a, r) {
						const n = [];
						for (; a < t + 1 + r;) {
							const c = p(e, a);
							n.push(c.result), (a += c.consumed) > t + 1 + r && s.throwError("child data too short", o.Yd.errors.BUFFER_OVERRUN, {})
						}
						return {
							consumed: 1 + r,
							result: n
						}
					}

					function p(e, t) {
						if (0 === e.length && s.throwError("data too short", o.Yd.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
							const a = e[t] - 247;
							t + 1 + a > e.length && s.throwError("data short segment too short", o.Yd.errors.BUFFER_OVERRUN, {});
							const r = u(e, t + 1, a);
							return t + 1 + a + r > e.length && s.throwError("data long segment too short", o.Yd.errors.BUFFER_OVERRUN, {}),
								x(e, t, t + 1 + a, a + r)
						}
						if (e[t] >= 192) {
							const a = e[t] - 192;
							return t + 1 + a > e.length && s.throwError("data array too short", o.Yd.errors.BUFFER_OVERRUN, {}), x(e, t, t +
								1, a)
						}
						if (e[t] >= 184) {
							const a = e[t] - 183;
							t + 1 + a > e.length && s.throwError("data array too short", o.Yd.errors.BUFFER_OVERRUN, {});
							const r = u(e, t + 1, a);
							return t + 1 + a + r > e.length && s.throwError("data array too short", o.Yd.errors.BUFFER_OVERRUN, {}), {
								consumed: 1 + a + r,
								result: (0, c.Dv)(e.slice(t + 1 + a, t + 1 + a + r))
							}
						}
						if (e[t] >= 128) {
							const a = e[t] - 128;
							return t + 1 + a > e.length && s.throwError("data too short", o.Yd.errors.BUFFER_OVERRUN, {}), {
								consumed: 1 + a,
								result: (0, c.Dv)(e.slice(t + 1, t + 1 + a))
							}
						}
						return {
							consumed: 1,
							result: (0, c.Dv)(e[t])
						}
					}

					function m(e) {
						const t = (0, c.lE)(e),
							a = p(t, 0);
						return a.consumed !== t.length && s.throwArgumentError("invalid rlp data", "data", e), a.result
					}
					var g = a(13550),
						y = a.n(g),
						v = a(33715),
						w = a.n(v);

					function _(e, t, a) {
						return a = {
							path: t,
							exports: {},
							require: function(e, t) {
								return function() {
									throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
								}(null == t && a.path)
							}
						}, e(a, a.exports), a.exports
					}
					"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== a.g ? a.g :
						"undefined" != typeof self && self;
					var k = M;

					function M(e, t) {
						if (!e) throw new Error(t || "Assertion failed")
					}
					M.equal = function(e, t, a) {
						if (e != t) throw new Error(a || "Assertion failed: " + e + " != " + t)
					};
					var S = _((function(e, t) {
							var a = t;

							function r(e) {
								return 1 === e.length ? "0" + e : e
							}

							function n(e) {
								for (var t = "", a = 0; a < e.length; a++) t += r(e[a].toString(16));
								return t
							}
							a.toArray = function(e, t) {
								if (Array.isArray(e)) return e.slice();
								if (!e) return [];
								var a = [];
								if ("string" != typeof e) {
									for (var r = 0; r < e.length; r++) a[r] = 0 | e[r];
									return a
								}
								if ("hex" === t)
									for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), r = 0; r < e.length; r += 2) a.push(
										parseInt(e[r] + e[r + 1], 16));
								else
									for (r = 0; r < e.length; r++) {
										var n = e.charCodeAt(r),
											c = n >> 8,
											i = 255 & n;
										c ? a.push(c, i) : a.push(i)
									}
								return a
							}, a.zero2 = r, a.toHex = n, a.encode = function(e, t) {
								return "hex" === t ? n(e) : e
							}
						})),
						E = _((function(e, t) {
							var a = t;
							a.assert = k, a.toArray = S.toArray, a.zero2 = S.zero2, a.toHex = S.toHex, a.encode = S.encode, a.getNAF =
								function(e, t, a) {
									var r = new Array(Math.max(e.bitLength(), a) + 1);
									r.fill(0);
									for (var n = 1 << t + 1, c = e.clone(), i = 0; i < r.length; i++) {
										var d, f = c.andln(n - 1);
										c.isOdd() ? (d = f > (n >> 1) - 1 ? (n >> 1) - f : f, c.isubn(d)) : d = 0, r[i] = d, c.iushrn(1)
									}
									return r
								}, a.getJSF = function(e, t) {
									var a = [
										[],
										[]
									];
									e = e.clone(), t = t.clone();
									for (var r, n = 0, c = 0; e.cmpn(-n) > 0 || t.cmpn(-c) > 0;) {
										var i, d, f = e.andln(3) + n & 3,
											o = t.andln(3) + c & 3;
										3 === f && (f = -1), 3 === o && (o = -1), i = 0 == (1 & f) ? 0 : 3 != (r = e.andln(7) + n & 7) && 5 !== r ||
											2 !== o ? f : -f, a[0].push(i), d = 0 == (1 & o) ? 0 : 3 != (r = t.andln(7) + c & 7) && 5 !== r || 2 !==
											f ? o : -o, a[1].push(d), 2 * n === i + 1 && (n = 1 - n), 2 * c === d + 1 && (c = 1 - c), e.iushrn(1), t.iushrn(
												1)
									}
									return a
								}, a.cachedProperty = function(e, t, a) {
									var r = "_" + t;
									e.prototype[t] = function() {
										return void 0 !== this[r] ? this[r] : this[r] = a.call(this)
									}
								}, a.parseBytes = function(e) {
									return "string" == typeof e ? a.toArray(e, "hex") : e
								}, a.intFromLE = function(e) {
									return new(y())(e, "hex", "le")
								}
						})),
						A = E.getNAF,
						T = E.getJSF,
						R = E.assert;

					function I(e, t) {
						this.type = e, this.p = new(y())(t.p, 16), this.red = t.prime ? y().red(t.prime) : y().mont(this.p), this.zero =
							new(y())(0).toRed(this.red), this.one = new(y())(1).toRed(this.red), this.two = new(y())(2).toRed(this.red),
							this.n = t.n && new(y())(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4),
							this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ?
							this.n.bitLength() : 0;
						var a = this.n && this.p.div(this.n);
						!a || a.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
					}
					var P = I;

					function C(e, t) {
						this.curve = e, this.type = t, this.precomputed = null
					}
					I.prototype.point = function() {
						throw new Error("Not implemented")
					}, I.prototype.validate = function() {
						throw new Error("Not implemented")
					}, I.prototype._fixedNafMul = function(e, t) {
						R(e.precomputed);
						var a = e._getDoubles(),
							r = A(t, 1, this._bitLength),
							n = (1 << a.step + 1) - (a.step % 2 == 0 ? 2 : 1);
						n /= 3;
						var c, i, d = [];
						for (c = 0; c < r.length; c += a.step) {
							i = 0;
							for (var f = c + a.step - 1; f >= c; f--) i = (i << 1) + r[f];
							d.push(i)
						}
						for (var o = this.jpoint(null, null, null), s = this.jpoint(null, null, null), b = n; b > 0; b--) {
							for (c = 0; c < d.length; c++)(i = d[c]) === b ? s = s.mixedAdd(a.points[c]) : i === -b && (s = s.mixedAdd(a.points[
								c].neg()));
							o = o.add(s)
						}
						return o.toP()
					}, I.prototype._wnafMul = function(e, t) {
						var a = 4,
							r = e._getNAFPoints(a);
						a = r.wnd;
						for (var n = r.points, c = A(t, a, this._bitLength), i = this.jpoint(null, null, null), d = c.length - 1; d >=
							0; d--) {
							for (var f = 0; d >= 0 && 0 === c[d]; d--) f++;
							if (d >= 0 && f++, i = i.dblp(f), d < 0) break;
							var o = c[d];
							R(0 !== o), i = "affine" === e.type ? o > 0 ? i.mixedAdd(n[o - 1 >> 1]) : i.mixedAdd(n[-o - 1 >> 1].neg()) : o >
								0 ? i.add(n[o - 1 >> 1]) : i.add(n[-o - 1 >> 1].neg())
						}
						return "affine" === e.type ? i.toP() : i
					}, I.prototype._wnafMulAdd = function(e, t, a, r, n) {
						var c, i, d, f = this._wnafT1,
							o = this._wnafT2,
							s = this._wnafT3,
							b = 0;
						for (c = 0; c < r; c++) {
							var u = (d = t[c])._getNAFPoints(e);
							f[c] = u.wnd, o[c] = u.points
						}
						for (c = r - 1; c >= 1; c -= 2) {
							var h = c - 1,
								l = c;
							if (1 === f[h] && 1 === f[l]) {
								var x = [t[h], null, null, t[l]];
								0 === t[h].y.cmp(t[l].y) ? (x[1] = t[h].add(t[l]), x[2] = t[h].toJ().mixedAdd(t[l].neg())) : 0 === t[h].y.cmp(
									t[l].y.redNeg()) ? (x[1] = t[h].toJ().mixedAdd(t[l]), x[2] = t[h].add(t[l].neg())) : (x[1] = t[h].toJ().mixedAdd(
									t[l]), x[2] = t[h].toJ().mixedAdd(t[l].neg()));
								var p = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
									m = T(a[h], a[l]);
								for (b = Math.max(m[0].length, b), s[h] = new Array(b), s[l] = new Array(b), i = 0; i < b; i++) {
									var g = 0 | m[0][i],
										y = 0 | m[1][i];
									s[h][i] = p[3 * (g + 1) + (y + 1)], s[l][i] = 0, o[h] = x
								}
							} else s[h] = A(a[h], f[h], this._bitLength), s[l] = A(a[l], f[l], this._bitLength), b = Math.max(s[h].length,
								b), b = Math.max(s[l].length, b)
						}
						var v = this.jpoint(null, null, null),
							w = this._wnafT4;
						for (c = b; c >= 0; c--) {
							for (var _ = 0; c >= 0;) {
								var k = !0;
								for (i = 0; i < r; i++) w[i] = 0 | s[i][c], 0 !== w[i] && (k = !1);
								if (!k) break;
								_++, c--
							}
							if (c >= 0 && _++, v = v.dblp(_), c < 0) break;
							for (i = 0; i < r; i++) {
								var M = w[i];
								0 !== M && (M > 0 ? d = o[i][M - 1 >> 1] : M < 0 && (d = o[i][-M - 1 >> 1].neg()), v = "affine" === d.type ?
									v.mixedAdd(d) : v.add(d))
							}
						}
						for (c = 0; c < r; c++) o[c] = null;
						return n ? v : v.toP()
					}, I.BasePoint = C, C.prototype.eq = function() {
						throw new Error("Not implemented")
					}, C.prototype.validate = function() {
						return this.curve.validate(this)
					}, I.prototype.decodePoint = function(e, t) {
						e = E.toArray(e, t);
						var a = this.p.byteLength();
						if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * a) return 6 === e[0] ? R(e[e.length - 1] %
							2 == 0) : 7 === e[0] && R(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + a), e.slice(1 + a, 1 + 2 * a));
						if ((2 === e[0] || 3 === e[0]) && e.length - 1 === a) return this.pointFromX(e.slice(1, 1 + a), 3 === e[0]);
						throw new Error("Unknown point format")
					}, C.prototype.encodeCompressed = function(e) {
						return this.encode(e, !0)
					}, C.prototype._encode = function(e) {
						var t = this.curve.p.byteLength(),
							a = this.getX().toArray("be", t);
						return e ? [this.getY().isEven() ? 2 : 3].concat(a) : [4].concat(a, this.getY().toArray("be", t))
					}, C.prototype.encode = function(e, t) {
						return E.encode(this._encode(t), e)
					}, C.prototype.precompute = function(e) {
						if (this.precomputed) return this;
						var t = {
							doubles: null,
							naf: null,
							beta: null
						};
						return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed =
							t, this
					}, C.prototype._hasDoubles = function(e) {
						if (!this.precomputed) return !1;
						var t = this.precomputed.doubles;
						return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
					}, C.prototype._getDoubles = function(e, t) {
						if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
						for (var a = [this], r = this, n = 0; n < t; n += e) {
							for (var c = 0; c < e; c++) r = r.dbl();
							a.push(r)
						}
						return {
							step: e,
							points: a
						}
					}, C.prototype._getNAFPoints = function(e) {
						if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
						for (var t = [this], a = (1 << e) - 1, r = 1 === a ? null : this.dbl(), n = 1; n < a; n++) t[n] = t[n - 1].add(
							r);
						return {
							wnd: e,
							points: t
						}
					}, C.prototype._getBeta = function() {
						return null
					}, C.prototype.dblp = function(e) {
						for (var t = this, a = 0; a < e; a++) t = t.dbl();
						return t
					};
					var O = _((function(e) {
							"function" == typeof Object.create ? e.exports = function(e, t) {
								t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
									constructor: {
										value: e,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}))
							} : e.exports = function(e, t) {
								if (t) {
									e.super_ = t;
									var a = function() {};
									a.prototype = t.prototype, e.prototype = new a, e.prototype.constructor = e
								}
							}
						})),
						N = E.assert;

					function B(e) {
						P.call(this, "short", e), this.a = new(y())(e.a, 16).toRed(this.red), this.b = new(y())(e.b, 16).toRed(this.red),
							this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed()
							.sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 =
							new Array(4)
					}
					O(B, P);
					var L = B;

					function U(e, t, a, r) {
						P.BasePoint.call(this, e, "affine"), null === t && null === a ? (this.x = null, this.y = null, this.inf = !0) :
							(this.x = new(y())(t, 16), this.y = new(y())(a, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(
								this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(
								this.curve.red)), this.inf = !1)
					}

					function j(e, t, a, r) {
						P.BasePoint.call(this, e, "jacobian"), null === t && null === a && null === r ? (this.x = this.curve.one, this.y =
							this.curve.one, this.z = new(y())(0)) : (this.x = new(y())(t, 16), this.y = new(y())(a, 16), this.z = new(y())
							(r, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve
							.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
					}
					B.prototype._getEndomorphism = function(e) {
						if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
							var t, a;
							if (e.beta) t = new(y())(e.beta, 16).toRed(this.red);
							else {
								var r = this._getEndoRoots(this.p);
								t = (t = r[0].cmp(r[1]) < 0 ? r[0] : r[1]).toRed(this.red)
							}
							if (e.lambda) a = new(y())(e.lambda, 16);
							else {
								var n = this._getEndoRoots(this.n);
								0 === this.g.mul(n[0]).x.cmp(this.g.x.redMul(t)) ? a = n[0] : (a = n[1], N(0 === this.g.mul(a).x.cmp(this.g.x
									.redMul(t))))
							}
							return {
								beta: t,
								lambda: a,
								basis: e.basis ? e.basis.map((function(e) {
									return {
										a: new(y())(e.a, 16),
										b: new(y())(e.b, 16)
									}
								})) : this._getEndoBasis(a)
							}
						}
					}, B.prototype._getEndoRoots = function(e) {
						var t = e === this.p ? this.red : y().mont(e),
							a = new(y())(2).toRed(t).redInvm(),
							r = a.redNeg(),
							n = new(y())(3).toRed(t).redNeg().redSqrt().redMul(a);
						return [r.redAdd(n).fromRed(), r.redSub(n).fromRed()]
					}, B.prototype._getEndoBasis = function(e) {
						for (var t, a, r, n, c, i, d, f, o, s = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), b = e, u = this.n.clone(),
								h = new(y())(1), l = new(y())(0), x = new(y())(0), p = new(y())(1), m = 0; 0 !== b.cmpn(0);) {
							var g = u.div(b);
							f = u.sub(g.mul(b)), o = x.sub(g.mul(h));
							var v = p.sub(g.mul(l));
							if (!r && f.cmp(s) < 0) t = d.neg(), a = h, r = f.neg(), n = o;
							else if (r && 2 == ++m) break;
							d = f, u = b, b = f, x = h, h = o, p = l, l = v
						}
						c = f.neg(), i = o;
						var w = r.sqr().add(n.sqr());
						return c.sqr().add(i.sqr()).cmp(w) >= 0 && (c = t, i = a), r.negative && (r = r.neg(), n = n.neg()), c.negative &&
							(c = c.neg(), i = i.neg()), [{
								a: r,
								b: n
							}, {
								a: c,
								b: i
							}]
					}, B.prototype._endoSplit = function(e) {
						var t = this.endo.basis,
							a = t[0],
							r = t[1],
							n = r.b.mul(e).divRound(this.n),
							c = a.b.neg().mul(e).divRound(this.n),
							i = n.mul(a.a),
							d = c.mul(r.a),
							f = n.mul(a.b),
							o = c.mul(r.b);
						return {
							k1: e.sub(i).sub(d),
							k2: f.add(o).neg()
						}
					}, B.prototype.pointFromX = function(e, t) {
						(e = new(y())(e, 16)).red || (e = e.toRed(this.red));
						var a = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
							r = a.redSqrt();
						if (0 !== r.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
						var n = r.fromRed().isOdd();
						return (t && !n || !t && n) && (r = r.redNeg()), this.point(e, r)
					}, B.prototype.validate = function(e) {
						if (e.inf) return !0;
						var t = e.x,
							a = e.y,
							r = this.a.redMul(t),
							n = t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);
						return 0 === a.redSqr().redISub(n).cmpn(0)
					}, B.prototype._endoWnafMulAdd = function(e, t, a) {
						for (var r = this._endoWnafT1, n = this._endoWnafT2, c = 0; c < e.length; c++) {
							var i = this._endoSplit(t[c]),
								d = e[c],
								f = d._getBeta();
							i.k1.negative && (i.k1.ineg(), d = d.neg(!0)), i.k2.negative && (i.k2.ineg(), f = f.neg(!0)), r[2 * c] = d, r[
								2 * c + 1] = f, n[2 * c] = i.k1, n[2 * c + 1] = i.k2
						}
						for (var o = this._wnafMulAdd(1, r, n, 2 * c, a), s = 0; s < 2 * c; s++) r[s] = null, n[s] = null;
						return o
					}, O(U, P.BasePoint), B.prototype.point = function(e, t, a) {
						return new U(this, e, t, a)
					}, B.prototype.pointFromJSON = function(e, t) {
						return U.fromJSON(this, e, t)
					}, U.prototype._getBeta = function() {
						if (this.curve.endo) {
							var e = this.precomputed;
							if (e && e.beta) return e.beta;
							var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
							if (e) {
								var a = this.curve,
									r = function(e) {
										return a.point(e.x.redMul(a.endo.beta), e.y)
									};
								e.beta = t, t.precomputed = {
									beta: null,
									naf: e.naf && {
										wnd: e.naf.wnd,
										points: e.naf.points.map(r)
									},
									doubles: e.doubles && {
										step: e.doubles.step,
										points: e.doubles.points.map(r)
									}
								}
							}
							return t
						}
					}, U.prototype.toJSON = function() {
						return this.precomputed ? [this.x, this.y, this.precomputed && {
							doubles: this.precomputed.doubles && {
								step: this.precomputed.doubles.step,
								points: this.precomputed.doubles.points.slice(1)
							},
							naf: this.precomputed.naf && {
								wnd: this.precomputed.naf.wnd,
								points: this.precomputed.naf.points.slice(1)
							}
						}] : [this.x, this.y]
					}, U.fromJSON = function(e, t, a) {
						"string" == typeof t && (t = JSON.parse(t));
						var r = e.point(t[0], t[1], a);
						if (!t[2]) return r;

						function n(t) {
							return e.point(t[0], t[1], a)
						}
						var c = t[2];
						return r.precomputed = {
							beta: null,
							doubles: c.doubles && {
								step: c.doubles.step,
								points: [r].concat(c.doubles.points.map(n))
							},
							naf: c.naf && {
								wnd: c.naf.wnd,
								points: [r].concat(c.naf.points.map(n))
							}
						}, r
					}, U.prototype.inspect = function() {
						return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " +
							this.y.fromRed().toString(16, 2) + ">"
					}, U.prototype.isInfinity = function() {
						return this.inf
					}, U.prototype.add = function(e) {
						if (this.inf) return e;
						if (e.inf) return this;
						if (this.eq(e)) return this.dbl();
						if (this.neg().eq(e)) return this.curve.point(null, null);
						if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
						var t = this.y.redSub(e.y);
						0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
						var a = t.redSqr().redISub(this.x).redISub(e.x),
							r = t.redMul(this.x.redSub(a)).redISub(this.y);
						return this.curve.point(a, r)
					}, U.prototype.dbl = function() {
						if (this.inf) return this;
						var e = this.y.redAdd(this.y);
						if (0 === e.cmpn(0)) return this.curve.point(null, null);
						var t = this.curve.a,
							a = this.x.redSqr(),
							r = e.redInvm(),
							n = a.redAdd(a).redIAdd(a).redIAdd(t).redMul(r),
							c = n.redSqr().redISub(this.x.redAdd(this.x)),
							i = n.redMul(this.x.redSub(c)).redISub(this.y);
						return this.curve.point(c, i)
					}, U.prototype.getX = function() {
						return this.x.fromRed()
					}, U.prototype.getY = function() {
						return this.y.fromRed()
					}, U.prototype.mul = function(e) {
						return e = new(y())(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) :
							this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
					}, U.prototype.mulAdd = function(e, t, a) {
						var r = [this, t],
							n = [e, a];
						return this.curve.endo ? this.curve._endoWnafMulAdd(r, n) : this.curve._wnafMulAdd(1, r, n, 2)
					}, U.prototype.jmulAdd = function(e, t, a) {
						var r = [this, t],
							n = [e, a];
						return this.curve.endo ? this.curve._endoWnafMulAdd(r, n, !0) : this.curve._wnafMulAdd(1, r, n, 2, !0)
					}, U.prototype.eq = function(e) {
						return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
					}, U.prototype.neg = function(e) {
						if (this.inf) return this;
						var t = this.curve.point(this.x, this.y.redNeg());
						if (e && this.precomputed) {
							var a = this.precomputed,
								r = function(e) {
									return e.neg()
								};
							t.precomputed = {
								naf: a.naf && {
									wnd: a.naf.wnd,
									points: a.naf.points.map(r)
								},
								doubles: a.doubles && {
									step: a.doubles.step,
									points: a.doubles.points.map(r)
								}
							}
						}
						return t
					}, U.prototype.toJ = function() {
						return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
					}, O(j, P.BasePoint), B.prototype.jpoint = function(e, t, a) {
						return new j(this, e, t, a)
					}, j.prototype.toP = function() {
						if (this.isInfinity()) return this.curve.point(null, null);
						var e = this.z.redInvm(),
							t = e.redSqr(),
							a = this.x.redMul(t),
							r = this.y.redMul(t).redMul(e);
						return this.curve.point(a, r)
					}, j.prototype.neg = function() {
						return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
					}, j.prototype.add = function(e) {
						if (this.isInfinity()) return e;
						if (e.isInfinity()) return this;
						var t = e.z.redSqr(),
							a = this.z.redSqr(),
							r = this.x.redMul(t),
							n = e.x.redMul(a),
							c = this.y.redMul(t.redMul(e.z)),
							i = e.y.redMul(a.redMul(this.z)),
							d = r.redSub(n),
							f = c.redSub(i);
						if (0 === d.cmpn(0)) return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
						var o = d.redSqr(),
							s = o.redMul(d),
							b = r.redMul(o),
							u = f.redSqr().redIAdd(s).redISub(b).redISub(b),
							h = f.redMul(b.redISub(u)).redISub(c.redMul(s)),
							l = this.z.redMul(e.z).redMul(d);
						return this.curve.jpoint(u, h, l)
					}, j.prototype.mixedAdd = function(e) {
						if (this.isInfinity()) return e.toJ();
						if (e.isInfinity()) return this;
						var t = this.z.redSqr(),
							a = this.x,
							r = e.x.redMul(t),
							n = this.y,
							c = e.y.redMul(t).redMul(this.z),
							i = a.redSub(r),
							d = n.redSub(c);
						if (0 === i.cmpn(0)) return 0 !== d.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
						var f = i.redSqr(),
							o = f.redMul(i),
							s = a.redMul(f),
							b = d.redSqr().redIAdd(o).redISub(s).redISub(s),
							u = d.redMul(s.redISub(b)).redISub(n.redMul(o)),
							h = this.z.redMul(i);
						return this.curve.jpoint(b, u, h)
					}, j.prototype.dblp = function(e) {
						if (0 === e) return this;
						if (this.isInfinity()) return this;
						if (!e) return this.dbl();
						var t;
						if (this.curve.zeroA || this.curve.threeA) {
							var a = this;
							for (t = 0; t < e; t++) a = a.dbl();
							return a
						}
						var r = this.curve.a,
							n = this.curve.tinv,
							c = this.x,
							i = this.y,
							d = this.z,
							f = d.redSqr().redSqr(),
							o = i.redAdd(i);
						for (t = 0; t < e; t++) {
							var s = c.redSqr(),
								b = o.redSqr(),
								u = b.redSqr(),
								h = s.redAdd(s).redIAdd(s).redIAdd(r.redMul(f)),
								l = c.redMul(b),
								x = h.redSqr().redISub(l.redAdd(l)),
								p = l.redISub(x),
								m = h.redMul(p);
							m = m.redIAdd(m).redISub(u);
							var g = o.redMul(d);
							t + 1 < e && (f = f.redMul(u)), c = x, d = g, o = m
						}
						return this.curve.jpoint(c, o.redMul(n), d)
					}, j.prototype.dbl = function() {
						return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() :
							this._dbl()
					}, j.prototype._zeroDbl = function() {
						var e, t, a;
						if (this.zOne) {
							var r = this.x.redSqr(),
								n = this.y.redSqr(),
								c = n.redSqr(),
								i = this.x.redAdd(n).redSqr().redISub(r).redISub(c);
							i = i.redIAdd(i);
							var d = r.redAdd(r).redIAdd(r),
								f = d.redSqr().redISub(i).redISub(i),
								o = c.redIAdd(c);
							o = (o = o.redIAdd(o)).redIAdd(o), e = f, t = d.redMul(i.redISub(f)).redISub(o), a = this.y.redAdd(this.y)
						} else {
							var s = this.x.redSqr(),
								b = this.y.redSqr(),
								u = b.redSqr(),
								h = this.x.redAdd(b).redSqr().redISub(s).redISub(u);
							h = h.redIAdd(h);
							var l = s.redAdd(s).redIAdd(s),
								x = l.redSqr(),
								p = u.redIAdd(u);
							p = (p = p.redIAdd(p)).redIAdd(p), e = x.redISub(h).redISub(h), t = l.redMul(h.redISub(e)).redISub(p), a = (a =
								this.y.redMul(this.z)).redIAdd(a)
						}
						return this.curve.jpoint(e, t, a)
					}, j.prototype._threeDbl = function() {
						var e, t, a;
						if (this.zOne) {
							var r = this.x.redSqr(),
								n = this.y.redSqr(),
								c = n.redSqr(),
								i = this.x.redAdd(n).redSqr().redISub(r).redISub(c);
							i = i.redIAdd(i);
							var d = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),
								f = d.redSqr().redISub(i).redISub(i);
							e = f;
							var o = c.redIAdd(c);
							o = (o = o.redIAdd(o)).redIAdd(o), t = d.redMul(i.redISub(f)).redISub(o), a = this.y.redAdd(this.y)
						} else {
							var s = this.z.redSqr(),
								b = this.y.redSqr(),
								u = this.x.redMul(b),
								h = this.x.redSub(s).redMul(this.x.redAdd(s));
							h = h.redAdd(h).redIAdd(h);
							var l = u.redIAdd(u),
								x = (l = l.redIAdd(l)).redAdd(l);
							e = h.redSqr().redISub(x), a = this.y.redAdd(this.z).redSqr().redISub(b).redISub(s);
							var p = b.redSqr();
							p = (p = (p = p.redIAdd(p)).redIAdd(p)).redIAdd(p), t = h.redMul(l.redISub(e)).redISub(p)
						}
						return this.curve.jpoint(e, t, a)
					}, j.prototype._dbl = function() {
						var e = this.curve.a,
							t = this.x,
							a = this.y,
							r = this.z,
							n = r.redSqr().redSqr(),
							c = t.redSqr(),
							i = a.redSqr(),
							d = c.redAdd(c).redIAdd(c).redIAdd(e.redMul(n)),
							f = t.redAdd(t),
							o = (f = f.redIAdd(f)).redMul(i),
							s = d.redSqr().redISub(o.redAdd(o)),
							b = o.redISub(s),
							u = i.redSqr();
						u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
						var h = d.redMul(b).redISub(u),
							l = a.redAdd(a).redMul(r);
						return this.curve.jpoint(s, h, l)
					}, j.prototype.trpl = function() {
						if (!this.curve.zeroA) return this.dbl().add(this);
						var e = this.x.redSqr(),
							t = this.y.redSqr(),
							a = this.z.redSqr(),
							r = t.redSqr(),
							n = e.redAdd(e).redIAdd(e),
							c = n.redSqr(),
							i = this.x.redAdd(t).redSqr().redISub(e).redISub(r),
							d = (i = (i = (i = i.redIAdd(i)).redAdd(i).redIAdd(i)).redISub(c)).redSqr(),
							f = r.redIAdd(r);
						f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
						var o = n.redIAdd(i).redSqr().redISub(c).redISub(d).redISub(f),
							s = t.redMul(o);
						s = (s = s.redIAdd(s)).redIAdd(s);
						var b = this.x.redMul(d).redISub(s);
						b = (b = b.redIAdd(b)).redIAdd(b);
						var u = this.y.redMul(o.redMul(f.redISub(o)).redISub(i.redMul(d)));
						u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
						var h = this.z.redAdd(i).redSqr().redISub(a).redISub(d);
						return this.curve.jpoint(b, u, h)
					}, j.prototype.mul = function(e, t) {
						return e = new(y())(e, t), this.curve._wnafMul(this, e)
					}, j.prototype.eq = function(e) {
						if ("affine" === e.type) return this.eq(e.toJ());
						if (this === e) return !0;
						var t = this.z.redSqr(),
							a = e.z.redSqr();
						if (0 !== this.x.redMul(a).redISub(e.x.redMul(t)).cmpn(0)) return !1;
						var r = t.redMul(this.z),
							n = a.redMul(e.z);
						return 0 === this.y.redMul(n).redISub(e.y.redMul(r)).cmpn(0)
					}, j.prototype.eqXToP = function(e) {
						var t = this.z.redSqr(),
							a = e.toRed(this.curve.red).redMul(t);
						if (0 === this.x.cmp(a)) return !0;
						for (var r = e.clone(), n = this.curve.redN.redMul(t);;) {
							if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
							if (a.redIAdd(n), 0 === this.x.cmp(a)) return !0
						}
					}, j.prototype.inspect = function() {
						return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y
							.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
					}, j.prototype.isInfinity = function() {
						return 0 === this.z.cmpn(0)
					};
					var D = _((function(e, t) {
							var a = t;
							a.base = P, a.short = L, a.mont = null, a.edwards = null
						})),
						F = _((function(e, t) {
							var a, r = t,
								n = E.assert;

							function c(e) {
								"short" === e.type ? this.curve = new D.short(e) : "edwards" === e.type ? this.curve = new D.edwards(e) :
									this.curve = new D.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, n(this.g.validate(),
										"Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
							}

							function i(e, t) {
								Object.defineProperty(r, e, {
									configurable: !0,
									enumerable: !0,
									get: function() {
										var a = new c(t);
										return Object.defineProperty(r, e, {
											configurable: !0,
											enumerable: !0,
											value: a
										}), a
									}
								})
							}
							r.PresetCurve = c, i("p192", {
								type: "short",
								prime: "p192",
								p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
								a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
								b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
								n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
								hash: w().sha256,
								gRed: !1,
								g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
									"07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
								]
							}), i("p224", {
								type: "short",
								prime: "p224",
								p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
								a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
								b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
								n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
								hash: w().sha256,
								gRed: !1,
								g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
									"bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
								]
							}), i("p256", {
								type: "short",
								prime: null,
								p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
								a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
								b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
								n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
								hash: w().sha256,
								gRed: !1,
								g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
									"4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
								]
							}), i("p384", {
								type: "short",
								prime: null,
								p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
								a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
								b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
								n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
								hash: w().sha384,
								gRed: !1,
								g: [
									"aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
									"3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
								]
							}), i("p521", {
								type: "short",
								prime: null,
								p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
								a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
								b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
								n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
								hash: w().sha512,
								gRed: !1,
								g: [
									"000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
									"00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
								]
							}), i("curve25519", {
								type: "mont",
								prime: "p25519",
								p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
								a: "76d06",
								b: "1",
								n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
								hash: w().sha256,
								gRed: !1,
								g: ["9"]
							}), i("ed25519", {
								type: "edwards",
								prime: "p25519",
								p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
								a: "-1",
								c: "1",
								d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
								n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
								hash: w().sha256,
								gRed: !1,
								g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
									"6666666666666666666666666666666666666666666666666666666666666658"
								]
							});
							try {
								a = null.crash()
							} catch (e) {
								a = void 0
							}
							i("secp256k1", {
								type: "short",
								prime: "k256",
								p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
								a: "0",
								b: "7",
								n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
								h: "1",
								hash: w().sha256,
								beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
								lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
								basis: [{
									a: "3086d221a7d46bcde86c90e49284eb15",
									b: "-e4437ed6010e88286f547fa90abfe4c3"
								}, {
									a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
									b: "3086d221a7d46bcde86c90e49284eb15"
								}],
								gRed: !1,
								g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
									"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", a
								]
							})
						}));

					function q(e) {
						if (!(this instanceof q)) return new q(e);
						this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy ||
							this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
						var t = S.toArray(e.entropy, e.entropyEnc || "hex"),
							a = S.toArray(e.nonce, e.nonceEnc || "hex"),
							r = S.toArray(e.pers, e.persEnc || "hex");
						k(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t,
							a, r)
					}
					var H = q;
					q.prototype._init = function(e, t, a) {
						var r = e.concat(t).concat(a);
						this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
						for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
						this._update(r), this._reseed = 1, this.reseedInterval = 281474976710656
					}, q.prototype._hmac = function() {
						return new(w().hmac)(this.hash, this.K)
					}, q.prototype._update = function(e) {
						var t = this._hmac().update(this.V).update([0]);
						e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this
							._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
					}, q.prototype.reseed = function(e, t, a, r) {
						"string" != typeof t && (r = a, a = t, t = null), e = S.toArray(e, t), a = S.toArray(a, r), k(e.length >= this.minEntropy /
								8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(a || [])), this._reseed =
							1
					}, q.prototype.generate = function(e, t, a, r) {
						if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
						"string" != typeof t && (r = a, a = t, t = null), a && (a = S.toArray(a, r || "hex"), this._update(a));
						for (var n = []; n.length < e;) this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
						var c = n.slice(0, e);
						return this._update(a), this._reseed++, S.encode(c, t)
					};
					var z = E.assert;

					function V(e, t) {
						this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(
							t.pub, t.pubEnc)
					}
					var W = V;
					V.fromPublic = function(e, t, a) {
						return t instanceof V ? t : new V(e, {
							pub: t,
							pubEnc: a
						})
					}, V.fromPrivate = function(e, t, a) {
						return t instanceof V ? t : new V(e, {
							priv: t,
							privEnc: a
						})
					}, V.prototype.validate = function() {
						var e = this.getPublic();
						return e.isInfinity() ? {
							result: !1,
							reason: "Invalid public key"
						} : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
							result: !0,
							reason: null
						} : {
							result: !1,
							reason: "Public key * N != O"
						} : {
							result: !1,
							reason: "Public key is not a point"
						}
					}, V.prototype.getPublic = function(e, t) {
						return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub
							.encode(t, e) : this.pub
					}, V.prototype.getPrivate = function(e) {
						return "hex" === e ? this.priv.toString(16, 2) : this.priv
					}, V.prototype._importPrivate = function(e, t) {
						this.priv = new(y())(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
					}, V.prototype._importPublic = function(e, t) {
						if (e.x || e.y) return "mont" === this.ec.curve.type ? z(e.x, "Need x coordinate") : "short" !== this.ec.curve.type &&
							"edwards" !== this.ec.curve.type || z(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve
								.point(e.x, e.y));
						this.pub = this.ec.curve.decodePoint(e, t)
					}, V.prototype.derive = function(e) {
						return e.validate() || z(e.validate(), "public point not validated"), e.mul(this.priv).getX()
					}, V.prototype.sign = function(e, t, a) {
						return this.ec.sign(e, this, t, a)
					}, V.prototype.verify = function(e, t) {
						return this.ec.verify(e, t, this)
					}, V.prototype.inspect = function() {
						return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) +
							" >"
					};
					var G = E.assert;

					function X(e, t) {
						if (e instanceof X) return e;
						this._importDER(e, t) || (G(e.r && e.s, "Signature without r or s"), this.r = new(y())(e.r, 16), this.s = new(y())
							(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
					}
					var Y = X;

					function $() {
						this.place = 0
					}

					function K(e, t) {
						var a = e[t.place++];
						if (!(128 & a)) return a;
						var r = 15 & a;
						if (0 === r || r > 4) return !1;
						for (var n = 0, c = 0, i = t.place; c < r; c++, i++) n <<= 8, n |= e[i], n >>>= 0;
						return !(n <= 127) && (t.place = i, n)
					}

					function J(e) {
						for (var t = 0, a = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < a;) t++;
						return 0 === t ? e : e.slice(t)
					}

					function Z(e, t) {
						if (t < 128) e.push(t);
						else {
							var a = 1 + (Math.log(t) / Math.LN2 >>> 3);
							for (e.push(128 | a); --a;) e.push(t >>> (a << 3) & 255);
							e.push(t)
						}
					}
					X.prototype._importDER = function(e, t) {
						e = E.toArray(e, t);
						var a = new $;
						if (48 !== e[a.place++]) return !1;
						var r = K(e, a);
						if (!1 === r) return !1;
						if (r + a.place !== e.length) return !1;
						if (2 !== e[a.place++]) return !1;
						var n = K(e, a);
						if (!1 === n) return !1;
						var c = e.slice(a.place, n + a.place);
						if (a.place += n, 2 !== e[a.place++]) return !1;
						var i = K(e, a);
						if (!1 === i) return !1;
						if (e.length !== i + a.place) return !1;
						var d = e.slice(a.place, i + a.place);
						if (0 === c[0]) {
							if (!(128 & c[1])) return !1;
							c = c.slice(1)
						}
						if (0 === d[0]) {
							if (!(128 & d[1])) return !1;
							d = d.slice(1)
						}
						return this.r = new(y())(c), this.s = new(y())(d), this.recoveryParam = null, !0
					}, X.prototype.toDER = function(e) {
						var t = this.r.toArray(),
							a = this.s.toArray();
						for (128 & t[0] && (t = [0].concat(t)), 128 & a[0] && (a = [0].concat(a)), t = J(t), a = J(a); !(a[0] || 128 &
								a[1]);) a = a.slice(1);
						var r = [2];
						Z(r, t.length), (r = r.concat(t)).push(2), Z(r, a.length);
						var n = r.concat(a),
							c = [48];
						return Z(c, n.length), c = c.concat(n), E.encode(c, e)
					};
					var Q = function() {
							throw new Error("unsupported")
						},
						ee = E.assert;

					function te(e) {
						if (!(this instanceof te)) return new te(e);
						"string" == typeof e && (ee(Object.prototype.hasOwnProperty.call(F, e), "Unknown curve " + e), e = F[e]), e instanceof F
							.PresetCurve && (e = {
								curve: e
							}), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g =
							e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
					}
					var ae = te;
					te.prototype.keyPair = function(e) {
						return new W(this, e)
					}, te.prototype.keyFromPrivate = function(e, t) {
						return W.fromPrivate(this, e, t)
					}, te.prototype.keyFromPublic = function(e, t) {
						return W.fromPublic(this, e, t)
					}, te.prototype.genKeyPair = function(e) {
						e || (e = {});
						for (var t = new H({
								hash: this.hash,
								pers: e.pers,
								persEnc: e.persEnc || "utf8",
								entropy: e.entropy || Q(this.hash.hmacStrength),
								entropyEnc: e.entropy && e.entropyEnc || "utf8",
								nonce: this.n.toArray()
							}), a = this.n.byteLength(), r = this.n.sub(new(y())(2));;) {
							var n = new(y())(t.generate(a));
							if (!(n.cmp(r) > 0)) return n.iaddn(1), this.keyFromPrivate(n)
						}
					}, te.prototype._truncateToN = function(e, t) {
						var a = 8 * e.byteLength() - this.n.bitLength();
						return a > 0 && (e = e.ushrn(a)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
					}, te.prototype.sign = function(e, t, a, r) {
						"object" == typeof a && (r = a, a = null), r || (r = {}), t = this.keyFromPrivate(t, a), e = this._truncateToN(
							new(y())(e, 16));
						for (var n = this.n.byteLength(), c = t.getPrivate().toArray("be", n), i = e.toArray("be", n), d = new H({
								hash: this.hash,
								entropy: c,
								nonce: i,
								pers: r.pers,
								persEnc: r.persEnc || "utf8"
							}), f = this.n.sub(new(y())(1)), o = 0;; o++) {
							var s = r.k ? r.k(o) : new(y())(d.generate(this.n.byteLength()));
							if (!((s = this._truncateToN(s, !0)).cmpn(1) <= 0 || s.cmp(f) >= 0)) {
								var b = this.g.mul(s);
								if (!b.isInfinity()) {
									var u = b.getX(),
										h = u.umod(this.n);
									if (0 !== h.cmpn(0)) {
										var l = s.invm(this.n).mul(h.mul(t.getPrivate()).iadd(e));
										if (0 !== (l = l.umod(this.n)).cmpn(0)) {
											var x = (b.getY().isOdd() ? 1 : 0) | (0 !== u.cmp(h) ? 2 : 0);
											return r.canonical && l.cmp(this.nh) > 0 && (l = this.n.sub(l), x ^= 1), new Y({
												r: h,
												s: l,
												recoveryParam: x
											})
										}
									}
								}
							}
						}
					}, te.prototype.verify = function(e, t, a, r) {
						e = this._truncateToN(new(y())(e, 16)), a = this.keyFromPublic(a, r);
						var n = (t = new Y(t, "hex")).r,
							c = t.s;
						if (n.cmpn(1) < 0 || n.cmp(this.n) >= 0) return !1;
						if (c.cmpn(1) < 0 || c.cmp(this.n) >= 0) return !1;
						var i, d = c.invm(this.n),
							f = d.mul(e).umod(this.n),
							o = d.mul(n).umod(this.n);
						return this.curve._maxwellTrick ? !(i = this.g.jmulAdd(f, a.getPublic(), o)).isInfinity() && i.eqXToP(n) : !(i =
							this.g.mulAdd(f, a.getPublic(), o)).isInfinity() && 0 === i.getX().umod(this.n).cmp(n)
					}, te.prototype.recoverPubKey = function(e, t, a, r) {
						ee((3 & a) === a, "The recovery param is more than two bits"), t = new Y(t, r);
						var n = this.n,
							c = new(y())(e),
							i = t.r,
							d = t.s,
							f = 1 & a,
							o = a >> 1;
						if (i.cmp(this.curve.p.umod(this.curve.n)) >= 0 && o) throw new Error("Unable to find sencond key candinate");
						i = o ? this.curve.pointFromX(i.add(this.curve.n), f) : this.curve.pointFromX(i, f);
						var s = t.r.invm(n),
							b = n.sub(c).mul(s).umod(n),
							u = d.mul(s).umod(n);
						return this.g.mulAdd(b, i, u)
					}, te.prototype.getKeyRecoveryParam = function(e, t, a, r) {
						if (null !== (t = new Y(t, r)).recoveryParam) return t.recoveryParam;
						for (var n = 0; n < 4; n++) {
							var c;
							try {
								c = this.recoverPubKey(e, t, n)
							} catch (e) {
								continue
							}
							if (c.eq(a)) return n
						}
						throw new Error("Unable to find valid recovery factor")
					};
					var re = _((function(e, t) {
						var a = t;
						a.version = "6.5.4", a.utils = E, a.rand = function() {
							throw new Error("unsupported")
						}, a.curve = D, a.curves = F, a.ec = ae, a.eddsa = null
					})).ec;
					const ne = new o.Yd("signing-key/5.6.0");
					let ce = null;

					function ie() {
						return ce || (ce = new re("secp256k1")), ce
					}
					class de {
						constructor(e) {
							(0, f.zG)(this, "curve", "secp256k1"), (0, f.zG)(this, "privateKey", (0, c.Dv)(e));
							const t = ie().keyFromPrivate((0, c.lE)(this.privateKey));
							(0, f.zG)(this, "publicKey", "0x" + t.getPublic(!1, "hex")), (0, f.zG)(this, "compressedPublicKey", "0x" + t.getPublic(
								!0, "hex")), (0, f.zG)(this, "_isSigningKey", !0)
						}
						_addPoint(e) {
							const t = ie().keyFromPublic((0, c.lE)(this.publicKey)),
								a = ie().keyFromPublic((0, c.lE)(e));
							return "0x" + t.pub.add(a.pub).encodeCompressed("hex")
						}
						signDigest(e) {
							const t = ie().keyFromPrivate((0, c.lE)(this.privateKey)),
								a = (0, c.lE)(e);
							32 !== a.length && ne.throwArgumentError("bad digest length", "digest", e);
							const r = t.sign(a, {
								canonical: !0
							});
							return (0, c.N)({
								recoveryParam: r.recoveryParam,
								r: (0, c.$m)("0x" + r.r.toString(16), 32),
								s: (0, c.$m)("0x" + r.s.toString(16), 32)
							})
						}
						computeSharedSecret(e) {
							const t = ie().keyFromPrivate((0, c.lE)(this.privateKey)),
								a = ie().keyFromPublic((0, c.lE)(fe(e)));
							return (0, c.$m)("0x" + t.derive(a.getPublic()).toString(16), 32)
						}
						static isSigningKey(e) {
							return !(!e || !e._isSigningKey)
						}
					}

					function fe(e, t) {
						const a = (0, c.lE)(e);
						if (32 === a.length) {
							const e = new de(a);
							return t ? "0x" + ie().keyFromPrivate(a).getPublic(!0, "hex") : e.publicKey
						}
						return 33 === a.length ? t ? (0, c.Dv)(a) : "0x" + ie().keyFromPublic(a).getPublic(!1, "hex") : 65 === a.length ?
							t ? "0x" + ie().keyFromPublic(a).getPublic(!0, "hex") : (0, c.Dv)(a) : ne.throwArgumentError(
								"invalid public or private key", "key", "[REDACTED]")
					}
					var oe = a(25108);
					const se = new o.Yd("transactions/5.6.0");
					var be;

					function ue(e) {
						return "0x" === e ? null : (0, r.Kn)(e)
					}

					function he(e) {
						return "0x" === e ? i._Y : n.O$.from(e)
					}! function(e) {
						e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559"
					}(be || (be = {}));
					const le = [{
							name: "nonce",
							maxLength: 32,
							numeric: !0
						}, {
							name: "gasPrice",
							maxLength: 32,
							numeric: !0
						}, {
							name: "gasLimit",
							maxLength: 32,
							numeric: !0
						}, {
							name: "to",
							length: 20
						}, {
							name: "value",
							maxLength: 32,
							numeric: !0
						}, {
							name: "data"
						}],
						xe = {
							chainId: !0,
							data: !0,
							gasLimit: !0,
							gasPrice: !0,
							nonce: !0,
							to: !0,
							type: !0,
							value: !0
						};

					function pe(e) {
						const t = fe(e);
						return (0, r.Kn)((0, c.p3)((0, d.w)((0, c.p3)(t, 1)), 12))
					}

					function me(e, t) {
						return pe(function(e, t) {
							const a = (0, c.N)(t),
								r = {
									r: (0, c.lE)(a.r),
									s: (0, c.lE)(a.s)
								};
							return "0x" + ie().recoverPubKey((0, c.lE)(e), r, a.recoveryParam).encode("hex", !1)
						}((0, c.lE)(e), t))
					}

					function ge(e, t) {
						const a = (0, c.G1)(n.O$.from(e).toHexString());
						return a.length > 32 && se.throwArgumentError("invalid length for " + t, "transaction:" + t, e), a
					}

					function ye(e, t) {
						return {
							address: (0, r.Kn)(e),
							storageKeys: (t || []).map(((t, a) => (32 !== (0, c.E1)(t) && se.throwArgumentError(
								"invalid access list storageKey", `accessList[${e}:${a}]`, t), t.toLowerCase())))
						}
					}

					function ve(e) {
						if (Array.isArray(e)) return e.map(((e, t) => Array.isArray(e) ? (e.length > 2 && se.throwArgumentError(
							"access list expected to be [ address, storageKeys[] ]", `value[${t}]`, e), ye(e[0], e[1])) : ye(e.address,
							e.storageKeys)));
						const t = Object.keys(e).map((t => {
							const a = e[t].reduce(((e, t) => (e[t] = !0, e)), {});
							return ye(t, Object.keys(a).sort())
						}));
						return t.sort(((e, t) => e.address.localeCompare(t.address))), t
					}

					function we(e) {
						return ve(e).map((e => [e.address, e.storageKeys]))
					}

					function _e(e, t) {
						if (null != e.gasPrice) {
							const t = n.O$.from(e.gasPrice),
								a = n.O$.from(e.maxFeePerGas || 0);
							t.eq(a) || se.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
								gasPrice: t,
								maxFeePerGas: a
							})
						}
						const a = [ge(e.chainId || 0, "chainId"), ge(e.nonce || 0, "nonce"), ge(e.maxPriorityFeePerGas || 0,
								"maxPriorityFeePerGas"), ge(e.maxFeePerGas || 0, "maxFeePerGas"), ge(e.gasLimit || 0, "gasLimit"), null != e.to ?
							(0, r.Kn)(e.to) : "0x", ge(e.value || 0, "value"), e.data || "0x", we(e.accessList || [])
						];
						if (t) {
							const e = (0, c.N)(t);
							a.push(ge(e.recoveryParam, "recoveryParam")), a.push((0, c.G1)(e.r)), a.push((0, c.G1)(e.s))
						}
						return (0, c.xs)(["0x02", l(a)])
					}

					function ke(e, t) {
						const a = [ge(e.chainId || 0, "chainId"), ge(e.nonce || 0, "nonce"), ge(e.gasPrice || 0, "gasPrice"), ge(e.gasLimit ||
							0, "gasLimit"), null != e.to ? (0, r.Kn)(e.to) : "0x", ge(e.value || 0, "value"), e.data || "0x", we(e.accessList ||
							[])];
						if (t) {
							const e = (0, c.N)(t);
							a.push(ge(e.recoveryParam, "recoveryParam")), a.push((0, c.G1)(e.r)), a.push((0, c.G1)(e.s))
						}
						return (0, c.xs)(["0x01", l(a)])
					}

					function Me(e, t) {
						if (null == e.type || 0 === e.type) return null != e.accessList && se.throwArgumentError(
								"untyped transactions do not support accessList; include type: 1", "transaction", e),
							function(e, t) {
								(0, f.uj)(e, xe);
								const a = [];
								le.forEach((function(t) {
									let r = e[t.name] || [];
									const n = {};
									t.numeric && (n.hexPad = "left"), r = (0, c.lE)((0, c.Dv)(r, n)), t.length && r.length !== t.length && r.length >
										0 && se.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, r), t.maxLength && (
											r = (0, c.G1)(r), r.length > t.maxLength && se.throwArgumentError("invalid length for " + t.name,
												"transaction:" + t.name, r)), a.push((0, c.Dv)(r))
								}));
								let r = 0;
								if (null != e.chainId ? (r = e.chainId, "number" != typeof r && se.throwArgumentError(
										"invalid transaction.chainId", "transaction", e)) : t && !(0, c.Zq)(t) && t.v > 28 && (r = Math.floor((t.v -
										35) / 2)), 0 !== r && (a.push((0, c.Dv)(r)), a.push("0x"), a.push("0x")), !t) return l(a);
								const n = (0, c.N)(t);
								let i = 27 + n.recoveryParam;
								return 0 !== r ? (a.pop(), a.pop(), a.pop(), i += 2 * r + 8, n.v > 28 && n.v !== i && se.throwArgumentError(
									"transaction.chainId/signature.v mismatch", "signature", t)) : n.v !== i && se.throwArgumentError(
									"transaction.chainId/signature.v mismatch", "signature", t), a.push((0, c.Dv)(i)), a.push((0, c.G1)((0, c.lE)
									(n.r))), a.push((0, c.G1)((0, c.lE)(n.s))), l(a)
							}(e, t);
						switch (e.type) {
							case 1:
								return ke(e, t);
							case 2:
								return _e(e, t)
						}
						return se.throwError(`unsupported transaction type: ${e.type}`, o.Yd.errors.UNSUPPORTED_OPERATION, {
							operation: "serializeTransaction",
							transactionType: e.type
						})
					}

					function Se(e, t, a) {
						try {
							const a = he(t[0]).toNumber();
							if (0 !== a && 1 !== a) throw new Error("bad recid");
							e.v = a
						} catch (e) {
							se.throwArgumentError("invalid v for transaction type: 1", "v", t[0])
						}
						e.r = (0, c.$m)(t[1], 32), e.s = (0, c.$m)(t[2], 32);
						try {
							const t = (0, d.w)(a(e));
							e.from = me(t, {
								r: e.r,
								s: e.s,
								recoveryParam: e.v
							})
						} catch (e) {
							oe.log(e)
						}
					}

					function Ee(e) {
						const t = (0, c.lE)(e);
						if (t[0] > 127) return function(e) {
							const t = m(e);
							9 !== t.length && 6 !== t.length && se.throwArgumentError("invalid raw transaction", "rawTransaction", e);
							const a = {
								nonce: he(t[0]).toNumber(),
								gasPrice: he(t[1]),
								gasLimit: he(t[2]),
								to: ue(t[3]),
								value: he(t[4]),
								data: t[5],
								chainId: 0
							};
							if (6 === t.length) return a;
							try {
								a.v = n.O$.from(t[6]).toNumber()
							} catch (e) {
								return oe.log(e), a
							}
							if (a.r = (0, c.$m)(t[7], 32), a.s = (0, c.$m)(t[8], 32), n.O$.from(a.r).isZero() && n.O$.from(a.s).isZero())
								a.chainId = a.v, a.v = 0;
							else {
								a.chainId = Math.floor((a.v - 35) / 2), a.chainId < 0 && (a.chainId = 0);
								let r = a.v - 27;
								const n = t.slice(0, 6);
								0 !== a.chainId && (n.push((0, c.Dv)(a.chainId)), n.push("0x"), n.push("0x"), r -= 2 * a.chainId + 8);
								const i = (0, d.w)(l(n));
								try {
									a.from = me(i, {
										r: (0, c.Dv)(a.r),
										s: (0, c.Dv)(a.s),
										recoveryParam: r
									})
								} catch (e) {
									oe.log(e)
								}
								a.hash = (0, d.w)(e)
							}
							return a.type = null, a
						}(t);
						switch (t[0]) {
							case 1:
								return function(e) {
									const t = m(e.slice(1));
									8 !== t.length && 11 !== t.length && se.throwArgumentError("invalid component count for transaction type: 1",
										"payload", (0, c.Dv)(e));
									const a = {
										type: 1,
										chainId: he(t[0]).toNumber(),
										nonce: he(t[1]).toNumber(),
										gasPrice: he(t[2]),
										gasLimit: he(t[3]),
										to: ue(t[4]),
										value: he(t[5]),
										data: t[6],
										accessList: ve(t[7])
									};
									return 8 === t.length || (a.hash = (0, d.w)(e), Se(a, t.slice(8), ke)), a
								}(t);
							case 2:
								return function(e) {
									const t = m(e.slice(1));
									9 !== t.length && 12 !== t.length && se.throwArgumentError("invalid component count for transaction type: 2",
										"payload", (0, c.Dv)(e));
									const a = he(t[2]),
										r = he(t[3]),
										n = {
											type: 2,
											chainId: he(t[0]).toNumber(),
											nonce: he(t[1]).toNumber(),
											maxPriorityFeePerGas: a,
											maxFeePerGas: r,
											gasPrice: null,
											gasLimit: he(t[4]),
											to: ue(t[5]),
											value: he(t[6]),
											data: t[7],
											accessList: ve(t[8])
										};
									return 9 === t.length || (n.hash = (0, d.w)(e), Se(n, t.slice(9), _e)), n
								}(t)
						}
						return se.throwError(`unsupported transaction type: ${t[0]}`, o.Yd.errors.UNSUPPORTED_OPERATION, {
							operation: "parseTransaction",
							transactionType: t[0]
						})
					}
				},
				55234: (e, t, a) => {
						"use strict";
						a.d(t, {
							v0: () => Rt,
							XB: () => Me
						});
						var r = a(74444),
							n = a(32238);

						function c(e, t) {
							var a = {};
							for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
							if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
								var n = 0;
								for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable
									.call(e, r[n]) && (a[r[n]] = e[r[n]])
							}
							return a
						}
						Object.create, Object.create;
						var i = a(53333),
							d = a(8463);
						a(25108);
						const f = function() {
								return {
									"dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
								}
							},
							o = new r.LL("auth", "Firebase", {
								"dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
							}),
							s = new i.Yd("@firebase/auth");

						function b(e, ...t) {
							s.logLevel <= i.in.ERROR && s.error(`Auth (${n.Jn}): ${e}`, ...t)
						}

						function u(e, ...t) {
							throw l(e, ...t)
						}

						function h(e, ...t) {
							return l(e, ...t)
						}

						function l(e, ...t) {
							if ("string" != typeof e) {
								const a = t[0],
									r = [...t.slice(1)];
								return r[0] && (r[0].appName = e.name), e._errorFactory.create(a, ...r)
							}
							return o.create(e, ...t)
						}

						function x(e, t, ...a) {
							if (!e) throw l(t, ...a)
						}

						function p(e) {
							const t = "INTERNAL ASSERTION FAILED: " + e;
							throw b(t), new Error(t)
						}

						function m(e, t) {
							e || p(t)
						}
						const g = new Map;

						function y(e) {
							m(e instanceof Function, "Expected a class definition");
							let t = g.get(e);
							return t ? (m(t instanceof e, "Instance stored in cache mismatched with class"), t) : (t = new e, g.set(e, t), t)
						}

						function v() {
							var e;
							return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || ""
						}

						function w() {
							var e;
							return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) ||
								null
						}
						class _ {
							constructor(e, t) {
								this.shortDelay = e, this.longDelay = t, m(t > e, "Short delay should be less than long delay!"), this.isMobile =
									(0, r.uI)() || (0, r.b$)()
							}
							get() {
								return "undefined" != typeof navigator && navigator && "onLine" in navigator && "boolean" == typeof navigator.onLine &&
									("http:" === w() || "https:" === w() || (0, r.ru)() || "connection" in navigator) && !navigator.onLine ? Math
									.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
							}
						}

						function k(e, t) {
							m(e.emulator, "Emulator should always be set here");
							const {
								url: a
							} = e.emulator;
							return t ? `${a}${t.startsWith("/") ? t.slice(1) : t}` : a
						}
						class M {
							static initialize(e, t, a) {
								this.fetchImpl = e, t && (this.headersImpl = t), a && (this.responseImpl = a)
							}
							static fetch() {
								return this.fetchImpl ? this.fetchImpl : "undefined" != typeof self && "fetch" in self ? self.fetch : void p(
									"Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
								)
							}
							static headers() {
								return this.headersImpl ? this.headersImpl : "undefined" != typeof self && "Headers" in self ? self.Headers :
									void p(
										"Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
									)
							}
							static response() {
								return this.responseImpl ? this.responseImpl : "undefined" != typeof self && "Response" in self ? self.Response :
									void p(
										"Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
									)
							}
						}
						const S = {
								CREDENTIAL_MISMATCH: "custom-token-mismatch",
								MISSING_CUSTOM_TOKEN: "internal-error",
								INVALID_IDENTIFIER: "invalid-email",
								MISSING_CONTINUE_URI: "internal-error",
								INVALID_PASSWORD: "wrong-password",
								MISSING_PASSWORD: "internal-error",
								EMAIL_EXISTS: "email-already-in-use",
								PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
								INVALID_IDP_RESPONSE: "invalid-credential",
								INVALID_PENDING_TOKEN: "invalid-credential",
								FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
								MISSING_REQ_TYPE: "internal-error",
								EMAIL_NOT_FOUND: "user-not-found",
								RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
								EXPIRED_OOB_CODE: "expired-action-code",
								INVALID_OOB_CODE: "invalid-action-code",
								MISSING_OOB_CODE: "internal-error",
								CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
								INVALID_ID_TOKEN: "invalid-user-token",
								TOKEN_EXPIRED: "user-token-expired",
								USER_NOT_FOUND: "user-token-expired",
								TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
								INVALID_CODE: "invalid-verification-code",
								INVALID_SESSION_INFO: "invalid-verification-id",
								INVALID_TEMPORARY_PROOF: "invalid-credential",
								MISSING_SESSION_INFO: "missing-verification-id",
								SESSION_EXPIRED: "code-expired",
								MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
								UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
								INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
								ADMIN_ONLY_OPERATION: "admin-restricted-operation",
								INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
								MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
								MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
								MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
								SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
								SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
								BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
							},
							E = new _(3e4, 6e4);

						function A(e, t) {
							return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
								tenantId: e.tenantId
							}) : t
						}
						async function T(e, t, a, n, c = {}) {
							return R(e, c, (async () => {
								let c = {},
									i = {};
								n && ("GET" === t ? i = n : c = {
									body: JSON.stringify(n)
								});
								const d = (0, r.xO)(Object.assign({
										key: e.config.apiKey
									}, i)).slice(1),
									f = await e._getAdditionalHeaders();
								return f["Content-Type"] = "application/json", e.languageCode && (f["X-Firebase-Locale"] = e.languageCode),
									M.fetch()(P(e, e.config.apiHost, a, d), Object.assign({
										method: t,
										headers: f,
										referrerPolicy: "no-referrer"
									}, c))
							}))
						}
						async function R(e, t, a) {
							e._canInitEmulator = !1;
							const n = Object.assign(Object.assign({}, S), t);
							try {
								const t = new C(e),
									c = await Promise.race([a(), t.promise]);
								t.clearNetworkTimeout();
								const i = await c.json();
								if ("needConfirmation" in i) throw O(e, "account-exists-with-different-credential", i);
								if (c.ok && !("errorMessage" in i)) return i; {
									const t = c.ok ? i.errorMessage : i.error.message,
										[a, d] = t.split(" : ");
									if ("FEDERATED_USER_ID_ALREADY_LINKED" === a) throw O(e, "credential-already-in-use", i);
									if ("EMAIL_EXISTS" === a) throw O(e, "email-already-in-use", i);
									const o = n[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
									if (d) throw function(e, t, a) {
										const n = Object.assign(Object.assign({}, f()), {
											[t]: a
										});
										return new r.LL("auth", "Firebase", n).create(t, {
											appName: e.name
										})
									}(e, o, d);
									u(e, o)
								}
							} catch (t) {
								if (t instanceof r.ZR) throw t;
								u(e, "network-request-failed")
							}
						}
						async function I(e, t, a, r, n = {}) {
							const c = await T(e, t, a, r, n);
							return "mfaPendingCredential" in c && u(e, "multi-factor-auth-required", {
								_serverResponse: c
							}), c
						}

						function P(e, t, a, r) {
							const n = `${t}${a}?${r}`;
							return e.config.emulator ? k(e.config, n) : `${e.config.apiScheme}://${n}`
						}
						class C {
							constructor(e) {
								this.auth = e, this.timer = null, this.promise = new Promise(((e, t) => {
									this.timer = setTimeout((() => t(h(this.auth, "network-request-failed"))), E.get())
								}))
							}
							clearNetworkTimeout() {
								clearTimeout(this.timer)
							}
						}

						function O(e, t, a) {
							const r = {
								appName: e.name
							};
							a.email && (r.email = a.email), a.phoneNumber && (r.phoneNumber = a.phoneNumber);
							const n = h(e, t, r);
							return n.customData._tokenResponse = a, n
						}

						function N(e) {
							if (e) try {
								const t = new Date(Number(e));
								if (!isNaN(t.getTime())) return t.toUTCString()
							} catch (e) {}
						}

						function B(e) {
							return 1e3 * Number(e)
						}

						function L(e) {
							const [t, a, n] = e.split(".");
							if (void 0 === t || void 0 === a || void 0 === n) return b("JWT malformed, contained fewer than 3 sections"),
								null;
							try {
								const e = (0, r.tV)(a);
								return e ? JSON.parse(e) : (b("Failed to decode base64 JWT payload"), null)
							} catch (e) {
								return b("Caught error parsing JWT payload as JSON", e), null
							}
						}
						async function U(e, t, a = !1) {
							if (a) return t;
							try {
								return await t
							} catch (t) {
								throw t instanceof r.ZR && function({
									code: e
								}) {
									return "auth/user-disabled" === e || "auth/user-token-expired" === e
								}(t) && e.auth.currentUser === e && await e.auth.signOut(), t
							}
						}
						class j {
							constructor(e) {
								this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
							}
							_start() {
								this.isRunning || (this.isRunning = !0, this.schedule())
							}
							_stop() {
								this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
							}
							getInterval(e) {
								var t;
								if (e) {
									const e = this.errorBackoff;
									return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), e
								} {
									this.errorBackoff = 3e4;
									const e = (null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0) - Date.now() -
										3e5;
									return Math.max(0, e)
								}
							}
							schedule(e = !1) {
								if (!this.isRunning) return;
								const t = this.getInterval(e);
								this.timerId = setTimeout((async () => {
									await this.iteration()
								}), t)
							}
							async iteration() {
								try {
									await this.user.getIdToken(!0)
								} catch (e) {
									return void("auth/network-request-failed" === e.code && this.schedule(!0))
								}
								this.schedule()
							}
						}
						class D {
							constructor(e, t) {
								this.createdAt = e, this.lastLoginAt = t, this._initializeTime()
							}
							_initializeTime() {
								this.lastSignInTime = N(this.lastLoginAt), this.creationTime = N(this.createdAt)
							}
							_copy(e) {
								this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
							}
							toJSON() {
								return {
									createdAt: this.createdAt,
									lastLoginAt: this.lastLoginAt
								}
							}
						}
						async function F(e) {
							var t;
							const a = e.auth,
								r = await e.getIdToken(),
								n = await U(e, async function(e, t) {
									return T(e, "POST", "/v1/accounts:lookup", t)
								}(a, {
									idToken: r
								}));
							x(null == n ? void 0 : n.users.length, a, "internal-error");
							const i = n.users[0];
							e._notifyReloadListener(i);
							const d = (null === (t = i.providerUserInfo) || void 0 === t ? void 0 : t.length) ? i.providerUserInfo.map((e => {
									var {
										providerId: t
									} = e, a = c(e, ["providerId"]);
									return {
										providerId: t,
										uid: a.rawId || "",
										displayName: a.displayName || null,
										email: a.email || null,
										phoneNumber: a.phoneNumber || null,
										photoURL: a.photoUrl || null
									}
								})) : [],
								f = (o = e.providerData, s = d, [...o.filter((e => !s.some((t => t.providerId === e.providerId)))), ...s]);
							var o, s;
							const b = e.isAnonymous,
								u = !(e.email && i.passwordHash || (null == f ? void 0 : f.length)),
								h = !!b && u,
								l = {
									uid: i.localId,
									displayName: i.displayName || null,
									photoURL: i.photoUrl || null,
									email: i.email || null,
									emailVerified: i.emailVerified || !1,
									phoneNumber: i.phoneNumber || null,
									tenantId: i.tenantId || null,
									providerData: f,
									metadata: new D(i.createdAt, i.lastLoginAt),
									isAnonymous: h
								};
							Object.assign(e, l)
						}
						class q {
							constructor() {
								this.refreshToken = null, this.accessToken = null, this.expirationTime = null
							}
							get isExpired() {
								return !this.expirationTime || Date.now() > this.expirationTime - 3e4
							}
							updateFromServerResponse(e) {
								x(e.idToken, "internal-error"), x(void 0 !== e.idToken, "internal-error"), x(void 0 !== e.refreshToken,
									"internal-error");
								const t = "expiresIn" in e && void 0 !== e.expiresIn ? Number(e.expiresIn) : function(e) {
									const t = L(e);
									return x(t, "internal-error"), x(void 0 !== t.exp, "internal-error"), x(void 0 !== t.iat, "internal-error"),
										Number(t.exp) - Number(t.iat)
								}(e.idToken);
								this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
							}
							async getToken(e, t = !1) {
								return x(!this.accessToken || this.refreshToken, e, "user-token-expired"), t || !this.accessToken || this.isExpired ?
									this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null : this.accessToken
							}
							clearRefreshToken() {
								this.refreshToken = null
							}
							async refresh(e, t) {
								const {
									accessToken: a,
									refreshToken: n,
									expiresIn: c
								} = await async function(e, t) {
									const a = await R(e, {}, (async () => {
										const a = (0, r.xO)({
												grant_type: "refresh_token",
												refresh_token: t
											}).slice(1),
											{
												tokenApiHost: n,
												apiKey: c
											} = e.config,
											i = P(e, n, "/v1/token", `key=${c}`),
											d = await e._getAdditionalHeaders();
										return d["Content-Type"] = "application/x-www-form-urlencoded"
									}));
									return {
										accessToken: a.access_token,
										expiresIn: a.expires_in,
										refreshToken: a.refresh_token
									}
								}(e, t);
								this.updateTokensAndExpiration(a, n, Number(c))
							}
							updateTokensAndExpiration(e, t, a) {
								this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + 1e3 * a
							}
							static fromJSON(e, t) {
								const {
									refreshToken: a,
									accessToken: r,
									expirationTime: n
								} = t, c = new q;
								return a && (x("string" == typeof a, "internal-error", {
									appName: e
								}), c.refreshToken = a), r && (x("string" == typeof r, "internal-error", {
									appName: e
								}), c.accessToken = r), n && (x("number" == typeof n, "internal-error", {
									appName: e
								}), c.expirationTime = n), c
							}
							toJSON() {
								return {
									refreshToken: this.refreshToken,
									accessToken: this.accessToken,
									expirationTime: this.expirationTime
								}
							}
							_assign(e) {
								this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
							}
							_clone() {
								return Object.assign(new q, this.toJSON())
							}
							_performRefresh() {
								return p("not implemented")
							}
						}

						function H(e, t) {
							x("string" == typeof e || void 0 === e, "internal-error", {
								appName: t
							})
						}
						class z {
							constructor(e) {
								var {
									uid: t,
									auth: a,
									stsTokenManager: r
								} = e, n = c(e, ["uid", "auth", "stsTokenManager"]);
								this.providerId = "firebase", this.proactiveRefresh = new j(this), this.reloadUserInfo = null, this.reloadListener =
									null, this.uid = t, this.auth = a, this.stsTokenManager = r, this.accessToken = r.accessToken, this.displayName =
									n.displayName || null, this.email = n.email || null, this.emailVerified = n.emailVerified || !1, this.phoneNumber =
									n.phoneNumber || null, this.photoURL = n.photoURL || null, this.isAnonymous = n.isAnonymous || !1, this.tenantId =
									n.tenantId || null, this.providerData = n.providerData ? [...n.providerData] : [], this.metadata = new D(n.createdAt ||
										void 0, n.lastLoginAt || void 0)
							}
							async getIdToken(e) {
								const t = await U(this, this.stsTokenManager.getToken(this.auth, e));
								return x(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(
									this), this.auth._notifyListenersIfCurrent(this)), t
							}
							getIdTokenResult(e) {
								return async function(e, t = !1) {
									const a = (0, r.m9)(e),
										n = await a.getIdToken(t),
										c = L(n);
									x(c && c.exp && c.auth_time && c.iat, a.auth, "internal-error");
									const i = "object" == typeof c.firebase ? c.firebase : void 0,
										d = null == i ? void 0 : i.sign_in_provider;
									return {
										claims: c,
										token: n,
										authTime: N(B(c.auth_time)),
										issuedAtTime: N(B(c.iat)),
										expirationTime: N(B(c.exp)),
										signInProvider: d || null,
										signInSecondFactor: (null == i ? void 0 : i.sign_in_second_factor) || null
									}
								}(this, e)
							}
							reload() {
								return async function(e) {
									const t = (0, r.m9)(e);
									await F(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t)
								}(this)
							}
							_assign(e) {
								this !== e && (x(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL =
									e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber,
									this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((e =>
										Object.assign({}, e))), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
							}
							_clone(e) {
								return new z(Object.assign(Object.assign({}, this), {
									auth: e,
									stsTokenManager: this.stsTokenManager._clone()
								}))
							}
							_onReload(e) {
								x(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(
									this.reloadUserInfo), this.reloadUserInfo = null)
							}
							_notifyReloadListener(e) {
								this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
							}
							_startProactiveRefresh() {
								this.proactiveRefresh._start()
							}
							_stopProactiveRefresh() {
								this.proactiveRefresh._stop()
							}
							async _updateTokensIfNecessary(e, t = !1) {
								let a = !1;
								e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(
									e), a = !0), t && await F(this), await this.auth._persistUserIfCurrent(this), a && this.auth._notifyListenersIfCurrent(
									this)
							}
							async delete() {
								const e = await this.getIdToken();
								return await U(this, async function(e, t) {
									return T(e, "POST", "/v1/accounts:delete", t)
								}(this.auth, {
									idToken: e
								})), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
							}
							toJSON() {
								return Object.assign(Object.assign({
									uid: this.uid,
									email: this.email || void 0,
									emailVerified: this.emailVerified,
									displayName: this.displayName || void 0,
									isAnonymous: this.isAnonymous,
									photoURL: this.photoURL || void 0,
									phoneNumber: this.phoneNumber || void 0,
									tenantId: this.tenantId || void 0,
									providerData: this.providerData.map((e => Object.assign({}, e))),
									stsTokenManager: this.stsTokenManager.toJSON(),
									_redirectEventId: this._redirectEventId
								}, this.metadata.toJSON()), {
									apiKey: this.auth.config.apiKey,
									appName: this.auth.name
								})
							}
							get refreshToken() {
								return this.stsTokenManager.refreshToken || ""
							}
							static _fromJSON(e, t) {
								var a, r, n, c, i, d, f, o;
								const s = null !== (a = t.displayName) && void 0 !== a ? a : void 0,
									b = null !== (r = t.email) && void 0 !== r ? r : void 0,
									u = null !== (n = t.phoneNumber) && void 0 !== n ? n : void 0,
									h = null !== (c = t.photoURL) && void 0 !== c ? c : void 0,
									l = null !== (i = t.tenantId) && void 0 !== i ? i : void 0,
									p = null !== (d = t._redirectEventId) && void 0 !== d ? d : void 0,
									m = null !== (f = t.createdAt) && void 0 !== f ? f : void 0,
									g = null !== (o = t.lastLoginAt) && void 0 !== o ? o : void 0,
									{
										uid: y,
										emailVerified: v,
										isAnonymous: w,
										providerData: _,
										stsTokenManager: k
									} = t;
								x(y && k, e, "internal-error");
								const M = q.fromJSON(this.name, k);
								x("string" == typeof y, e, "internal-error"), H(s, e.name), H(b, e.name), x("boolean" == typeof v, e,
										"internal-error"), x("boolean" == typeof w, e, "internal-error"), H(u, e.name), H(h, e.name), H(l, e.name),
									H(p, e.name), H(m, e.name), H(g, e.name);
								const S = new z({
									uid: y,
									auth: e,
									email: b,
									emailVerified: v,
									displayName: s,
									isAnonymous: w,
									photoURL: h,
									phoneNumber: u,
									tenantId: l,
									stsTokenManager: M,
									createdAt: m,
									lastLoginAt: g
								});
								return _ && Array.isArray(_) && (S.providerData = _.map((e => Object.assign({}, e)))), p && (S._redirectEventId =
									p), S
							}
							static async _fromIdTokenResponse(e, t, a = !1) {
								const r = new q;
								r.updateFromServerResponse(t);
								const n = new z({
									uid: t.localId,
									auth: e,
									stsTokenManager: r,
									isAnonymous: a
								});
								return await F(n), n
							}
						}
						class V {
							constructor() {
								this.type = "NONE", this.storage = {}
							}
							async _isAvailable() {
								return !0
							}
							async _set(e, t) {
								this.storage[e] = t
							}
							async _get(e) {
								const t = this.storage[e];
								return void 0 === t ? null : t
							}
							async _remove(e) {
								delete this.storage[e]
							}
							_addListener(e, t) {}
							_removeListener(e, t) {}
						}
						V.type = "NONE";
						const W = V;

						function G(e, t, a) {
							return `firebase:${e}:${t}:${a}`
						}
						class X {
							constructor(e, t, a) {
								this.persistence = e, this.auth = t, this.userKey = a;
								const {
									config: r,
									name: n
								} = this.auth;
								this.fullUserKey = G(this.userKey, r.apiKey, n), this.fullPersistenceKey = G("persistence", r.apiKey, n), this
									.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
							}
							setCurrentUser(e) {
								return this.persistence._set(this.fullUserKey, e.toJSON())
							}
							async getCurrentUser() {
								const e = await this.persistence._get(this.fullUserKey);
								return e ? z._fromJSON(this.auth, e) : null
							}
							removeCurrentUser() {
								return this.persistence._remove(this.fullUserKey)
							}
							savePersistenceForRedirect() {
								return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
							}
							async setPersistence(e) {
								if (this.persistence === e) return;
								const t = await this.getCurrentUser();
								return await this.removeCurrentUser(), this.persistence = e, t ? this.setCurrentUser(t) : void 0
							}
							delete() {
								this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
							}
							static async create(e, t, a = "authUser") {
								if (!t.length) return new X(y(W), e, a);
								const r = (await Promise.all(t.map((async e => {
									if (await e._isAvailable()) return e
								})))).filter((e => e));
								let n = r[0] || y(W);
								const c = G(a, e.config.apiKey, e.name);
								let i = null;
								for (const a of t) try {
									const t = await a._get(c);
									if (t) {
										const r = z._fromJSON(e, t);
										a !== n && (i = r), n = a;
										break
									}
								} catch (e) {}
								const d = r.filter((e => e._shouldAllowMigration));
								return n._shouldAllowMigration && d.length ? (n = d[0], i && await n._set(c, i.toJSON()), await Promise.all(t.map(
									(async e => {
										if (e !== n) try {
											await e._remove(c)
										} catch (e) {}
									}))), new X(n, e, a)) : new X(n, e, a)
							}
						}

						function Y(e) {
							const t = e.toLowerCase();
							if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
							if (Z(t)) return "IEMobile";
							if (t.includes("msie") || t.includes("trident/")) return "IE";
							if (t.includes("edge/")) return "Edge";
							if ($(t)) return "Firefox";
							if (t.includes("silk/")) return "Silk";
							if (ee(t)) return "Blackberry";
							if (te(t)) return "Webos";
							if (K(t)) return "Safari";
							if ((t.includes("chrome/") || J(t)) && !t.includes("edge/")) return "Chrome";
							if (Q(t)) return "Android"; {
								const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
									a = e.match(t);
								if (2 === (null == a ? void 0 : a.length)) return a[1]
							}
							return "Other"
						}

						function $(e = (0, r.z$)()) {
							return /firefox\//i.test(e)
						}

						function K(e = (0, r.z$)()) {
							const t = e.toLowerCase();
							return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
						}

						function J(e = (0, r.z$)()) {
							return /crios\//i.test(e)
						}

						function Z(e = (0, r.z$)()) {
							return /iemobile/i.test(e)
						}

						function Q(e = (0, r.z$)()) {
							return /android/i.test(e)
						}

						function ee(e = (0, r.z$)()) {
							return /blackberry/i.test(e)
						}

						function te(e = (0, r.z$)()) {
							return /webos/i.test(e)
						}

						function ae(e = (0, r.z$)()) {
							return /iphone|ipad|ipod/i.test(e)
						}

						function re(e = (0, r.z$)()) {
							return ae(e) || Q(e) || te(e) || ee(e) || /windows phone/i.test(e) || Z(e)
						}

						function ne(e, t = []) {
							let a;
							switch (e) {
								case "Browser":
									a = Y((0, r.z$)());
									break;
								case "Worker":
									a = `${Y((0, r.z$)())}-${e}`;
									break;
								default:
									a = e
							}
							const c = t.length ? t.join(",") : "FirebaseCore-web";
							return `${a}/JsCore/${n.Jn}/${c}`
						}
						class ce {
							constructor(e, t) {
								this.app = e, this.config = t, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(),
									this.authStateSubscription = new de(this), this.idTokenSubscription = new de(this), this.redirectUser = null,
									this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1,
									this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = o, this.lastNotifiedUid =
									void 0, this.languageCode = null, this.tenantId = null, this.settings = {
										appVerificationDisabledForTesting: !1
									}, this.frameworks = [], this.name = e.name, this.clientVersion = t.sdkClientVersion
							}
							_initializeWithPersistence(e, t) {
								return t && (this._popupRedirectResolver = y(t)), this._initializationPromise = this.queue((async () => {
									var a, r;
									if (!this._deleted && (this.persistenceManager = await X.create(this, e), !this._deleted)) {
										if (null === (a = this._popupRedirectResolver) || void 0 === a ? void 0 : a._shouldInitProactively) try {
											await this._popupRedirectResolver._initialize(this)
										} catch (e) {}
										await this.initializeCurrentUser(t), this.lastNotifiedUid = (null === (r = this.currentUser) || void 0 ===
											r ? void 0 : r.uid) || null, this._deleted || (this._isInitialized = !0)
									}
								})), this._initializationPromise
							}
							async _onStorageEvent() {
								if (this._deleted) return;
								const e = await this.assertedPersistence.getCurrentUser();
								return this.currentUser || e ? this.currentUser && e && this.currentUser.uid === e.uid ? (this._currentUser._assign(
									e), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(e) : void 0
							}
							async initializeCurrentUser(e) {
								var t;
								let a = await this.assertedPersistence.getCurrentUser();
								if (e && this.config.authDomain) {
									await this.getOrInitRedirectPersistenceManager();
									const r = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId,
										n = null == a ? void 0 : a._redirectEventId,
										c = await this.tryRedirectSignIn(e);
									r && r !== n || !(null == c ? void 0 : c.user) || (a = c.user)
								}
								return a ? a._redirectEventId ? (x(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(),
									this.redirectUser && this.redirectUser._redirectEventId === a._redirectEventId ? this.directlySetCurrentUser(
										a) : this.reloadAndSetCurrentUserOrClear(a)) : this.reloadAndSetCurrentUserOrClear(a) : this.directlySetCurrentUser(
									null)
							}
							async tryRedirectSignIn(e) {
								let t = null;
								try {
									t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
								} catch (e) {
									await this._setRedirectUser(null)
								}
								return t
							}
							async reloadAndSetCurrentUserOrClear(e) {
								try {
									await F(e)
								} catch (e) {
									if ("auth/network-request-failed" !== e.code) return this.directlySetCurrentUser(null)
								}
								return this.directlySetCurrentUser(e)
							}
							useDeviceLanguage() {
								this.languageCode = function() {
									if ("undefined" == typeof navigator) return null;
									const e = navigator;
									return e.languages && e.languages[0] || e.language || null
								}()
							}
							async _delete() {
								this._deleted = !0
							}
							async updateCurrentUser(e) {
								const t = e ? (0, r.m9)(e) : null;
								return t && x(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(
									t && t._clone(this))
							}
							async _updateCurrentUser(e) {
								if (!this._deleted) return e && x(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), this.queue((async () => {
									await this.directlySetCurrentUser(e), this.notifyAuthListeners()
								}))
							}
							async signOut() {
								return (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
									this._updateCurrentUser(null)
							}
							setPersistence(e) {
								return this.queue((async () => {
									await this.assertedPersistence.setPersistence(y(e))
								}))
							}
							_getPersistence() {
								return this.assertedPersistence.persistence.type
							}
							_updateErrorMap(e) {
								this._errorFactory = new r.LL("auth", "Firebase", e())
							}
							onAuthStateChanged(e, t, a) {
								return this.registerStateListener(this.authStateSubscription, e, t, a)
							}
							onIdTokenChanged(e, t, a) {
								return this.registerStateListener(this.idTokenSubscription, e, t, a)
							}
							toJSON() {
								var e;
								return {
									apiKey: this.config.apiKey,
									authDomain: this.config.authDomain,
									appName: this.name,
									currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
								}
							}
							async _setRedirectUser(e, t) {
								const a = await this.getOrInitRedirectPersistenceManager(t);
								return null === e ? a.removeCurrentUser() : a.setCurrentUser(e)
							}
							async getOrInitRedirectPersistenceManager(e) {
								if (!this.redirectPersistenceManager) {
									const t = e && y(e) || this._popupRedirectResolver;
									x(t, this, "argument-error"), this.redirectPersistenceManager = await X.create(this, [y(t._redirectPersistence)],
										"redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
								}
								return this.redirectPersistenceManager
							}
							async _redirectUserForId(e) {
								var t, a;
								return this._isInitialized && await this.queue((async () => {})), (null === (t = this._currentUser) || void 0 ===
									t ? void 0 : t._redirectEventId) === e ? this._currentUser : (null === (a = this.redirectUser) || void 0 ===
									a ? void 0 : a._redirectEventId) === e ? this.redirectUser : null
							}
							async _persistUserIfCurrent(e) {
								if (e === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(e)))
							}
							_notifyListenersIfCurrent(e) {
								e === this.currentUser && this.notifyAuthListeners()
							}
							_key() {
								return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
							}
							_startProactiveRefresh() {
								this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
							}
							_stopProactiveRefresh() {
								this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
							}
							get _currentUser() {
								return this.currentUser
							}
							notifyAuthListeners() {
								var e, t;
								if (!this._isInitialized) return;
								this.idTokenSubscription.next(this.currentUser);
								const a = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t :
									null;
								this.lastNotifiedUid !== a && (this.lastNotifiedUid = a, this.authStateSubscription.next(this.currentUser))
							}
							registerStateListener(e, t, a, r) {
								if (this._deleted) return () => {};
								const n = "function" == typeof t ? t : t.next.bind(t),
									c = this._isInitialized ? Promise.resolve() : this._initializationPromise;
								return x(c, this, "internal-error"), c.then((() => n(this.currentUser))), "function" == typeof t ? e.addObserver(
									t, a, r) : e.addObserver(t)
							}
							async directlySetCurrentUser(e) {
								this.currentUser && this.currentUser !== e && (this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled &&
										e._startProactiveRefresh()), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) :
									await this.assertedPersistence.removeCurrentUser()
							}
							queue(e) {
								return this.operations = this.operations.then(e, e), this.operations
							}
							get assertedPersistence() {
								return x(this.persistenceManager, this, "internal-error"), this.persistenceManager
							}
							_logFramework(e) {
								e && !this.frameworks.includes(e) && (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = ne(
									this.config.clientPlatform, this._getFrameworks()))
							}
							_getFrameworks() {
								return this.frameworks
							}
							async _getAdditionalHeaders() {
								const e = {
									"X-Client-Version": this.clientVersion
								};
								return this.app.options.appId && (e["X-Firebase-gmpid"] = this.app.options.appId), e
							}
						}

						function ie(e) {
							return (0, r.m9)(e)
						}
						class de {
							constructor(e) {
								this.auth = e, this.observer = null, this.addObserver = (0, r.ne)((e => this.observer = e))
							}
							get next() {
								return x(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
							}
						}
						class fe {
							constructor(e, t) {
								this.providerId = e, this.signInMethod = t
							}
							toJSON() {
								return p("not implemented")
							}
							_getIdTokenResponse(e) {
								return p("not implemented")
							}
							_linkToIdToken(e, t) {
								return p("not implemented")
							}
							_getReauthenticationResolver(e) {
								return p("not implemented")
							}
						}
						class oe extends fe {
							constructor(e, t, a, r = null) {
								super("password", a), this._email = e, this._password = t, this._tenantId = r
							}
							static _fromEmailAndPassword(e, t) {
								return new oe(e, t, "password")
							}
							static _fromEmailAndCode(e, t, a = null) {
								return new oe(e, t, "emailLink", a)
							}
							toJSON() {
								return {
									email: this._email,
									password: this._password,
									signInMethod: this.signInMethod,
									tenantId: this._tenantId
								}
							}
							static fromJSON(e) {
								const t = "string" == typeof e ? JSON.parse(e) : e;
								if ((null == t ? void 0 : t.email) && (null == t ? void 0 : t.password)) {
									if ("password" === t.signInMethod) return this._fromEmailAndPassword(t.email, t.password);
									if ("emailLink" === t.signInMethod) return this._fromEmailAndCode(t.email, t.password, t.tenantId)
								}
								return null
							}
							async _getIdTokenResponse(e) {
								switch (this.signInMethod) {
									case "password":
										return async function(e, t) {
											return I(e, "POST", "/v1/accounts:signInWithPassword", A(e, t))
										}(e, {
											returnSecureToken: !0,
											email: this._email,
											password: this._password
										});
									case "emailLink":
										return async function(e, t) {
											return I(e, "POST", "/v1/accounts:signInWithEmailLink", A(e, t))
										}(e, {
											email: this._email,
											oobCode: this._password
										});
									default:
										u(e, "internal-error")
								}
							}
							async _linkToIdToken(e, t) {
								switch (this.signInMethod) {
									case "password":
										return async function(e, t) {
											return T(e, "POST", "/v1/accounts:update", t)
										}(e, {
											idToken: t,
											returnSecureToken: !0,
											email: this._email,
											password: this._password
										});
									case "emailLink":
										return async function(e, t) {
											return I(e, "POST", "/v1/accounts:signInWithEmailLink", A(e, t))
										}(e, {
											idToken: t,
											email: this._email,
											oobCode: this._password
										});
									default:
										u(e, "internal-error")
								}
							}
							_getReauthenticationResolver(e) {
								return this._getIdTokenResponse(e)
							}
						}
						async function se(e, t) {
							return I(e, "POST", "/v1/accounts:signInWithIdp", A(e, t))
						}
						class be extends fe {
							constructor() {
								super(...arguments), this.pendingToken = null
							}
							static _fromParams(e) {
								const t = new be(e.providerId, e.signInMethod);
								return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e
										.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) :
									e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : u(
										"argument-error"), t
							}
							toJSON() {
								return {
									idToken: this.idToken,
									accessToken: this.accessToken,
									secret: this.secret,
									nonce: this.nonce,
									pendingToken: this.pendingToken,
									providerId: this.providerId,
									signInMethod: this.signInMethod
								}
							}
							static fromJSON(e) {
								const t = "string" == typeof e ? JSON.parse(e) : e,
									{
										providerId: a,
										signInMethod: r
									} = t,
									n = c(t, ["providerId", "signInMethod"]);
								if (!a || !r) return null;
								const i = new be(a, r);
								return i.idToken = n.idToken || void 0, i.accessToken = n.accessToken || void 0, i.secret = n.secret, i.nonce =
									n.nonce, i.pendingToken = n.pendingToken || null, i
							}
							_getIdTokenResponse(e) {
								return se(e, this.buildRequest())
							}
							_linkToIdToken(e, t) {
								const a = this.buildRequest();
								return a.idToken = t, se(e, a)
							}
							_getReauthenticationResolver(e) {
								const t = this.buildRequest();
								return t.autoCreate = !1, se(e, t)
							}
							buildRequest() {
								const e = {
									requestUri: "http://localhost",
									returnSecureToken: !0
								};
								if (this.pendingToken) e.pendingToken = this.pendingToken;
								else {
									const t = {};
									this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret &&
										(t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t
											.nonce = this.nonce), e.postBody = (0, r.xO)(t)
								}
								return e
							}
						}
						const ue = {
							USER_NOT_FOUND: "user-not-found"
						};
						class he extends fe {
							constructor(e) {
								super("phone", "phone"), this.params = e
							}
							static _fromVerification(e, t) {
								return new he({
									verificationId: e,
									verificationCode: t
								})
							}
							static _fromTokenResponse(e, t) {
								return new he({
									phoneNumber: e,
									temporaryProof: t
								})
							}
							_getIdTokenResponse(e) {
								return async function(e, t) {
									return I(e, "POST", "/v1/accounts:signInWithPhoneNumber", A(e, t))
								}(e, this._makeVerificationRequest())
							}
							_linkToIdToken(e, t) {
								return async function(e, t) {
									const a = await I(e, "POST", "/v1/accounts:signInWithPhoneNumber", A(e, t));
									if (a.temporaryProof) throw O(e, "account-exists-with-different-credential", a);
									return a
								}(e, Object.assign({
									idToken: t
								}, this._makeVerificationRequest()))
							}
							_getReauthenticationResolver(e) {
								return async function(e, t) {
									return I(e, "POST", "/v1/accounts:signInWithPhoneNumber", A(e, Object.assign(Object.assign({}, t), {
										operation: "REAUTH"
									})), ue)
								}(e, this._makeVerificationRequest())
							}
							_makeVerificationRequest() {
								const {
									temporaryProof: e,
									phoneNumber: t,
									verificationId: a,
									verificationCode: r
								} = this.params;
								return e && t ? {
									temporaryProof: e,
									phoneNumber: t
								} : {
									sessionInfo: a,
									code: r
								}
							}
							toJSON() {
								const e = {
									providerId: this.providerId
								};
								return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof =
										this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode),
									this.params.verificationId && (e.verificationId = this.params.verificationId), e
							}
							static fromJSON(e) {
								"string" == typeof e && (e = JSON.parse(e));
								const {
									verificationId: t,
									verificationCode: a,
									phoneNumber: r,
									temporaryProof: n
								} = e;
								return a || t || r || n ? new he({
									verificationId: t,
									verificationCode: a,
									phoneNumber: r,
									temporaryProof: n
								}) : null
							}
						}
						class le {
							constructor(e) {
								var t, a, n, c, i, d;
								const f = (0, r.zd)((0, r.pd)(e)),
									o = null !== (t = f.apiKey) && void 0 !== t ? t : null,
									s = null !== (a = f.oobCode) && void 0 !== a ? a : null,
									b = function(e) {
										switch (e) {
											case "recoverEmail":
												return "RECOVER_EMAIL";
											case "resetPassword":
												return "PASSWORD_RESET";
											case "signIn":
												return "EMAIL_SIGNIN";
											case "verifyEmail":
												return "VERIFY_EMAIL";
											case "verifyAndChangeEmail":
												return "VERIFY_AND_CHANGE_EMAIL";
											case "revertSecondFactorAddition":
												return "REVERT_SECOND_FACTOR_ADDITION";
											default:
												return null
										}
									}(null !== (n = f.mode) && void 0 !== n ? n : null);
								x(o && s && b, "argument-error"), this.apiKey = o, this.operation = b, this.code = s, this.continueUrl = null !==
									(c = f.continueUrl) && void 0 !== c ? c : null, this.languageCode = null !== (i = f.languageCode) && void 0 !==
									i ? i : null, this.tenantId = null !== (d = f.tenantId) && void 0 !== d ? d : null
							}
							static parseLink(e) {
								const t = function(e) {
									const t = (0, r.zd)((0, r.pd)(e)).link,
										a = t ? (0, r.zd)((0, r.pd)(t)).deep_link_id : null,
										n = (0, r.zd)((0, r.pd)(e)).deep_link_id;
									return (n ? (0, r.zd)((0, r.pd)(n)).link : null) || n || a || t || e
								}(e);
								try {
									return new le(t)
								} catch (e) {
									return null
								}
							}
						}
						class xe {
							constructor() {
								this.providerId = xe.PROVIDER_ID
							}
							static credential(e, t) {
								return oe._fromEmailAndPassword(e, t)
							}
							static credentialWithLink(e, t) {
								const a = le.parseLink(t);
								return x(a, "argument-error"), oe._fromEmailAndCode(e, a.code, a.tenantId)
							}
						}
						xe.PROVIDER_ID = "password", xe.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", xe.EMAIL_LINK_SIGN_IN_METHOD =
							"emailLink";
						class pe {
							constructor(e) {
								this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
							}
							setDefaultLanguage(e) {
								this.defaultLanguageCode = e
							}
							setCustomParameters(e) {
								return this.customParameters = e, this
							}
							getCustomParameters() {
								return this.customParameters
							}
						}
						class me extends pe {
							constructor() {
								super(...arguments), this.scopes = []
							}
							addScope(e) {
								return this.scopes.includes(e) || this.scopes.push(e), this
							}
							getScopes() {
								return [...this.scopes]
							}
						}
						class ge extends me {
							constructor() {
								super("facebook.com")
							}
							static credential(e) {
								return be._fromParams({
									providerId: ge.PROVIDER_ID,
									signInMethod: ge.FACEBOOK_SIGN_IN_METHOD,
									accessToken: e
								})
							}
							static credentialFromResult(e) {
								return ge.credentialFromTaggedObject(e)
							}
							static credentialFromError(e) {
								return ge.credentialFromTaggedObject(e.customData || {})
							}
							static credentialFromTaggedObject({
								_tokenResponse: e
							}) {
								if (!e || !("oauthAccessToken" in e)) return null;
								if (!e.oauthAccessToken) return null;
								try {
									return ge.credential(e.oauthAccessToken)
								} catch (e) {
									return null
								}
							}
						}
						ge.FACEBOOK_SIGN_IN_METHOD = "facebook.com", ge.PROVIDER_ID = "facebook.com";
						class ye extends me {
							constructor() {
								super("google.com"), this.addScope("profile")
							}
							static credential(e, t) {
								return be._fromParams({
									providerId: ye.PROVIDER_ID,
									signInMethod: ye.GOOGLE_SIGN_IN_METHOD,
									idToken: e,
									accessToken: t
								})
							}
							static credentialFromResult(e) {
								return ye.credentialFromTaggedObject(e)
							}
							static credentialFromError(e) {
								return ye.credentialFromTaggedObject(e.customData || {})
							}
							static credentialFromTaggedObject({
								_tokenResponse: e
							}) {
								if (!e) return null;
								const {
									oauthIdToken: t,
									oauthAccessToken: a
								} = e;
								if (!t && !a) return null;
								try {
									return ye.credential(t, a)
								} catch (e) {
									return null
								}
							}
						}
						ye.GOOGLE_SIGN_IN_METHOD = "google.com", ye.PROVIDER_ID = "google.com";
						class ve extends me {
							constructor() {
								super("github.com")
							}
							static credential(e) {
								return be._fromParams({
									providerId: ve.PROVIDER_ID,
									signInMethod: ve.GITHUB_SIGN_IN_METHOD,
									accessToken: e
								})
							}
							static credentialFromResult(e) {
								return ve.credentialFromTaggedObject(e)
							}
							static credentialFromError(e) {
								return ve.credentialFromTaggedObject(e.customData || {})
							}
							static credentialFromTaggedObject({
								_tokenResponse: e
							}) {
								if (!e || !("oauthAccessToken" in e)) return null;
								if (!e.oauthAccessToken) return null;
								try {
									return ve.credential(e.oauthAccessToken)
								} catch (e) {
									return null
								}
							}
						}
						ve.GITHUB_SIGN_IN_METHOD = "github.com", ve.PROVIDER_ID = "github.com";
						class we extends me {
							constructor() {
								super("twitter.com")
							}
							static credential(e, t) {
								return be._fromParams({
									providerId: we.PROVIDER_ID,
									signInMethod: we.TWITTER_SIGN_IN_METHOD,
									oauthToken: e,
									oauthTokenSecret: t
								})
							}
							static credentialFromResult(e) {
								return we.credentialFromTaggedObject(e)
							}
							static credentialFromError(e) {
								return we.credentialFromTaggedObject(e.customData || {})
							}
							static credentialFromTaggedObject({
								_tokenResponse: e
							}) {
								if (!e) return null;
								const {
									oauthAccessToken: t,
									oauthTokenSecret: a
								} = e;
								if (!t || !a) return null;
								try {
									return we.credential(t, a)
								} catch (e) {
									return null
								}
							}
						}
						we.TWITTER_SIGN_IN_METHOD = "twitter.com", we.PROVIDER_ID = "twitter.com";
						class _e {
							constructor(e) {
								this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType =
									e.operationType
							}
							static async _fromIdTokenResponse(e, t, a, r = !1) {
								const n = await z._fromIdTokenResponse(e, a, r),
									c = ke(a);
								return new _e({
									user: n,
									providerId: c,
									_tokenResponse: a,
									operationType: t
								})
							}
							static async _forOperation(e, t, a) {
								await e._updateTokensIfNecessary(a, !0);
								const r = ke(a);
								return new _e({
									user: e,
									providerId: r,
									_tokenResponse: a,
									operationType: t
								})
							}
						}

						function ke(e) {
							return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
						}
						async function Me(e) {
							var t;
							const a = ie(e);
							if (await a._initializationPromise, null === (t = a.currentUser) || void 0 === t ? void 0 : t.isAnonymous)
								return new _e({
									user: a.currentUser,
									providerId: null,
									operationType: "signIn"
								});
							const r = await async function(e, t) {
								return I(e, "POST", "/v1/accounts:signUp", A(e, t))
							}(a, {
								returnSecureToken: !0
							}), n = await _e._fromIdTokenResponse(a, "signIn", r, !0);
							return await a._updateCurrentUser(n.user), n
						}
						class Se extends r.ZR {
							constructor(e, t, a, r) {
								var n;
								super(t.code, t.message), this.operationType = a, this.user = r, Object.setPrototypeOf(this, Se.prototype),
									this.customData = {
										appName: e.name,
										tenantId: null !== (n = e.tenantId) && void 0 !== n ? n : void 0,
										_serverResponse: t.customData._serverResponse,
										operationType: a
									}
							}
							static _fromErrorAndOperation(e, t, a, r) {
								return new Se(e, t, a, r)
							}
						}

						function Ee(e, t, a, r) {
							return ("reauthenticate" === t ? a._getReauthenticationResolver(e) : a._getIdTokenResponse(e)).catch((a => {
								if ("auth/multi-factor-auth-required" === a.code) throw Se._fromErrorAndOperation(e, a, t, r);
								throw a
							}))
						}
						new WeakMap;
						const Ae = "__sak";
						class Te {
							constructor(e, t) {
								this.storageRetriever = e, this.type = t
							}
							_isAvailable() {
								try {
									return this.storage ? (this.storage.setItem(Ae, "1"), this.storage.removeItem(Ae), Promise.resolve(!0)) :
										Promise.resolve(!1)
								} catch (e) {
									return Promise.resolve(!1)
								}
							}
							_set(e, t) {
								return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve()
							}
							_get(e) {
								const t = this.storage.getItem(e);
								return Promise.resolve(t ? JSON.parse(t) : null)
							}
							_remove(e) {
								return this.storage.removeItem(e), Promise.resolve()
							}
							get storage() {
								return this.storageRetriever()
							}
						}
						class Re extends Te {
							constructor() {
								super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t),
									this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
										const e = (0, r.z$)();
										return K(e) || ae(e)
									}() && function() {
										try {
											return !(!window || window === window.top)
										} catch (e) {
											return !1
										}
									}(), this.fallbackToPolling = re(), this._shouldAllowMigration = !0
							}
							forAllChangedKeys(e) {
								for (const t of Object.keys(this.listeners)) {
									const a = this.storage.getItem(t),
										r = this.localCache[t];
									a !== r && e(t, r, a)
								}
							}
							onStorageEvent(e, t = !1) {
								if (!e.key) return void this.forAllChangedKeys(((e, t, a) => {
									this.notifyListeners(e, a)
								}));
								const a = e.key;
								if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
									const r = this.storage.getItem(a);
									if (e.newValue !== r) null !== e.newValue ? this.storage.setItem(a, e.newValue) : this.storage.removeItem(a);
									else if (this.localCache[a] === e.newValue && !t) return
								}
								const n = () => {
										const e = this.storage.getItem(a);
										(t || this.localCache[a] !== e) && this.notifyListeners(a, e)
									},
									c = this.storage.getItem(a);
								(0, r.w1)() && 10 === document.documentMode && c !== e.newValue && e.newValue !== e.oldValue ? setTimeout(n,
									10) : n()
							}
							notifyListeners(e, t) {
								this.localCache[e] = t;
								const a = this.listeners[e];
								if (a)
									for (const e of Array.from(a)) e(t ? JSON.parse(t) : t)
							}
							startPolling() {
								this.stopPolling(), this.pollTimer = setInterval((() => {
									this.forAllChangedKeys(((e, t, a) => {
										this.onStorageEvent(new StorageEvent("storage", {
											key: e,
											oldValue: t,
											newValue: a
										}), !0)
									}))
								}), 1e3)
							}
							stopPolling() {
								this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
							}
							attachListener() {
								window.addEventListener("storage", this.boundEventHandler)
							}
							detachListener() {
								window.removeEventListener("storage", this.boundEventHandler)
							}
							_addListener(e, t) {
								0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
									this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[
										e].add(t)
							}
							_removeListener(e, t) {
								this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]),
									0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
							}
							async _set(e, t) {
								await super._set(e, t), this.localCache[e] = JSON.stringify(t)
							}
							async _get(e) {
								const t = await super._get(e);
								return this.localCache[e] = JSON.stringify(t), t
							}
							async _remove(e) {
								await super._remove(e), delete this.localCache[e]
							}
						}
						Re.type = "LOCAL";
						const Ie = Re;
						class Pe extends Te {
							constructor() {
								super((() => window.sessionStorage), "SESSION")
							}
							_addListener(e, t) {}
							_removeListener(e, t) {}
						}
						Pe.type = "SESSION";
						const Ce = Pe;
						class Oe {
							constructor(e) {
								this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
							}
							static _getInstance(e) {
								const t = this.receivers.find((t => t.isListeningto(e)));
								if (t) return t;
								const a = new Oe(e);
								return this.receivers.push(a), a
							}
							isListeningto(e) {
								return this.eventTarget === e
							}
							async handleEvent(e) {
								const t = e,
									{
										eventId: a,
										eventType: r,
										data: n
									} = t.data,
									c = this.handlersMap[r];
								if (!(null == c ? void 0 : c.size)) return;
								t.ports[0].postMessage({
									status: "ack",
									eventId: a,
									eventType: r
								});
								const i = Array.from(c).map((async e => e(t.origin, n))),
									d = await
								function(e) {
									return Promise.all(e.map((async e => {
										try {
											return {
												fulfilled: !0,
												value: await e
											}
										} catch (e) {
											return {
												fulfilled: !1,
												reason: e
											}
										}
									})))
								}(i);
								t.ports[0].postMessage({
									status: "done",
									eventId: a,
									eventType: r,
									response: d
								})
							}
							_subscribe(e, t) {
								0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler),
									this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t)
							}
							_unsubscribe(e, t) {
								this.handlersMap[e] && t && this.handlersMap[e].delete(t), t && 0 !== this.handlersMap[e].size || delete this.handlersMap[
									e], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
							}
						}

						function Ne(e = "", t = 10) {
							let a = "";
							for (let e = 0; e < t; e++) a += Math.floor(10 * Math.random());
							return e + a
						}
						Oe.receivers = [];
						class Be {
							constructor(e) {
								this.target = e, this.handlers = new Set
							}
							removeMessageHandler(e) {
								e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1
									.close()), this.handlers.delete(e)
							}
							async _send(e, t, a = 50) {
								const r = "undefined" != typeof MessageChannel ? new MessageChannel : null;
								if (!r) throw new Error("connection_unavailable");
								let n, c;
								return new Promise(((i, d) => {
									const f = Ne("", 20);
									r.port1.start();
									const o = setTimeout((() => {
										d(new Error("unsupported_event"))
									}), a);
									c = {
										messageChannel: r,
										onMessage(e) {
											const t = e;
											if (t.data.eventId === f) switch (t.data.status) {
												case "ack":
													clearTimeout(o), n = setTimeout((() => {
														d(new Error("timeout"))
													}), 3e3);
													break;
												case "done":
													clearTimeout(n), i(t.data.response);
													break;
												default:
													clearTimeout(o), clearTimeout(n), d(new Error("invalid_response"))
											}
										}
									}, this.handlers.add(c), r.port1.addEventListener("message", c.onMessage), this.target.postMessage({
										eventType: e,
										eventId: f,
										data: t
									}, [r.port2])
								})).finally((() => {
									c && this.removeMessageHandler(c)
								}))
							}
						}

						function Le() {
							return window
						}

						function Ue() {
							return void 0 !== Le().WorkerGlobalScope && "function" == typeof Le().importScripts
						}
						const je = "firebaseLocalStorageDb",
							De = "firebaseLocalStorage",
							Fe = "fbase_key";
						class qe {
							constructor(e) {
								this.request = e
							}
							toPromise() {
								return new Promise(((e, t) => {
									this.request.addEventListener("success", (() => {
										e(this.request.result)
									})), this.request.addEventListener("error", (() => {
										t(this.request.error)
									}))
								}))
							}
						}

						function He(e, t) {
							return e.transaction([De], t ? "readwrite" : "readonly").objectStore(De)
						}

						function ze() {
							const e = indexedDB.open(je, 1);
							return new Promise(((t, a) => {
								e.addEventListener("error", (() => {
									a(e.error)
								})), e.addEventListener("upgradeneeded", (() => {
									const t = e.result;
									try {
										t.createObjectStore(De, {
											keyPath: Fe
										})
									} catch (e) {
										a(e)
									}
								})), e.addEventListener("success", (async () => {
									const a = e.result;
									a.objectStoreNames.contains(De) ? t(a) : (a.close(), await
										function() {
											const e = indexedDB.deleteDatabase(je);
											return new qe(e).toPromise()
										}(), t(await ze()))
								}))
							}))
						}
						async function Ve(e, t, a) {
							const r = He(e, !0).put({
								[Fe]: t,
								value: a
							});
							return new qe(r).toPromise()
						}

						function We(e, t) {
							const a = He(e, !0).delete(t);
							return new qe(a).toPromise()
						}
						class Ge {
							constructor() {
								this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer =
									null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !
									1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging()
									.then((() => {}), (() => {}))
							}
							async _openDb() {
								return this.db || (this.db = await ze()), this.db
							}
							async _withRetries(e) {
								let t = 0;
								for (;;) try {
									const t = await this._openDb();
									return await e(t)
								} catch (e) {
									if (t++ > 3) throw e;
									this.db && (this.db.close(), this.db = void 0)
								}
							}
							async initializeServiceWorkerMessaging() {
								return Ue() ? this.initializeReceiver() : this.initializeSender()
							}
							async initializeReceiver() {
								this.receiver = Oe._getInstance(Ue() ? self : null), this.receiver._subscribe("keyChanged", (async (e, t) => ({
									keyProcessed: (await this._poll()).includes(t.key)
								}))), this.receiver._subscribe("ping", (async (e, t) => ["keyChanged"]))
							}
							async initializeSender() {
								var e, t;
								if (this.activeServiceWorker = await async function() {
										if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
										try {
											return (await navigator.serviceWorker.ready).active
										} catch (e) {
											return null
										}
									}(), !this.activeServiceWorker) return;
								this.sender = new Be(this.activeServiceWorker);
								const a = await this.sender._send("ping", {}, 800);
								a && (null === (e = a[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = a[0]) || void 0 === t ?
									void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
							}
							async notifyServiceWorker(e) {
								var t;
								if (this.sender && this.activeServiceWorker && ((null === (t = null === navigator || void 0 === navigator ?
										void 0 : navigator.serviceWorker) || void 0 === t ? void 0 : t.controller) || null) === this.activeServiceWorker)
									try {
										await this.sender._send("keyChanged", {
											key: e
										}, this.serviceWorkerReceiverAvailable ? 800 : 50)
									} catch (t) {}
							}
							async _isAvailable() {
								try {
									if (!indexedDB) return !1;
									const e = await ze();
									return await Ve(e, Ae, "1"), await We(e, Ae), !0
								} catch (e) {}
								return !1
							}
							async _withPendingWrite(e) {
								this.pendingWrites++;
								try {
									await e()
								} finally {
									this.pendingWrites--
								}
							}
							async _set(e, t) {
								return this._withPendingWrite((async () => (await this._withRetries((a => Ve(a, e, t))), this.localCache[e] =
									t, this.notifyServiceWorker(e))))
							}
							async _get(e) {
								const t = await this._withRetries((t => async function(e, t) {
									const a = He(e, !1).get(t),
										r = await new qe(a).toPromise();
									return void 0 === r ? null : r.value
								}(t, e)));
								return this.localCache[e] = t, t
							}
							async _remove(e) {
								return this._withPendingWrite((async () => (await this._withRetries((t => We(t, e))), delete this.localCache[e],
									this.notifyServiceWorker(e))))
							}
							async _poll() {
								const e = await this._withRetries((e => {
									const t = He(e, !1).getAll();
									return new qe(t).toPromise()
								}));
								if (!e) return [];
								if (0 !== this.pendingWrites) return [];
								const t = [],
									a = new Set;
								for (const {
										fbase_key: r,
										value: n
									} of e) a.add(r), JSON.stringify(this.localCache[r]) !== JSON.stringify(n) && (this.notifyListeners(r, n), t.push(
									r));
								for (const e of Object.keys(this.localCache)) this.localCache[e] && !a.has(e) && (this.notifyListeners(e, null),
									t.push(e));
								return t
							}
							notifyListeners(e, t) {
								this.localCache[e] = t;
								const a = this.listeners[e];
								if (a)
									for (const e of Array.from(a)) e(t)
							}
							startPolling() {
								this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
							}
							stopPolling() {
								this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
							}
							_addListener(e, t) {
								0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set,
									this._get(e)), this.listeners[e].add(t)
							}
							_removeListener(e, t) {
								this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]),
									0 === Object.keys(this.listeners).length && this.stopPolling()
							}
						}
						Ge.type = "LOCAL";
						const Xe = Ge;

						function Ye(e) {
							return `__${e}${Math.floor(1e6 * Math.random())}`
						}
						Ye("rcb"), new _(3e4, 6e4);
						class $e {
							constructor(e) {
								this.providerId = $e.PROVIDER_ID, this.auth = ie(e)
							}
							verifyPhoneNumber(e, t) {
								return async function(e, t, a) {
									var r;
									const n = await a.verify();
									try {
										let c;
										if (x("string" == typeof n, e, "argument-error"), x("recaptcha" === a.type, e, "argument-error"), c =
											"string" == typeof t ? {
												phoneNumber: t
											} : t, "session" in c) {
											const t = c.session;
											if ("phoneNumber" in c) {
												x("enroll" === t.type, e, "internal-error");
												const a = await
												function(e, t) {
													return T(e, "POST", "/v2/accounts/mfaEnrollment:start", A(e, t))
												}(e, {
													idToken: t.credential,
													phoneEnrollmentInfo: {
														phoneNumber: c.phoneNumber,
														recaptchaToken: n
													}
												});
												return a.phoneSessionInfo.sessionInfo
											} {
												x("signin" === t.type, e, "internal-error");
												const a = (null === (r = c.multiFactorHint) || void 0 === r ? void 0 : r.uid) || c.multiFactorUid;
												x(a, e, "missing-multi-factor-info");
												const i = await
												function(e, t) {
													return T(e, "POST", "/v2/accounts/mfaSignIn:start", A(e, t))
												}(e, {
													mfaPendingCredential: t.credential,
													mfaEnrollmentId: a,
													phoneSignInInfo: {
														recaptchaToken: n
													}
												});
												return i.phoneResponseInfo.sessionInfo
											}
										} {
											const {
												sessionInfo: t
											} = await async function(e, t) {
												return T(e, "POST", "/v1/accounts:sendVerificationCode", A(e, t))
											}(e, {
												phoneNumber: c.phoneNumber,
												recaptchaToken: n
											});
											return t
										}
									} finally {
										a._reset()
									}
								}(this.auth, e, (0, r.m9)(t))
							}
							static credential(e, t) {
								return he._fromVerification(e, t)
							}
							static credentialFromResult(e) {
								const t = e;
								return $e.credentialFromTaggedObject(t)
							}
							static credentialFromError(e) {
								return $e.credentialFromTaggedObject(e.customData || {})
							}
							static credentialFromTaggedObject({
								_tokenResponse: e
							}) {
								if (!e) return null;
								const {
									phoneNumber: t,
									temporaryProof: a
								} = e;
								return t && a ? he._fromTokenResponse(t, a) : null
							}
						}
						$e.PROVIDER_ID = "phone", $e.PHONE_SIGN_IN_METHOD = "phone";
						class Ke extends fe {
							constructor(e) {
								super("custom", "custom"), this.params = e
							}
							_getIdTokenResponse(e) {
								return se(e, this._buildIdpRequest())
							}
							_linkToIdToken(e, t) {
								return se(e, this._buildIdpRequest(t))
							}
							_getReauthenticationResolver(e) {
								return se(e, this._buildIdpRequest())
							}
							_buildIdpRequest(e) {
								const t = {
									requestUri: this.params.requestUri,
									sessionId: this.params.sessionId,
									postBody: this.params.postBody,
									tenantId: this.params.tenantId,
									pendingToken: this.params.pendingToken,
									returnSecureToken: !0,
									returnIdpCredential: !0
								};
								return e && (t.idToken = e), t
							}
						}

						function Je(e) {
							return async function(e, t, a = !1) {
								const r = "signIn",
									n = await Ee(e, r, t),
									c = await _e._fromIdTokenResponse(e, r, n);
								return a || await e._updateCurrentUser(c.user), c
							}(e.auth, new Ke(e), e.bypassAuthState)
						}

						function Ze(e) {
							const {
								auth: t,
								user: a
							} = e;
							return x(a, t, "internal-error"), async function(e, t, a = !1) {
								const {
									auth: r
								} = e, n = "reauthenticate";
								try {
									const c = await U(e, Ee(r, n, t, e), a);
									x(c.idToken, r, "internal-error");
									const i = L(c.idToken);
									x(i, r, "internal-error");
									const {
										sub: d
									} = i;
									return x(e.uid === d, r, "user-mismatch"), _e._forOperation(e, n, c)
								} catch (e) {
									throw "auth/user-not-found" === (null == e ? void 0 : e.code) && u(r, "user-mismatch"), e
								}
							}(a, new Ke(e), e.bypassAuthState)
						}
						async function Qe(e) {
							const {
								auth: t,
								user: a
							} = e;
							return x(a, t, "internal-error"), async function(e, t, a = !1) {
								const r = await U(e, t._linkToIdToken(e.auth, await e.getIdToken()), a);
								return _e._forOperation(e, "link", r)
							}(a, new Ke(e), e.bypassAuthState)
						}
						class et {
							constructor(e, t, a, r, n = !1) {
								this.auth = e, this.resolver = a, this.user = r, this.bypassAuthState = n, this.pendingPromise = null, this.eventManager =
									null, this.filter = Array.isArray(t) ? t : [t]
							}
							execute() {
								return new Promise((async (e, t) => {
									this.pendingPromise = {
										resolve: e,
										reject: t
									};
									try {
										this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager
											.registerConsumer(this)
									} catch (e) {
										this.reject(e)
									}
								}))
							}
							async onAuthEvent(e) {
								const {
									urlResponse: t,
									sessionId: a,
									postBody: r,
									tenantId: n,
									error: c,
									type: i
								} = e;
								if (c) return void this.reject(c);
								const d = {
									auth: this.auth,
									requestUri: t,
									sessionId: a,
									tenantId: n || void 0,
									postBody: r || void 0,
									user: this.user,
									bypassAuthState: this.bypassAuthState
								};
								try {
									this.resolve(await this.getIdpTask(i)(d))
								} catch (e) {
									this.reject(e)
								}
							}
							onError(e) {
								this.reject(e)
							}
							getIdpTask(e) {
								switch (e) {
									case "signInViaPopup":
									case "signInViaRedirect":
										return Je;
									case "linkViaPopup":
									case "linkViaRedirect":
										return Qe;
									case "reauthViaPopup":
									case "reauthViaRedirect":
										return Ze;
									default:
										u(this.auth, "internal-error")
								}
							}
							resolve(e) {
								m(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
							}
							reject(e) {
								m(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
							}
							unregisterAndCleanUp() {
								this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
							}
						}
						const tt = new _(2e3, 1e4);
						class at extends et {
							constructor(e, t, a, r, n) {
								super(e, t, r, n), this.provider = a, this.authWindow = null, this.pollId = null, at.currentPopupAction && at.currentPopupAction
									.cancel(), at.currentPopupAction = this
							}
							async executeNotNull() {
								const e = await this.execute();
								return x(e, this.auth, "internal-error"), e
							}
							async onExecution() {
								m(1 === this.filter.length, "Popup operations only handle one event");
								const e = Ne();
								this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow
									.associatedEvent = e, this.resolver._originValidation(this.auth).catch((e => {
										this.reject(e)
									})), this.resolver._isIframeWebStorageSupported(this.auth, (e => {
										e || this.reject(h(this.auth, "web-storage-unsupported"))
									})), this.pollUserCancellation()
							}
							get eventId() {
								var e;
								return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
							}
							cancel() {
								this.reject(h(this.auth, "cancelled-popup-request"))
							}
							cleanUp() {
								this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow =
									null, this.pollId = null, at.currentPopupAction = null
							}
							pollUserCancellation() {
								const e = () => {
									var t, a;
									(null === (a = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) || void 0 === a ? void 0 :
										a.closed) ? this.pollId = window.setTimeout((() => {
										this.pollId = null, this.reject(h(this.auth, "popup-closed-by-user"))
									}), 2e3): this.pollId = window.setTimeout(e, tt.get())
								};
								e()
							}
						}
						at.currentPopupAction = null;
						const rt = new Map;
						class nt extends et {
							constructor(e, t, a = !1) {
								super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, a), this.eventId =
									null
							}
							async execute() {
								let e = rt.get(this.auth._key());
								if (!e) {
									try {
										const t = await async function(e, t) {
											const a = function(e) {
													return G("pendingRedirect", e.config.apiKey, e.name)
												}(t),
												r = function(e) {
													return y(e._redirectPersistence)
												}(e);
											if (!await r._isAvailable()) return !1;
											const n = "true" === await r._get(a);
											return await r._remove(a), n
										}(this.resolver, this.auth) ? await super.execute() : null;
										e = () => Promise.resolve(t)
									} catch (t) {
										e = () => Promise.reject(t)
									}
									rt.set(this.auth._key(), e)
								}
								return this.bypassAuthState || rt.set(this.auth._key(), (() => Promise.resolve(null))), e()
							}
							async onAuthEvent(e) {
								if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
								if ("unknown" !== e.type) {
									if (e.eventId) {
										const t = await this.auth._redirectUserForId(e.eventId);
										if (t) return this.user = t, super.onAuthEvent(e);
										this.resolve(null)
									}
								} else this.resolve(null)
							}
							async onExecution() {}
							cleanUp() {}
						}
						async function ct(e, t, a = !1) {
							const r = ie(e),
								n = function(e, t) {
									return t ? y(t) : (x(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver)
								}(r, t),
								c = new nt(r, n, a),
								i = await c.execute();
							return i && !a && (delete i.user._redirectEventId, await r._persistUserIfCurrent(i.user), await r._setRedirectUser(
								null, t)), i
						}
						class it {
							constructor(e) {
								this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this
									.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
							}
							registerConsumer(e) {
								this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (
									this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent =
									null)
							}
							unregisterConsumer(e) {
								this.consumers.delete(e)
							}
							onEvent(e) {
								if (this.hasEventBeenHandled(e)) return !1;
								let t = !1;
								return this.consumers.forEach((a => {
									this.isEventForConsumer(e, a) && (t = !0, this.sendToConsumer(e, a), this.saveEventToCache(e))
								})), this.hasHandledPotentialRedirect || ! function(e) {
									switch (e.type) {
										case "signInViaRedirect":
										case "linkViaRedirect":
										case "reauthViaRedirect":
											return !0;
										case "unknown":
											return ft(e);
										default:
											return !1
									}
								}(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t
							}
							sendToConsumer(e, t) {
								var a;
								if (e.error && !ft(e)) {
									const r = (null === (a = e.error.code) || void 0 === a ? void 0 : a.split("auth/")[1]) || "internal-error";
									t.onError(h(this.auth, r))
								} else t.onAuthEvent(e)
							}
							isEventForConsumer(e, t) {
								const a = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
								return t.filter.includes(e.type) && a
							}
							hasEventBeenHandled(e) {
								return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(
									dt(e))
							}
							saveEventToCache(e) {
								this.cachedEventUids.add(dt(e)), this.lastProcessedEventTime = Date.now()
							}
						}

						function dt(e) {
							return [e.type, e.eventId, e.sessionId, e.tenantId].filter((e => e)).join("-")
						}

						function ft({
							type: e,
							error: t
						}) {
							return "unknown" === e && "auth/no-auth-event" === (null == t ? void 0 : t.code)
						}
						const ot = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
							st = /^https?/;

						function bt(e) {
							const t = v(),
								{
									protocol: a,
									hostname: r
								} = new URL(t);
							if (e.startsWith("chrome-extension://")) {
								const n = new URL(e);
								return "" === n.hostname && "" === r ? "chrome-extension:" === a && e.replace("chrome-extension://", "") === t.replace(
									"chrome-extension://", "") : "chrome-extension:" === a && n.hostname === r
							}
							if (!st.test(a)) return !1;
							if (ot.test(e)) return r === e;
							const n = e.replace(/\./g, "\\.");
							return new RegExp("^(.+\\." + n + "|" + n + ")$", "i").test(r)
						}
						const ut = new _(3e4, 6e4);

						function ht() {
							const e = Le().___jsl;
							if (null == e ? void 0 : e.H)
								for (const t of Object.keys(e.H))
									if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP)
										for (let t = 0; t < e.CP.length; t++) e.CP[t] = null
						}
						let lt = null;

						function xt(e) {
							return lt = lt || function(e) {
								return new Promise(((t, a) => {
									var r, n, c, i;

									function d() {
										ht(), gapi.load("gapi.iframes", {
											callback: () => {
												t(gapi.iframes.getContext())
											},
											ontimeout: () => {
												ht(), a(h(e, "network-request-failed"))
											},
											timeout: ut.get()
										})
									}
									if (null === (n = null === (r = Le().gapi) || void 0 === r ? void 0 : r.iframes) || void 0 === n ? void 0 :
										n.Iframe) t(gapi.iframes.getContext());
									else {
										if (!(null === (c = Le().gapi) || void 0 === c ? void 0 : c.load)) {
											const t = Ye("iframefcb");
											return Le()[t] = () => {
												gapi.load ? d() : a(h(e, "network-request-failed"))
											}, (i = `https://apis.google.com/js/api.js?onload=${t}`, new Promise(((e, t) => {
												const a = document.createElement("script");
												var r, n;
												a.setAttribute("src", i), a.onload = e, a.onerror = e => {
													const a = h("internal-error");
													a.customData = e, t(a)
												}, a.type = "text/javascript", a.charset = "UTF-8", (null !== (n = null === (r = document.getElementsByTagName(
													"head")) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : document).appendChild(a)
											}))).catch((e => a(e)))
										}
										d()
									}
								})).catch((e => {
									throw lt = null, e
								}))
							}(e), lt
						}
						const pt = new _(5e3, 15e3),
							mt = {
								style: {
									position: "absolute",
									top: "-100px",
									width: "1px",
									height: "1px"
								},
								"aria-hidden": "true",
								tabindex: "-1"
							},
							gt = new Map([
								["identitytoolkit.gaotest .com", "p"],
								["staging-identitytoolkit.sandbox.gaotest .com", "s"],
								["test-identitytoolkit.sandbox.gaotest .com", "t"]
							]);

						function yt(e) {
							const t = e.config;
							x(t.authDomain, e, "auth-domain-config-required");
							const a = t.emulator ? k(t, "emulator/auth/iframe") : `https://${e.config.authDomain}/__/auth/iframe`,
								c = {
									apiKey: t.apiKey,
									appName: e.name,
									v: n.Jn
								},
								i = gt.get(e.config.apiHost);
							i && (c.eid = i);
							const d = e._getFrameworks();
							return d.length && (c.fw = d.join(",")), `${a}?${(0, r.xO)(c).slice(1)}`
						}
						const vt = {
							location: "yes",
							resizable: "yes",
							statusbar: "yes",
							toolbar: "no"
						};
						class wt {
							constructor(e) {
								this.window = e, this.associatedEvent = null
							}
							close() {
								if (this.window) try {
									this.window.close()
								} catch (e) {}
							}
						}

						function _t(e, t, a, c, i, d) {
							x(e.config.authDomain, e, "auth-domain-config-required"), x(e.config.apiKey, e, "invalid-api-key");
							const f = {
								apiKey: e.config.apiKey,
								appName: e.name,
								authType: a,
								redirectUrl: c,
								v: n.Jn,
								eventId: i
							};
							if (t instanceof pe) {
								t.setDefaultLanguage(e.languageCode), f.providerId = t.providerId || "", (0, r.xb)(t.getCustomParameters()) ||
									(f.customParameters = JSON.stringify(t.getCustomParameters()));
								for (const [e, t] of Object.entries(d || {})) f[e] = t
							}
							if (t instanceof me) {
								const e = t.getScopes().filter((e => "" !== e));
								e.length > 0 && (f.scopes = e.join(","))
							}
							e.tenantId && (f.tid = e.tenantId);
							const o = f;
							for (const e of Object.keys(o)) void 0 === o[e] && delete o[e];
							return `${function ({ config: e }) { return e.emulator ? k(e, "emulator/auth/handler") : `