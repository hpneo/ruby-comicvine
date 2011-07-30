class CreateComicVinePublishers < ActiveRecord::Migration
  def self.up
    create_table :comic_vine_publishers do |t|

      t.timestamps
    end
  end

  def self.down
    drop_table :comic_vine_publishers
  end
end
