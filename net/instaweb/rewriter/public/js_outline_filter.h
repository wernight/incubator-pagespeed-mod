/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

#ifndef NET_INSTAWEB_REWRITER_PUBLIC_JS_OUTLINE_FILTER_H_
#define NET_INSTAWEB_REWRITER_PUBLIC_JS_OUTLINE_FILTER_H_

#include <cstddef>

#include "net/instaweb/rewriter/public/common_filter.h"
#include "net/instaweb/rewriter/public/output_resource.h"
#include "net/instaweb/rewriter/public/rewrite_driver.h"
#include "net/instaweb/rewriter/public/script_tag_scanner.h"
#include "net/instaweb/rewriter/public/server_context.h"
#include "pagespeed/kernel/base/basictypes.h"
#include "pagespeed/kernel/base/string.h"
#include "pagespeed/kernel/html/html_element.h"
#include "pagespeed/kernel/html/html_filter.h"
#include "pagespeed/kernel/html/html_node.h"

namespace net_instaweb {
class MessageHandler;

// Filter to take explicit <style> and <script> tags and outline them to files.
class JsOutlineFilter : public CommonFilter {
 public:
  explicit JsOutlineFilter(RewriteDriver* driver);
  ~JsOutlineFilter() override;
  static const char kFilterId[];

  void StartDocumentImpl() override;

  void StartElementImpl(HtmlElement* element) override;
  void EndElementImpl(HtmlElement* element) override;

  void Flush() override;

  // HTML Events we expect to be in <script> elements.
  void Characters(HtmlCharactersNode* characters) override;

  const char* Name() const override { return "OutlineJs"; }
  ScriptUsage GetScriptUsage() const override { return kWillInjectScripts; }

 private:
  bool WriteResource(const GoogleString& content, OutputResource* resource,
                     MessageHandler* handler);
  void OutlineScript(HtmlElement* element, const GoogleString& content);

  // The script element we are in (if it hasn't been flushed).
  // If we are not in a script element, inline_element_ == NULL.
  HtmlElement* inline_element_;
  // CharactersNode to be outlined.
  HtmlCharactersNode* inline_chars_;
  ServerContext* server_context_;
  size_t size_threshold_bytes_;
  ScriptTagScanner script_tag_scanner_;

  DISALLOW_COPY_AND_ASSIGN(JsOutlineFilter);
};

}  // namespace net_instaweb

#endif  // NET_INSTAWEB_REWRITER_PUBLIC_JS_OUTLINE_FILTER_H_
