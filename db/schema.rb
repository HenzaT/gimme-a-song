# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_03_02_095956) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "instruments", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "song_instruments", force: :cascade do |t|
    t.bigint "song_id", null: false
    t.bigint "instrument_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.index ["instrument_id"], name: "index_song_instruments_on_instrument_id"
    t.index ["song_id"], name: "index_song_instruments_on_song_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "mood"
    t.string "key"
    t.integer "bpm"
    t.string "time_signature"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "song_instruments", "instruments"
  add_foreign_key "song_instruments", "songs"
end
