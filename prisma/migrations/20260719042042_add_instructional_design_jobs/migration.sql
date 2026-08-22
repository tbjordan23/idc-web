-- CreateTable
CREATE TABLE "instructional_design_jobs" (
    "id" SERIAL NOT NULL,
    "external_id" VARCHAR(255) NOT NULL,
    "title" VARCHAR(500) NOT NULL,
    "company" VARCHAR(255),
    "location" VARCHAR(255),
    "is_remote" BOOLEAN NOT NULL DEFAULT false,
    "job_type" VARCHAR(100),
    "salary" VARCHAR(255),
    "description" TEXT,
    "apply_url" TEXT NOT NULL,
    "source" VARCHAR(100),
    "date_posted" TIMESTAMP(3),
    "fetched_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3),

    CONSTRAINT "instructional_design_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "instructional_design_jobs_external_id_key" ON "instructional_design_jobs"("external_id");

-- CreateIndex
CREATE INDEX "idx_jobs_fetched_at" ON "instructional_design_jobs"("fetched_at");

-- CreateIndex
CREATE INDEX "idx_jobs_is_remote" ON "instructional_design_jobs"("is_remote");

-- CreateIndex
CREATE INDEX "idx_jobs_date_posted" ON "instructional_design_jobs"("date_posted");
