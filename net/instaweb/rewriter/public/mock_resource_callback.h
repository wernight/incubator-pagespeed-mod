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

#ifndef NET_INSTAWEB_REWRITER_PUBLIC_MOCK_RESOURCE_CALLBACK_H_
#define NET_INSTAWEB_REWRITER_PUBLIC_MOCK_RESOURCE_CALLBACK_H_

#include "base/logging.h"
#include "net/instaweb/rewriter/public/resource.h"
#include "pagespeed/kernel/base/basictypes.h"
#include "pagespeed/kernel/thread/worker_test_base.h"

namespace net_instaweb {
class ThreadSystem;

class MockResourceCallback : public Resource::AsyncCallback {
 public:
  explicit MockResourceCallback(const ResourcePtr& resource,
                                ThreadSystem* thread_system)
      : Resource::AsyncCallback(resource),
        success_(false),
        done_(false),
        notify_(thread_system) {
    CHECK(thread_system);
  }
  ~MockResourceCallback() override;

  void Done(bool lock_failure, bool resource_ok) override {
    CHECK(!lock_failure);
    success_ = resource_ok;
    done_ = true;
    notify_.Notify();
  }

  bool success() const { return success_; }
  bool done() const { return done_; }
  void Wait() { notify_.Wait(); }

 private:
  bool success_;
  bool done_;
  WorkerTestBase::SyncPoint notify_;

  DISALLOW_COPY_AND_ASSIGN(MockResourceCallback);
};

}  // namespace net_instaweb

#endif  // NET_INSTAWEB_REWRITER_PUBLIC_MOCK_RESOURCE_CALLBACK_H_
