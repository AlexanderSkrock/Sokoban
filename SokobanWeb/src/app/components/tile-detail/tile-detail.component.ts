import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Tile from '../../data/Tile';
import {TileService} from '../../services/tile.service';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.scss']
})
export class TileDetailComponent implements OnInit {
  @Input()
  tile: Tile;

  @Output()
  tileChangeEmitter: EventEmitter<Tile>;

  tileWorkingCopy: Tile;

  constructor(private tileService: TileService) {
    this.tileChangeEmitter = new EventEmitter();
    this.tileWorkingCopy = new Tile();
  }

  ngOnInit(): void {
    if (this.tile) {
      this.tileWorkingCopy.id = this.tile.id;
      this.tileWorkingCopy.name = this.tile.name;
      this.tileWorkingCopy.solid = this.tile.solid;
      this.tileWorkingCopy.sprite = this.tile.sprite;
    }
  }

  getName() {
    return this.tileWorkingCopy.name || '';
  }

  getIsSolid() {
    return this.tileWorkingCopy.solid || false;
  }

  getSprite() {
    return this.tileWorkingCopy.sprite;
  }

  handleSpriteFileChange(event): void {
    // FIXME
    this.setPreview();
  }

  handleNameChange(event): void {
    this.tileWorkingCopy.solid = event.target.checked || false;
  }

  handleSolidChange(event): void {
    this.tileWorkingCopy.solid = event.target.checked || false;
  }

  setPreview(): void {
    // FIXME
  }

  saveChanges() {
    if (this.tile) {
      this.tileWorkingCopy.id = this.tile.id;
      this.tileService.putTile(this.tileWorkingCopy);
      this.emitChange();
    }
  }

  deleteTile() {
    if (this.tile) {
      this.tileWorkingCopy.id = this.tile.id;
      this.tileService.deleteTile(this.tileWorkingCopy.id);
      this.emitChange();
    }
  }

  emitChange(): void {
    this.tileChangeEmitter.emit(this.tileWorkingCopy);
  }
}
